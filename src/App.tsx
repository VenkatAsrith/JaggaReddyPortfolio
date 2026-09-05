import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PoliticalJourney } from "./pages/PoliticalJourney";
import { Elections } from "./pages/Elections";
import { Sangareddy } from "./pages/Sangareddy";
import { PublicService } from "./pages/PublicService";
import { Media } from "./pages/Media";
import { Speeches } from "./pages/Speeches";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

import { LanguageProvider } from "./context/LanguageContext";

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/political-journey" element={<PoliticalJourney />} />
            <Route path="/elections" element={<Elections />} />
            <Route path="/sangareddy" element={<Sangareddy />} />
            <Route path="/public-service" element={<PublicService />} />
            <Route path="/media" element={<Media />} />
            <Route path="/speeches" element={<Speeches />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
