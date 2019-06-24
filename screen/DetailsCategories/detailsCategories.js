import React from 'react';
import { SafeAreaView, ScrollView } from 'react-navigation';
import ListDetaisCategories from '../../components/ListDetaisCategories';
import { Spinner, View } from "native-base";

export default class DetailsCategories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            races: [],
            drivers: [],
            categorie: "",
            loading: false
        };

        this.getRaces = this.getRaces.bind(this);
        this.getDrivers = this.getDrivers.bind(this);
        this.goDetails = this.goDetails.bind(this);

    }

    static navigationOptions = () => {
        return {
            title: 'Detalhes da Categoria',
        };
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');
        const categorie = this.props.navigation.getParam('categorie');
        this.state.categorie = categorie;

        if (categorie == 'Races') {
            this.getRaces(year);
        } else if (categorie == 'Drivers') {
            this.getDrivers(year);
        }
    }

    getRaces(year) {
        fetch(`http://ergast.com/api/f1/${year}.json`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    races: data.MRData.RaceTable.Races,
                    loading: true
                });
            })
    }

    getDrivers(year) {
        fetch(`http://ergast.com/api/f1/${year}/drivers.json`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    drivers: data.MRData.DriverTable.Drivers,
                    loading: true
                });
            })
    }

    goDetails(details) {

        const categorie = this.props.navigation.getParam('categorie');

        this.props.navigation.navigate('Details', {
            details, categorie
        });
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='blue' />;
        };

        return (
            <SafeAreaView>
                <View>{spinner}</View>
                <ScrollView>
                    <ListDetaisCategories state={this.state} handlerClick={this.goDetails}></ListDetaisCategories>
                </ScrollView>
            </SafeAreaView>
        );
    }

}