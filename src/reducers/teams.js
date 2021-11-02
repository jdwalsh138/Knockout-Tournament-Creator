import Team from '../Models/Team';

import {ADD_TEAM} from '../Db';

export const teams = (state = [
  new Team("Chelsea", null),
  new Team("Liverpool", null),
  new Team("Everton", null),
  new Team("Manchester Utd", null)
], action) => {

  switch(action.type) {

    case ADD_TEAM:
      var team = action.team;
      var teams = [...state];
      teams.push(team);
      return teams;

    default:
        return state
  }

}
