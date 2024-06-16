import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tab, setTab }) => {

   const {dispatch} = useContext(authContext);
   const navigate = useNavigate();

   
   const handleLogout = ()=>{
    dispatch({type:'LOGOUT'});
    navigate('/login');
   }

  return (
    <div>
      <span className='lg:hidden'>
        <BiMenu className='w-6 h-6 cursor-pointer' />
      </span>
      <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
        <button 
          className={`${tab === 'overview' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-gray-500'} w-full btn mt-0 rounded-md`} 
          onClick={() => setTab('overview')}
        >
          Профиль
        </button>
        <button 
          className={`${tab === 'appointments' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-gray-500'} w-full btn mt-0 rounded-md`} 
          onClick={() => setTab('appointments')}
        >
          Приём
        </button>
        <button 
          className={`${tab === 'settings' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-gray-500'} w-full btn mt-0 rounded-md`} 
          onClick={() => setTab('settings')}
        >
          Настройки профиля
        </button>

        <div className='mt-[100px] w-full'>
            <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Выход</button>
            <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>Удалить аккаунт</button>
          </div>
      </div>
    </div>
  );
}

export default Tabs;