import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import Launch from '../screens/Launch';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(Launch);
