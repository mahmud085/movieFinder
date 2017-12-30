import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TextInput,Dimensions} from 'react-native';
import ImageElement from './app/components/ImageElement';

export default class App extends React.Component {
  state = {
    images: [
      {title: 'one',img: require('./app/img/img1.jpg')},
      {title: 'two',img: require('./app/img/img2.jpg')},
      {title: 'three',img: require('./app/img/img3.jpg')},
      {title: 'four',img: require('./app/img/img4.jpg')},
      {title: 'five',img: require('./app/img/img5.jpeg')},
      {title: 'six',img: require('./app/img/img6.jpg')},
      {title: 'seven',img: require('./app/img/img7.jpg')},
      {title: 'eight',img: require('./app/img/img8.jpg')},
      {title: 'nine',img: require('./app/img/img9.jpg')},
      {title: 'ten',img: require('./app/img/img10.jpg')},
      {title: 'eleven',img: require('./app/img/img11.jpg')},
      {title: 'twelve',img: require('./app/img/img12.jpg')},
      {title: 'thirteen',img: require('./app/img/img13.jpg')},
      {title: 'fourteen',img: require('./app/img/img14.jpg')},
      {title: 'fifteen',img: require('./app/img/img15.jpg')},
    ],
    imagesReference: [],
    text: ''
  }
  componentDidMount() {
    this.setState({
      imagesReference: this.state.images
    })
  }
  search(text) {
    this.setState({
      text: text
    });
    let imgArr = this.state.images;
    for(var i = 0; i < imgArr.length; i++) {
      if(text === imgArr[i].title) {
        this.setState({images: [imgArr[i]]});
      }
    }
    if(!text) {
      this.setState({images: this.state.imagesReference});
    }
  }
  render() {
    let images = this.state.images.map((val,key) => {
        return <View key={key} style={styles.imagewrap}>
                  <ImageElement imgsource={val.img}/>
               </View>
    })
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} underlineColorAndroid='transparent' placeholder='Serach Movie'
          onChangeText={(text) => this.search(text)} value={this.state.text}/>
        <ScrollView>
          <View style={styles.photogrid}>
            {images}
          </View>
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  textinput: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#fff'
  },
  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2 ) - 2
  }
});
