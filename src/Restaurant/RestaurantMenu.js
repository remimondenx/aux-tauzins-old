import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '../Common/Pagination';
import LazyLoad from 'react-lazyload';

const styles = {
  root: {
    margin: '20px',
    height: '600px',
    backgroundColor: 'white',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerSwipeable: {
    position: 'relative',
    height: '35%',
    width: '100%',
    overflow: 'hidden',
  },
  swipeable: {
    overflow: 'hidden',
  },
  text: {
    height: '65%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuName: {
    fontWeight: 'bold',
  },
  food: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    margin: '10px 0 10px 0',
  },
  tilde: {
    lineHeight: '12px',
  },
  or: {
    fontSize: '0.8em',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: '8px',
  },
  prix: {
    fontWeight: 'bold',
  },
  extra: {
    fontWeight: 'bold',
  },
};

class RestaurantMenu extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const { classes, content, imgs } = this.props;
    const { index } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.containerSwipeable}>
          <SwipeableViews
            className={classes.swipeable}
            index={index}
            onChangeIndex={this.handleChangeIndex}
          >
            {imgs.map((it) => (
              <LazyLoad height={175}>
                <div
                  style={{
                    height: '175px',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px 20px 0px 0px',
                    overflow: 'hidden',
                    backgroundImage: `url(${it.imgPath})`,
                  }}
                  key={it.imgPath}
                />
              </LazyLoad>
            ))}
          </SwipeableViews>
          <Pagination
            className={classes.pagination}
            dots={imgs.length}
            index={index}
            onChangeIndex={this.handleChangeIndex}
          />
        </div>
        <div className={classes.text}>
          <Typography
            className={classes.menuName}
            variant="h5"
            color="primary"
            gutterBottom
          >
            {content.name}
          </Typography>
          <div className={classes.food}>
            <Typography variant="body1">{content.entree}</Typography>
            {content.entree2 && (
              <div>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant="body1">{content.entree2}</Typography>
              </div>
            )}
            {content.entree3 && (
              <div>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant="body1">{content.entree3}</Typography>
              </div>
            )}
            <Typography className={classes.tilde} variant="body1">
              ~
            </Typography>

            <Typography variant="body1">{content.plat}</Typography>
            {content.plat2 && (
              <div>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant="body1">{content.plat2}</Typography>
              </div>
            )}
            {content.plat3 && (
              <div>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant="body1">{content.plat3}</Typography>
              </div>
            )}
            <Typography className={classes.tilde} variant="body1">
              ~
            </Typography>
            {content.apresPlat && (
              <div>
                <Typography variant="body1">{content.apresPlat}</Typography>
                <Typography className={classes.tilde} variant="body1">
                  ~
                </Typography>
              </div>
            )}
            <Typography variant="body1">{content.dessert}</Typography>
            {content.dessert2 && (<>
              <Typography className={classes.or}>ou</Typography>
              <Typography variant="body1">{content.dessert2}</Typography>
              <Typography className={classes.or}>ou</Typography>
              <Typography variant="body1" gutterBottom>
                {content.dessert3}
              </Typography>
            </>
            )}
            {/* {(content.dessert2 && (
              <div>
                <Typography variant="body1">{content.dessert}</Typography>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant="body1" gutterBottom>
                  {content.dessert2}
                </Typography>
              </div>
            )) || (
              <Typography variant="body1" gutterBottom>
                {content.dessert}
              </Typography>
            )} */}
          </div>
          {content.prix && (
            <Typography className={classes.prix} variant="body1">
              - {content.prix} euros -
            </Typography>
          )}
          {content.extra && (
            <Typography className={classes.extra} variant="body1">
              {content.extra}
            </Typography>
          )}
        </div>
      </div>
    );
  }
}

RestaurantMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    entree: PropTypes.string.isRequired,
    plat: PropTypes.string.isRequired,
    dessert: PropTypes.string.isRequired,
    prix: PropTypes.number,
  }).isRequired,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withStyles(styles)(RestaurantMenu);
