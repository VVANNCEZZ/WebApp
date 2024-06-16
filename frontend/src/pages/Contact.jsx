import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        toast.success('Сообщение отправлено!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Очистить форму
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error('Ошибка отправки сообщения', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('Ошибка сервера', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>
          Связаться с нами
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Возникла техническая проблема? Хотите отправить отзыв о сайте? Сообщите нам об этом.
        </p>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__label'>Ваш Email</label>
            <input 
              type="email" 
              id='email' 
              placeholder='bdb.sdgsdg@mail.ru' 
              className='form__input mt-1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>Ваш вопрос</label>
            <input 
              type="text" 
              id='subject' 
              placeholder='Уточните, чем мы можем вам помочь?' 
              className='form__input mt-1'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label'>Ваше сообщение</label>
            <textarea 
              rows='6' 
              type="text" 
              id='message' 
              placeholder='Оставить комментарий...' 
              className='form__input mt-1'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Отправить</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;