import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Card, CardItem, Text, Body, Spinner, View } from "native-base";
import Moment from 'react-moment';

export default class SeasonalDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false
    };
  }

  componentDidMount() {
    const seasons = this.props.navigation.getParam('seasons');

    this.getData(seasons);
  }

  static navigationOptions = () => {
    return {
      title: 'Seasonal Details',
    };
  }

  getData(seasons) {
    fetch(`http://ergast.com/api/f1/${seasons}.json`)
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          data: data.MRData.RaceTable.Races,
          loading: true
        })
        // console.log(data.MRData.RaceTable.Races);
      })
  }

  render() {
    console.log(this.state.data);

    let spinner;

    if (!this.state.loading) {
      spinner = <Spinner color='blue' />;
    };

    return (
      <SafeAreaView>
        <View>{spinner}</View>
        <View>
          {this.state.data.map((race, key) => {
            return (
              <Card key={key}>
                <CardItem header bordered>
                  <Text>Round {race.round}</Text>
                </CardItem>
                <CardItem header>
                  <Text>{race.raceName}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      {race.Circuit.circuitName}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Text format="DD/MM/YYYY">{race.date}</Text>
                </CardItem>
              </Card>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}