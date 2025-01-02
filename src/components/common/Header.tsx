import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import animate from "@src/utils/animation";
import { i18, changeLanguage } from "@src/hooks/languages";


interface HeaderProps {
    navLinks: {
        id: number;
        title: string;
        href: string;
    }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
    const [isHovered, setHovered] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const languageList = useRef<HTMLDivElement | null>(null); 
    const headerTag = useRef<HTMLHeadElement | null>(null);
    const navTag = useRef<HTMLHeadElement | null>(null);
    const allLanguages = Object.keys(i18.services.resourceStore.data).filter(lang => lang !== i18.language);

    document.addEventListener("click", (event) => {
        const langMenu = event.target as Element;
        
        if (!langMenu.closest(".header__lang")) {
            handleMouseLeave();
        }
    });

    const handleMouseEnter = () => {
        setHovered(true);
        if (languageList.current) {
            animate(languageList.current, {
                display: "flex",
                animation: "animate__slideInDown",
                is_show: true
            });
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (languageList.current) {
            animate(languageList.current, {
                animation: "animate__flipOutX",
                is_show: false
            });
        }
    };

    const handleClick = async () => {
        if (window.innerWidth <= 992) {
            if (isOpen) {
                if (headerTag.current && navTag.current) {
                    headerTag.current.style.height = "0%";
                    await animate(navTag.current, {
                        animation: "animate__fadeOut",
                        is_show: true,
                    });
                    headerTag.current.classList.remove("active");
                    setTimeout(() => {
                        if (headerTag.current) {
                            headerTag.current.style.removeProperty("height");
                        }
                    }, 300);
                };
                
                setOpen(false);
            } else {
                if (headerTag.current && navTag.current) {
                    await animate(headerTag.current, {
                        animation: "animate__fadeIn",
                        is_show: true,
                        className: "active"
                    });
                }
                setOpen(true);
            }
        }
    }



    return (
        <header className="header" ref={headerTag}>
            <div className="header__brand brand">Ismoil</div>
            
            <nav className="header__nav" ref={navTag}>
                {
                    navLinks.map((link) => (
                        <Link key={link.id} to={link.href} className="header__nav-link" onClick={handleClick}>
                            <span>#</span>
                            {link.title}
                        </Link>
                    ))
                }
            </nav>

            
            <div className={`header__lang ${isHovered ? 'active' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseEnter}>
                <span className="header__lang-current">{ i18.language }</span>
                
                <div className="header__lang-list" ref={languageList}>
                    {
                        allLanguages.map((language) => (
                            <div className="header__lang-list-item" key={language} onClick={() => { if (isHovered) { changeLanguage(language) } }}>{language}</div>
                        ))
                    }
                </div>
            </div>

            <div className="header__burger" onClick={handleClick}>
            </div>
            
        </header>
    )
}

export default Header;
