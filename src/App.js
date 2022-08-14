import './App.css';
import Header from './Companents/Header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Donate from './pages/Shop';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Partners from './pages/Partners'
import Login from './Companents/Login/Login'
import Register from './Companents/Register/Register'
import ProjectDetails from './Companents/DonateProjects/ProjectDetails/ProjectDetails';
import DonateStoryDetails from './Companents/DonateStory/DonateStoryDetails/DonateStoryDetails';
import SmartVillage from './Companents/DonateStory/DonateStoryDetails/SmartVillage/SmartVillage';
import OurStories from './Companents/DonateStory/DonateStoryDetails/OurStories/OurStories';
import OurStoryDetails from './Companents/DonateStory/DonateStoryDetails/OurStories/OurStory/OurStoryDetails';
import CommonProjects from './Companents/TopThemesProjects/CommonProjects/CommonProjects';
import AddToBasket from './Companents/AddToBasket/AddToBasket';
import ProductDetails from './Companents/Product/ProductDetails';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/projectdetails/:id' element={<ProjectDetails/>}/>
          <Route path='/donatestorydetails/:id' element={<DonateStoryDetails/>}/>
          <Route path='/smartvillage' element={<SmartVillage/>}/>
          <Route path='/ourstories' element={<OurStories/>}/>
          <Route path='/ourstorydetails/:id' element={<OurStoryDetails/>}/>
          <Route path='/commonprojects/:id' element={<CommonProjects/>}/>
          <Route path='/addtobasket' element={<AddToBasket/>}/>
          <Route path='/productdetails' element={<ProjectDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
