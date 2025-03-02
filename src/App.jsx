
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';


function App() {
const [theme, setTheme] = useState(
localStorage.getItem("theme")?localStorage.getItem("theme"):"light"

);
const element = document.documentElement;

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
                        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
       <Navbar theme={theme} setTheme={setTheme}/>
   </div>
  )
}

export default App


