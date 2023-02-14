// JS Vanilla
const titre = document.createElement('h1');
titre.className = "text-center";
titre.innerText = "Hello World !";


// Pour créer un composant React sans JSX
const titre2 = React.createElement('h1', {id: "titreReact", className: "text-center"}, "Hello World of React !");


// Avec JSX
const titre3 = <h1 className="text-center">Hello World of JSX !</h1> 


// Composant avec une fonction, à noter : on l'appelle avec la syntaxe <Component />
const Titre4 = (props) => <h1 className="text-center">{props.content}</h1> 


function MyButton()
{
   return (
       <button className="btn btn-primary">maFonction</button>
   );
}

// Composant dans une classe
class Titre5 extends React.Component 
{
    state = {
        content: "Mon titre dans le state"
    }
    render() 
    {
        return( 
            <React.Fragment>
                <h1 className="text-center">{this.state.content}</h1> 
                <MyButton />
            </React.Fragment>
        )
    }
}


// on rend l'élément dans le DOM en JS classique
const app = document.querySelector('#app');
app.appendChild(titre);


// On rend l'élément dans le DOM via la méthode render() de ReactDOM
ReactDOM.render(
    <Titre5 />, 
    app
);


