import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class ListCategories extends PureComponent {
    renderListCategories() {
        let categories = <View>
            {this.props.races.map((races, key) => {
                return (
                    <Button block key={key} style={style.button}>
                        <Text>
                            {races.Circuit.circuitName}
                        </Text>
                    </Button>
                );
            })}
        </View>;

        return categories;
    }

    render() {
        return (
            <View>
                {this.renderListCategories()}
            </View>
        );
    }
}

export default ListCategories;