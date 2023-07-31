import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/MainContent/MainContent";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <MainContent/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
