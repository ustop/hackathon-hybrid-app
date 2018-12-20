import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import ServiceLogin from '../screens/ServiceLogin';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(ServiceLogin);
