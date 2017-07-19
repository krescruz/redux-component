// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import todoApp from '../reducers/reducers';
// definimos el estado inicial
const initialState = {
    products: [],
};
// creamos el store
const store = createStore(todoApp, initialState);

export default store;
