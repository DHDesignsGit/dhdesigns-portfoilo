import react from 'react';

import { Outlet } from 'react-router-dom';
import NavbarModule from '../../modules/navbarModule/NavbarModule';
import FooterModule from "../../modules/footerModule/FooterModule"


const AppLayout = () => {

    return (
        <div className="AppLayout">
            <NavbarModule></NavbarModule>
            <Outlet />
            <FooterModule></FooterModule>
        </div>
    )
}

export default AppLayout;