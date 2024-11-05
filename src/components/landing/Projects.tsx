import React, { useEffect } from "react";
import { i18 } from "@src/hooks/languages";
import { Link } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
            initialSlide: 3,
        });
    }, [])


    return (
        <section className="projects">
            <div className="flex">
                <div className="flex">
                    <h2 className="projects__title title" dangerouslySetInnerHTML={{__html: i18.t("landing.projects.title")}}></h2>
                    <div className="accent-line"></div>
                </div>

                <Link to={""} className="projects__link">View all ~~&gt;</Link>
            </div>


            <div className="projects__swiper swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </section>
    );
};

export default Projects;
