import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

class Launch extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.router();
  }

  componentWillUnmount() {

  }

  async router() {
    const reset = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.dispatch(reset);
    }, 1000);
  }

  render() {
    return (
      <Image style={{ flex: 1, width: null, height: null }} />
    );
  }
}


export default Launch;
