const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, {name: action.payload.name, price: action.payload.price, img : action.payload.img,  id: action.payload.id}];
  
      case "REMOVE_ITEM":
        return state.filter((item) => item.id !== action.payload);
  
      default:
        return state;
    }
  };
  
  export default cartReducer;