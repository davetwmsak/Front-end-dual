import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import carru1 from '../../assets/img/carrusel 1.png'
import carru2 from '../../assets/img/carrusel 2.png'
import carru3 from '../../assets/img/carrusel 3.png'
import './Carrusell.css'
const carrusel = () => {
    return (
        <>
        <Swiper
        modules={[Navigation,Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        className="dual1"
        >
            <SwiperSlide>
                <div className="dav">
                    <img src={carru1} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                 <div className="dav">
                    <img src={carru2} alt="" />
                 </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="dav">
                    <img src={carru3} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}
export default carrusel;