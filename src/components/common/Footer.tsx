import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { i18 } from "@src/hooks/languages";
import animate from "@src/utils/animation";
import { email, SocialLinks } from "@src/config";

const Footer: React.FC = () => {
    
    // Remove loading animation once DOM loaded
    useEffect(() => {
        const loading =  document.querySelector(".loading") as HTMLElement;
        setTimeout(() => {
            if (loading) {
                animate(loading, {
                    "animation": "animate__fadeOut",
                    "is_show": false
                })
            };
        }, 1000);
    });

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content flex">
                    <div className="footer__content-item flex-col">
                        
                        <div className="footer__brand flex">
                            <div className="brand">
                                Ismoil
                            </div>
                            <Link to={`mailto:${email}`}>{email}</Link>
                        </div>

                        <div className="footer__content-item-description">
                            { i18.t("landing.footer.description") }
                        </div>

                    </div>

                    <div className="footer__content-item flex-col">
                        <div className="footer__content-item-title">
                            { i18.t("landing.footer.media") }
                        </div>

                        <div className="flex">
                        {
                            SocialLinks.map((social) => (
                                <Link to={social.href} key={social.id} target="_blank">
                                    <img src={social.icon} alt="Media Icon" className="icon" />
                                </Link>
                            ))
                        }
                        </div>

                    </div>

                </div>

                <div className="footer__copyright" dangerouslySetInnerHTML={{ __html: i18.t("landing.footer.copyright")  }}>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
