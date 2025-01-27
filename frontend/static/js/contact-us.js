document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const validateField = (field, value) => {
      switch (field) {
        case "contact_number": {
          const normalizedNumber = value.replace(/[\s\-\(\)]/g, "");
          const regex = /^(0\d{9}|\+27\d{9}|\+\d{1,3}\d{4,14})$/;
          return regex.test(normalizedNumber);
        }
        case "email": {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(value);
        }
      }
    };

    const formFields = {
      full_name: form.full_name.value.trim(),
      contact_number: form.contact_number.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    const baseSwalConfig = {
      showClass: {
        popup: "animate__animated animate__faster animate__fadeInUp",
      },
      hideClass: {
        popup: "animate__animated animate__faster animate__fadeOutDown",
      },
      customClass: {
        popup:
          "bg-anti-flash_white text-onyx-600 dark:bg-jet dark:text-anti-flash_white-400 rounded-fluid-16-32 border-fluid-2-5 border-solid border-onyx-900 font-ubuntu shadow-lg shadow-onyx-600 dark:border-outer_space dark:shadow-none transition-all duration-300 ease-in-out",
        title: "text-fluid-12-36 font-semibold",
        text: "text-fluid-10-30",
        confirmButton:
          "shadow-inner cursor-pointer rounded-12 shadow-anti-flash_white-500 bg-aero hover:bg-aero-opacity-800 text-anti-flash_white w-full p-fluid-4-8_8-20 text-fluid-12-36 transition-all duration-300 ease-in-out scale-95 hover:scale-100",
      },
    };

    const validateForm = (field, value) => {
      switch (field) {
        case "full_name": {
          if (!value) {
            Swal.fire({
              icon: "info",
              title: "Error",
              text: "Full name is required.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          }
          break;
        }
        case "contact_number": {
          if (!value) {
            Swal.fire({
              icon: "info",
              title: "Error",
              text: "Contact number is required.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          } else if (!validateField(field, value)) {
            Swal.fire({
              icon: "error",
              title: "Validation Error",
              text: "Please enter a valid contact number. South African numbers must start with '0' or '+27', and international numbers must start with a '+'.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          }
          break;
        }
        case "email": {
          if (!value) {
            Swal.fire({
              icon: "info",
              title: "Error",
              text: "Email is required.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          } else if (!validateField(field, value)) {
            Swal.fire({
              icon: "error",
              title: "Validation Error",
              text: "Please enter a valid email address.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          }
          break;
        }
        case "subject": {
          if (!value) {
            Swal.fire({
              icon: "info",
              title: "Error",
              text: "Subject is required.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          }
          break;
        }
        case "message": {
          if (!value) {
            Swal.fire({
              icon: "info",
              title: "Error",
              text: "Message is required.",
              buttonsStyling: false,
              ...baseSwalConfig,
            });
            return false;
          }
          break;
        }
      }
      return true;
    };

    for (const [field, value] of Object.entries(formFields)) {
      if (!validateForm(field, value)) {
        return;
      }
    }

    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("api/contact-us/", {
        method: "POST",
        body: jsonData,
        headers: {
          "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]")
            .value,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data.message,
          buttonsStyling: false,
          ...baseSwalConfig,
        });

        form.reset();
      } else if (data.status === "error") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error,
          buttonsStyling: false,
          ...baseSwalConfig,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to submit the form. Please check your connection and try again.",
        buttonsStyling: false,
        ...baseSwalConfig,
      });
    }
  });
});
