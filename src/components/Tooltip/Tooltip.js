import CustomTooltip from './CustomTooltip';

export default (props) => {
    const { children, open, value } = props;
  
    return (
      <CustomTooltip open={open} enterTouchDelay={0} arrow placement="bottom" title={`${value} month subscription`}>
        {children}
      </CustomTooltip>
    );
  }

