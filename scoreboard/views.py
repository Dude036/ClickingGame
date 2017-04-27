from django.shortcuts import render
from django.template import context
from django.http import HttpResponseRedirect, HttpResponseNotFound
from django.core.urlresolvers import reverse
from scoreboard.models import Board

def index(request):
    scores = Board.objects.order_by('-high_score')[:10]
    context = {'scores':scores, }
    return render(request, 'index.html', context)
    
def create(request):
    if request.method == 'POST':
        fullName = request.POST.get("Full Name", "")
        highScore = request.POST.get("Highscore", "")
        newScoreBoard = Board(high_score=highScore, full_name=fullName)
        newScoreBoard.save()
        return HttpResponseRedirect('/')
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>');
    