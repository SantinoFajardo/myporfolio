import { NextPage } from "next";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projects from "../utils/projects";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const SimpleSlider : NextPage = () => {
    return (
        <div>
            <Slider {...settings}>
                {projects.map((p:any)=> (
                    <div>
                        <h1>{p.title}</h1>
                        <h2>{p.descriptionES}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SimpleSlider