
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    title: '登录',
  };

  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  state = {
    mobile: '',
    passwd: '',
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onPressButton() {
    const { dispatch, navigation: { navigate } } = this.props;
    const { mobile, passwd } = this.state;
  }

  toJoin() {
    const { navigation: { navigate } } = this.props;
    navigate('Join');
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.mobile}
          placeholder="请输入手机号"
          maxLength={11}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={mobile => this.setState({ mobile })}
        />
        <TextInput
          style={styles.passwd}
          placeholder="请输入密码"
          keyboardType="default"
          secureTextEntry
          underlineColorAndroid="transparent"
          onChangeText={passwd => this.setState({ passwd })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressButton}
        >
          <Text style={styles.buttonText}>登录</Text>
        </TouchableOpacity>
        <View style={styles.foot}>
          <View style={styles.registWrap}>
            <TouchableOpacity onPress={this.toJoin.bind(this)}>
              <Text style={styles.regist}>立即注册</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity >
              <Text style={styles.resetPassword}>忘记密码?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
    paddingTop: 10,
  },
  inputTips: {
    padding: 20,
    textAlign: 'center',
    color: '#969696',
    fontSize: 16,
  },
  mobile: {
    textAlign: 'left',
    height: 54,
    fontSize: 16,
    backgroundColor: '#F6F5F8',
    paddingLeft: 15,
    borderColor: '#ddd',
    marginTop: 100,
  },
  passwd: {
    textAlign: 'left',
    height: 54,
    fontSize: 16,
    backgroundColor: '#F6F5F8',
    paddingLeft: 15,
    borderColor: '#ddd',
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#FF6561',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  foot: {
    marginTop: 20,
    flexDirection: 'row',
  },
  regist: {
    color: '#FF6561',
    fontSize: 14,
    height: 30,

  },
  registWrap: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  resetPassword: {
    color: '#666',
    fontSize: 14,
    height: 40,
  },
});

export default Login;
