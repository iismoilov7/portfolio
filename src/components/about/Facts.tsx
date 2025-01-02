import { i18 } from "@src/hooks/languages";
import React from "react";
import Batman from "@src/components/common/Batman";

interface FactsProps {

}

const facts__list = i18.t("about.facts.facts_list", { returnObjects: true }) as [];


const Facts: React.FC<FactsProps> = () => {
    return (
        <section className="facts">
            <div className="flex">
                <div className="title" dangerouslySetInnerHTML={{ __html: i18.t("about.facts.title") }}></div>
                <div className="accent-line"></div>
            </div>
            <div className="facts__container flex">
                <div className="facts__list">
                    { facts__list.map((item, index) => (
                        <p className="facts__list-item" key={index}>{item}</p> 
                    )) }
                </div>
            <Batman />
            </div>
        </section>
    );
};

export default Facts;
