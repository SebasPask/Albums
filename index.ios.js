//index IOS

// library
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//crate a component
const App = () => (
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList albumListText={'Albums list cool'}/>
    </View>
  );

// render it
AppRegistry.registerComponent('albums',()=> App);
