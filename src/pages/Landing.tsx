import Main from "@src/components/landing/Main";
import Quote from "@src/components/landing/Quote";
import Projects from "@src/components/landing/Projects";
import React from "react";

const Landing: React.FC = () => {
    return (
        <section className="landing">
            <Main />
            <Quote />
            <Projects />
        </section>
    )
}

export default Landing;
