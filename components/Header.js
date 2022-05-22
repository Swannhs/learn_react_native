import {View, Text, Image, StyleSheet} from "react-native";
import leftLogo from '../assets/logo/leftLogo.png';
import rightLogo from '../assets/logo/rightLogo.png';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftLogoContainer}>
                <Image source={leftLogo} resizeMode='cover' style={styles.leftLogo}/>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Say Hello to 👋</Text>
                <Text style={styles.headerIntro}>The 24K Brand</Text>
                <Text style={styles.headerDescription}>The future of the food Experience</Text>
            </View>
            <View style={styles.rightLogoContainer}>
                <Image source={rightLogo} resizeMode='cover' style={styles.rightLogo}/>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E2630',
        height: 100,
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    leftLogoContainer: {
        position: 'absolute',
        top: 60,
        left: 15
    },
    leftLogo: {
        width: 50,
        height: 50,
    },
    rightLogoContainer: {
        position: 'absolute',
        alignItems: 'flex-end',
        top: 60,
        right: 15
    },
    rightLogo: {
        width: 50,
        height: 50,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    headerIntro: {
        color: '#F09819',
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'center',
    },
    headerDescription: {
        color: '#ACACAC',
        fontSize: 12,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

