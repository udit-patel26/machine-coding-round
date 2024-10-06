import React, { useContext } from 'react'
import ToggleButton from './components/ToggleButton'
import { Themecontext } from './context/ToggleThemeContext'
import ThemeProvider from './context/ToggleThemeContext';

function App() {

     const{theme,toggleTheme,setTheme02} =useContext(Themecontext);

     console.log(theme)
      
  
  return (
    <ThemeProvider className={`${theme}`}>
    <div className="h-[100vh] bg-white text-black dark:bg-black dark:text-white">
  <h1 className='text-yellow-300 dark:bg-black dark:text-white'>hello i m here</h1>

  <div className='rounded-lg bg-white text-black w-[600px] mx-auto border-4 border-black dark:text-white dark:bg-black p-3'>
  <ToggleButton/>
    <h1 className='text-xl text-black bg-white dark:text-white dark:bg-black font-serif font-medium text-center'>
      Hello, here you will learn about how to use useContext Hook in React
    </h1>
    <p className='text-xl text-black bg-white dark:text-white dark:bg-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione architecto recusandae ipsum corporis, ut repellat sed, aliquam odio iste aspernatur pariatur inventore officiis laudantium. Ex reiciendis ipsum blanditiis odit earum pariatur? Ratione, fuga libero!</p>
  </div>
  </div>
  </ThemeProvider>
  )
}

export default App