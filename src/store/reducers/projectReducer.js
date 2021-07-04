const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    case 'DELETE_PROJECT_ERROR':
        return state.filter(project => project.id !=action.id);
    default:
      return state;
  }
};

export default projectReducer;