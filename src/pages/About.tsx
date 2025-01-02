import Facts from "@src/components/about/Facts";
import Me from "@src/components/about/Me";
import Skills from "@src/components/common/Skills";
import { i18 } from "@src/hooks/languages";
import React from "react";

interface AboutProps {

}


const About: React.FC<AboutProps> = () => {
    return (
        <div className="page-about fade-in mr-top-20">
            <h2 className="page-about__title title" dangerouslySetInnerHTML={{ __html: i18.t("about.title") }}></h2>
            <h4 className="page-about__subtitle subtitle">{ i18.t("about.subtitle") }</h4>
            <Me />
            <Skills showfull={true} />
            <Facts />
        </div>
    );
};

export default About;
