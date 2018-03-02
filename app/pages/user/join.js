
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';


class Login extends Component {
  static navigationOptions = {
    title: '注册',
  };

  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  state = {
    mobile: '',
    passwd: '',
    code: '',
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onPressButton() {
    const { dispatch, navigation: { navigate } } = this.props;
    const { mobile, passwd, code } = this.state;
  }

  handleGetCode() {
    const { dispatch } = this.props;
    const { mobile } = this.state;
  }

  render() {
    const { codeTime, codeText } = this.props;
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
        <View style={styles.codeWrap}>
          <View style={styles.codeInput}>
            <TextInput
              style={styles.inputCode}
              placeholder="请输入验证码"
              keyboardType="numeric"
              maxLength={6}
              underlineColorAndroid="transparent"
              onChangeText={code => this.setState({ code })}
            />
          </View>
          <TouchableOpacity
            style={codeTime > 0 ? styles.codeBtnDisabled : styles.codeBtn}
            disabled={codeTime > 0}
            onPress={this.handleGetCode.bind(this)}
          >
            <Text style={styles.codeText}>{codeText}</Text>
          </TouchableOpacity>
        </View>
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
          <Text style={styles.buttonText}>立即注册</Text>
        </TouchableOpacity>

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

  mobile: {
    textAlign: 'left',
    height: 54,
    fontSize: 16,
    backgroundColor: '#F6F5F8',
    paddingLeft: 20,
    borderRadius: 4,
    marginTop: 100,
  },
  passwd: {
    textAlign: 'left',
    height: 54,
    fontSize: 16,
    backgroundColor: '#F6F5F8',
    paddingLeft: 20,
    borderRadius: 4,
    marginTop: 20,
  },
  inputCode: {
    textAlign: 'left',
    height: 54,
    fontSize: 16,
    backgroundColor: '#F6F5F8',
    paddingLeft: 20,
    borderRadius: 4,
    marginTop: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
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
  codeWrap: {
    flexDirection: 'row',
  },
  codeInput: {
    flex: 4,

  },
  codeBtn: {
    flex: 2,
    height: 54,
    width: 100,
    backgroundColor: '#FF6561',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  codeBtnDisabled: {
    flex: 2,
    height: 54,
    width: 100,
    backgroundColor: '#ccc',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  codeText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Login;
