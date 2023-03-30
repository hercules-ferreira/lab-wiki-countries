import { NavLink } from 'react-router-dom';

export function CountriesList({ countries }) {
  return (
    //opção um com short circuit
    // <div className="list-group">
    //   {countries && countries.map((country) => {

    // opção 2 com ternário
    <div className="list-group">
      {!countries ? (
        <p>Carregando Informações...</p>
      ) : (
        countries.map((country) => {
          return (
            <NavLink
              to={`/${country.alpha3Code}`}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/36x27/${country.alpha2Code.toLowerCase()}.png`}
              />{' '}
              {country.name.common}
            </NavLink>
          );
        })
      )}
    </div>
  );
}
