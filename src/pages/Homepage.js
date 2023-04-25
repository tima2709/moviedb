import React, {useEffect, useState} from 'react';
import axios from "axios";



const Homepage = () => {
    const [movies, setMovie] = useState([])
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6226cc33bb03f9eb3111ce6e1c335bb5`)
            .then(({data}) => {
                console.log(data)
                setMovie(data.results)
            })
    }, [])
    return (
        <div className={'container'}>
            <div className="row">
                {
                    movies.map((movie, idx) =>
                        <div key={idx} className="col-3 card">
                                <div className="box">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                    <p>{movie.original_title}</p>
                                </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Homepage;