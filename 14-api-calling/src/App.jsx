import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  const getdata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    setFetchData(result);
  };

  const getaxios = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getdata}>Get_fetch</button>
      <button onClick={getaxios}>Get_axios</button>
      
      <div>
        {fetchData.map((elm, id) => {
          return(
             <h2 key={id}>fetch, {elm.title}</h2>
          );
        })}
      </div>

      <div>
        {data.map((elm, id) => {
          return (
            <h2 key={id}>
              Hello {elm.author}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default App;