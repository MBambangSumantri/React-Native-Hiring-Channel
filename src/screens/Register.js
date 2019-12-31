import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Form, Item, Input} from 'native-base';

class Register extends Component {
  render() {
    return (
      <>
        <Container>
          <Content style={style.content}>
            <Text style={style.textTitle}>Create Your Account</Text>
          </Content>
        </Container>
        <Container style={style.container}>
          <Form>
            <Item style={style.inputStyle} rounded last>
              <Input
                placeholder="Username"
                //   onChangeText={text => setEmail(text)}
                //   value={Email}
              />
            </Item>
            <Item style={style.inputStyle} rounded last>
              <Input
                placeholder="Email"
                //   onChangeText={text => setEmail(text)}
                //   value={Email}
              />
            </Item>
            <Item style={style.inputStyle} rounded last>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                //   onChangeText={text => setPassword(text)}
                //   value={Password}
              />
            </Item>
          </Form>
        </Container>
        <Button
          style={style.buttonSignIn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={style.textButtonSignIn}>Sign Up</Text>
        </Button>
      </>
    );
  }
}

const style = StyleSheet.create({
  content: {
    backgroundColor: '#082026',
    marginBottom: 100,
  },
  container: {
    marginTop: 50,
    paddingTop: -100,
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

export default Register;
