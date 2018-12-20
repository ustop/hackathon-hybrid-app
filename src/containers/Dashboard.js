import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import Dashboard from '../screens/Dashboard';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(Dashboard);
