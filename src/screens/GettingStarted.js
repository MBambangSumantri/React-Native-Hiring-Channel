import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Content, Text, Button, View} from 'native-base';

class GettingStarted extends Component {
  render() {
    return (
      <>
        <Container style={style.container}>
          <Content style={style.content}>
            <Image
              style={style.image}
              source={require('../Images/GettingStarted.png')}
            />
            <Text style={style.textTitle}>
              Hire expert freelancers for any job, online
            </Text>
            <Text style={style.textBottomTitle}>
              Millions of small businesses use Freelancer to turn their ideas
              into reality.
            </Text>
            <View style={style.view}>
              <Button
                style={style.buttonSignUp}
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={style.textButtonSignUp}>Sign Up</Text>
              </Button>
              <Button
                style={style.buttonSignIn}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={style.textButtonSignIn}>Sign In</Text>
              </Button>
            </View>
          </Content>
        </Container>
        <Text style={style.textBottomContent}>HIRING CHANNEL APP</Text>
      </>
    );
  }
}

const style = StyleSheet.create({
  content: {
    marginTop: 30,
  },
  container: {
    backgroundColor: '#082026',
    marginBottom: 70,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: '#ffffff',
    marginTop: 43,
    textAlign: 'center',
  },
  textBottomTitle: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: '#ffffff',
    marginTop: 10,
    textAlign: 'center',
  },
  textButtonSignUp: {
    fontSize: 30,
  },
  textButtonSignIn: {
    color: '#0f323B',
    fontSize: 30,
  },
  view: {
    marginTop: 70,
  },
  image: {
    width: 359,
    height: 266,
    marginLeft: 10,
  },
  buttonSignUp: {
    backgroundColor: '#0F323B',
    marginBottom: 20,
    marginLeft: 70,
    width: 232,
    height: 66,
    paddingLeft: 40,
    borderRadius: 50,
  },
  buttonSignIn: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    marginLeft: 70,
    width: 232,
    height: 66,
    paddingLeft: 50,
    borderRadius: 50,
  },
  textBottomContent: {
    fontFamily: 'Roboto',
    fontSize: 17,
    marginTop: -45,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default GettingStarted;
