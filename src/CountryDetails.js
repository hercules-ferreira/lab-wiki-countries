import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountryList({ countries }) {
  const [country, setCountry] = useState(null);
  const { a3code } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${a3code}`)
      .then(({ data }) => {
        setCountry(data);
      });
  }, [a3code]);

  const findCountry = (alpha3Code) => {
    return (
      countries &&
      countries.find((country) => {
        return country.alpha3Code === alpha3Code;
      })
    );
  };

  const selectedCountry = findCountry(a3code);

  if (!selectedCountry) {
    navigate('/');
  }

  return (
    countries && (
      <div>
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{selectedCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {selectedCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {selectedCountry.borders.map((border) => {
                    const borderCountry = findCountry(border);
                    return (
                      <li>
                        <Link to={`/${border}`}>
                          {' '}
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  })}

                  <li>
                    <a href="/AND">Andorra</a>
                  </li>
                  <li>
                    <a href="/BEL">Belgium</a>
                  </li>
                  <li>
                    <a href="/DEU">Germany</a>
                  </li>
                  <li>
                    <a href="/ITA">Italy</a>
                  </li>
                  <li>
                    <a href="/LUX">Luxembourg</a>
                  </li>
                  <li>
                    <a href="/MCO">Monaco</a>
                  </li>
                  <li>
                    <a href="/ESP">Spain</a>
                  </li>
                  <li>
                    <a href="/CHE">Switzerland</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
}
export default CountryList;
