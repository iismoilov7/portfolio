import { i18 } from "@src/hooks/languages";
import React from "react";

interface QuoteProps {

}

const Quote: React.FC<QuoteProps> = () => {
    return (
        <section className="quote">
            <div className="quote__container">
                <div className="quote__text">
                    { i18.t("landing.quote.text") }
                </div>

                <div className="quote__author">
                    { i18.t("landing.quote.author") }
                </div>
            </div> 
        </section>
    );
};

export default Quote;
