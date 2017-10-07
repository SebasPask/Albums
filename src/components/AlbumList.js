import React, { Component } from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount(){
    axois.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(respose => this.setState({albums: respose.data}));
  }
    render(){
      return(
        <View>
            <Text>Album list !!! :D</Text>
          </View>
        );
      }
}

export default AlbumList;
