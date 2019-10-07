const appReducer = (state = { arrayNumeros: [1, 2, 3] }, action) => {
  let newState = JSON.parse(JSON.stringify(state));


  switch (action.type) {
    
    case "NEW_NUMERO":
      newState.arrayNumeros.push(action.item);
      return newState;

    case "BORRAR_NUMERO":
      newState.arrayNumeros = [];
      return newState;

    default:
      return state;
  }
}

export default appReducer;
