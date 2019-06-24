import React from 'react';
import { SafeAreaView, ScrollView } from 'react-navigation';
import DetailsComponent from '../../components/Detais';

export default class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            details: {},
            categorie: "",
            loading: false
        };

        const details = this.props.navigation.getParam('details');
        const categorie = this.props.navigation.getParam('categorie');
        this.state.details = details;
        this.state.categorie = categorie;
    }

    static navigationOptions = () => {
        return {
            title: 'Detalhes',
        };
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <DetailsComponent state={this.state}></DetailsComponent>
                </ScrollView>
            </SafeAreaView>
        );
    }

}