import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import LoginPage from './components/LoginPage';
import DomainTitleForm from './components/DomainTitleForm';
import ViewProfile from './components/ViewProfile';
import Members from './components/Members';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/domain-title" element={<DomainTitleForm />} />
        <Route path="/login/profile" element={<ViewProfile />} /> 
        <Route path="/current_members" element={<Members />}  />
      </Routes>
    </Router>
  );
};

export default App;
