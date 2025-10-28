import { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar'
import Country from './Components/Country';

function App() {

  const [countries, setCountries] = useState([]);
  const [randCountry, setRandcountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all?fields=name`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCountries(countries);
        getRandom();
      })
  })

  function getRandom() {
    setRandcountry(countries.at(Math.floor(Math.random() * countries.length)))
  }


  return (
    <>
      <Country props={randCountry} />
    </>
  )
}

export default App