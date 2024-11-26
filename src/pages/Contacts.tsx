import Support from "@src/components/contacts/Support";
import { i18 } from "@src/hooks/languages";
import React from "react";

interface ContactsProps {

}

const Contacts: React.FC<ContactsProps> = () => {
    return (
        <div className="page-contacts fade-in mr-top-20">
            <h2 className="page-contacts__title title" dangerouslySetInnerHTML={{ __html: i18.t("contacts.title") }}></h2>
            <h4 className="page-contacts__subtitle subtitle">{ i18.t("contacts.subtitle") }</h4>

            <Support />
        </div>
    );
};

export default Contacts;
