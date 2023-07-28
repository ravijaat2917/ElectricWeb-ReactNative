import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';


export default Welcome = ({ navigation }) => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ height: 150, width: 150, marginTop: 100 }} source={require('./../assets/ElectricWebLogo.png')} />
            </View>

            <View style={styles.textCenter}>
                <Text style={styles.Name}>Electric Web</Text>
            </View>
            <View style={styles.textCenter}>
                <Text style={styles.slogan}>EV Charging Simplified</Text>
            </View>


            <View style={{ marginTop: 50, padding: 30, borderRadius: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, color: 'white', backgroundColor: 'green', borderWidth: 2, borderRadius: 10, padding: 10, borderColor: 'green' }}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600, color: 'white', backgroundColor: 'green', borderWidth: 2, borderRadius: 10, padding: 10, borderColor: 'green' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    Name: {
        marginTop: 40, textAlign: 'center', fontSize: 35
    },
    slogan: {
        marginTop: 10, textAlign: 'center', fontSize: 15
    },
    btn: {
        padding: 60,
        margin: 30
    }
})