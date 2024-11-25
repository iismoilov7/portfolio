import { i18 } from "@src/hooks/languages";
import React from "react";

interface SkillsProps {
    showfull: boolean;
}

const languages_list = i18.t("landing.skills.languages_list", { returnObjects: true }) as [];
const databases_list = i18.t("landing.skills.databases_list", { returnObjects: true }) as [];
const tools_list = i18.t("landing.skills.tools_list", { returnObjects: true }) as [];
const other_list = i18.t("landing.skills.other_list", { returnObjects: true }) as [];
const frameworks_list = i18.t("landing.skills.frameworks_list", { returnObjects: true }) as [];

const Skills: React.FC<SkillsProps> = ({ showfull }) => {
    return (
        <section className="skills">
            <div className="flex">
                <h2 className="skills__title title" dangerouslySetInnerHTML={{__html: i18.t("landing.skills.title")}}></h2>
                <div className="accent-line"></div>
            </div>

            <div className="skills__content flex">
            {
                showfull ? (
                    <div className="skills__list">
                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.languages") }</div>

                        <div className="skills__list-item-body">
                            {
                                languages_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.databases") }</div>
                        <div className="skills__list-item-body">
                            {
                                databases_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.other") }</div>
                        <div className="skills__list-item-body">
                            {
                                tools_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.tools") }</div>
                        <div className="skills__list-item-body">
                            {
                                other_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>

                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.frameworks") }</div>
                        <div className="skills__list-item-body">
                            {
                                frameworks_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>
                </div>
                ): (
                <>
                    <img className="skills__squares" src="/assets/img/skills/squares.png" alt="Squares" />
                    <div className="skills__list">
                <div className="skills__list-item">
                    <div className="skills__list-item-title">{ i18.t("landing.skills.languages") }</div>

                    <div className="skills__list-item-body">
                        {
                            languages_list.map((value)=> (
                                value + " "
                            ))
                        }
                    </div>
                </div>

                <div className="flex-col">
                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.databases") }</div>
                        <div className="skills__list-item-body">
                            {
                                databases_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>
                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.other") }</div>
                        <div className="skills__list-item-body">
                            {
                                tools_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="flex-col">
                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.tools") }</div>
                        <div className="skills__list-item-body">
                            {
                                other_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>
                    <div className="skills__list-item">
                        <div className="skills__list-item-title">{ i18.t("landing.skills.frameworks") }</div>
                        <div className="skills__list-item-body">
                            {
                                frameworks_list.map((value)=> (
                                    value + " "
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
            )}
                
            </div>


        </section>
    );
};

export default Skills;
