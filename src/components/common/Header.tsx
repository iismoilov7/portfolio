import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import animate from "@src/utils/animation";
import { i18, changeLanguage } from "@src/hooks/languages";

const navLinks = [
    {
        key: 1,
        title: i18.t("nav_home"),
        href: "/",
    },
    {
        key: 2,
        title: i18.t("nav_projects"),
        href: "/projects",
    },
    {
        key: 3,
        title: i18.t("nav_about"),
        href: "/about",
    },
    {
        key: 4,
        title: i18.t("nav_contacts"),
        href: "/contacts",
    },
];

const Header: React.FC = () => {
    const [isActive, setActive] = useState(false);
    const languageList = useRef<HTMLDivElement | null>(null); 
    const allLanguages = Object.keys(i18.services.resourceStore.data).filter(lang => lang !== i18.language);


    const handleMouseEnter = () => {
        setActive(true);
        if (languageList.current) {
            animate(languageList.current, {
                display: "flex",
                animation: "animate__slideInDown",
                is_show: true
            });
        }
    };

    const handleMouseLeave = () => {
        setActive(false);
        if (languageList.current) { // Check if the ref is not null
            animate(languageList.current, {
                animation: "animate__flipOutX",
                is_show: false
            });
        }
    };


    return (
        <header className="header">
            <div className="header__brand">Ismoil</div>
            
            <nav className="header__nav">
                {
                    navLinks.map((link) => (
                        <Link key={link.key} to={link.href} className="header__nav-link">
                            <span>#</span>
                            {link.title}
                        </Link>
                    ))
                }
            </nav>

            <div className={`header__lang ${isActive ? 'active' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className="header__lang-current">{i18.language}</span>
                
                <div className="header__lang-list animate__animated" ref={languageList}>
                    {
                        allLanguages.map((language) => (
                            <div className="header__lang-list-item" key={language} onClick={() => { changeLanguage(language) }}>{language}</div>
                        ))
                    }
                </div>

            </div>
            
        </header>
    )
}

export default Header;