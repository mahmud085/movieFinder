import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator, ListView,ScrollView ,TextInput,Dimensions,Image } from 'react-native';
import ImageElement from '../components/ImageElement';


export default class Popular extends React.Component {
  static navigationOptions = {
    tabBarLabel : 'Popular'
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      images: []
    }
  }

  componentDidMount() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=15e642b68f26e9ec302bcdc82db26ec4&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          images: responseJson.results,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let images = this.state.images.map((val,key) => {
        return <View key={key} style={styles.imagewrap}>
                  <ImageElement imgsource={val.poster_path} movieId={val.id}/>
               </View>
    });
     if (this.state.isLoading) {
       return (
         <View style={{flex: 1, paddingTop: 20}}>
           <ActivityIndicator />
         </View>
       );
     }

     return (
       <ScrollView>
         <View style={styles.photogrid}>
           {images}
         </View>
       </ScrollView>
     );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photogrid: {
    flex: 1,
    padding: 2,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 300,
    width: (Dimensions.get('window').width /2 ) - 2
  }
})
