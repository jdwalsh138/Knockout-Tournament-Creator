import {
  SET_ROUND_GENERATED
} from '../Db';

export const round_generated = (state = false, action) => {

  switch(action.type) {

    case SET_ROUND_GENERATED:
      return action.round_generated;

    default:
        return state
  }

}
