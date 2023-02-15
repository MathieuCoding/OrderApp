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
    <div className="card m-3" style={{width: 15+'rem', height: 18+'rem'}}>
        <div id={props.details.id} className="text-center">
            <img className="card-img-top" style={{height: 10+'rem'}} src={props.details.image} alt="Card image cap" />
            <h5 className="card-title mt-2">{props.details.name}</h5>
            <p className="card-text">{props.details.price}</p>
            <a onClick={props.handleAddBtn} className="btn btn-success">Add to cart</a>
        </div>
    </div>


// Création d'un composant Order
const Order = (props) =>
{
   return (
    <div className="row mb-2 mt-5">
        <div className="col-5 ps-5">{props.details.name}</div>
        <div className="col-3">{props.details.price}</div>
        <div className="col-4" id={props.details.id}>
            <button onClick={props.handleLessBtn} className="btn btn-warning fa-solid fa-minus me-2"></button>{props.details.quantity}
            <button onClick={props.handleAddBtn} className="btn btn-warning fa-solid fa-plus ms-2"></button>
        </div>
    </div>

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
        ],
        ordered: []
    }

    handleAddBtn = (e) => 
    {
        const clickedElementId = e.target.parentNode.id;
        const clicked = this.state.products.find(element => element.id == clickedElementId);

        //this.state.ordered.push(clicked); Possible mais ne provoque pas de rerender
        // Pour cela il faut ituliser setState
        // D'abord on crée une copie du taleau à modifier soit avec slice()
        // const copiedOrdered = this.state.ordered.slice();
        // Soit avec le spread operator ...
        const copiedOrdered = [...this.state.ordered];
        // On lui ajoute notre élément
        const orderedProduct = copiedOrdered.find(element => element.id == clickedElementId);

        if (!orderedProduct)
        {
            clicked.quantity = 1;
            copiedOrdered.push(clicked); //On ajoute un élément au tableau copié
        } else {
            orderedProduct.quantity ++;
        }
        this.setState({ordered: copiedOrdered});
    }

    handleLessBtn = (e) =>
    {
        const clickedElementId = e.target.parentNode.id;
        const copiedOrdered = [...this.state.ordered];
        const orderedProduct = copiedOrdered.find(element => element.id == clickedElementId);


        if (orderedProduct.quantity > 1)     
        {
            orderedProduct.quantity --;
            this.setState({ordered: copiedOrdered});
        } else {
            const result = copiedOrdered.filter(item => item.id != clickedElementId);
            this.setState({ordered: result});
        }
       
        
    }



    

    render() 
    {
        const productsList = this.state.products.map(product => 
                <Product key={product.id} details={product} handleAddBtn={this.handleAddBtn}/>
        );

        const orderedList = this.state.ordered.map(order =>
                <Order key={order.id} details={order} handleAddBtn={this.handleAddBtn} handleLessBtn={this.handleLessBtn}/>
        );

        return( 
            <div className="row">
                <div className="col-7 mt-5 d-flex justify-content-center flex-wrap">
                    {productsList}
                </div>
                <div className="col-5 mt-5">
                    <div id="section">
                        <h2 className="text-center mt-3">Your order</h2><hr />              
                        {orderedList}
                        <h4 className="ms-3 position-relative fixed-bottom">Your total:</h4>
                    </div>                       
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


