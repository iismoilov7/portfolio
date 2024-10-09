import React from "react";
import i18next from "../Languages.ts";

const Landing: React.FC = () => {
    return (
        <div style={{color: "#000"}}>
            {i18next.t("name")}
        </div>
    )
}

export default Landing;