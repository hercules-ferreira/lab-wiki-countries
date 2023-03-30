import './App.css';
// import countriesData from './countries.json';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { CountriesList } from '../src/CountriesList';
import CountryDetails from './CountryDetails';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from '../src/Style/Global';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            class="col-5"
            style={{
              maxHeight: '90vh',
              overflowX: 'none',
              overflowY: 'scroll',
            }}
          >
            <CountriesList countries={countries} />
          </div>

          <div className="col-7">
            <Routes>
              <Route
                path="/:a3code"
                element={<CountryDetails countries={countries} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>

      <GlobalStyle />
    </div>
  );
}

export default App;
