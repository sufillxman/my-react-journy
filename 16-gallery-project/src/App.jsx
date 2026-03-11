import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserdata(response.data);
  };

  useEffect(() => {
    getdata();
  }, [index]);

  return (
    <div>
      <Header index={index} userdata={userdata} />

      <Button index={index} setIndex={setIndex} setUserdata={setUserdata} />
    </div>
  );
};

export default App;
