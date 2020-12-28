import React, { useState } from 'react';
import uuid from 'react-uuid';
import Input from './components/input';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState(new Set());

  const getRecipes = () => {
    var url = '/getRecipes?ingredients=';
    ingredients.forEach(element => {
      console.log(element);
      url += (element + '%2C+');
    });
    url = url.slice(0, -1);
    url += '&num=5';
    console.log(url);
    fetch(url)
      .then(res => {
        if (res.ok) {
          res.json()
            .then(json => {
              console.log(json);
              var jsData = json;
              console.log(jsData);
              setRecipes(jsData);
            })
        }
      })
      .then(setIngredients([]))
  }

  const getInput = (value) => {
    if (value) {
      setIngredients(ingredients.add(value))
      console.log(value);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Anyone Can Cook</h1>
        <Input returnVal={getInput} num='1' />
        <Input returnVal={getInput} num='2' />
        <Input returnVal={getInput} num='3' />
        <Input returnVal={getInput} num='4' />
        <Input returnVal={getInput} num='5' />
        <button onClick={getRecipes}>Get Recipes!</button>
        <ol>
          {recipes.map((recipe) => (
            <div key={uuid()}>
              <li>{recipe.title}</li>
              <img src={recipe.image} alt={recipe.title}/>
            </div>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;