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





// Création d'un composant Produit
const Product = (props) => 
    <div className="card m-3" style={{width: 15+'rem'}}>
        <div className="text-center">
            <img className="card-img-top" style={{height: 10+'rem'}} src={props.details.image} alt="Card image cap" />
            <h5 className="card-title mt-3">{props.details.name}</h5>
            <p className="card-text">{props.details.price}</p>
            <a href="#" onClick={props.handleClick} className="btn btn-success mb-3">Order</a>
        </div>
    </div>


// Création d'un composant section
const MySection = () =>
{
   return (
       <div id="section">
            <h2 className="text-center mt-3">Your order</h2>
            <OrderProduct />
       </div>
   );
}


// Création d'un composant order
const OrderProduct = () =>
{
   return (
       <p>manger des burgers</p>
   );
}


// Composant dans une classe
class App extends React.Component 
{
    state = {
        products: [
            {id: 1, name: "Cheeseburger", price: 5.95, image: "https:images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"},
            {id: 2, name: "CBO", price: 8.95, image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"},
            {id: 3, name: "Filet-O-Fish", price: 3.95, image: "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80"}
        ]
    }

    handleClick = (e) => 
    {
        console.log(e.target.parentNode); // Renvoie la div entière

        const item = document.createElement("div");
        item.classList.add('w-75');

    }

    render() 
    {
        const productsList = this.state.products.map(product => 
                <Product key={product.id} details={product} handleClick={this.handleClick}/>
        )

        return( 
            <div class="row">
                <div className="col-6 mt-5 d-flex justify-content-center flex-wrap">
                    {productsList}
                </div>
                <div className="col-6 mt-5 d-flex justify-content-center">
                <MySection />
                </div>
            </div>
        )
    }
}


// on rend l'élément dans le DOM en JS classique
const root = document.querySelector('#app');
// root.appendChild(titre);


// On rend l'élément dans le DOM via la méthode render() de ReactDOM
ReactDOM.render(
    <App />, 
    root
);


