import React from 'react';
import { SafeAreaView } from 'react-navigation';
import ListCategories from '../../components/ListCategories';
import ListDrivers from '../../components/ListDrivers';
import { Spinner, View } from "native-base";

export default class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            races: [],
            drivers: [],
            loading: false
        };
    }

    static navigationOptions = () => {
        return {
            title: 'Categorias',
        };
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');

        this.getInfoF1ByYear(year);
    }

    getInfoF1ByYear(year) {
        let urls = [
            `http://ergast.com/api/f1/${year}.json`,
            `http://ergast.com/api/f1/${year}/drivers.json`
        ]

        Promise.all(urls.map(url => fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then(data => {
                this.setState({
                    races: data[0].MRData.RaceTable.Races,
                    drivers: data[1].MRData.DriverTable.Drivers,
                    loading: true
                })
            })
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='blue' />;
        };

        return (
            <SafeAreaView>
                <View>{spinner}</View>
                {/* <ListCategories races={this.state.races}></ListCategories> */}
                <ListDrivers drivers={this.state.drivers}></ListDrivers>
            </SafeAreaView>
        );
    }

}