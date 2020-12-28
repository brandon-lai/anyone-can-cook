import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/getRecipes?ingredients=spinach&num=5')
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
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Anyone Can Cook</h1>
        <ol>
          {recipes.map((recipe) => (
            <li>{recipe.title}</li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;

// space = %20