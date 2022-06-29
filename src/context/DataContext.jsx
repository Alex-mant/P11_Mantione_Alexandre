import axios from 'axios';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json").then((res) => setData(res.data))
  }, [])

  console.log(data);
  
  return(
    <DataContext.Provider value={{data}} >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;

