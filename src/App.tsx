import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Star, ArrowUp } from 'lucide-react';
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import TopLanePage from './components/TopLanePage';
import MidLanePage from './components/MidLanePage';
import JunglePage from './components/JunglePage';
import AdcPage from './components/AdcPage';
import SupportPage from './components/SupportPage';
import ManagerPage from './components/ManagerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/toplane" element={<TopLanePage />} />
      <Route path="/jungle" element={<JunglePage />} />
      <Route path="/jungle" element={<JunglePage />} />
      <Route path="/midlane" element={<MidLanePage />} />
      <Route path="/adc" element={<AdcPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/manager" element={<ManagerPage />} />
    </Routes>
  );
}

export default App;