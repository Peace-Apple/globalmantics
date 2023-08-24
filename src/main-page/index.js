import { useEffect } from 'react';
import './main-page.css';
import Header from './header';

function App() {
  useEffect(()=>{
    const fetchHouses = async () => {
      const rsp = await fetch('/houses.json');
      const houses = await rsp.json();
    }
    fetchHouses();
  }, [])
  return (
    <div className="container">
      <Header subtitle='Providing houses all over the world' />
    </div>
  );
}

export default App;
