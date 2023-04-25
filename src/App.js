import React, {useEffect, useState} from 'react';
import Homepage from "./pages/Homepage";
import Header from "./pages/Header";
import SwiperSlide2 from "./components/swiperSlide/SwiperSlide";
import SwiperImg from "./components/swiperSlide/SwiperSlide";


const App = () => {

    return (
        <div>
            <Header/>
            <SwiperImg/>
            <Homepage/>
        </div>
    );
};

export default App;