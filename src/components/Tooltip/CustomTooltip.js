import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomTooltip = withStyles({
    tooltip: {
    //   color: "lightblue",
      backgroundColor: "#02044a"
    },
    arrow: {
        color: "#02044a"
    }
  })(Tooltip);

  export default CustomTooltip;