import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class ListCategories extends PureComponent {
    render() {
        return (
            <View>
                <Button block style={style.button}
                    onPress={() => this.props.handlerClick('Races')}>
                    <Text>
                        Corridas
                    </Text>
                </Button>
                <Button block style={style.button}
                    onPress={() => this.props.handlerClick('Drivers')}>
                    <Text>
                        Pilotos
                    </Text>
                </Button>
            </View>
        );
    }
}

export default ListCategories;