import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SearchParamList } from '../utils/SearchParam';
import { Center } from '../utils/Center';
import { Text, Button, FlatList } from 'react-native';
import faker from 'faker';
import { SearchStackNavProps } from '../utils/SearchParam'

interface SearchStackProps {

}

const Stack = createStackNavigator<SearchParamList>();

function Search({navigation}: SearchStackNavProps<'Search'>) {
    return (
        <Center>
            <Button title='Search Products' onPress={() => {
                
            }}/>
            <Text>Searches</Text>
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

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search}/>
        </Stack.Navigator>
    );
}