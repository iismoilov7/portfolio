import React from "react";
import { i18 } from "@src/hooks/languages";
import { Link } from "react-router-dom";
import Slider from "react-slick";

interface Project {
    src: string;
    stack: string;
    title: string;
    description: string;
    href: string;
    link: string;
}

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = () => {
    const projects = i18.t("landing.projects.slider", { returnObjects: true }) as Project[];

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    };


    return (
        <section className="projects">
            <div className="flex">
                <div className="flex">
                    <h2 className="projects__title title" dangerouslySetInnerHTML={{__html: i18.t("landing.projects.title")}}></h2>
                    <div className="accent-line"></div>
                </div>

                <Link to={"/projects"} className="projects__link">{ i18.t("landing.projects.link") }</Link>
            </div>


            <Slider className="projects__slider slider" {...sliderSettings}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <div className="projects__project slider-slide">
                            <img src={project.src} alt="" className="projects__project-preview" />
                            <div className="projects__project-stack">
                                { project.stack }
                            </div>
                            <div className="projects__project-info">
                                <div className="projects__project-info-title">
                                    { project.title }
                                </div>

                                <div className="projects__project-info-desc">
                                    { project.description }
                                </div>

                                <div className="flex">
                                    <Link to={project.href} target="_blank" className="projects__project-btn btn">{ project.link }</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </section>
    );
};

export default Projects;
