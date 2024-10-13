import React from "react";
import { Outlet } from "react-router-dom";
import { i18 } from "@src/hooks/languages";
import Header from "@src/components/common/Header";
import Social from "@src/components/common/Social";

const navLinks = [
    {
        id: 1,
        title: i18.t("nav_home"),
        href: "/",
    },
    {
        id: 2,
        title: i18.t("nav_projects"),
        href: "/projects",
    },
    {
        id: 3,
        title: i18.t("nav_blog"),
        href: "/blog",
    },
    {
        id: 4,
        title: i18.t("nav_about"),
        href: "/about",
    },
    {
        id: 5,
        title: i18.t("nav_contacts"),
        href: "/contacts",
    },
];


const SocialLinks = [
    {
        id: 0,
        href: "https://github.com/iismoilov7",
        icon: "src/assets/img/github.png"
    },
    {
        id: 1,
        href: "https://t.me/iismoilov7",
        icon: "src/assets/img/telegram.png"
    }
];

const BaseLayout: React.FC = () => {
    return (
        <div className="base_layout">
            <Social SocialLinks={SocialLinks} />
            <Header navLinks={navLinks} />
            <Outlet />
        </div>
    );
};

export default BaseLayout;