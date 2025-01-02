import { i18 } from "@src/hooks/languages";
import React from "react";
import { Link } from "react-router-dom";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    
    return (
        <main className="main">
            <div className="main__box">
                <div className="main__title" dangerouslySetInnerHTML={{__html: i18.t("landing.main.title") }} ></div>
                <div className="main__subtitle">{ i18.t("landing.main.subtitle") }</div>
                <Link className="main__btn btn" to={"/contacts"} >{ i18.t("landing.main.button") }</Link>
            </div>

            <div className="main__box">
                <div className="main__img">
                    <img src="/assets/img/main/user.png" alt="" />
                </div>
                <div className="main__status">
                    <svg className="main__status-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="1" width="15" height="15" /></svg>
                    <div className="main__status-text">{ i18.t("landing.main.status.text") }</div>
                </div>
            </div>
        </main>
    );
};

export default Main; 
