import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./query/query";

function App() {
  const { loading, data } = useQuery(CONTINENT_QUERY);
  console.log(data);

  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        data?.continents?.map((continent: any, index: number) => (
          <div key={index}>
            <p>{continent.name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
