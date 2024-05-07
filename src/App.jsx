import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import NavTabs from "./components/NavTabs";
import Home from './pages/Home';
import About from './pages/About';
import ContactMe from './pages/ContactMe';

const App = () => <>
    <Router>
        <NavTabs/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
            <Route path ="*" element={<NotFound/>}/>
        </Routes>
        
    </Router>
</>;

export default App;
