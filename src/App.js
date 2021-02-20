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
                      {item.Sobre && 
                      <div>
                        <p className="subtitulo">Sobre a instituição</p>
                        <p>{item.Sobre}</p>
                        <hr/>
                      </div> }
                      {(item.Contato||item.Facebook||item.Instagram) && 
                      <div>
                        <p className="subtitulo">Contato</p>
                        <p>{item.Contato}</p>
                        {item.Facebook && 
                          <a href={item.Facebook} target="_blank" rel="noreferrer">Facebook <br/></a>
                        }
                        {item.Instagram && 
                          <a href={item.Instagram} target="_blank" rel="noreferrer">Instagram</a>
                        }
                      </div>}
                      {(item.NomeConta||item.CPF||item.Banco||item.Agencia||item.Conta) && 
                      <div className="bancario">
                      <hr/>
                        <p className="subtitulo">Dados para doação</p>
                        {item.NomeConta && <p><b>Nome: </b> {item.NomeConta}</p>}
                        {item.CPF && <p><b>CPF: </b>{item.CPF}</p>}
                        {item.Banco && <p><b>Banco: </b>{item.Banco}</p>}
                        {item.Agencia && <p><b>Agência: </b>{item.Agencia}</p>}
                        {item.Conta && <p><b>Conta: </b>{item.Conta}</p>}
                        {(item.NomeConta2||item.CPF2||item.Banco2||item.Agencia2||item.Conta2) && 
                        <div>
                          <p>ou</p>
                          {item.NomeConta2 && <p><b>Nome: </b> {item.NomeConta2}</p>}
                          {item.CPF2 && <p><b>CPF: </b>{item.CPF2}</p>}
                          {item.Banco2 && <p><b>Banco: </b>{item.Banco2}</p>}
                          {item.Agencia2 && <p><b>Agência: </b>{item.Agencia2}</p>}
                          {item.Conta2 && <p><b>Conta: </b>{item.Conta2}</p>}
                        </div>}
                      </div> }
                      {(item.LinkDoacao||item.Outros) && 
                      <div>
                        <hr/>
                        <p className="subtitulo">Outras formas de doar</p>
                          {item.LinkDoacao && <a href={item.LinkDoacao} target="_blank" rel="noreferrer">{item.LinkDoacao}</a>}
                          {item.Outros && <p>{item.Outros}</p>}
                      </div>
                      }
                  </div>
                </Fragment>
        ))}
      </Container>
    </>
  );
}