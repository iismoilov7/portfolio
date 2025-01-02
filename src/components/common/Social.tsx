import { SocialLinks } from "@src/config";
import { Link } from "react-router-dom";
import React from "react";



const Social: React.FC = () => {
    return (
        <div className="social-fixed animate__animated animate__slideInDown">
            <div className="social-fixed__line"></div>

            <div className="social-fixed__links">
                {
                    SocialLinks.map((social) => (
                        <Link key={social.id} to={social.href} target="_blank" className="social-fixed__links-link">
                            <img src={social.icon} alt={`${social.icon.split("/").pop()?.split(".")[0]} Icon`} className="icon" />
                        </Link>
                    ))
                }

            </div>

        </div>
    );
};

export default Social;
