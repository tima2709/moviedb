import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {Pagination, Navigation} from "swiper";
import axios from "axios";
import {useParams} from "react-router-dom";

const SwiperImg = () => {
    const [slide, setSlide] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6226cc33bb03f9eb3111ce6e1c335bb5')
            .then(({data}) => {
                setSlide(data.results)
            })
    }, [])


    return (
        <div style={{
            padding: '20px 0 35px 0'
        }}>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        slide.map(img =>
                            <SwiperSlide>
                                <img src={`https://image.tmdb.org/t/p/w500/${img.backdrop_path}`} alt=""/>
                                <div className={'poster-title'}>
                                    <h1>{img.original_title}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </>
        </div>
    );
}

export default SwiperImg;
