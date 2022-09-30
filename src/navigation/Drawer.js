import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
//import UnderConstruction from '../screen/UnderConstruction'
import Home from '../screen/Home'
import SignIn from '../screen/SignIn'
import SignUp from '../screen/SignUp'
import Profile from '../screen/Profile'
import Stack from './Stack'

const DrawerNav = createDrawerNavigator()

export default function Drawer() {


    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home} />
            <DrawerNav.Screen name='Cities' component={Stack} />
            <DrawerNav.Screen name='SignIn' component={SignIn} />
            <DrawerNav.Screen name='SignUp' component={SignUp} />
            <DrawerNav.Screen name='Profile' component={Profile} />
            {/* <DrawerNav.Screen name='UnderConstruction' component={UnderConstruction} /> */}
        </DrawerNav.Navigator>
    )
}