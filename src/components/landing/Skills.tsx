import { i18 } from "@src/hooks/languages";
import React from "react";

interface SkillsProps {

}

const Skills: React.FC<SkillsProps> = () => {
    return (
        <section className="skills">
            <div className="flex">
                <h2 className="skills__title title" dangerouslySetInnerHTML={{__html: i18.t("landing.skills.title")}}></h2>
                <div className="accent-line"></div>
            </div>
        </section>
    );
};

export default Skills;
