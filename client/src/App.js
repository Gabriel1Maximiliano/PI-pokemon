import './App.css';
import { CreatePokemon } from './components/createPokemon/CreatePokemon';
import { Home } from './components/Home/Home';
import { LandinPage } from './components/LandingPage/LandinPage';
import { PokeDetails } from './components/pokeDetails/PokeDetails';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

      < Route exact path = '/' component={LandinPage} />
      < Route exact path='/home' component={Home} />
    <Route exact path='/home/createPokemon' component={CreatePokemon} /> 
    <Route exact path='/home/:id' component={PokeDetails} />
     
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
