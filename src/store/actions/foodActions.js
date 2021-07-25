
export const createFood = (food) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('foods').add({
      title: food.title,
      url: food.url,
      price: food.price,
      content: food.content,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
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

export const addToCart = (food, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('users').doc(authorId).collection('cart').add({
      title: food.title,
      url: food.url,
      price: food.price,
      content: food.content,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CART_ADDED' }, food);
    }).catch(err => {
      dispatch({ type: 'CART_ERROR' }, err);
    });

  }
};

export const deleteFromCart = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('users').doc(authorId).collection('cart').doc(id).delete().then(() => {
      dispatch({ type: 'DELETE_CART_SUCCESS' }, id);
    }).catch(err => {
      dispatch({ type: 'DELETE_CART_ERROR' }, err);
    });
  }
};