from django import forms
from django.utils.translation import ugettext_lazy as _

search_placeholder = _('Search for news')


class SearchForm(forms.Form):
    query = forms.CharField(label=_(''),max_length=30,widget=forms.TextInput(attrs={'placeholder': 'Search for news'}))

    # def __init__(self, data=None, **kwargs):
    #     self.release = kwargs.pop('release')
    #     super().__init__(data=data, **kwargs)
    #     self.fields['s'].widget = forms.TextInput(attrs={
    #         'type': 'search',
    #         'placeholder': search_placeholder % self.release.human_version
    #     })
