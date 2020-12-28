from flask import Flask, request
import os
import requests
import json

app = Flask(__name__)

@app.route('/getRecipes')
# def getRecipesFromApi(availableIngredients, numRecipes):
def getRecipesFromApi():
    availableIngredients = request.args.get('ingredients')
    numRecipes = request.args.get('num')
    print (numRecipes)
    print (availableIngredients)

    url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients'

    params = {'number': str(numRecipes), 'ranking': '1', 'ignorePantry': 'true', 'ingredients': availableIngredients}

    headers = {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': os.environ['APIKEY']
    }

    res = requests.request('GET', url, headers=headers, params=params)

    data = res.text
    print (data)
    return data
    # print(data)

    # Printing response to console
    # print
    # print ('{')

    # for i in range(numRecipes):
    #     print(data[i]['title'] + ':')
    #     print('Missing Ingredients:')

    #     for item in data[i]['missedIngredients']:
    #         print(item['name'] + ': ' + item['aisle'])
        
    # print('}')