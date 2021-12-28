
import './App.css';
import Header from './components/TokenInfo/Header';
import GetBalance from './components/TokenInfo/GetBalance';
import BuyForm from './components/PersonalPanel/BuyForm';
function App() {
  return (
    <div className="App">
      <Header/>
     <GetBalance/>
     <BuyForm/>
    </div>
  );
}

export default App;
