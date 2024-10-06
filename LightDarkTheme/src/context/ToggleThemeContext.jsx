import { Children, createContext, useContext,useState } from "react";



export const Themecontext = createContext({
    theme:'light',
    toggleTheme:()=>{},
    setTheme02:()=>{}
});


 const ThemeProvider =({children})=>{

    const[theme,setTheme]=useState('light');
    
    const ToggleTheme=()=>{

        setTheme((prev)=>{
             return prev === "light"?"dark":"light"
        })

    }
    const setTheme02=(theme)=>{
        setTheme(theme)
    }

    const cxtValue={
        theme,
        toggleTheme:ToggleTheme,
        setTheme01:setTheme02
    }



    return(
        <Themecontext.Provider value={cxtValue}>
            {children}
        </Themecontext.Provider>
    )
}

export default ThemeProvider;

