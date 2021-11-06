import {connect} from 'react-redux';

import landingPage from '../Components/landing-page/landing-page';

const mapStateToProps = state => ({
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(landingPage)
