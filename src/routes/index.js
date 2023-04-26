import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackRoutes } from './stackRoutes'
import { Favorites } from '../pages/favorites'

import { Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes (){
  return(
    <Tab.Navigator   
      screenOptions={{  
        headerShown: false,  //tirar o nome em cima do App (ex. Home, favoritos etc...).
        tabBarHideOnKeyboard: true,  // quando abrir o teclado (esconde o menu).
        tabBarShowLabel: false, // tirar o nome do menu  em baixo para ficar so os intens.
        tabBarActiveTintColor: "#121212", //quando estiver ativo ficar nessa cor.

        tabBarStyle:{
          backgroundColor: "#fff", 
          borderTopWidth: 0
        }
      }}   
    >  
      <Tab.Screen 
        name="HomeTab" 
        component={StackRoutes} 
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="home" color="#000" size={size}/>
            }
            return <Ionicons name="home-outline" color={color} size={size}/>
          }
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="heart" color="#FF4141" size={size}/>
            }
            return <Ionicons name="heart-outline" color={color} size={size}/>
          }
        }}  
      />
    </Tab.Navigator>
  )
}