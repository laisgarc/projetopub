import React, { Fragment, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import "../index.css";

const Cards = (props) => {

  const dataBackup = props.datas
  const [array, setArray] = useState(dataBackup);

  const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR',
  'SC', 'SP', 'SE', 'TO' 
  ];

  useEffect(() => {
      setArray(props.datas)
  }, [props.datas]);

  function filterStates(state, backup, array) {
    let arrayFiltrado = backup.filter(item => item.UF === state);
    setArray(arrayFiltrado);
  }

  function limparFiltros(backup, array) {
    setArray(backup);
  }

  return(
    <>
    <div className="filter">
      <DropdownButton id="dropdown-basic-button" title="Estados" className="button-filter scrollable" variant="none">
        {estados.map((estado, i) =>
          <Dropdown.Item value={estado} key={i} tag="a">
            <div  onClick={() => filterStates(estado, dataBackup, array)}>{estado}</div>
          </Dropdown.Item>
        )}
      </DropdownButton>
      <button onClick={() => limparFiltros(dataBackup, array)} className="button-limpar">Limpar filtros</button>
    </div>
      <Container className="containerData">
        {array.map((item, i) => (
                  <Fragment key={i}>
                    <div className="item" id={item.Nome}>
                      <div className="img-row">
                        {item.Logo && 
                          <img className="logo" src={item.Logo} alt="logo"/>
                        }
                      </div>
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
                            <p className="subtituloContato">Envie seu comprovante de doação ou tire suas dúvidas</p>
                            <p>{item.Contato}</p>
                            {item.Facebook && 
                              <a href={item.Facebook} target="_blank" rel="noreferrer">Facebook <br/></a>
                            }
                            {item.Instagram && 
                              <a href={item.Instagram} target="_blank" rel="noreferrer">Instagram</a>
                            }
                            {item.Site && 
                              <a href={item.Site} target="_blank" rel="noreferrer">Site</a>
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
                          {item.Pix && 
                              <div><p>{item.Pix}</p></div>
                            }
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
  )
}
   
export default Cards;


