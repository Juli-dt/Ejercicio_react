import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     <Header appName="CinemaApp"/>
     <Main appName="Main_CinemaApp"/>
     <Footer/>
    </div>
  );
}

export default App;
