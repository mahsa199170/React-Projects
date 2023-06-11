import { createContext, useState,useEffect } from "react";

import useLocalStorage from "use-local-storage";


const ThemeContext = createContext()


export const ThemeContextProvider = ({children})=>{
    const [switchBtn, setSwitchBtn] = useState(false)
  const [theme, setTheme] = useLocalStorage("theme","light")

  const toggleTheme = ()=>{
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setSwitchBtn(!switchBtn)

  }

  useEffect (()=>{
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme])
    
    return(

        <ThemeContext.Provider value = {{theme, toggleTheme, switchBtn}}>
            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContext