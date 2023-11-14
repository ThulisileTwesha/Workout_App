import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/homeScreen';
import CustomPage from './screens/customPage';
import TrainingPage from './screens/trainingPage';
import { Colors } from 'react-native/Libraries/NewAppScreen';


//ScreenNames
const homeName = 'Home';
const customPage = 'Custom';
const trainingPage = 'Training';
const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.navigator
                initialRouteName = {homeName}
                screenOptions = {({route}) =>({
                    tabBarIcon: ({focused, color, size})=>{
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName){
                            iconName = focused ? 'home': 'home-outline'

                        }else if (rn === customPage){
                            iconName = focused ? 'list': 'list-outline'

                        }else if (rn ===trainingPage){
                            iconName = focused ? 'training': 'training-outline'
                        }
                       return <Ionicons name = {iconName} size = {size} Color ={black}/>
                    },
                })}>
                    <Tab.screen name ={homeName} component ={HomeScreen}/>
            </Tab.navigator>
        </NavigationContainer>
       
    );
}

