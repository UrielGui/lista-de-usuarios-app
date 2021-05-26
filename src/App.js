import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator();

export default props => {
    return (
        <UsersProvider >
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de Usuários',
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('UserForm')}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                ),
                            };
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: 'Formulário de Usuários',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
};

const MyTheme = {
    colors: {
        background: '#F1F1F1',
    },
};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#1E8CF4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
