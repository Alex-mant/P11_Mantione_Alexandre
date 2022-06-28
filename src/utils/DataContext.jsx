import axios from 'axios';
import { useState } from 'react';


const DataContext = () => {
  const [data, setData] = useState([]);

  axios.get("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json").then((res) => setData(res.data))

  console.log(data);
}

export default DataContext;

