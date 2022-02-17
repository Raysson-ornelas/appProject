import React from 'react';
import { Text, View } from 'react-native';
import { css } from '../assets/css/Css';

export default function Page(){
    return(
        <View>
            <Text style={css.textPage}>O nome da empresa é </Text>
        </View>
    );
}