import './App.css';

function App() {
    const name = "Sueliton";

    function sum(a,b){
        return a + b;
    }

    const url = "https://placehold.co/150x150/png?text=Imagem+de+Exemplo";

    return (
        <div className="App">
            <h1>Alterando JSX</h1>
            <p>Olá, {name}</p>
            <p>Soma: {sum(2, 2)}</p>
            <img src={url} alt="Minha imagem" />
        </div>
    );
}

export default App;
