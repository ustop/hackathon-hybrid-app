import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

import CatalogueBrowsing from '../screens/CatalogueBrowsing';

export default compose(
  connect(
    state => ({

    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(CatalogueBrowsing);
