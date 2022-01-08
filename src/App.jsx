//styles
import './App.scss';

//child components
import Header from './components/Header/header.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Projects from './pages/projects/projects.component';
import Academics from './pages/academics/academics.component';
import Project from './components/project/project.component';

//react-router
import { Routes, Route, Navigate } from 'react-router';

const App = () => (
  <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </div>
)

export default App;
