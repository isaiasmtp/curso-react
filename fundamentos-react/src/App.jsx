import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParamentros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import ParouImpar from "./components/condicional/ParouImpar"
import UsuarioInfo from "./components/condicional/Usuarioinfo"
import Contador from './components/contador/Contador'

export default props =>
<div className="App">
    <h1>Fundamentos React</h1>

    <div class="Cards">

        <Card  titulo="#12 Contador" color="#424242">
            <Contador numeroInicial={10} />
        </Card>

        <Card  titulo="#07 Condicional" color="#982395">
            <ParouImpar numero={1}/>
            <UsuarioInfo usuario={{nome:'Fernando'}}/>
        </Card>

        <Card  titulo="#06 Repetição" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 Componente com Filhos" color="#00C8F8">
            <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Ana" ></FamiliaMembro>
            <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
            </Familia>
        </Card>

        <Card titulo="#04 Desafio Aleatorio" color="#080">
            <Aleatorio max={10} min={1} />
        </Card>

        <Card titulo="#03 Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>

        <Card titulo="#02 Segundo Componente" color="#E8B71A">
            <ComParametros subtitulo="Muito Legal" />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#588C73">
            <Primeiro></Primeiro>
        </Card>

    </div>
</div>