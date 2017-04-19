from django.shortcuts import render
from django.template import context
from scoreboard.models import Board

def index(request):
    scoring = Board.objects.order_by('-high_score')[:10]
    context = {'scores':scoring, }
    return render(request, 'index.html', context)
