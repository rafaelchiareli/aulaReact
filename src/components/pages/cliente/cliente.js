import React, { useEffect, useState } from "react";
import { GetClientes, PostCliente, PutCliente } from "../../../services/serviceCliente";
import '../cliente/cliente.css';
import Table from "../../commons/table/table";



const Cliente = () => {
    const [alterar, setAlterar] = useState(false);
    const [textoBotao, setTextoBotao] = useState("Salvar");
    const [listaClientes, setListaClientes] = useState([]);
    const [cliente, setCliente] = useState({});
    const [salvou, setSalvou] = useState(false);

    const columns = [
        {name: 'Nome', columnType: 'texto'},
        {name: 'CPFCNPJ', columnType: 'texto'},
        {name: 'Telefone', columnType: 'texto'},
        {name: 'Email', columnType: 'texto'},
        {name: 'Nome da Mae', columnType: 'texto'},
        {name: 'Sexo', columnType: 'texto'},
        {name: 'Ação', columnType: 'botao'}
    ]

    const dataSource = listaClientes && listaClientes?.map(item => [
        {name: item.cliNome},
        {name: item.cliCpfcnpj},
        {name: item.cliTelefone},
        {name: item.cliEmail},
        {name: item.cliNomeMae},
        {name: item.cliSexo},
        {
            botoes: [{
                botao: <button onClick={() => CarregarCliente(item)} className="btn btn-sm btn-primary"type="button">Editar</button>
            }]
        }

    ])
    const handleChange = (event,value) =>{
        cliente[event.target.id] = value;
        setCliente({...cliente});
        
    }
    const handleSalvar = () =>{
        if (alterar){
            PutCliente(cliente).then(res =>setSalvou(true));
        }
        else{
            PostCliente(cliente).then(res => setSalvou(true));
        }
      
    }

    const CarregarCliente = (cliente)  =>{
        setCliente(cliente);
        setAlterar(true);
    }

    useEffect(() => {
        GetClientes().then(res => setListaClientes(res.data));
        setSalvou(false);
    }, [salvou])
    useEffect(() => {
        setTextoBotao(!alterar ? "Salvar" : "Alterar")
    //    if (alterar) {
    //         setTextoBotao("Alterar");
    //    }
    //    else{
    //     setTextoBotao("Salvar");
    //    }  
    
    },[alterar])
    return (
        <div style={{marginLeft: "10px"}}>
            <div>
                <h2>Cadastro de Clientes</h2>
            </div>
            <div>
                <div style={{display: "flex"}}>
                    <div style={{padding: "10px"}} className="col-md">
                        <div>
                            <label>Nome</label>
                            <input type="text" id="cliNome" value={cliente.cliNome || ""} onChange={(e) => handleChange(e, e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>CPF/CNPJ</label>
                            <input type="text" id="cliCpfcnpj"value={cliente.cliCpfcnpj || ""} onChange={(e) => handleChange(e, e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>Nome da Mae</label>
                            <input type="text" id="cliNomeMae" value={cliente.cliNomeMae || ""} onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{padding: "10px"}} className="col-md">
                        <div>
                            <label>Data de Nascimento</label>
                            <input type="date" id="cliDataNascimento" defaultValue={cliente.cliDataNascimento } onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>Email</label>
                            <input type="email" id="cliEmail"value={cliente.cliEmail || "" } onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>Telefone</label>
                            <input type="text" id="cliTelefone"value={cliente.cliTelefone || "" } onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md-1">
                        <div >
                            <label>Sexo</label>
                            <input type="text" id="cliSexo" value={cliente.cliSexo || "" }onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                </div>
                <button onClick={handleSalvar} type="button" className="btn btn-success">{textoBotao}</button>
            </div>

            <div>
              
                <Table dados={dataSource} columns={columns}></Table>

            </div>
        </div>

    );
}
export default Cliente;