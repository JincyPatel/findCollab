import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "https://medicalherald.com/wp-content/uploads/2018/06/fitness-2.jpg",
    title: "Fitness"
  },
  {
    imageUrl: "https://static01.nyt.com/images/2018/08/06/arts/06vaildance-tap/merlin_142036191_113011f4-d961-4ac9-89ca-d7557efbd03a-articleLarge.jpg",
    title: "Dance"
  },
  {
    imageUrl: "https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_645,q_50,w_1024/v1/clients/denver/b90a1c02_3484_4d9f_9547_c5267c2e6e86_4f8ea8b7-b90a-453c-98d6-fd0dc67a4188.jpg",
    title: "Comedy"
  },
  {
    imageUrl: "https://cdn1.medicalnewstoday.com/content/images/articles/321/321093/band-and-crowd-at-concert.jpg",
    title: "Music"
  },
  {
    imageUrl: "https://www.um.edu.mt/think/wp-content/uploads/2016/10/gaming01.jpg",
    title: "Gaming"
  },
  {
    imageUrl: "http://www.arrajol.com/sites/default/files/2018/04/09/223141-sportsrec_signoff_fitness_tracker_activity_tracker-1.jpg",
    title: "Sports"
  }
];

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={null}
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 160, height: 200, borderRadius:12 }}
            >
              <Text style={{ marginBottom: 10 }}>
                {rowData.title}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}