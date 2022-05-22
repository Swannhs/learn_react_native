import {View, Text, Image, StyleSheet, Pressable, SafeAreaView, ScrollView} from "react-native";
import dining1 from "../assets/dining/dining1.png";

const Dining = () => {
    return (<View style={styles.container}>
        <View style={styles.introContainer}>
            <Text style={styles.title}>Our Private Dining</Text>
            <Pressable>
                <Text style={styles.viewAll}>View all</Text>
            </Pressable>
        </View>
        <View style={styles.imagesContainer}>
            <Image style={styles.image} source={dining1}/>
            <View style={styles.imageTextContainer}>
                <View style={styles.imageTextBackground}>
                    <Text style={styles.imageTextHeading}>Room 24K</Text>
                    <Text style={styles.imageText}>10 Herkimer Street, Brooklyn, NY, USA</Text>
                </View>
            </View>
        </View>
    </View>);
};

export default Dining;

const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    introContainer: {
        flex: 0.06,
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        position: 'absolute',
        fontSize: 25,
        color: '#FFFFFF',
        alignItems: 'flex-start'
    },
    viewAll: {
        marginTop: 8,
        position: 'absolute',
        alignSelf: 'flex-end',
        fontSize: 18,
        fontWeight: "bold",
        color: '#F09819',
    },
    imagesContainer: {
        flex: 1,
        marginTop: 20,
        marginLeft: 4,
        marginRight: 4,
        height: 265,
        width: 200,
        borderRadius: 10,
    },
    image: {
        height: 265,
        width: 200,
        borderRadius: 10,
        borderColor: '#F09819',
        borderWidth: 2,
        overflow: 'hidden',
    },
    imageTextContainer: {
        position: 'absolute',
        width: 200,
        height: 265,
        borderWidth: 2,
        borderColor: '#F09819',
    },
    imageTextBackground: {
        marginTop: '90%',
        flex: 1,
        backgroundColor: 'rgba(58,57,57,0.51)',
    },
    imageTextHeading: {
        color: '#F09819',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageText: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
    },
});
