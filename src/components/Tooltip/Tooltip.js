import { Tooltip } from '@material-ui/core';

export default (props) => {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} arrow placement="top" title={`${value} month subscription`}>
        {children}
      </Tooltip>
    );
  }