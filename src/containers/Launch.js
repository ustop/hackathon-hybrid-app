import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withState } from 'recompose';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';

import Launch from '../screens/Launch';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(Launch);
