// import { useEffect, useState, useMemo } from 'react';s
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/house-from-query';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HouseContext from '../context/context';

function App() {
  // using hook within file
  // const [allHouses, setAllHouses] = useState([]);
  // useEffect(()=>{
  //   const fetchHouses = async () => {
  //     const rsp = await fetch('/houses.json');
  //     const houses = await rsp.json();
  //     setAllHouses(houses);
  //   }
  //   fetchHouses();
  // }, []);

  // using custom hook created for all houses
  const allHouses = useHouses();

  // another hook within file
  // const featuredHouse = useMemo(()=> {
  //   if (allHouses.length) {
  //     const randomIndex = Math.floor(Math.random() * allHouses.length);
  //     return allHouses[randomIndex];
  //   }
  // }, [allHouses]);

  //use custom hook for featured house
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle='Providing houses all over the world' />
          <HouseFilter />
          <Switch>
            <Route path='/searchresults/:country'>
              <SearchResults />
            </Route>
            <Route path='/house/:id'>
              <HouseFromQuery />
            </Route>
            <Route path='/'>
              <FeaturedHouse house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
