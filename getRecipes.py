import requests
from requests.api import head
import os

def getRecipesFromApi(availableIngredients, numRecipes):
    url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients'

    params = {'number': str(numRecipes), 'ranking': '1', 'ignorePantry': 'true', 'ingredients': availableIngredients}

    headers = {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': os.environ['APIKEY']
    }

    res = requests.request('GET', url, headers=headers, params=params)

    data = res.json()
    # print(data)

    # Printing response to console
    print
    print ('{')

    for i in range(numRecipes):
        print(data[i]['title'] + ':')
        print('Missing Ingredients:')

        for item in data[i]['missedIngredients']:
            print(item['name'] + ': ' + item['aisle'])
        
    print('}')

def main():
    ingredients = input('Enter the ingredients in your fridge (each separated by a space): ')

    numRecipes = int(input('How many recipes do you want to see: '))

    while numRecipes < 1:
        numRecipes = int(input('Please enter a number greater than 1: '))

    temp = ingredients.split() # separate the individual ingredients into a list

    # creating a string of ingredients separated by a comma
    ingredients = ''
    for item in temp:
        ingredients = ingredients + item + ', '

    if len(ingredients) != 0:
        ingredients = ingredients[:-2] # remove the last space and comma
    
    getRecipesFromApi(ingredients, numRecipes)

if __name__ == '__main__':
    main()