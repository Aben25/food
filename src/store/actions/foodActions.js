export const createFood = (food) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('foods').add({
      title: food.title,
      url: food.url,
      content: food.content,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const deleteFood = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('foods').doc(id).delete().then(() => {
      dispatch({ type: 'DELETE_PROJECT_SUCCESS' }, id);
    }).catch(err => {
      dispatch({ type: 'DELETE_PROJECT_ERROR' }, err);
    });
  }
};