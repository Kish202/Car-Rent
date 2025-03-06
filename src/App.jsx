

import './App.css'
import Navbar from './components/Navbar/Navbar';
   import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
// import toast, { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import CarList from './components/CarList/CarList';
import Testimonal from './components/Testimonal/Testimonal';
import Experience from './components/Experience/Experience';
import AppSToreBanner from './components/AppSToreBanner/AppSToreBanner';
import About from './components/about/About';
function App() {
const [theme, setTheme] = useState(
localStorage.getItem("theme")?localStorage.getItem("theme"):"light"

);
const element = document.documentElement;

useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
}, []);

useEffect(()=>{
  if(theme === "dark")
{
  element.classList.add("dark");
  localStorage.setItem("theme","dark");
}
else {
  element.classList.remove("dark");
  localStorage.setItem("theme","light");
}

  },[theme])



  return (
                        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden gap-2">
       <Navbar theme={theme} setTheme={setTheme}/>
  <Hero theme={theme}/> 
 <About/>
  <AppSToreBanner/>
<Services/>

 <CarList/>

 <Experience/>
 <Contact/>
 <Testimonal/>
  <Footer/>    
   </div>
  )
}

export default App


