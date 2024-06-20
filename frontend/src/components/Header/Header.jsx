import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {BiMenu} from 'react-icons/bi';
import { authContext } from '../../context/AuthContext.jsx';


const navLinks = [
  {
    path: '/home',
    display: 'Главная'
  },
  {
    path: '/doctors',
    display: 'Обратиться к Доктору'
  },
  {
    path: '/services',
    display: 'Услуги'
  },
  {
    path: '/contact',
    display: 'Контакты'
  },
  {
    path: 'https://t.me/psyhologydoc_bot',
    display: 'Бот',
    external: true
  }
];

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user, role, token} = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  }

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center">
              {navLinks.map((link, index) => (
                <li key={index} style={{ marginRight: '30px' }}>
                  {link.external ? (
                    <a
                      href={link.path}
                      className='text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.display}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={navClass =>
                        navClass.isActive
                          ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                          : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                      }
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/*===nav right===*/}
          <div className='flex items-center gap-4'>
            {token && user ? (
              <div>      
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo} className='w-full rounded-full' alt="" />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Авторизация</button>
              </Link>
            )}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;