import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AsyncStorage, ActivityIndicator } from 'react-native'
import { Center } from '../utils/Center'
import { AuthContext } from '../AuthProvider'
import { AppTabs } from './AppTabs'
import { AuthStack } from './AuthStack'

interface RoutesProps { }





export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { user, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user').then(userString => {
      if (userString) {
        login()
      }
      setLoading(false)

      console.log(userString)
    })
      .catch(err => { setLoading(false), console.log(err) })
  }, [])

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? (<AppTabs />) :
        <AuthStack />
      }
    </NavigationContainer>
  )
}
