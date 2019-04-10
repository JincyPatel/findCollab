import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

 class FooterC extends Component {
    render() {
      const { navigate } = this.props.navigation;
        return (
        <Footer>
          <FooterTab>
            <TouchableOpacity onPress={() => navigate('Home')}>
            <Button vertical >
              <Icon active name="paper" />
              <Text>Activities</Text>
            </Button>
            </TouchableOpacity>
            <Button vertical
            onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
        );
    }
}

export default FooterC;