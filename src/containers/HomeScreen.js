import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import HomeScreen from '../screens/HomeScreen';
import { NavigationActions } from 'react-navigation';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(HomeScreen);
