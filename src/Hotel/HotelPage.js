import React, { Component } from 'react';

import image from '../images/main/piscine.jpg';
import FirstLayer from '../Common/FirstLayer';
import RoomsLayer from './RoomsLayer';
import FooterHotel from './FooterHotel';
import ActivitesLayer from './ActivitesLayer';

class HotelPage extends Component {
  render() {
    return(
      <div style={{height:'100%'}}>
        <FirstLayer
          hotel={true} 
          link='/'
          image={image}
        />
        <RoomsLayer />
        <ActivitesLayer />
        <FooterHotel />
      </div>

    );
  }
}

export default HotelPage;
