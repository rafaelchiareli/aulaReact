import React, { useEffect, useState } from "react";
import { DeleteCliente, GetClientes, PostCliente, PutCliente } from "../../../services/serviceCliente";
import '../cliente/cliente.css';
import Table from "../../commons/table/table";



const Cliente = () => {
    const [alterar, setAlterar] = useState(false);
    const [textoBotao, setTextoBotao] = useState("Salvar");
    const [listaClientes, setListaClientes] = useState([]);
    const [cliente, setCliente] = useState({});
    const [salvou, setSalvou] = useState(false);
    const [habilitar, setHabilitar] = useState(true);

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
                botao: <button onClick={() => CarregarCliente(item)} style={{marginLeft:"5px"}} className="btn btn-sm btn-primary"type="button">Editar</button>
            },
            {
                botao: <button onClick={() => ExcluirCliente(item.cliCodigo)} className="btn btn-sm btn-danger"type="button">Excluir</button>
            },
        
        ]
        }

    ])
    const handleChange = (event,value) =>{
        cliente[event.target.id] = value;
        setCliente({...cliente});
        
    }
    const handleSalvar = () =>{
        if (alterar){
            PutCliente(cliente).then(res =>setSalvou(true));
            setCliente({});
        }
        else{
            PostCliente(cliente).then(res => setSalvou(true));
            setCliente({});
        }
      
    }

    const NovoCliente = () =>{
        setCliente({});
        setHabilitar(false);
    }
    const CarregarCliente = (cliente)  =>{
        setCliente(cliente);
        setAlterar(true);
    }

    const ExcluirCliente = (id) => {
        DeleteCliente(id).then(res => {console.log(res.data)});
        setSalvou(true);
    }
    useEffect(() => {
        GetClientes().then(res => setListaClientes(res.data));
       
    }, [salvou])
    useEffect(() => {
        setTextoBotao(!alterar ? "Salvar" : "Alterar") 
    
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
                                <input readOnly={habilitar} type="text" id="cliNome" value={cliente.cliNome || ""} onChange={(e) => handleChange(e, e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>CPF/CNPJ</label>
                            <input  readOnly={habilitar}  type="text" id="cliCpfcnpj"value={cliente.cliCpfcnpj || ""} onChange={(e) => handleChange(e, e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>Nome da Mae</label>
                            <input  readOnly={habilitar}  type="text" id="cliNomeMae" value={cliente.cliNomeMae || ""} onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{padding: "10px"}} className="col-md">
                        <div>
                            <label>Data de Nascimento</label>
                            <input  readOnly={habilitar}  type="date" id="cliDataNascimento" defaultValue={cliente.cliDataNascimento } onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>Email</label>
                            <input   readOnly={habilitar} type="email" id="cliEmail"value={cliente.cliEmail || "" } onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md">
                        <div >
                            <label>Telefone</label>
                            <input  readOnly={habilitar}  type="text" id="cliTelefone"value={cliente.cliTelefone || "" } onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                    <div style={{padding: "10px"}} className="col-md-1">
                        <div >
                            <label>Sexo</label>
                            <input readOnly={habilitar}  type="text" id="cliSexo" value={cliente.cliSexo || "" }onChange={(e) => handleChange(e, e.target.value)}className="form-control"></input>
                        </div>
                    </div>
                </div>
                <button onClick={handleSalvar} type="button" className="btn btn-success">{textoBotao}</button>
                <button onClick={NovoCliente} type="button" className="btn btn-primary">Novo Cliente</button>
            </div>

            <div>
              
                <Table dados={dataSource} columns={columns}></Table>

            </div>
        </div>

    );
}
export default Cliente;