import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <Navbar tittle="Narayan" />
    <TextForm />
    {/*<About />*/}
    </>
  );
}

export default App;
