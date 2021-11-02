import {connect} from 'react-redux';

import GameOverPage from '../Pages/game-over/game-over';

const mapStateToProps = state => ({
  winning_team: state.winning_team
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOverPage)
