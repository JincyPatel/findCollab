import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Card, Item, Input, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import  FooterC from "./Footer";
import  Activity from "./Activity";
import  Categories from "./Categories";


export default class Explore extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>

          <Body>
            <Title>Explore</Title>
          </Body>

        </Header>
        <Content searchBar rounded>
        <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Activities" />
          </Item>
          <Text>Featured Categories: </Text>
        <Categories />
          <Text>Recommanded Posts: </Text>
        <Activity />
        <Activity />
        <Activity />
        </Content>
        <FooterC/>
      </Container>
    );
  }
}