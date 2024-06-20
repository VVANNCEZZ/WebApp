import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=i-14HPJckgo&t=4s",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://github.com/VVANNCEZZ",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://en.wikipedia.org/wiki/Instagram",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://testometrika.com/tests/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: 'Главная',
  },
  {
    path: '/home',
    display: 'О нас',
  },
  {
    path: '/services',
    display: 'Услуги',
  },
];

const quickLinks02 = [
  {
    path: '/doctors',
    display: 'Найти врача',
  },
  {
    path: '/doctors',
    display: 'Записаться на приём',
  },
  {
    path: '/doctors',
    display: 'Узнать мнения людей',
  },
];

const quickLinks03 = [
  {
    path: '/contact',
    display: 'Связаться с нами',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(init);
    }

    function init() {
      var myMap = new window.ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
      });
    }
  }, []);

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor'>Все права защищены © {year} разработчик Vancez.</p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex 
              items-center justify-center group hover:bg-primaryColor hover:border-none '>
                {link.icon}
              </Link>)}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Быстрые ссылки</h2>
            <ul>
              {quickLinks01.map((item, index) => <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Я хочу</h2>
            <ul>
              {quickLinks02.map((item, index) => <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Поддержка</h2>
            <ul>
              {quickLinks03.map((item, index) => <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
              </ul>
          </div>
          
        </div>

        <div className='w-full'>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-0 text-headingColor'>
    Наше местоположение
  </h2>
  <div id="map" className=''></div>
</div>
      </div>
    </footer>
  );
};

export default Footer;