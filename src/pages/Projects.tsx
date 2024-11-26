import BigProjects from "@src/components/projects/BigProjects";
import SmallProjects from "@src/components/projects/SmallProjects";
import { i18 } from "@src/hooks/languages";
import React from "react";


interface ProjectsProps {

}





const Projects: React.FC<ProjectsProps> = () => {

    return (
        <div className="page-projects fade-in mr-top-20">
            <h2 className="page-projects__title title" dangerouslySetInnerHTML={{ __html: i18.t("projects.title") }}></h2>
            <h4 className="page-projects__subtitle subtitle">{ i18.t("projects.subtitle") }</h4>

            <BigProjects />
            <SmallProjects />
        </div>
    );
};

export default Projects;
