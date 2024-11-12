import React from "react";
import { Link } from "react-router-dom";

interface SocialProps {
    SocialLinks: {
        id: number;
        href: string;
        icon: string;
    }[];
}

const Social: React.FC<SocialProps> = ({ SocialLinks }) => {
    return (
        <div className="social-fixed animate__animated animate__slideInDown">
            <div className="social-fixed__line"></div>

            <div className="social-fixed__links">
                {
                    SocialLinks.map((social) => (
                        <Link key={social.id} to={social.href} target="_blank" className="social-fixed__links-link">
                            <img src={social.icon} alt={`${social.icon.split("/").pop()?.split(".")[0]} Icon`} />
                        </Link>
                    ))
                }

            </div>

        </div>
    );
};

export default Social;