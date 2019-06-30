import {StyleSheet} from 'react-native';

const defaultStyles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    fullMarged: {
        flex: 1,
        margin: 5
    },
    translucent: {
        backgroundColor: 'rgba(250, 250, 250, 0.7)'
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    translucentButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    redBar: {
        backgroundColor: '#E53935',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 10,
        borderRadius: 1,
        borderColor: 'black'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    title2: {
        textDecorationLine: 'underline',
        fontSize: 18
    },
    inputContainer: {
        backgroundColor: '#fff5f5',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#aaa',
        paddingHorizontal: 5
    },
    evenSpacing: {
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    horizontalWithSpaces: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    navItems: {
        height: 100,
        justifyContent: 'center',
        marginTop: 2,
        borderTopLeftRadius: 10,
        borderTopEndRadius: 10
    },
    navLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 5
    },
    wrap: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'flex-start'
    },
    form: {
        marginHorizontal: 10,
        backgroundColor: 'rgba(255, 250, 250, 0.9)'
    },
    oneThird: {
        flex: 0.35,
        backgroundColor: 'rgba(120, 100, 100, 0.4)',
    },
    twoThirds: {
        flex: 0.65,
        backgroundColor: 'rgba(229, 57, 53, 0.7)',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'
    },
    topBadge: {
        marginTop: -50,
        backgroundColor: '#E53935',
        borderRadius: 50,
        padding: 10
        // height: 100,
        // width: 100
    }
});

export default defaultStyles;