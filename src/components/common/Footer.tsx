import React from "react";
import { Link } from "react-router-dom";
import { SocialLink } from "@src/components/common/Social";
import { i18 } from "@src/hooks/languages";

interface FooterProps {
    SocialLinks: SocialLink[];
    email: string;
}


const Footer: React.FC<FooterProps> = ({ SocialLinks, email }) => {
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
