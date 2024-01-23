import './App.css';
import { ItemListContainer } from './components';
import NavBar from "./components/NavBar/NavBar";


function App(){
  return (
    <div className="App">;
    <NavBar/>
   <h2><ItemListContainer greeting='Bienvenidos a Mi Tienda Orgánica'/></h2> 
    </div>
  );
}

export default App;