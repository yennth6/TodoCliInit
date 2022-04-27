import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonAdd: {
        backgroundColor: '#53a5e6',
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    textInput: {
        backgroundColor: 'white',
        width: '80%',
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: '#53a5e6',
        borderWidth: 2,
        paddingHorizontal: 15
    }
})

export default styles;