import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'components/templates/HomePage/HomePage';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { AboutMe } from 'components/templates/AboutMe/AboutMe';
import { Portfolio } from 'components/templates/Portfolio/Portfolio';
import { Contact } from 'components/templates/Contact/Contact';
import { Helmet } from 'react-helmet';

function Root() {
  return (
    <MainTemplate>
      <Helmet>
        <title>SzymborskiDev</title>
        <meta name="description" content="Hello World!" />
        <meta name="keywords" content="Frontend, Programming" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </MainTemplate>
  );
}

export default Root;
