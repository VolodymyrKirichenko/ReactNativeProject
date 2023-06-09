import Main from './components/Main';
import FullInfo from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Form from './components/Form';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={ Main }
          options={{
            title: 'Головна',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
            },
            headerTitleStyle: {
            }
          }}
        />
  
        <Stack.Screen
          name="FullInfo"
          component={ FullInfo }
          options={{ title: 'Стаття' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
