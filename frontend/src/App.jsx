import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      console.log("Fetched is started");
      const res = await fetch("/api/v1/data");
      console.log("fetched is ended");
      const data = await res.json();
      const data2 = data.data;
      // console.log("data2 is ", data2)

      // console.log(data.data[0][0]);

      setUserData(data2);
    } catch (error) {
      console.log(error);
    }
  };

  if(!userData){
    return (
      <div>Data is coming. Please wait</div>
    )
  }

  return (
    <div className="w-full h-fit text-red-800 p-6 bg-gray-600">
      <Table data={userData} />
    </div>
  );
}

export default App;
