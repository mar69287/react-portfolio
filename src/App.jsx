import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {

    return (
        <div className="App">
            <NavBar />
            <main className='content flex-center'>
                <Header />
                <Projects />
                <About />
                <Contact />

            </main>
            <Footer />
        </div>
    );
}