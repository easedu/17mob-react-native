import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class ListDetaisCategories extends PureComponent {
    renderDetaisCategories() {
        let items = [];

        if (this.props.state.categorie == 'Races') {

            for (let i = 0; i < this.props.state.races.length; i++) {
                items.push(
                    <Button block style={style.button}
                        onPress={() => this.props.handlerClick(this.props.state.races[i])}
                        key={`round-${this.props.state.races[i].round}`}>
                        <Text>
                            {this.props.state.races[i].Circuit.circuitName}
                        </Text>
                    </Button>
                );
            }
        } else if (this.props.state.categorie == 'Drivers') {
            for (let i = 0; i < this.props.state.drivers.length; i++) {
                items.push(
                    <Button block style={style.button}
                        onPress={() => this.props.handlerClick(this.props.state.drivers[i])}
                        key={`round-${this.props.state.drivers[i].driverId}`}>
                        <Text>
                            {this.props.state.drivers[i].familyName}
                        </Text>
                    </Button>
                );
            }
        }

        return items;
    }

    render() {
        return (
            <View style={style.container}>
                {this.renderDetaisCategories()}
            </View>
        );
    }
}

export default ListDetaisCategories;