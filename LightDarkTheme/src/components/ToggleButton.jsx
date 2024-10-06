import React, { useContext, useEffect } from 'react';
import { Themecontext } from '../context/ToggleThemeContext';
function ToggleButton() {
  const { toggleTheme, theme,setTheme01 } = useContext(Themecontext);

  useEffect(()=>{

    const theme = localStorage.getItem('theme')||"light"
    setTheme01(theme);
    document.body.classList.remove('light','black')
    document.body.classList.add(theme)




  },[])



  function handleChange() {
    toggleTheme(); 
    
    console.log("theme",theme)
   

    
    
  }
  document.body.classList.remove('light','dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme',theme)


  return (
    <input
      type="checkbox"
      className="toggle"
      checked={theme === 'dark'} 
      onChange={handleChange}
    />
  );
}

export default ToggleButton;
