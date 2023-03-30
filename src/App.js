import './App.css';
import countriesData from './countries.json';
import { useState } from 'react';
import { Navbar } from './Navbar';
import { CountriesList } from '../src/CountriesList';
import CountryDetails from './CountryDetails';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './Style/Global';

function App() {
  const [countries, setCountries] = useState(countriesData);

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

          <div className="col=7">
            <Routes>
              <Route path="/:a3code" element={<CountryDetails />}></Route>
            </Routes>
          </div>
        </div>
      </div>

      <GlobalStyle />
    </div>
  );
}

export default App;
