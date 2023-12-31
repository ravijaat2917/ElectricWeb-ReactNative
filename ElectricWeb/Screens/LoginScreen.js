import { View, Image, Text, TextInput, ScrollView, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {

    const baseURL = "http://localhost:8080";

    const [phoneNumber, setPhoneNumber] = useState(0);
    const [password, setPassword] = useState(0);
    const [showSubmitButton, setShowSubmitButton] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (phoneNumber.length === 10 && password.length >= 4) {
            setShowSubmitButton(false);
        }
        if (isChecked === true) {
            setShowSubmitButton(false);
        } else {
            setShowSubmitButton(true);
        }
    }, [phoneNumber, password, isChecked]);

    const handleLogin = async () => {
        const res = await axios.post('https://electricwebapis.onrender.com/api/v1/login',
            {
                phone: phoneNumber,
                password: password
            });
        await console.log(await res.data.message);
        Alert.alert(res.data.message);

        // if (res.data.success === true) {
        //     Alert.alert('Login Successfull');
        // } else {
        //     Alert.alert(res.data.message);
        // }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                    <Image style={{ height: 150, width: 150, marginTop: 100 }} source={require('./../assets/ElectricWebLogo.png')} />
                </View>

                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: 'black'
                        }}>
                            Hi Welcome Back ! 👋
                        </Text>
                    </View>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 10,
                        padding: 10,
                    }}>
                        <TextInput
                            placeholder='+91'
                            defaultValue='+91'
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                height: "100%"
                            }}
                        />
                        <TextInput
                            style={{ fontSize: 15, width: '80%' }}
                            placeholder='Enter Mobile Number'
                            // textAlign='center'
                            inputMode='numeric'
                            keyboardAppearance='default'
                            maxLength={10}
                            onChangeText={(text) => { setPhoneNumber(text) }}
                        />
                    </View>
                    <View style={{ borderColor: 'black', borderWidth: 2, borderRadius: 10, padding: 8, marginTop: 30, marginBottom: 20 }}>
                        <TextInput
                            style={{ fontSize: 15 }}
                            secureTextEntry={true}
                            keyboardAppearance='default'
                            placeholder='Enter Password'
                            textAlign='center'
                            onChangeText={(text) => { setPassword(text) }}
                        />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginVertical: 10
                    }}>
                        <Checkbox
                            style={{ marginRight: 10 }}
                            value={isChecked}
                            onValueChange={setIsChecked}
                        />
                        <Text>I aggree to the terms and conditions</Text>
                    </View>

                    <View >
                        <Button
                            title='Submit'
                            color="green"
                            disabled={showSubmitButton}
                            onPress={() => handleLogin()}
                        />
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen