import Main from "@src/components/landing/Main";
import Quote from "@src/components/landing/Quote";
import React from "react";

const Landing: React.FC = () => {
    return (
        <section className="landing">
            <Main />
            <Quote />
        </section>
    )
}

export default Landing;
