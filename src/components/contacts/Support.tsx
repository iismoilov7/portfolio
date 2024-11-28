import { email, instagram, telegram } from "@src/config";
import { i18 } from "@src/hooks/languages";
import React from "react";
import { Link } from "react-router-dom";




const Support: React.FC = () => {
    return (
        <section className="support">
            <div className="support__container flex">
                <p className="support__description">{ i18.t("contacts.support.description") }</p>
                
                <div className="support__box flex">
                    <div className="support__wallets">
                        <p className="support__wallets-title">{ i18.t("contacts.support.wallets.title") }</p>
                        <p className="support__wallets-item">{ i18.t("contacts.support.wallets.btc") }</p>
                        <p className="support__wallets-item">{ i18.t("contacts.support.wallets.usdt") }</p>
                        <p className="support__wallets-item">{ i18.t("contacts.support.wallets.eth") }</p>
                    </div>

                    <div className="support__social">
                        <div className="support__social-title">{ i18.t("contacts.support.social.title") }</div>

                        <Link to={`https://t.me/${telegram}`} target="_blank" className="support__social-link flex">
                            <img src="/assets/img/common/telegram.png" alt="Telegram icon" className="icon" />
                            <div>{ telegram }</div>
                        </Link>

                        <Link to={`mailto:${email}`} target="_blank" className="support__social-link flex">
                            <img src="/assets/img/common/email.png" alt="Email icon" className="icon" />
                            <div>{ email }</div>
                        </Link>

                        <Link to={`https://instagram.com/${instagram}`} target="_blank" className="support__social-link flex">
                            <img src="/assets/img/common/instagram.png" alt="Email icon" className="icon" />
                            <div>{ instagram }</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
