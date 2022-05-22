import {View, Text, Pressable, StyleSheet} from "react-native";

const RestaurantScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello from Restaurant</Text>
            <Pressable onPress={() => {
                navigation.navigate('Home')
            }}>
                <Text>Home</Text>
            </Pressable>
        </View>
    );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
