import './App.css';
import Appheader from './Appheader';
import Item from './item';
import items from './items';

function App() {
    const item1element =items.map((item1,index) =>{
      return <Item key ={index} item1={item1}/>
    });
  
  return (
    <div className="App">
     
        <Appheader/>
        <div className="app-grid">
         {item1element}
         </div>
    </div>
  );
}

export default App;
