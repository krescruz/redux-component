const initialState = [
  {id: 1, name: 'name 1', desc: 'desc', completed: true},
  {id: 2, name: 'name 2', desc: 'desc', completed: true},
  {id: 3, name: 'name 3', desc: 'desc', completed: false}
];

const products = (state, action) => {

  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {
    case 'ADD_TODO':
      return state;
    case 'TOGGLE_TODO':
      return state.map(product =>
        (product.id === action.id)
          ? {id: product.id, name: product.name, desc: product.desc, completed: !product.completed}
          : product
      )
    default:
      // Default
      return state;
  }
}

export default products;
