import React from 'react';
import { StyleSheet,ScrollView, Text, ImageBackground,View,TouchableHighlight ,Modal,Dimensions} from 'react-native';

export default class ImageOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      movieDetails: {}
    };
  }
  getDetails(movieId) {
    return fetch('https://api.themoviedb.org/3/movie/'+ movieId +'?api_key=15e642b68f26e9ec302bcdc82db26ec4&language=en-US')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          modalVisible: true,
          movieDetails: responseJson,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    })
  }
  render() {
    return (
          <View>
            <TouchableHighlight onPress={() => this.getDetails(this.props.movieId)}>
              <View  style={styles.detailsButton}>
                <Text>Show Details</Text>
              </View>
            </TouchableHighlight>
            <Modal visible={this.state.modalVisible} onRequestClose={() => {}}>
              <ScrollView>
                <View style={styles.imagewrap}>
                  <ImageBackground source={{uri: 'https://image.tmdb.org/t/p/w640' + this.state.movieDetails.poster_path}} style={styles.image}>
                    <Text style={styles.text} onPress={() => {this.setModalVisible(false)}}>Close</Text>
                  </ImageBackground>
                </View>
                <Text style={styles.movieTitle}>{this.state.movieDetails.title}</Text>
                <Text>Released Date: {this.state.movieDetails.release_date}</Text>
                <Text>{this.state.movieDetails.overview}</Text>
              </ScrollView>

            </Modal>
          </View>


    );
  }
}
const styles = StyleSheet.create({
  detailsButton: {
    shadowColor: '#000',
    shadowOffset: {width: 0 , height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,

    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  modal: {
    flex: 1,
  },
  movieTitle: {
    fontSize : 20
  },
  imagewrap: {
    flex: 1,
    padding: 2,
    width: '100%',
    height: 500
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-end'
  },
  text: {
    shadowColor: '#000',
    shadowOffset: {width: 0 , height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
  }
});
