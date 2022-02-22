import { StyleSheet, Platform } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHome:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    containerTwoButtons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonHome:{
        fontSize: 25,
        color:'white',
        paddingRight: 20
    },
    loginMsg:(text)=>({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 5,
        marginBottom: 15,
        display: text
    }),
    logo:{
        marginBottom: Platform.OS === 'android' ? '5%' : '8%',
    },
    input:{
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#E0E0E0',
        backgroundColor: '#F4F3F3',
    },
    forgotContainer:{
        width: '90%',
        alignItems: 'flex-end'
    },
    forgotText:{
        color: '#399fff',
    },
    loginButton:{
        marginTop: '5%',
        backgroundColor:'#399fff',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    loginText:{
        color: '#FFF',
        fontSize: 17,
    },
    facebookContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15%'
    },
    facebookText:{
        color: '#399fff',
        paddingLeft: 8,
        fontSize: 15,
    },
    divisor:{
        marginTop: '10%',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divisorLine:{
        width: '45%',
        height: 2,
        backgroundColor:'#EFEDED',
        borderRadius: 5,
    },
    signUpContainer:{
        flexDirection: 'row',
        marginTop: '10%',
    },
    signUpText:{
        color: '#C4C4C4',
        paddingRight: 5,
    },
    signUpButton:{
        color: '#399fff',
        fontWeight: 'bold',
    }
});
export {css};
