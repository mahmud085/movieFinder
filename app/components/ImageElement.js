import React from 'react';
import { StyleSheet, Text, Image,View} from 'react-native';
//https://image.tmdb.org/t/p/w640/rfjrAyAueCOwErk67vnkMB0Uxvj.jpg
export default class ImageElement extends React.Component {
  render() {
    const src = 'https://image.tmdb.org/t/p/w640' + this.props.imgsource;
    return (
      <View>
        <Image source={{uri: src}} style={styles.image}/>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: 'stretch'
  },
});
