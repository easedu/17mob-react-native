import React from 'react';
import { SafeAreaView } from 'react-navigation';
import ListCategories from '../../components/ListCategories';

export default class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        this.goDetailsCategories = this.goDetailsCategories.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Categorias',
        };
    }

    goDetailsCategories(categorie) {

        const year = this.props.navigation.getParam('year');

        this.props.navigation.navigate('DetailsCategories', {
            year, categorie
        });
    }

    render() {
        return (
            <SafeAreaView>
                <ListCategories handlerClick={this.goDetailsCategories}></ListCategories>
            </SafeAreaView>
        );
    }

}