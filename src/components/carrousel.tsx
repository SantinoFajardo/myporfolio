import { NextPage } from "next";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../utils/projects";
import Cookies from "universal-cookie";
import ProjectCard from "./cards/projectCard";
import { PROJECT } from "../utils/interfaces/interfaces";
import "../styles/projectCard.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SimpleSlider: NextPage = () => {
  const Cookie = new Cookies();
  let lenguajeofPage: string = Cookie.get("Lenguaje");
  return (
    <div>
      <Slider {...settings}>
        {projects.map((p: PROJECT, i: number) => (
          <div key={i}>
            <ProjectCard props={p} lenguageOfPage={lenguajeofPage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
