import React, { Component } from 'react'
import {useParams} from "react-router-dom";

export default function Compiler() {
    var { id } = useParams();
    var cont=[]
    if (id=="Python"){
      cont.push(
        <iframe  title="" height={"600px"} width="100%" src='https://repl.it/@IshanSingla/PythonInterprater?lite=true' scrolling='no' frameBorder={"no"} sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-popups allow-forms'></iframe>
      )
    }
    else if (id=="C"){
      cont.push(
        <iframe  title="" height={"600px"} width="100%" src='https://repl.it/@IshanSingla/C-1?lite=true' scrolling='no' frameBorder={"no"} sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-popups allow-forms'></iframe>
      )
    }
    else if (id=="Cpp"){
      cont.push(
        <iframe  title="" height={"600px"} width="100%" src='https://repl.it/@IshanSingla/C?lite=true' scrolling='no' frameBorder={"no"} sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-popups allow-forms'></iframe>
      )
    }
    else if (id=="Php"){
      cont.push(
        <iframe  title="" height={"600px"} width="100%" src='https://repl.it/@IshanSingla/Php?lite=true' scrolling='no' frameBorder={"no"} sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-popups allow-forms'></iframe>
      )
    }
    else if (id=="Dart"){
      cont.push(
        <iframe  title="" height={"600px"} width="100%" src='https://repl.it/@IshanSingla/Dart?lite=true' scrolling='no' frameBorder={"no"} sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-popups allow-forms'></iframe>
      )
    }
    return (
      <div >
          <br/>
            <div className="container">
            <h1 className="header "> Induced {id} IDE </h1>
              {cont}</div>
            
            

          
            {/* HtmlCssJs */}
            {/* NodeJs */}
            {/* React */}
            {/* Dart */}
            {/* C-1 */}
            {/* C */}
            {/* Php */}

      </div>
    )
  }
