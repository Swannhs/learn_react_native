import {View, Text, Image, StyleSheet, Pressable, Button} from "react-native";
import food1 from '../assets/foods/burger1.png';

const TogoFood = () => {
    return (
        <View style={styles.container}>
            <View style={styles.introContainer}>
                <Text style={styles.title}>Togo Food Order</Text>
                <Pressable>
                    <Text style={styles.viewAll}>View all</Text>
                </Pressable>
            </View>
            <View style={styles.foodContainer}>
                <View style={styles.imagesContainer}>
                    <Image source={food1} style={styles.image}/>
                </View>
                <View style={styles.imageTextContainer}>
                    <View style={{
                        position: 'absolute',
                    }}>
                        <Text style={styles.imageText}>Super Fried</Text>
                        <Text style={styles.imageTextAddress}>215 Rogers Ave Brooklyn</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        borderWidth: 1,
                        borderColor: '#F09819',
                        padding: 5,
                    }}>
                        <Pressable>
                            <Text style={{
                                color: '#fff',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>Let's Order</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
        ;
};

export default TogoFood;

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
    foodContainer: {
        marginTop: 40,
        marginLeft: 5,
        height: 250,
        width: 295,
        borderRadius: 10,
        backgroundColor: '#343A41',
    },
    imagesContainer: {
        position: 'absolute',
        height: '77%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    image: {
        flex: 1,
        height: 150,
        width: 278,
        borderWidth: 2,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
    },
    imageTextContainer: {
        marginTop: '66%',
        paddingLeft: 15,
        paddingRight: 10,
    },
    imageText: {
        marginLeft: 10,
        fontSize: 20,
        color: '#F09819',
        fontWeight: 'bold',
    },
    imageTextAddress: {
        marginLeft: 10,
        color: '#ffffff',
    }
});
