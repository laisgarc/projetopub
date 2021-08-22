import React, { useEffect, useState } from "react";
import Cards from './components/Cards';
import {readRemoteFile} from 'react-papaparse'
import Destaques from './components/Destaques';
import "./index.css";
import { Jumbotron } from "react-bootstrap";

export default function App() {
  const [data, setData] = useState([]);

  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSyX8jvujSIQjWCHNoZ5HmDDJZTvDf76yElIRJJWRi2gBlqDFtZ5qqiMaMfYSmLCpxsm2ZViHQCw79l/pub?gid=1676047565&single=true&output=csv'

  const completed = (results) => {
    var arr = results.data;
    arr.forEach((item, idx) => {
      if(idx > 0){
        var newstate = {
          Nome: item[0],
          Destaque: item[1],
          Logo: item[2],
          Sobre: item[3],
          UF: item[4],
          Contato: item[5],
          Facebook: item[6],
          Instagram: item[7],
          Site: item[8],
          NomeConta: item[9],
          CPF: item[10],
          Banco: item[11],
          Agencia: item[12],
          Conta: item[13],
          NomeConta2: item[14],
          CPF2: item[15],
          Banco2: item[16],
          Agencia2: item[17],
          Conta2: item[18],
          Pix: item[19],
          LinkDoacao: item[20],
          Outros: item[21]
        }
        setData(data => [...data, newstate])
      }
    })
  }

  useEffect(() => {
    readRemoteFile(url, {
    download: true,
    complete: (results) => {
      completed(results)
    }
  })
  }, []);

  // <div className="item" id={item.Nome}>
  //                     <div className="img-row">
  //                       {item.Logo && 
  //                         <img className="logo" src={item.Logo} alt="logo"/>
  //                       }
  //                     </div>
  //                       <p className="itemNome">{item.Nome}</p>
  //                         {item.Sobre && 
  //                         <div>
  //                           <p className="subtitulo">Sobre a instituição</p>
  //                           <p>{item.Sobre}</p>
  //                           <hr/>
  //                         </div> }
  //                         {(item.Contato||item.Facebook||item.Instagram) && 
  //                         <div>
  //                           <p className="subtitulo">Contato</p>
  //                           <p className="subtituloContato">Envie seu comprovante de doação ou tire suas dúvidas</p>
  //                           <p>{item.Contato}</p>
  //                           {item.Facebook && 
  //                             <a href={item.Facebook} target="_blank" rel="noreferrer">Facebook <br/></a>
  //                           }
  //                           {item.Instagram && 
  //                             <a href={item.Instagram} target="_blank" rel="noreferrer">Instagram</a>
  //                           }
  //                           {item.Site && 
  //                             <a href={item.Site} target="_blank" rel="noreferrer">Site</a>
  //                           }
  //                         </div>}
  //                         {(item.NomeConta||item.CPF||item.Banco||item.Agencia||item.Conta) && 
  //                         <div className="bancario">
  //                         <hr/>
  //                           <p className="subtitulo">Dados para doação</p>
  //                           {item.NomeConta && <p><b>Nome: </b> {item.NomeConta}</p>}
  //                           {item.CPF && <p><b>CPF: </b>{item.CPF}</p>}
  //                           {item.Banco && <p><b>Banco: </b>{item.Banco}</p>}
  //                           {item.Agencia && <p><b>Agência: </b>{item.Agencia}</p>}
  //                           {item.Conta && <p><b>Conta: </b>{item.Conta}</p>}
  //                           {(item.NomeConta2||item.CPF2||item.Banco2||item.Agencia2||item.Conta2) && 
  //                           <div>
  //                             <p>ou</p>
  //                             {item.NomeConta2 && <p><b>Nome: </b> {item.NomeConta2}</p>}
  //                             {item.CPF2 && <p><b>CPF: </b>{item.CPF2}</p>}
  //                             {item.Banco2 && <p><b>Banco: </b>{item.Banco2}</p>}
  //                             {item.Agencia2 && <p><b>Agência: </b>{item.Agencia2}</p>}
  //                             {item.Conta2 && <p><b>Conta: </b>{item.Conta2}</p>}
  //                           </div>}
  //                         </div> }
  //                         {item.Pix && 
  //                             <div><p>{item.Pix}</p></div>
  //                           }
  //                         {(item.LinkDoacao||item.Outros) && 
  //                         <div>
  //                           <hr/>
  //                           <p className="subtitulo">Outras formas de doar</p>
  //                             {item.LinkDoacao && <a href={item.LinkDoacao} target="_blank" rel="noreferrer">{item.LinkDoacao}</a>}
  //                             {item.Outros && <p>{item.Outros}</p>}
  //                         </div>
  //                         }
  //                     </div>


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