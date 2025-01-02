import { i18 } from "@src/hooks/languages";
import React from "react";

interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <section className="notfound">
            <h1>{ i18.t("errors.notfound") }</h1>
        </section>
    );
};

export default NotFound;
