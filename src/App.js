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