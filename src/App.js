import './App.css';
import {Header, Santa} from "./containers";
import {Navbar, Content} from "./components";

function App() {
  return (
    <div className="App">
        <title>Secret Sante</title>
        <Navbar/>
        <Header/>
        <Content/>
        {/*<Santa/>*/}

    </div>

  );
}

export default App;
