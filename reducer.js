const initial = {
    txt: 'hello',
};

export const dataReducer = (state, action) => {
  if (action.type == 'CHANGE_TXT') {
    return {
      ...state,
      txt: action.payload.txt,
    }
  }

  return state ? state : initial;
}