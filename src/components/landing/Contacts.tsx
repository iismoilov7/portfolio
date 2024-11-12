import { i18 } from '@src/hooks/languages';
import React from 'react'
import { Link } from 'react-router-dom';

interface ContactsProps {
  
}

const Contacts: React.FC<ContactsProps> = ({}) => {
  return ( 
    <section className="contacts">
        <div className="flex">
            <h2 className="contacts__title title" dangerouslySetInnerHTML={{ __html: i18.t("landing.contacts.title") }}></h2>
            <div className="accent-line"></div>
        </div>

    <div className="contacts__container flex">
        <div className="contacts__description">{ i18.t("landing.contacts.description") }</div>
        <div className="contacts__box flex-col">
            <div className="contacts__box-item">{ i18.t("landing.contacts.msgme") }</div>
            
            <Link to={"https://t.me/iismoilov7"} target="_blank" className="contacts__box-link flex">
                <img src="/assets/img/common/telegram.png" alt="Telegram icon" />
                <div>{ i18.t("landing.contacts.telegram") }</div>
            </Link>

            <Link to={"mailto:ismoil@inverso.ai"} target="_blank" className="contacts__box-link flex">
                <img src="/assets/img/common/email.png" alt="Email icon" />
                <div>{ i18.t("landing.contacts.email") }</div>
            </Link>
        </div>
    </div>
    </section>
  )
}

export default Contacts;