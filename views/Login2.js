import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text,TextInput, Image,View, Platform } from 'react-native';
import { css } from '../assets/css/Css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login(){
    const [display, setDisplay] = useState('none');
    return(
        <KeyboardAvoidingView
            style={[css.container, css.darkbg]}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <View style={css.loginLogo}>
                <Image source={require('../assets/img/icon.png')}/>
            </View>
            <View>
                <Text style={css.loginMsg(display)}>Usuário ou senha inválidos</Text>
            </View>
            <View style={css.loginForm}>
                <TextInput style={css.loginInput} placeholder='Usuário'/>
                <TextInput style={css.loginInput} placeholder='Senha' secureTextEntry={true}/>
                <View style={css.containerTwoButtons}>
                    <Icon.Button
                        name='login'
                        size={30}
                        backgroundColor= '#3b5998'
                        onPress={() => setDisplay('flex')}
                    >
                        <Text style={css.buttonLogin}>
                            Login
                        </Text>
                    </Icon.Button>
                    <Icon.Button
                        name='account-plus'
                        size={30}
                        backgroundColor= '#3b5998'
                        onPress={() => setDisplay('flex')}
                    >
                        <Text style={css.buttonRegiter}>
                            Cadastre-se
                        </Text>
                    </Icon.Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}