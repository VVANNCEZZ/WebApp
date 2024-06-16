import React from 'react';
import convertTime from '../../utils/convertTime';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';

// Функция для получения русского названия дня недели
const getDayInRussian = (day) => {
  const daysOfWeek = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
  };
  return daysOfWeek[day.toLowerCase()] || day;
};

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {

  const bookingHandler = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + 'Пожалуйста, попробуйте ещё раз');
      }

      if (data.session.url) {
        window.location.href = data.session.url
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text__para mt-0 font-semibold'>Стоимость услуги</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>{ticketPrice}р.</span>
      </div>

      <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-headingColor'>Доступное время:</p>

        <ul className='mt-3'>
          {timeSlots?.map((item, index) => (
            <li key={index} className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>{getDayInRussian(item.day)}</p>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p>
            </li>
          ))}
        </ul>

      </div>
      <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>Записаться на приём</button>
    </div>
  );
};

export default SidePanel;