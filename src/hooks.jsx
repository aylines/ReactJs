/*import { useState } from "react";

// type string
const title="Bonjour <strong> tout le monde </strong> ";
// type objet
const style = {color : 'red', backgroug :'blue'};
//variable booleen
//const showTitle = false
//variable tableaux
const todos= ['hooks','jsx','composants']*/
// usestate
/*
function App ()
{
    //let count=0 ;
    // remplacer par usestate
    // setcount pour modifier la valeur
    const [count,setcount]=useState(0)
    // fonction incremebt avec un retour de type const

    console.log('render');
const increment =()=>
{
    //augmenter lecompteur avec setcount
setcount(count+1);
}
    return <>
    
    <p>compteur: {count }</p>
    <button onClick={increment} >incrementer</button>
    </>;
}

export default  App;*/

import React, { useState } from 'react';

const App = () => {
    const number = useState(0);
    const string = useState('chaine de caractere')
    const object = React.useState({})
    //const array = React.useState([1,2])

    return (<string > </string>) ;
}

export default  App
/*function App() {
    // Déclare une nouvelle variable d'état, que l'on va appeler « count »
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    );
  }
*/


/*
export default function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Afficher le deuxième compteur
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Incrémenter
      </button>
    </div>
  );
}
*/


/*

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? (
        <Counter isFancy={true} />
      ) : (
        <Counter isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Utiliser un style fantaisiste
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Incrémenter
      </button>
    </div>
  );
}
*/

/****************UseEffect******************* */
/*********Exécuter useEffect  sur chaque rendu**************** */
/*import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.log("exécuter pour chaque rendu de composant");
  });

  return (
   <></>
  );
}

export default App;
*/
/*********Exécuter useEffect seulement au  montage du composant**************** */
/*export const App = () => {
    useEffect(() => {
      console.log("exécuter uniquement pour le rendu du premier composant (c'est-à-dire le montage du composant)");
    }, []);
  
    return (
        <></>
    );
  }
  export default App;
  */

/*****Exécuter l’effet lors du premier rendu et réexécuter lorsque la dépendance change******* */
 /* import React, { useState, useEffect } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(
      "exécuter pour le rendu du premier composant et réexécuter lorsque le « nombre » change"
    );
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
    Cliquez pour incrémenter le compteur et déclencher l'effet
    </button>
  );
};
export default App;*/


/****************Exécuter l’effet avec nettoyage (démontage)************* */
/*import React, { useState, useEffect } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("exécuter pour chaque rendu de composant");

    return () => {
      console.log("exécuter avant le prochain effet et lorsque le composant se démonte");
    };
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Cliquez pour incrémenter le compteur et déclencher l'effet
    </button>
  );
};

export default App;*/
//import React, { useState, useEffect } from "react";
/*function App() {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
      setTimeout(() => {
        console.log(`You clicked ${count} times`);
      }, 3000);
    });
   
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default App;*/

 
