import { useState } from "react";
import { createContext } from "react";

export const ThemDataContext= createContext()
const ThemData = (props) => {
    const [them, setThem] = useState('light')
  return  <div>
    <ThemDataContext.Provider value={them}>
        {props.children}
    </ThemDataContext.Provider>
    
</div>
};

export default ThemData;
