import React , { useEffect, useState } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import { doctors } from '../../assets/data/doctor';
import TestimonialList from '../../components/Testimonial/TestimonialList';
import { BASE_URL } from './../../config.js';
import useFetchData from './../../hooks/useFetchData.jsx';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';

const Doctors = () => {

  const [query, setQuery] = useState('');

  const [debounceQuery, setDebounceQuery] = useState('');

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  const handleSearch=()=>{
    setQuery(query.trim())

    console.log('Обработка поиска');
  };

  useEffect(()=>{

    const timeout = setTimeout(()=>{
      setDebounceQuery(query)
    },700);

    return ()=> clearTimeout(timeout);

  },[query]);

  return <>
  <section className='bg-[#fff9ea]'>
    <div className="container text-center">
      <h2 className='heading '>Найти Доктора</h2>
      <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
        <input type="search" 
        className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
         placeholder:text-textColor'
        placeholder='Поиск Доктора'
        value={query} 
        onChange={e=> setQuery(e.target.value)}/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>Найти</button>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
    {loading && <Loader />}
    {error && <Error />}
    { !loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>{doctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}/>)}</div>}
    </div>
  </section>

      <section>
        <div>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Что о нас говорят пациенты?</h2>
          <p className='text__para text-center'>Мы предлагаем вам ознакомиться с отзывами от наших пациентов.</p>
        </div>

        </div>
        <TestimonialList />
      </section>
  </>
};

export default Doctors;