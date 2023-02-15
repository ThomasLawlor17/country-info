import './App.css';
import { useEffect } from 'react';
import {getCountries} from './api/axios'
import CountriesGrid from './components/CountriesGrid';
import SearchForm from './components/SearchForm';
import { useContext } from 'react';
import { AppContext } from './App.provider';

function App() {
  const {dark, setCountries, setData} = useContext(AppContext)

  useEffect(() => {
    getCountries().then(results => {
      setCountries(results)
      setData(results)
    })
  }, [setCountries, setData])
  

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <SearchForm />
      <CountriesGrid/>
    </div>
  );
}

export default App;
