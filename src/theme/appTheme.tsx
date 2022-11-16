import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    globalScreen: {
        flex: 1,
        marginHorizontal: 30,
    },
    title: {
        fontSize: 30,
        marginBottom: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    btnCheck: {
        width: 28,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: '#5856D6',
    },
    btnNoCheck: {
        width: 28,
        height: 28,
        borderRadius: 7,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderColor: '#5856D6',
    },
    check: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    task: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        alignSelf: 'center',
    },
    btnTask: {
        backgroundColor: '#3DC345',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        alignContent: 'flex-end',
    },
    textBtnTask: {
        color: 'white',
        fontSize: 20,
    },
    topIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        marginHorizontal: 10,
        width: 20,
        height: 20,
    },
    point: {
        position: 'absolute',
        left: 58,
        bottom: -1,
        fontSize: 50,
        color: '#0BAF86',
    },


    input: {
        height: 40,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#BBC2C2',
    },
    iconTime: {
        width: 20,
        height: 20,
    },
    textInput: {
        color: 'black',
        fontWeight: 'bold',
    },
    json: {
        color: 'black',
        fontSize: 15,
    },
});

export default styles;
