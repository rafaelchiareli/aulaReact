import Api from "../helpers/api";

export async function GetClientes() {
    return await Api.get("/Cliente");
}

export async function GetClienteById(id){
    return await Api.get(`/cliente/getclientesbyid/${id}`);
}

export async function PostCliente(cliente){
    return await Api.post("/cliente/postcliente", cliente);
}
export async function PutCliente(cliente){
    return await Api.put("/cliente/putcliente", cliente);
}

export async function DeleteCliente(id){
    return await Api.delete(`/cliente/deletecliente/${id}`);
}

export async function ListarTipos(){
    return await Api.get('/Cliente/GetTipos');
}