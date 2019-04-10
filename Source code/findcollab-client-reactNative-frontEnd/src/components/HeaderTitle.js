import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

 class HeaderTitle extends Component {
    render() {
        return (
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        );
    }
}

export default HeaderTitle;