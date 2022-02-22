import React from 'react';
import { Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { css } from '../assets/css/Css';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Login(){
    return(
        <View style={css.container}>
            <Image
                source={require('../assets/img/meow.png')}
                style={css.logo}
            />

            <TextInput
                placeholder="Celular, username ou email"
                style={css.input}
            />

            <TextInput
                placeholder="Sua Senha"
                style={css.input}
            />

            <View style={css.forgotContainer}>
                <TouchableOpacity>
                    <Text style={css.forgotText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={css.loginButton}>
                <Text style={css.loginText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={css.facebookContainer}>
                <FontAwesome5 name="facebook" size={25} color="#399fff"/>
                <Text style={css.facebookText}>Continue como Raysson</Text>
            </TouchableOpacity>

            <View style={css.divisor}>
                <View style={css.divisorLine}></View>
                <Text style={{marginHorizontal: '3%'}}>OU</Text>
                <View style={css.divisorLine}></View>
            </View>

            <View style={css.signUpContainer}>
                <Text style={css.signUpText}>Não possui conta?</Text>
                <TouchableOpacity>
                    <Text style={css.signUpButton}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}