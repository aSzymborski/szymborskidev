import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'components/templates/HomePage/HomePage';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { AboutMe } from 'components/templates/AboutMe/AboutMe';
import { Portfolio } from 'components/templates/Portfolio/Portfolio';
import { Contact } from 'components/templates/Contact/Contact';
import { ThankYouPage } from 'components/templates/ThankYouPage/ThankYouPage';

function Root() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </MainTemplate>
  );
}

export default Root;
