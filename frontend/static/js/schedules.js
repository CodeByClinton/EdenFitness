document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#schedule-btns button");
  const scheduleContainer = document.getElementById("shedule-content");
  const scheduleButtonsSection = document.getElementById("schedule-btns");

  let activeScheduleButton =
    document.querySelector("#schedule-btns button.active") || buttons[0];

  let scheduleButtonFocusEnabled = true;

  const formatTime = (time) => {
    return time ? time.split(":").slice(0, 2).join(":") : "";
  };

  const loadSchedule = (day) => {
    return new Promise((resolve, reject) => {
      fetch(`/api/schedules/?day=${day}`)
        .then((response) => response.json())
        .then((data) => {
          const headerHtml = `
          <div class="grid grid-cols-4 w-full font-bold text-center text-fluid-10-40">
            <h6 class="flex flex-col justify-center items-center border-r-fluid-2-8 border-anti-flash_white"></h6>
            <h6 class="flex flex-col justify-center items-center border-t-fluid-2-8 border-r-fluid-2-8 border-anti-flash_white">MORNING</h6>
            <h6 class="flex flex-col justify-center items-center border-t-fluid-2-8 border-r-fluid-2-8 border-anti-flash_white">AFTERNOON</h6>
            <h6 class="flex flex-col justify-center items-center border-t-fluid-2-8 border-r-fluid-2-8 border-anti-flash_white">EVENING</h6>
          </div>`;

          const scheduleRowsHtml = data
            .map(
              (schedule, index, array) => `
              <div class="grid text-fluid-10-40 grid-cols-4 w-full text-center ${
                index === array.length - 1
                  ? "border-b-fluid-2-8 border-anti-flash_white"
                  : ""
              }">
                <h6 class="flex flex-col justify-center items-center font-bold border-t-fluid-2-8 border-r-fluid-2-8 border-l-fluid-2-8 border-anti-flash_white">
                  ${schedule.title}
                </h6>
                <div class="flex flex-col justify-center items-center font-semibold border-t-fluid-2-8 border-r-fluid-2-8 py-schedule border-anti-flash_white">
                ${
                  schedule.morning_timeslot_1_start &&
                  schedule.morning_timeslot_1_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.morning_timeslot_1_start)} - ${formatTime(schedule.morning_timeslot_1_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
                ${
                  schedule.morning_timeslot_2_start &&
                  schedule.morning_timeslot_2_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.morning_timeslot_2_start)} - ${formatTime(schedule.morning_timeslot_2_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
                ${
                  schedule.morning_timeslot_3_start &&
                  schedule.morning_timeslot_3_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.morning_timeslot_3_start)} - ${formatTime(schedule.morning_timeslot_3_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
              </div>
              <div class="flex flex-col justify-center items-center font-semibold border-t-fluid-2-8 border-r-fluid-2-8 border-anti-flash_white">
                ${
                  schedule.afternoon_timeslot_1_start &&
                  schedule.afternoon_timeslot_1_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.afternoon_timeslot_1_start)} - ${formatTime(schedule.afternoon_timeslot_1_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
                ${
                  schedule.afternoon_timeslot_2_start &&
                  schedule.afternoon_timeslot_2_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.afternoon_timeslot_2_start)} - ${formatTime(schedule.afternoon_timeslot_2_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
                ${
                  schedule.afternoon_timeslot_3_start &&
                  schedule.afternoon_timeslot_3_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.afternoon_timeslot_3_start)} - ${formatTime(schedule.afternoon_timeslot_3_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
              </div>
              <div class="flex flex-col justify-center items-center font-semibold border-t-fluid-2-8 border-r-fluid-2-8 border-anti-flash_white">
                ${
                  schedule.evening_timeslot_1_start &&
                  schedule.evening_timeslot_1_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.evening_timeslot_1_start)} - ${formatTime(schedule.evening_timeslot_1_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
                ${
                  schedule.evening_timeslot_2_start &&
                  schedule.evening_timeslot_2_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.evening_timeslot_2_start)} - ${formatTime(schedule.evening_timeslot_2_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
                ${
                  schedule.evening_timeslot_3_start &&
                  schedule.evening_timeslot_3_end
                    ? `<p class="font-ubuntu w-full">${formatTime(schedule.evening_timeslot_3_start)} - ${formatTime(schedule.evening_timeslot_3_end)}</p>`
                    : `<p class="font-ubuntu w-full">-</p>`
                }
              </div>
            </div>
            `,
            )
            .join("");

          const combinedHtml = headerHtml + scheduleRowsHtml;

          scheduleContainer.classList.add("animate__fadeOut");
          scheduleContainer.addEventListener(
            "animationend",
            () => {
              scheduleContainer.innerHTML = combinedHtml;
              scheduleContainer.classList.remove("animate__fadeOut");
              scheduleContainer.classList.add("animate__fadeIn");
              resolve();
            },
            { once: true },
          );
        })
        .catch((error) => {
          console.error("Error loading schedule content:", error);
          reject(error);
        });
    });
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const defaultDay = today === "Sunday" ? "Monday" : today;
  loadSchedule(defaultDay);

  buttons.forEach((button) => {
    const day = button.getAttribute("data-day");
    if (day === defaultDay) {
      button.classList.add("active");
      activeScheduleButton = button;
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const day = button.getAttribute("data-day");

      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.remove("animate-bounceLow");
      });

      button.classList.add("active");
      activeScheduleButton = button;
      requestAnimationFrame(() => {
        activeScheduleButton.classList.add("animate-bounceLow");
      });

      loadSchedule(day);
    });
  });

  document.addEventListener("click", (event) => {
    if (!scheduleButtonFocusEnabled) return;
    if (
      !event.target.closest("#scbedule-btns") &&
      event.target.closest("#schedule")
    ) {
      activeScheduleButton.focus();
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scheduleButtonFocusEnabled) {
          activeScheduleButton.focus();
          activeScheduleButton.classList.add("animate-bounceLow");
        }
      });
    },
    {
      root: null,
      threshold: 0.2,
    },
  );

  observer.observe(scheduleButtonsSection);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      scheduleButtonFocusEnabled = false;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        scheduleButtonFocusEnabled = true;
      }, 1000);
    });
  });
});
