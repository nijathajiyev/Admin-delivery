import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Header.css";
import az from '../../../assets/Header/az.svg';
import fr from '../../../assets/Header/fr.svg';
import en from '../../../assets/Header/en.svg';
import adminIcon from '../../../assets/admin.svg';
import menuIcon from '../../../assets/menu.svg';
import {
    Navbar,
    Button,
    Collapse,
    DropdownItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";
import AddBtn from "../../buttons/AddBtn";
const lngs = {
    az: { nativeName: 'Az' },
    en: { nativeName: 'En' },
    fr: { nativeName: 'Fr' }
}
const flags = {
    az, en, fr
}
const Header = ({ toggleSidebar }) => {
    const { t, i18n } = useTranslation();
    const [topbarIsOpen] = useState(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(prevState => !prevState);
    return (
        <Navbar
            className="navbar mobile-nav"
            expand="md">
            <Button className="sidebar-btn" onClick={toggleSidebar}>
                <img src={menuIcon} alt="menu" />
            </Button>
            <Collapse className="d-flex justify-content-end align-items-center" isOpen={topbarIsOpen} >
                <AddBtn className="addPro" components="product" placement='end' name ={t("add product").toUpperCase()} />
                <Dropdown className='lang-btn' isOpen={isOpen} toggle={toggle}>
                    <DropdownToggle><img src={flags[i18n.resolvedLanguage]} alt={flags[i18n.resolvedLanguage]} /></DropdownToggle>
                    <DropdownMenu className='lang-dropdown'>
                        {Object.keys(lngs).map((lng) => (
                            <DropdownItem type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}><img src={flags[lng]} alt={flags[lng]} /></DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <img src={adminIcon} alt={t("admin")} className="img-headr" />
                <span className="admin-name text-white">{t("admin")}</span>
            </Collapse>
        </Navbar>
    );
};

export default Header;