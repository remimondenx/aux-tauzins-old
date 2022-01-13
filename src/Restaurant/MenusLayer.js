import { Grid, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import img_assiette from '../images/food/assiette_du_terroir_menu1_V4.jpg';
import img_coeurs_canard from '../images/food/coeurs_de_canard_menu1_V5.jpg';
import img_artagnan from '../images/food/coupe_artagnan_menu4.jpg';
import img_foie_gras_chaud from '../images/food/foie_gras_chaud_aux_raisins_menu4.jpg';
import img_magret from '../images/food/magret_de_canard_menu3_V1.jpg';
import img_omelette from '../images/food/omelette_aux_cepes_menu3.jpg';
import img_patisseries from '../images/food/patisseries_maison_menu1_V3.jpg';
import img_tournedos from '../images/food/tournedos_de_boeuf_menu4_V2.jpg';
import RestaurantMenu from './RestaurantMenu';

const styles = {
  root: {
    backgroundColor: '#eceff1',
    padding: '30px',
    textAlign: 'center',
  },
  gridList: {
    justifyContent: 'center',
  },
};

class MenusLayer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Nos menus du moment
        </Typography>
        <Grid className={classes.gridList} container>
          {listMenus.map((it) => (
            <Grid item xs={12} sm={6} lg={3} key={it.content.name}>
              <RestaurantMenu content={it.content} imgs={it.imgs} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

MenusLayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenusLayer);

const moment = {
  name: "Menu de la semaine",
  entree: 'Suggestion de saison',
  entree2: 'Assiette du terroir',
  entree3: 'Omelette aux cèpes (supp. 5€)',
  plat: 'Civet de gibier',
  plat2: 'Entrecôte de boeuf grillée',
  plat3: 'Magret de canard sauce au poivre (supp. 5€)',
  dessert: 'Pâtisserie',
  dessert2: 'Glace',
  dessert3: 'Coupe Melba (supp. 3€)',
  prix: 26
};

const imgs_moment = [
  {
    label: 'magret',
    imgPath: img_magret,
  },
  {
    label: 'assiette_terroir',
    imgPath: img_assiette,
  },
  {
    label: 'omelette aux cèpes',
    imgPath: img_omelette,
  },
  {
    label: 'patisseries',
    imgPath: img_patisseries,
  },
];

// const terroir = {
//   name: 'Menu du terroir',
//   entree: 'Assiette du terroir',
//   entree2: 'Garbure Landaise',
//   plat: 'Civet de gibier maison',
//   plat2: 'Brochette de coeurs de canard grillés',
//   dessert: 'Glace',
//   dessert2: 'Dessert maison',
//   prix: 26,
// };

const gourmand = {
  name: 'Menu du week-end, gourmand',
  entree: 'Omelette aux cèpes',
  plat: 'Magret de canard grillé, sauce au poivre',
  dessert: 'Coupe Melba',
  prix: 37,
};

const gastro = {
  name: 'Menu du week-end, gastronomique',
  entree: 'Salade de gésiers d\'oie',
  plat: 'Foie gras cuit en cocotte aux raisins',
  apresPlat: 'Tournedos de boeuf sauce aux cèpes et légumes de saison',
  dessert: "Coupe d'Artagnan",
  prix: 46,
};
// const imgs_terroir = [
//   {
//     label: 'assiette_terroir',
//     imgPath: img_assiette,
//   },
//   {
//     label: 'coeurs de canard',
//     imgPath: img_coeurs_canard,
//   },
//   {
//     label: 'patisseries',
//     imgPath: img_patisseries,
//   },
// ];

const imgs_gourmand = [
  {
    label: 'omelette aux cèpes',
    imgPath: img_omelette,
  },
  {
    label: 'magret',
    imgPath: img_magret,
  },
];

const imgs_gastro = [
  {
    label: 'foie gras chaud',
    imgPath: img_foie_gras_chaud,
  },
  {
    label: 'tournedos boeuf',
    imgPath: img_tournedos,
  },
  {
    label: "coupe d'artagnan",
    imgPath: img_artagnan,
  },
];

const listMenus = [
  {
    content: moment,
    imgs: imgs_moment
  },
  // {
  //   content: terroir,
  //   imgs: imgs_terroir,
  // },
  {
    content: gourmand,
    imgs: imgs_gourmand,
  },
  {
    content: gastro,
    imgs: imgs_gastro,
  },
];
