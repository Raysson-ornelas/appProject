import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    darkbg:{
        backgroundColor: '#080607'
    },
    loginMsg:(text)=>({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 5,
        marginBottom: 15,
        display: text
    }),
    loginInput:{
        backgroundColor: '#fff',
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    loginLogo:{
        marginBottom: 10,
    },
    loginForm:{
        width: '80%',
    },
    buttonLogin:{
        fontSize: 20,
        color:'white',
        paddingRight: 10,
    },
    buttonRegiter:{
        fontSize: 20,
        color:'white',
        paddingRight: 10,
    }
});
export {css};
