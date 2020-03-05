import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList, AuthNavProps } from '../utils/AuthParamList';
import { AuthContext } from '../AuthProvider';
import { Center } from '../utils/Center';
import { Text, Button } from 'react-native';

interface AuthStackProps {

}

const Stack = createStackNavigator<AuthParamList>()

function Login({ navigation }: AuthNavProps<'Register'>) {


    const { login } = useContext(AuthContext)
    return (
        <Center>
            <Text>Login Screen</Text>
            <Button title="login me in" onPress={() => {
                login()
            }} />
            <Button title="go to register" onPress={() => {
                navigation.navigate('Register')
            }} />
        </Center>
    )
}

function Register({ navigation }: AuthNavProps<'Register'>) {
    return (
        <Center>
            <Text>Register Screen</Text>
            <Button title="go to login" onPress={() => {
                navigation.navigate('Login')
            }} />
        </Center>
    )
}

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null
            }}
            initialRouteName='Login'>
            <Stack.Screen
                name="Login"
                component={Login} />
            <Stack.Screen
                name="Register"
                options={{
                    headerTitle: 'Sign Up'
                }}
                component={Register} />
        </Stack.Navigator>
    );
}