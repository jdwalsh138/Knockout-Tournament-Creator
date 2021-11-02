import {connect} from 'react-redux';

import {
  generateNewBracket
} from '../Seeds';

import GenerateBracketPage from '../Pages/generate-bracket/generate-bracket';

const mapStateToProps = state => ({
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({
  generateNewBracket: (teams) => {
    dispatch(generateNewBracket(teams));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateBracketPage)
