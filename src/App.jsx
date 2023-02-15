import './App.css';
import { useEffect } from 'react';
import {getCountries} from './api/axios'
import { useContext } from 'react';
import { AppContext } from './App.provider';
import CountryIndex from './pages/CountryIndex';
import { Navigate, Route, Routes } from 'react-router';
import CountryDetail from './pages/CountryDetail';

function App() {
  const {dark, setCountries, setData} = useContext(AppContext)

  useEffect(() => {
    getCountries().then(results => {
      setCountries(results)
      setData(results)
    })
  }, [setCountries, setData])
  

  return (
    <main className={`App ${dark ? 'dark' : ''}`}>
      <Routes>
        <Route index element={<CountryIndex/>} />
        <Route path='/:id' element={<CountryDetail/>}/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </main>
  );
}

export default App;
