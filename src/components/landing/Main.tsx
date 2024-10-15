import { i18 } from "@src/hooks/languages";
import React from "react";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <main className="main">
            <div className="main__title" dangerouslySetInnerHTML={{__html: i18.t(`landing.main.title`) }} ></div>
            <div className="main__subtitle"></div>
        </main>
    );
};

export default Main;