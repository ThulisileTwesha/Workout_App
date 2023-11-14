import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/homeScreen';
import CustomPage from './screens/customPage';
import TrainingPage from './screens/trainingPage';
import ReportPage from './screens/reportPage';
import SocialsPage from './screens/socials';
import UserPage from './screens/userPage';



//ScreenNames
const homeName = 'Home';
const customPage = 'Custom';
const trainingPage = 'Training';
const reportPage = 'Report';
const socialsPage = 'Socials';
const userPage = 'User';

const Tab = createBottomTabNavigator();


function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
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
                            iconName = focused ? 'tennisball': 'tennisball-outline'
                        }else if (rn === reportPage){
                          iconName = focused ? 'trending-up-outline': 'trending-up-outline'
                        }else if (rn === socialsPage){
                          iconName = focused ? 'people': 'people-outline'
                        }else if (rn === userPage){
                          iconName = focused ? 'person-circle-outline': 'person-circle-outline'

                        }
                       return <Ionicons name = {iconName} size = {size} color ={color}/>
                    },
                })}>
                    <Tab.Screen name ={homeName} component ={HomeScreen}/>
                    <Tab.Screen name ={customPage} component ={CustomPage}/>
                    <Tab.Screen name ={trainingPage} component ={TrainingPage}/>
                    <Tab.Screen name ={reportPage} component={ReportPage}/>
                    <Tab.Screen name ={socialsPage} component={SocialsPage}/>
                    <Tab.Screen name ={userPage} component={UserPage}/>
                    
            </Tab.Navigator>
        </NavigationContainer>
       
    );
}
export default  MainContainer;

