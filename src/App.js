import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemContainer from './components/ItemsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    
    <div className='ItemContainer'>
      
    </div>
      <ItemContainer />
    </div>
  );
}

export default App;
