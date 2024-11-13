import React from "react";
import { Outlet } from "react-router-dom";
import { i18 } from "@src/hooks/languages";
import Header from "@src/components/common/Header";
import Social from "@src/components/common/Social";
import Footer from "@src/components/common/Footer";
import { email, SocialLinks } from "@src/config";

const navLinks = [
    {
        id: 1,
        title: i18.t("common.nav.home"),
        href: "/",
    },
    {
        id: 2,
        title: i18.t("common.nav.projects"),
        href: "/projects",
    },
    {
        id: 3,
        title: i18.t("common.nav.blog"),
        href: "/blog",
    },
    {
        id: 4,
        title: i18.t("common.nav.about"),
        href: "/about",
    },
    {
        id: 5,
        title: i18.t("common.nav.contacts"),
        href: "/contacts",
    },
];




const BaseLayout: React.FC = () => {
    return (
        <>
            <Social SocialLinks={SocialLinks} />
            <Header navLinks={navLinks} />
            <div className="base_layout">
                <Outlet />
            </div>
            <Footer SocialLinks={SocialLinks} email={email} />
        </>

    );
};

export default BaseLayout;
