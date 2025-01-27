from django.shortcuts import render
from classes.models import GymClass
# from trainers.models import Trainer
# from partners.models import Partner
# from .forms import ContactForm
# from django.utils.safestring import mark_safe
# from django.http import JsonResponse
# from rest_framework.views import APIView
# from django.core.mail import send_mail
# from django.conf import settings

def home(request):
    classButtons = GymClass.objects.all()
    # trainers = Trainer.objects.all()
    # partners = Partner.objects.all()
    #
    # for partner in partners:
    #     target_phrase = "Contact us"
    #     anchor = (
    #         '<a href="#contact-us" class="group text-aero">'
    #             '<span class="bg-center-x bg-gradient-to-r from-aero to-aero bg-[length:0%_3px] bg-bottom bg-no-repeat transition-all duration-500 ease-out hover:drop-shadow-jet-700 group-hover:bg-[length:100%_3px] group-hover:bg-[position:center_bottom] dark:hover:drop-shadow-anti-flash_white-700">'
    #             f'{target_phrase}'
    #             '</span>'
    #         '</a>'
    #     )
    #
    #     partner.body = mark_safe(partner.body.replace(target_phrase, anchor))

    # contact_form = ContactForm()

    context = {
        'buttons': classButtons,
        # 'trainers': trainers,
        # 'partners': partners,
        # 'contact_form': contact_form
    }

    return render(request, 'base.html', context)

# class ContactFormView(APIView):
#     def post(self, request):
#         form = ContactForm(request.data)
#         if form.is_valid():
#
#             full_name = form.cleaned_data.get('full_name')
#             contact_number = form.cleaned_data.get('contact_number')
#             email = form.cleaned_data.get('email')
#             subject = form.cleaned_data.get('subject')
#             message = form.cleaned_data.get('message')
#
#             email_subject = "New Website Contact Form Submission"
#             email_message = (
#                 f"Full Name: {full_name}\n"
#                 f"Contact Number: {contact_number}\n"
#                 f"Email: {email}\n\n"
#                 f"Subject: {subject}\n\n"
#                 f"Message:\n{message}"
#             )
#
#             try:
#
#                 send_mail(
#                     email_subject,
#                     email_message,
#                     settings.DEFAULT_FROM_EMAIL,
#                     [settings.DEFAULT_TO_EMAIL],
#                 )
#
#                 return JsonResponse({'status': 'success', 'message': 'Your message has been sent successfully!'})
#
#             except Exception as e:
#                 return JsonResponse({'status': 'error', 'error': str(e)})
#         else:
#             return JsonResponse({'status': 'error', 'error': 'There was a problem sending your message. Please try again later.'})
