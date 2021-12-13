import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'components/templates/HomePage/HomePage';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { AboutMe } from 'components/organisms/AboutMe/AboutMe';
import { Portfolio } from 'components/organisms/Portfolio/Portfolio';
import { Contact } from 'components/organisms/Contact/Contact';

function Root() {
  return (
    <div className="Root">
      <MainTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainTemplate>
    </div>
  );
}

export default Root;
