import React from 'react'

const Table = ({ dados = [], columns = [], className = 'table table-stripped' }) => {

    const CriarColunas = (columnType, value) => {
        switch (columnType) {
            case ("texto"):
                return value.name;
                break;
        }
    }


    return (
        <>
            <table className={className} id="tabela">
                <thead>
                    <tr>
                        {
                            columns.map(column => <th key={column.name}>{column.name}</th>)
                        }
                    </tr>

                </thead>
                <tbody>
                    {/* { dados && dados?.map(cliente => {
                            // console.log('item',cliente);
                            return(
                                <tr key={cliente.cliNome}>
                                    <td key={"col_"+cliente.cliNome}>
                                        {cliente.cliNome}
                                    </td>
                                    <td key={"col_"+cliente.cliCpfcnpj}>
                                        {cliente.cliCpfcnpj}
                                    </td>
                                </tr>
                            )
                        })} */}
                </tbody>


            </table>
        </>
    )

}
export default Table;