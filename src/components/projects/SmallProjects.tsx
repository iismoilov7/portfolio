import { i18 } from "@src/hooks/languages";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

interface SmallProjectsProps {

}

interface Project {
    stack: string;
    title: string;
    description: string;
    href: string;
    link: string;
}

const SmallProjects: React.FC<SmallProjectsProps> = () => {
    const projects = i18.t("projects.small-projects.slider", { returnObjects: true }) as Project[];

    let rows = 1;

    if (projects.length >= 6) {
        rows = 2;
    }
    
    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: rows,
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
        <section className="small-projects">
            <h2 className="small-projects__title" dangerouslySetInnerHTML={{ __html: i18.t("projects.small-projects.title") }}></h2>

            <Slider className="projects__slider slider" {...sliderSettings}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <div className="projects__project slider-slide">
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

export default SmallProjects;
