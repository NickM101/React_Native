import React, { useContext, useRef, useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Center} from '../utils/Center';
import { Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { AuthContext } from '../AuthProvider';
import faker from 'faker';
import { HomeParamList, HomeStackNavProps } from '../utils/HomeParamList';

interface HomeStackProps {

}

const Stack = createStackNavigator<HomeParamList>()

function Feed({navigation}: HomeStackNavProps<'Feed'>){
    return(
        <Center>
            <FlatList 
            style={{ width: '100%'}}
            renderItem={({item}) => {
                return <Button title={item} onPress={() => {
                    navigation.navigate('Product', {
                        name: item
                    })
                }}/>
            }}
            keyExtractor={(product, idx) => product + idx}
            data={Array.from(Array(50), () => faker.commerce.product())}
            />
        </Center>
    )
}

function Product({route, navigation}: HomeStackNavProps<'Product'>){
    return(
        <Center>
            <Text>{route.params.name}</Text>
            <Button title='Edit this product' onPress={() => navigation.navigate('EditProduct', {
                name: route.params.name
            })}/>
        </Center>
    )
}

function apiCall(x: any) {
    return x;
}

function EditProduct({route, navigation}: HomeStackNavProps<'EditProduct'>){
    const [formState] = useState();
    const submit = useRef(() => {});

    submit.current = () => {
        // API CALL WITH NEW FORM STATE
        apiCall(formState)
        navigation.goBack()
    }

    useEffect(() => {
        navigation.setParams({ submit })
    }, [])
    return(
        <Center>
            <Text> editing {route.params.name}</Text>
        </Center>
    )
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    const { logout } = useContext(AuthContext)
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" options={{
                headerRight: () => {
                    return (
                        <TouchableOpacity onPress={() => {
                            logout()
                        }}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    )
                }
            }}
            component={Feed}/>
            <Stack.Screen name='Product' options={({route}) => ({
                headerTitle: `Product: ${route.params.name}`
            })} component={Product} />
            <Stack.Screen 
            name='EditProduct' 
            options={({route}) => ({
                headerRight: () => {
                    return (
                        <TouchableOpacity 
                        style={{paddingRight: 8}}
                        onPress={() => {
                            if(route.params.submit){
                                route.params.submit?.current()
                            }
                        }}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    )
                }
            })}
            component={EditProduct}/>
        </Stack.Navigator>
    );
}