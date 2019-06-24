import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';


class Detais extends PureComponent {
    renderDetais() {
        let detaisCard;

        if (this.props.state.categorie == 'Races') {
            detaisCard = <Card>
                <CardItem header bordered>
                    <Text>{this.props.state.details.raceName}</Text>
                </CardItem>
                <CardItem header>
                    <Text>Volta {this.props.state.details.round}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            Localidade: {this.props.state.details.Circuit.Location.locality}
                        </Text>
                        <Text>
                            País: {this.props.state.details.Circuit.Location.country}
                        </Text>
                        <Text format="DD/MM/YYYY">{this.props.state.details.date}</Text>
                    </Body>
                </CardItem>
            </Card>
        } else if (this.props.state.categorie == 'Drivers') {
            detaisCard = <Card>
                <CardItem header bordered>
                    <Text>{this.props.state.details.givenName} {this.props.state.details.familyName}</Text>
                </CardItem>
                <CardItem header>
                    <Text>Nacionalidade: {this.props.state.details.nationality}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            Abreviação: {this.props.state.details.code}
                        </Text>
                        <Text format="DD/MM/YYYY">
                            Nascimento: {this.props.state.details.dateOfBirth}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        }

        return detaisCard;
    }

    render() {
        return (
            <View>
                {this.renderDetais()}
            </View>
        );
    }
}

export default Detais;