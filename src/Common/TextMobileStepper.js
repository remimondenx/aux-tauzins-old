import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        imgPath: PropTypes.string.isRequired,
      }).isRequired).isRequired,
  };

  handleNext = (length) => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep === length-1 ? 0 : prevState.activeStep+1
    }));
  };

  handleBack = (length) => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep === 0 ? length-1 : prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme, imgs } = this.props;
    const { activeStep } = this.state;
    const maxSteps = imgs.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{imgs[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={imgs[activeStep].imgPath}
          alt={imgs[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={() => this.handleNext(maxSteps)} >
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={() => this.handleBack(maxSteps)} >
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TextMobileStepper);