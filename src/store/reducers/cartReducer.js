const initState = {}
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CART_ADDED':
      console.log('cart add success');
      return [
        ...state,
        action.food
      ];
    case 'DELETE_CART_ERROR':
      return state.filter(food => food.id != action.id);
    default:
      return state;
  }
};

export default cartReducer;