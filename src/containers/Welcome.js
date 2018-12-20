import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import Welcome from '../screens/Welcome';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(Welcome);
