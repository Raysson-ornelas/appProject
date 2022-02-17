import React from 'react';
import { Text, View } from 'react-native';
import { css } from '../assets/css/Css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({ navigation }){
    return(
        <View style={css.containerHome}>
            <Icon.Button
                name='login'
                size={40}
                backgroundColor= '#3b5998'
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={css.buttonHome}>
                    Login
                </Text>
            </Icon.Button>
            <Icon.Button
                size={40}
                backgroundColor= '#3b5998'
                name='package-variant'
                onPress={() => navigation.navigate('Rastreio')}
            >
                <Text style={css.buttonHome}>
                    Rastreio
                </Text>
            </Icon.Button>
        </View>
    );
}