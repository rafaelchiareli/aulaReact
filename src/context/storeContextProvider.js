import React, { useReducer, useContext } from 'react';

const initialState = {
    nome: "Rafael"
}

export const StoreContext = React.createContext({ ...initialState });
StoreContext.displayName = "storeDados";

export const useAppState = () => useContext(StoreContext);

export const StoreContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, {
        ...initialState,
        codigoCliente: props.codigoCliente,
        nome: props.nome
    });
   
    const setCodigoCliente = (val) => {
        dispatch({ type: eAction.SET_CODIGOCLIENTE, payload: val })
    }

    const setNome = (val) => {
        dispatch({ type: eAction.SET_NOME, payload: val })
    }

    return (
        <StoreContext.Provider
            value={{
                ...state,
                dispatch,
                setCodigoCliente,
                setNome
            }}
        >
            {props.children}
        </StoreContext.Provider>
    )
};

export const eAction = {
    SET_CODIGOCLIENTE: 0,
    SET_NOME: 1,
}

export const AppReducer = (state = initialState, action) => {

    const payload = action.payload;
    switch (action.type) {
        case eAction.SET_CODIGOCLIENTE:
            return { ...state, codigoCliente: payload || 0 }
        case eAction.SET_NOME:
            return { ...state, nome: payload || "" }
    }
};