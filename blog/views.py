from django.views.generic.dates import (
    ArchiveIndexView, DateDetailView, DayArchiveView, MonthArchiveView,
    YearArchiveView,
)
from django.shortcuts import render, get_object_or_404
from django.urls import resolve
from .models import Entry, Event
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, TrigramSimilarity
from .forms import SearchForm
# import urllib2
# class BlogSearchView:
#     def searchKey(request):
#         return Post.objects.filter(body__search='django')
# def __init__(self, form):


def search(request):
    # results=[]
    form = SearchForm()
    query = None
    results = []
    if 'query' in request.GET:
        form = SearchForm(request.GET)
        if form.is_valid():
            query = form.cleaned_data['query']
            results = Entry.objects.annotate(search=SearchVector('body', 'summary', 'headline'),).filter(search=query).order_by('-pub_date')
    return render(request,
                  'blog/search_result.html',
                  {'form': form,
                   'query': query,
                   'results': results,
                   'count': results.count})
# class SearchResultView(TemplateView):
#     template_name = 'blog/search_result.html'

#     def search(self, request):
#         # results=[]
#         form = SearchForm()
#         query = None
#         results = []
#         if 'query' in request.GET:
#             form = SearchForm(request.GET)
#             if form.is_valid():
#                 query = form.cleaned_data['query']
#                 results = Entry.objects.annotate(search=SearchVector('body', 'summary', 'headline'),).filter(search=query).order_by('-pub_date')
#         return {'form': form,
#                 'query': query,
#                 'results': results,
#                 'count': results.count}
# @register.assign


class BlogViewMixin:

    date_field = 'pub_date'
    paginate_by = 10

    def get_allow_future(self):
        return self.request.user.is_staff

    def get_queryset(self):
        if self.request.user.is_staff:
            return Entry.objects.all()
        else:
            return Entry.objects.published()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        form = SearchForm()

        events_queryset = Event.objects.future()
        if not self.request.user.is_staff:
            events_queryset = events_queryset.published()
        context['latestEntry'] = Entry.objects.published()
        context['events'] = events_queryset[:3]
        context['form'] = form
        return context


class BlogArchiveIndexView(BlogViewMixin, ArchiveIndexView):
    pass


class BlogYearArchiveView(BlogViewMixin, YearArchiveView):
    make_object_list = True


class BlogMonthArchiveView(BlogViewMixin, MonthArchiveView):
    pass


class BlogDayArchiveView(BlogViewMixin, DayArchiveView):
    pass


class BlogDateDetailView(BlogViewMixin, DateDetailView):
    pass

# class BlogSearchView(BlogViewMixin,DateDetailView):
#     pass
