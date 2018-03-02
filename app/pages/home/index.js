import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  static navigationOptions = (
    { navigation }) => {
    const headerRight =
      (
        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate('Lanuch');
            }
          }
        >
          <Text style={styles.right}>菜单</Text>
        </TouchableOpacity>
      );

    return {
      title: '首页',
      headerRight,
    };
  };

  render() {
    return (
      <View style={styles.wrap}>
        <Text>首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  right: {
    color: 'white',
    padding: 10,
    marginTop: 2,
  },
  wrap: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  header: {
    marginBottom: 10,
  },
});

export default Home;
