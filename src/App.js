import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from '../src/components/AboutMe';
import ContactForm from '../src/components/ContactForm';
import Footer from '../src/components/Footer';
import HeroImage from '../src/components/HeroImage';
import ProjectCard from '../src/components/ProjectCard';
import SkillsCard from '../src/components/SkillsCard';
import ProjectRow from '../src/components/ProjectRow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <HeroImage />
        {/* <ProjectCard />
        <SkillsCard /> */}
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={AboutMe}  />
          <Route exact path="/contact" component={ContactForm} />
          <Route  />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}


export default App;
