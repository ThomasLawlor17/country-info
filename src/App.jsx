import './App.css';
import { useEffect } from 'react';
import {getV2Countries, getV3Countries} from './api/axios'
import { useContext } from 'react';
import { AppContext } from './App.provider';
import CountryIndex from './pages/CountryIndex';
import { Navigate, Route, Routes } from 'react-router';
import CountryDetail from './pages/CountryDetail';

function App() {
  const {setCountries, setV3Countries, setData} = useContext(AppContext)

  useEffect(() => {
    getV2Countries().then(res => {
      setCountries(res)
      setData(res)
    })
    getV3Countries().then(res => {
      setV3Countries(res)
    })
  }, [setCountries, setData])
  

  return (
    <>
      <Routes>
        <Route index element={<CountryIndex/>} />
        <Route exact path='/:id' element={<CountryDetail/>}/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </>
  );
}

export default App;
