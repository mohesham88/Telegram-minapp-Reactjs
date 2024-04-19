import { useEffect } from 'react';
import './App.css';
import Button from './Components/Button/Button'
import Card from './Components/Card/Card.jsx';



import Data from './db/db.js'

const allKits = Data();


const telegram = window.Telegram.WebApp;




function App() {


  useEffect(() => {
    telegram.ready();
  })

  return (
    <>
      <h1 className='heading'> Order Kits </h1>
      <h6 className='heading'>Made by mohamed hesham</h6>
      <div className='cards_container'>
      {allKits.map( kit => 
        <Card key={kit.id} kit = {kit}/>
      )}
      </div>
    </>
  );
}

export default App;
