import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';

class FooterNavigation extends Component {
  render() {
    return (
      <>
        <Footer>
          <FooterTab style={style.footer}>
            <Button active>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}

const style = StyleSheet.create({
  footer: {
    backgroundColor: '#0F323B',
  },
});

export default FooterNavigation;
