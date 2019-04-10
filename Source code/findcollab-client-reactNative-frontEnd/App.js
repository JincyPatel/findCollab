import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, ListItem, Switch, Content, Card, Footer, FooterTab, Item, Input, CardItem, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Tags from "react-native-tags";
import  FooterC from "./src/components/Footer";
import  Activity from "./src/components/Activity";
import  Post from "./src/components/ActivityPosts";
import  HeaderTitle from "./src/components/HeaderTitle";
import  Categories from "./src/components/Categories";
import axios from 'axios';



class Explore extends Component {
  render() {
    return (
      <Container>
         <Header searchBar rounded>
        <HeaderTitle title={"Explore Activities"} />
        </Header>
        <Content searchBar rounded>
        <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Activities" />
          </Item>
          <Text>Featured Categories: </Text>
        <Categories />
          <Text>Recommanded Posts: </Text>
        <Post />
        <Post />
        <Post />
        </Content>
       <Footer>
          <FooterTab>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper" />
              <Text>Activities</Text>
            </Button>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical 
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <Container>
         <Header searchBar rounded>
        <HeaderTitle title={"Detailed"} />
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/715545037325512705/16K2-oZE_bigger.jpg'}} />
                <Body>
                  <Text>Hack the Rice</Text>
                  <Text note>posted on: July 31, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/000/926/thumb/mlh.png'}} style={{height: 200, width: 200, flex: 1}}/>
                <Tags
                    initialTags={["Mobile Development", "React Native", "React", "Machine Learning", "Tensorflow"]}
                    inputStyle={{ backgroundColor: "white" }}
                  />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded success>
                  <Text>Attending</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


class UserProfile extends React.Component {

  state = {
    user : {
            "email": "shashiessp@gmail.com",
            "name": "Shashi Essp",
            "phone": "5122168404",
            "skills": [
                "workout",
                "Music",
                "Fitness"
            ],
            "bio": "Computer Science Graduate Student",
            "profile_image_url": "https://pbs.twimg.com/profile_images/715545037325512705/16K2-oZE_bigger.jpg",
            "points_earned": 200,
            "points_redeemed": 150
        }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/users/1/')
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }


  render() {

    return (
      <Container>
         <Header searchBar rounded>
        <HeaderTitle title={"Profile"} />
        </Header>
        <Content>
          <Thumbnail large source={{uri: this.state.user.profile_image_url}} />
        <Text>{this.state.user.name}</Text>
        <Text>Interests</Text>
        <Tags
                    initialTags={this.state.user.skills}
                    inputStyle={{ backgroundColor: "white" }}
                  />

                  <Text>Points Earned: {this.state.user.points_earned} </Text>
                  <Text>Points Redeemed: {this.state.user.points_redeemed} </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical 
                          onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper"/>
              <Text>Activities</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical
                          onPress={() => this.props.navigation.navigate('Settings')}>

              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


class Settings extends React.Component {

  render() {

    return (
<Container>
         <Header searchBar rounded>
        <HeaderTitle title={"Settings"} />
        </Header>
        
        
        <Content>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="call" />
              </Button>
            </Left>
            <Body>
              <Text>Push Notifications</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="md-help" />
              </Button>
            </Left>
            <Body>
              <Text>Support</Text>
            </Body>
           
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="map" />
              </Button>
            </Left>
            <Body>
              <Text>Location</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="book" />
              </Button>
            </Left>
            <Body>
              <Text>History</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical 
                          onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper"/>
              <Text>Activities</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical 
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical active
                          onPress={() => this.props.navigation.navigate('Settings')}>

              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}




class Home extends Component {

  state = {
    activities:[]
  };

  componentDidMount() {
    axios.get('http://localhost:8000/activities/')
      .then(res => {
        const activities = res.data;
        this.setState({ activities });
      })
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>

        <HeaderTitle title={"Your Activities"} />

        </Header>
        <Content searchBar rounded>

      <FlatList
        horizontal
        data={this.state.activities}
        renderItem={({ item: rowData }) => {
          return (
            <Activity activity={rowData} />
          );
        }}
        keyExtractor={(item, id) => id.toString()}
      />

        </Content>
       <Footer>
          <FooterTab>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon active name="paper" />
              <Text>Activities</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="navigate" />
              <Text>Explore</Text>
            </Button>
            <Button vertical
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical 
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: Home,
    Explore: Explore,
    Profile: UserProfile,
    Settings: Settings,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}