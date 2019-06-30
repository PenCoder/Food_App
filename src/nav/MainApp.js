import React from 'react';
import {} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator} from 'react-navigation';
import { Icon, Image } from 'react-native-elements';
import {CardItem, Text, View} from 'native-base';

import Home from '../views/HomeView';
import LocationView from '../views/LocationView';
import FutureScholar_Form from '../forms/FutureScholar_Form';
import defaultStyles from '../styles/DefaultStyles';

import PersonalPension_Form from '../forms/PersonalPension_Form';
import RoyalFuneral_Form from '../forms/RoyalFuneral_Form'
import ExecutivePension_Form from '../forms/ExecutivePension_Form';
import LoginView from '../views/LoginView';

const HomeNav = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: 
            <CardItem>
                <Image 
                    source={require('../media/donewell-life-logo.jpg')}
                    style={{width: 50, height: 50}}
                />
                <View>
                    <Text style={{color: '#B71C1C', fontSize: 28}}>DONEWELL</Text>
                    <Text>LIFE</Text>
                </View>
            </CardItem>,
            // tabBarIcon: (({tintColor, focused, horizontal}) => {
            //     return <Icon name='home' color={tintColor}/>
            // })
        }
    },
    FutureScholar: {
        screen: FutureScholar_Form,
        navigationOptions: {
            headerTitle: 'FUTURE SCHOLAR',
            headerTintColor: '#E53935'
        }
    },
    PersonlPension: {
        screen: PersonalPension_Form,
        navigationOptions: {
            headerTitle: 'PERSONAL PENSION',
            headerTintColor: '#E53935'
        }
    },
    RoyalFuneral: {
        screen: RoyalFuneral_Form,
        navigationOptions: {
            headerTitle: 'ROYAL FUNERAL',
            headerTintColor: '#E53935'
        }
    },
    ExecutivePension: {
        screen: ExecutivePension_Form,
        navigationOptions: {
            headerTitle: 'ROYAL FUNERAL',
            headerTintColor: '#E53935'
        }
    }
},
{
    initialRouteName: 'Home',
    tabBarOptions: {
        labelStyle: { fontSize: 18 }
    }   
});

const MainNav = createSwitchNavigator({
    Login: {
        screen: LoginView
    },
    HomeNav: HomeNav
},
{
    initialRouteName: 'Login'
}
)

export default MainApp = createAppContainer(MainNav);