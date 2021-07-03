import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

export const PurpleSwitch = withStyles({
    switchBase: {
      color: '#5f2fe2',
      '&$checked': {
        color: '#5f2fe2',
      },
      '&$checked + $track': {
        backgroundColor: '#5f2fe2',
      },
    },
    checked: {},
    track: {},
  })(Switch);