import { Slider } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const SubscriptionSlider = withStyles({
    root: {
      color: '#5f2fe2',
      height: 8,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: 'currentColor',
      border: '5px solid #fff',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        // boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 7,
      borderRadius: 4,
    },
    rail: {
      height: 5,
      borderRadius: 4,
    },
  })(Slider);