import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import "./index.css";

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
    <div class="header">
      <h1>Dados da Planilha</h1>
    </div>
        {data.map((item, i) => (
                <Fragment key={i}>
                  <div class="item">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <p>Nome: {item.Nome}</p>
                        </div>
                        <div class="col">
                          <p>Dados: {item.Dados}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
        ))}
    </>
  );
}