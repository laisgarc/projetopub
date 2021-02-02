import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import Container from 'react-bootstrap/Container';
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
    <div className="header">
      <h1>Dados da Planilha</h1>
    </div>
      <Container className="containerData">
        {data.map((item, i) => (
                <Fragment key={i}>
                  <div className="item">
                    <p className="itemNome">{item.Nome}</p>
                      {item.NomeD && 
                      <div>
                        <p>Dados da conta bancária</p>
                        <p>Banco {item.Banco}</p> 
                        <p>Nome: {item.NomeD}</p>
                        <p>CPF: {item.CPF}</p>
                        <p>Agência: {item.Agencia}</p>
                        <p>Conta: {item.Conta}</p>
                      </div> }
                      {item.Link && 
                      <div>
                        <p>Mais informações <a href={item.Link}>aqui</a> </p>
                      </div>}
                      {item.Outros && 
                      <div>
                        <p>{item.Outros}</p>
                      </div> }
                  </div>
                </Fragment>
        ))}
      </Container>
    </>
  );
}