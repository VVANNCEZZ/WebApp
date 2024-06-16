import { useState } from 'react';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx';
import useGetProfile from '../../hooks/useFetchData.jsx';
import { BASE_URL } from '../../config.js';
import Tabs from './Tabs.jsx';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './../../pages/Doctors/DoctorAbout.jsx';
import Profile from './Profile.jsx';
import Appointments from './Appointments.jsx';

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

  const [tab, setTab] = useState('overview');

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {!loading && !error && (
          <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
            <Tabs tab={tab} setTab={setTab} />
            <div className='lg:col-span-2'>
              {data.isApproved ==='pending' && <div className='flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
              <span className='sr-only'>Информация</span>
              <div className='ml-3 text-sm font-medium'>
                Чтобы получить одобрение, пожалуйста, заполните свой профиль.
                Мы рассмотрим заявку вручную и утвердим её в течение 3 дней.
              </div>
              </div>}

              <div className='mt-8'>

                {tab==='overview' && <div>
                  
                <div className='flex items-center gap-4 mb-10'>
                  <figure className='max-w-[200px] max-h-[200px]'><img src={data?.photo} alt="" className='w-full' /></figure>
                  <div>
                    <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold' >
                     {data.specialization}
                    </span>
                    <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>{data.name}</h3>
                    <div className='flex items-center gap-[6px]'>
                      <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                        <img src={starIcon} alt="" /> {data.averageRating}
                      </span>
                      <span className=' text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                         ({data.totalRating})
                      </span>
                    </div>
                    <p className='text__para font-[15px] lg:max-w-[390px] leading-6'>
                      {data?.bio}
                    </p>
                  </div>
                </div>
                <DoctorAbout name = {data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences}/>
                </div>}
                {tab==='appointments' && <Appointments appointments={data.appointments}/>}
                {tab==='settings' && <Profile doctorData={data}/>}

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;