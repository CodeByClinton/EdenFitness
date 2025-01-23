from django import forms
import re
class ContactForm(forms.Form):
    full_name = forms.CharField(
        label='Full Name', 
        max_length=255,
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Full Name', 'autocomplete': 'off'})
    )

    contact_number = forms.CharField(
        label='Contact Number',
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Contact Number', 'autocomplete': 'off'})
    )

    email = forms.EmailField(
        label='Email Address',
        required=True,
        widget=forms.EmailInput(attrs={'placeholder': 'Email Address', 'autocomplete': 'off'})
    )

    subject = forms.CharField(
        label='Subject', 
        max_length=200,
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Subject', 'autocomplete': 'off'})
    )

    message = forms.CharField(
        label='Message',
        required=True,
        widget=forms.Textarea(attrs={'placeholder': 'Message', 'rows': 3, 'autocomplete': 'off'})
    )

    def clean_contact_number(self):
        contact_number = self.cleaned_data.get('contact_number')

        normalized_number = re.sub(r'[\s\-\(\)]', '', contact_number)

        sa_number_pattern = r'^(0\d{9}|\+27\d{9})$'

        international_number_pattern = r'^\+\d{1,3}\d{4,14}$'

        if not (re.match(sa_number_pattern, normalized_number) or re.match(international_number_pattern, normalized_number)):
            raise forms.ValidationError("Invalid contact number provided.")

        return contact_number
