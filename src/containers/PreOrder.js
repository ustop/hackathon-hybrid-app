import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import PreOrder from '../screens/PreOrder';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(PreOrder);
