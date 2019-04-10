import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

 class Activity extends Component {
    render() {
        return (
          <Card style={{ borderRadius: 12 }}>
            <CardItem header bordered style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
              <Left>
                <Thumbnail source={{uri: this.props.activity.activity.created_by.profile_image_url}} />
                <Body>
                  <Text>{this.props.activity.activity.title}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody bordered bordered style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
              <Image source={{uri: 'https://www.theboxmag.com/.image/t_share/MTQ2NTk1ODA0MTUxOTQ5MTc1/173-barbell.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem footer bordered style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Points: {this.props.activity.points }</Text>
                </Button>
              </Left>
              <Right>
                <Text>Date: {this.props.activity.created }</Text>
              </Right>
            </CardItem>
          </Card>
        );
    }
}

export default Activity;