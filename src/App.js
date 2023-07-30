import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import TimerWrapper from "./components/Timer/TimerWrapper";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <TimerWrapper/>
                <MainContent/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
