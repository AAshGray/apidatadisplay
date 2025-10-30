import { useState, useEffect } from 'react'
import Country from './Components/Country';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then(res => res.json())
      .then(data => setCountries(data.map(c => c.name.common)))
      .catch(err => setError("Failed to load countries list"))
  }, [])

  const selectCountry = (name) => {
    let countryName
    if (name !== "" && name.trim() !== "") {
      countryName = name
    } else {
        if (countries.length > 0) {
          const randomIndex = Math.floor(Math.random() * countries.length);
          countryName = countries[randomIndex];
        }
      }

    setSelectedCountry(countryName);
    setError("")
  }

  useEffect(() => {
    if (!selectedCountry) return

    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(selectedCountry)}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
      .catch(function () {
        setError("Unable to download country data.")
    })
  }, [selectedCountry])

  return (
    <main>
      <Header />
      <Country 
        country = {country}
        setCountry = {setCountry}
        error = {error}
        setError = {setError}
        selectedCountry = {selectedCountry}
        setSelectedCountry = {setSelectedCountry}
        selectCountry = {selectCountry}
        countries = {countries}
        setCountries = {setCountries}
      />
      <Footer />
    </main>
  )

}

export default App