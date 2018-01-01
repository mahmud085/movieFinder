import React from 'react';
import { StyleSheet, Text, ImageBackground,View} from 'react-native';

import ImageOverlay from './ImageOverlay';
//https://image.tmdb.org/t/p/w640/rfjrAyAueCOwErk67vnkMB0Uxvj.jpg
export default class ImageElement extends React.Component {
  render() {
    const src = 'https://image.tmdb.org/t/p/w640' + this.props.imgsource;
    return (
        <ImageBackground source={{uri: src}} style={styles.image} >
          <ImageOverlay movieId={this.props.movieId}/>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
