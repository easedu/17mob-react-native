import React from 'react';
import Seasons from '../../components/Seasons';
import { SafeAreaView, ScrollView } from 'react-navigation';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  static navigationOptions = () => {
    return {
      title: 'Home',
    };
  }

  getData(year) {
    this.props.navigation.navigate('Categories', {
      year
    });
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Seasons handlerClick={this.getData}></Seasons>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
