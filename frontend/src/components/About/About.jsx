import React from 'react';
import aboutImg from "../../assets/images/about.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

          {/* Изображение слева */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-2 lg:order-1'>
            <img src={aboutImg} alt="" />
          </div>

          {/* Текст справа */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1 lg:order-2'>
            <h2 className='heading'>Горжусь тем, что помогаю людям быть счастливыми снова</h2>
            <p className='text__para'>Я люблю работать психологом, потому что это позволяет мне углубиться в мир эмоций и разума моих пациентов. </p>
            <p className='text__para mt-[30px]'>Каждый день я вижу, как моя работа вносит положительные изменения в жизни людей, помогая им восстановить гармонию внутри себя и в отношениях с окружающими. Это приводит меня к чувству глубокого вдохновения и мотивации продолжать свое благородное призвание – быть опорой и руководством для тех, кто нуждается в психологической помощи.</p>
            <Link to='/doctors'><button className='btn'>Узнать больше</button></Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;