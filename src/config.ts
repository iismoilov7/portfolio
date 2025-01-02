export const email = "right_decision_mail@proton.me";
export const telegram = "iismoilov7";
export const github = "iismoilov7";
export const instagram = "iismoilov7";


export const SocialLinks = [
    {
        id: 0,
        href: "https://github.com/" + github,
        icon: "/assets/img/common/github.png"
    },
    {
        id: 1,
        href: "https://t.me/" + telegram,
        icon: "/assets/img/common/telegram.png"
    }
];


export const EndPoints = {
    auth: {
        login: "/login"
    },
    blog: {
        articles: "/blog",
        category: "/blog/category/get",
        create_article: "/blog/article/create"
    }
}
