import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';

const Profile = ({doctorData}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: '',
    photo: null,
  });

  useEffect(()=>{
    setFormData({
      name:doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
      })
  },[doctorData])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    console.log(data);
    setFormData({ ...formData, photo: data?.url });
  }

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
          Authorization:`Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if(!res.ok){
        throw Error(result.message);
      }

      toast.success(result.message);

    } catch (error) {
      toast.error(error.message);
    }

  };

  const addItem = (key, item) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem('qualifications', { startingDate: '', endingDate: '', degree: 'Магистр медицинских наук в области психотерапии', university: 'Калужский Государственный Университет' });
  };


  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData(prevFormData => {
      const updatedItems = [...prevFormData[key]];
      updatedItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc('qualifications', index, event);
  };

  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem('qualifications', index);
  };

  const addExperience = (e) => {
    e.preventDefault();
    addItem('experiences', { startingDate: '', endingDate: '', position: 'Психотерапевт', hospital: 'Калужская областная больница №1' });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc('experiences', index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem('experiences', index);
  };

  const addtimeSlot = (e) => {
    e.preventDefault();
    addItem('timeSlots', { day: 'Вторник', startingTime: '15:00', endingTime: '17:00' });
  };

  const handletimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc('timeSlots', index, event);
  };

  const deletetimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem('experiences', index);
  };

  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
        Информация профиля
      </h2>
      <form onSubmit={updateProfileHandler}>
        <div className="mb-5">
          <p className="form__label">Имя*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='ФИО'
            className='form__input'
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            className='form__input'
            readOnly
            aria-readonly
            disabled
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Телефон*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Номер телефона'
            className='form__input'
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Био*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder='Биография'
            className='form__input'
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className='grid grid-cols-3 gap-5 mb-[30px]'>
            <div>
              <p className='form__label'>
                Пол*
              </p>
              <select name="gender" value={formData.gender} onChange={handleInputChange} className='form__input py-3.5'>
                <option value="">Выбрать</option>
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
              </select>
            </div>
            <div>
              <p className='form__label'>
                Специализация*
              </p>
              <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='form__input py-3.5'>
                <option value="">Выбрать</option>
                <option value="Психолог">Психолог</option>
                <option value="Психотерапевт">Психотерапевт</option>
                <option value="Семейный психолог">Семейный психолог</option>
              </select>
            </div>
            <div>
              <p className='form__label'>Стоимость услуг*</p>
              <input
                type="number"
                placeholder='100'
                name='ticketPrice'
                value={formData.ticketPrice}
                className='form__input'
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='form__label'>
            Образование*
          </p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className="form__label">Начальная дата*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className='form__input'
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Конечная дата*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className='form__input'
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className="form__label">Квалификация*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className='form__input'
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Университет*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className='form__input'
                      onChange={e => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <button onClick={e => deleteQualification(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Добавить образование</button>
        </div>
        <div className='mb-5'>
          <p className='form__label'>
            Опыт*
          </p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className="form__label">Начальная дата*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className='form__input'
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Конечная дата*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className='form__input'
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className="form__label">Специализация*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className='form__input'
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Место работы*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className='form__input'
                      onChange={e => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <button onClick={e => deleteExperience(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Добавить опыт</button>
        </div>
        <div className='mb-5'>
          <p className='form__label'>
            Время приёма*
          </p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                  <div>
                    <p className="form__label">День*</p>
                    <select
                      name="day"
                      value={item.day}
                      className='form__input py-3.5'
                      onChange={e => handletimeSlotChange(e, index)}
                    >
                      <option value="">Выбрать</option>
                      <option value="monday">Понедельник</option>
                      <option value="tuesday">Вторник</option>
                      <option value="wednesday">Среда</option>
                      <option value="thursday">Четверг</option>
                      <option value="friday">Пятница</option>
                      <option value="saturday">Суббота</option>
                      <option value="sunday">Воскресенье</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__label">Начало приёма*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className='form__input'
                      onChange={e => handletimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Конец приёма*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className='form__input'
                      onChange={e => handletimeSlotChange(e, index)}
                    />
                  </div>
                  <div onClick={e=> deletetimeSlot(e,index)} className='flex items-center'>
                    <button onClick={(e) => deleteItem('timeSlots', index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer mt-6'>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addtimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Добавить время приёма</button>
        </div>
        <div className="mb-5">
          <p className='form__label'>
            Добавить информацию*
          </p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder='Добавить информацию о себе'
            onChange={handleInputChange}
            className='form__input'
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
              <img
                src={formData.photo}
                alt=""
                className='w-full rounded-full'
              />
            </figure>
          )}
          <div className='relative w-[150px] h-[40px]'>
            <input
              type="file"
              name='photo'
              id="customFile"
              onChange={handleFileInputChange}
              accept='image/jpeg, image/png'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />
            <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
              Загрузить фото
            </label>
          </div>
        </div>
        <div className='mt-7'>
          <button type='submit' className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Обновить профиль</button>
        </div>
      </form>
    </div>
  );
};

export default Profile