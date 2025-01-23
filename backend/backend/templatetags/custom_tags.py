from django import template

register = template.Library()

@register.filter
def add_class(field, css_class):
    """
    Adds a class to a form field.
    Usage: {{ form.field|add_class:"your-class" }}
    """
    return field.as_widget(attrs={"class": css_class})