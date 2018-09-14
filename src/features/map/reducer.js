const initialState = {
  tiles: []
};

const mapReducer = (state = initialState, action) => {

  let newState = Object.assign({}, state);

  switch(action.type) {

    case 'ADD_BLOOD_SPILL':
      // set current tile to blood spill tile
      newState.tiles[action.payload.y][action.payload.x] = -1;
      return newState;

    case 'OPEN_CHEST':
      // set current chest to ground tile
      newState.tiles[action.payload.y][action.payload.x] = -2;
      return newState;

    // load a new map of tiles
    case 'ADD_TILES':
      return {
        ...action.payload
      }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default mapReducer;
