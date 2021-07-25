const initState = {

}

const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create food success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create food error');
      return state;
    case 'DELETE_PROJECT_ERROR':
        return state.filter(food => food.id !=action.id);
    default:
      return state;
  }
};

export default foodReducer;