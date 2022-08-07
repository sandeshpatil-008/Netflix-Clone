import { useState, useEffect } from 'react';
import './Media.css';
import Logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../component/Footer';
import Moviecard from '../../component/Moviecard';

const Media = () => {
    const navigate = useNavigate();
    const [moviedata, setMovieData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/movie")
            .then((res) => {
                const movieBackData = res.data;
                // console.log(movieBackData);
                setMovieData(movieBackData);

            }).catch((err) => console.log(err));

    }, []);
    // console.log(moviedata);
    const handleChange = (value) => {
        searchingData(value);

    }
    // console.log(handleChange);
    const searchingData = (value) => {
        const lowercaseval = value.toLowerCase().trim();

        if (!lowercaseval) {
            setMovieData(moviedata);
            window.location.reload();
        }
        else {
            const filMovie = moviedata.filter((movie) => {
                return (
                    Object.keys(movie).some((key) => {
                        return (
                            movie[key].toString().toLowerCase().includes(lowercaseval)
                        )

                    })
                )
            })
            setMovieData(filMovie);

        }
    }
    return (
        <>
        <div className="row">
                <div className="bgimg loginBg">
                    <div className="cover cover1">
                        <div className="logo">
                            <img src={Logo} alt="" />
                            <div className="navBar">
                                <select className="language lang">
                                    <option value="">&#xF3EE;
                                        English</option>
                                    <option value="">&#xF3EE;
                                        मराठी
                                    </option>
                                    <option value="">&#xF3EE;
                                        हिन्दी
                                    </option>
                                </select>
                                <div>
                                    <button className="btn" onClick={() => navigate("/")}>Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='serchSec'>
                        <input type="text" placeholder='Serch Movie Name' className='serchBarr' onChange={e => handleChange(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className='filterMovie'>
                <h1 className='filterHead'>I'm interested in covering titles releasing in</h1>
                {/* <div className='mainDrop'>
                    <select className='selectV'>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                    </select>
                </div> */}
            </div>

            <div className="l-movie">
                {
                    moviedata.map((row) => {
                        return (

                            <>
                                <div className="movie">
                                    <h4 className='name'>{row.movieName}</h4>                                    
                                    <Moviecard/>
                                    <div className="movies">
                                        <h4 className='date'>10-jul-2021</h4>
                                    </div>
                                </div>
                            </>

                        )
                    })
                }
                {/* <Moviecard
                    image={King}
                    date={"20 jul 2022"}
                /> */}

                {/* <Moviecard
                    image={Evil}
                    date={"15 March 2022"}
                />

                <Moviecard
                    image={Beast}
                    date={"3 jan 2022"}
                />

                <Moviecard
                    image={Night}
                    date={"25 Apr 2022"}
                />

                <Moviecard
                    image={Inter}
                    date={"25 Apr 2022"}
                />

                <Moviecard
                    image={Summer}
                    date={"25 may 2022"}
                />

                <Moviecard
                    image={Kobra}
                    date={"25 feb 2022"}
                />

                <Moviecard
                    image={Away}
                    date={"25 may 2022"}
                />

                <Moviecard
                    image={Desire}
                    date={"25 Apr 2022"}
                />

                <Moviecard
                    image={Night}
                    date={"25 Apr 2022"}
                /> */}
            </div>
            <Footer />
            
        </>
    );
};

export default Media;