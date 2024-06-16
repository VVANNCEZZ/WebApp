import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Удалите эту строку
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi'

const TestimonialList = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper 
        spaceBetween={30} 
        slidesPerView={1} 
        pagination={{clickable:true}} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
        ><SwiperSlide>
        <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
                <img src={patientAvatar} alt="" />
                <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    Иван Иванов
                    </h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-purpleColor w-[18px] h-5"/>
                        <HiStar className="text-purpleColor w-[18px] h-5"/>
                        <HiStar className="text-purpleColor w-[18px] h-5"/>
                        <HiStar className="text-purpleColor w-[18px] h-5"/>
                        <HiStar className="text-purpleColor w-[18px] h-5"/>
                    </div>
                </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "Данная клиника понравилась мне своим подходом к работе с пациентами, 
                есть возможность выбора врача, а так же, согласование времени и даты"
            </p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Семён Яшкин
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Не особо люблю поликлиники, но от этой остался в восторге, всё комфортно и для людей!"
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Ирина Дубова
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Очень хорошие и вежливые врачи, а главное, профессионалы своего дела"
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Анна Седых
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Отличный выбор для тех, кто сомневается идти за помощью к врачам, здесь вам не только помогут, но и ещё вы можете узнать для себя много нового"
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Надежда Краснова
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Очень полезно оставлять и смотреть отзывы, так можно выбрать для себя более опытного и лучшего специалиста"
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Николай Юрьев
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Радует, что есть возможность экстренного вызова, ведь не знаешь, когда и с кем что может случиться.."
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Павел Кузьмин
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Скажу кратко: Полезно! Нужно! 5 баллов"
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Светлана Щукина
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                            <HiStar className="text-purpleColor w-[18px] h-5"/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "Очень удобно придумано с датой, можно выбрать удобную для себя и не переживать, что мест не хватит"
                </p>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default TestimonialList;