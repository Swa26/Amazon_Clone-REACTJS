import React, { useState } from 'react';
import { banner, banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9 } from '../..';
import Slider from "react-slick";
function Banner() {
    const [dotActive, setDotActive] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    top: "80%",
                    left: "0",
                    right: "0",
                    margin: '0 auto',
                    transform: "translate(-50% -50%)",
                    width: "20rem"
                }}
            >
                <ul style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive ?
                        {
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            background: "#131921",
                            padding: "8px 0",
                            cursor: "pointer",
                            border: "1px solid #f3a847"
                        } :
                        {
                            width: "2rem",
                            height: "2rem",
                            color: "white",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#232F3E",
                            padding: "8px 0",
                            cursor: "pointer",
                            border: "1px solid white"
                        }
                }
            >
                {i + 1}
            </div>
        ),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    appendDots: (dots) => (
                        <div
                            style={{
                                position: "absolute",
                                top: "83%",
                                left: "0",
                                right: "0",
                                margin: "0 auto",
                                transform: "translate(-50% -50%)",
                                width: "15rem",
                            }}
                        >
                            <ul style={{
                                width: "100%",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                {" "}
                                {dots}{" "}

                            </ul>
                        </div>
                    ),
                    customPaging: (i) => (
                        <div
                            style={
                                i === dotActive ?
                                    {
                                        width: "2rem",
                                        height: "2rem",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        background: "#131921",
                                        padding: "8px 0",
                                        cursor: "pointer",
                                        border: "1px solid #f3a847",
                                        fontSize:"12px",
                                    } :
                                    {
                                        width: "2rem",
                                        height: "2rem",
                                        color: "white",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#232F3E",
                                        padding: "8px 0",
                                        cursor: "pointer",
                                        border: "1px solid white",
                                        fontSize:"12px",

                                    }
                            }
                        >
                            {i + 1}
                        </div>
                    ),  
                }
            },
            /*{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }*/
        ]
    };
    return (
        <div className='w-full '>
            <div className='w-full h-full relative'>
                <Slider {...settings}>
                    <div>
                        <img style={{ height: "25rem", width: "100%" }} src={banner} alt='banner1'></img>
                    </div>
                    <div>
                        <img src={banner5} style={{ height: "25rem", width: "100%" }} alt='banner1'></img>
                    </div>
                    <div>
                        <img style={{ height: "25rem", width: "100%" }} src={banner7} alt='banner1'></img>
                    </div>
                    <div>
                        <img style={{ height: "25rem", width: "100%" }} src={banner8} alt='banner1'></img>
                    </div>
                    <div>
                        <img style={{ height: "25rem", width: "100%" }} src={banner9} alt='banner1'></img>
                    </div>
                </Slider>
            </div>
        </div>

    );
}

export default Banner;
