import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
// import Axios from 'axios';
// import {BASE_URL} from 'react-native-dotenv';

// import {BASE_URL} from 'react-native-dotenv';
import {
  Container,
  Content,
  Text,
  View,
  Button,
  Form,
  Item,
  Input,
  Header,
} from 'native-base';

class Login extends Component {
  render() {
    return (
      <>
        <Header style={style.container}>
          <Content>
            <Image
              style={style.image}
              source={require('../Images/Login.png')}
            />
            <Text style={style.textTitle}>Sign in to your account</Text>
          </Content>
        </Header>
        <Container>
          <Form>
            <Item style={style.inputStyle} rounded last>
              <Input
                placeholder="Email"
                // onChangeText={text => setEmail(text)}
                // value={Email}
              />
            </Item>
            <Item style={style.inputStyle} rounded last>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                // onChangeText={text => setPassword(text)}
                // value={Password}
              />
            </Item>
            <View style={style.view}>
              <Button
                style={style.buttonSignIn}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={style.textButtonSignIn}>Sign In</Text>
              </Button>
            </View>
          </Form>
        </Container>
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#082026',
    marginBottom: 400,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    marginTop: 43,
    textAlign: 'center',
  },
  textButtonSignIn: {
    color: '#ffffff',
    fontSize: 30,
  },
  inputStyle: {
    marginVertical: 10,
  },
  image: {
    width: 359,
    height: 266,
    marginLeft: 10,
    marginTop: 60,
  },
  buttonSignIn: {
    backgroundColor: '#082026',
    marginTop: 56.5,
    marginBottom: 55,
    marginLeft: 70,
    width: 232,
    height: 66,
    paddingLeft: 50,
    borderRadius: 50,
  },
});

export default Login;
