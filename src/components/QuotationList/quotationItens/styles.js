import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    contextLeft:{
        width: '47.5%',
        alignItems: 'flex-start'
    },
    contextRight:{
        width: '47.5%',
        alignItems: 'flex-end'
    },
    boxLogo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    dayQuotation:{
        fontSize: 16,
        paddingLeft: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    price:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default styles
