import {View, Text, StyleSheet, Pressable} from "react-native";
import Layout from "../components/Layout";
import Dining from "../components/Dining";
import TogoFood from "../components/TogoFood";

const HomeScreen = ({navigation}) => {
    return (
        <Layout>
            <View style={styles.container}>
                <Dining/>
                <TogoFood/>
            </View>
        </Layout>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 7,
        backgroundColor: '#1E1E1E',
    },
});
