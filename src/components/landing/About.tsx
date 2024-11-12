import { i18 } from "@src/hooks/languages";
import React from "react";
import { Link } from "react-router-dom";

interface AboutProps {

}

const description = i18.t("landing.about.description", { returnObjects: true }) as [];

const About: React.FC<AboutProps> = () => {
    return (
        <section className="about">
            <div className="flex">
                <h2 className="title" dangerouslySetInnerHTML={{ __html: i18.t("landing.about.title") }}></h2>
                <div className="accent-line"></div>
            </div>

            <div className="about__content flex">
                <div className="flex-col">
                    <div className="about__description flex-col">
                        {
                            description.map((value) => (
                                <p>{value}</p>
                            ))
                        }
                    </div>

                    <Link to={""} className="about__btn btn">{ i18.t("landing.about.button") }</Link>
                </div>
                
                <img className="about__image" src="/assets/img/about/me.png" alt="Ismoil" />
            </div>

        </section>
    );
};

export default About;
