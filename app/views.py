import requests
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from app.models import Cities

def index(request):
        return render(request, 'templates/det.html', {'cities':Cities.objects.all()})

def get_trending_topics(woeid):
        response = requests.get(
                'https://api.twitter.com/1.1/trends/place.json',
                params={'id':woeid},
                headers={'Authorization':'bearer AAAAAAAAAAAAAAAAAAAAAGQu%2FQAAAAAA2z9L0CSHHK3bC0QLBpnrc4qrKKc%3D45Uc5WW92haa1uDbth7nNcqVMDqFhYRLryPWHYkZy9ummcdJuQ'}
        )
        print("status", response.status_code)
        json_response = response.json()
        return json_response, response.status_code

def trending_topics(request):
        woeid = request.GET.get('woeid')
        trending_topics, status = get_trending_topics(woeid)
        if status == 200:
                topics = trending_topics[0]['trends']
        else:
                topics=[]
        # return render(request, 'templates/trending_topics.html',{'topics':topics})
        return JsonResponse({'topics':topics})

