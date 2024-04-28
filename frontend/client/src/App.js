// importování rotes
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// importování stránek
import LandingPage from "./pages/landingPage/LandingPage"
import PortfolioPage from "./pages/portfolioPage/PortfolioPage"
import OffersPage from "./pages/offersPage/OffersPage"
import ContactsPage from "./pages/contactsPage/ContactsPage"

// importování Layoutu
import AppLayout from "./layouts/appLayout/AppLayout"


const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />}>

                <Route index element={<LandingPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/offers' element={<OffersPage />} />
                <Route path='/contacts' element={<ContactsPage />} />

            </Route>
        </Routes>
    </BrowserRouter>
}

export default App