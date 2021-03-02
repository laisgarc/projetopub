import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import Cards from './components/Cards';
import Destaques from './components/Destaques';
import "./index.css";
import { Jumbotron } from "react-bootstrap";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1PJtmgjAFwJx7RFhCEZbQrnO8W8KNHxoLWsZrH_4Vm64",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);


  return (
    <>
    <div className="header">
      <h1>Dados da Planilha</h1>
    </div>
    <Jumbotron className="jumbotron">
      <Destaques datas={data} />
    </Jumbotron>
      <Cards datas={data}/>
    </>
  );
}