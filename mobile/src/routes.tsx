import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';

import OrphanagesMap from './screens/OrphanagesMap';
import OrphanageDetails from './screens/OrphanageDetails';

import SelectMapPosition from './screens/CreateOrphanage/SelectMapPosition';
import OrphanageData from './screens/CreateOrphanage/OrphanageData';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() { 
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'} }}>
                <Screen
                 name="OrphanagesMap"
                 component={OrphanagesMap}
                />

                <Screen
                 name="OrphanageDetails"
                 component={OrphanageDetails}
                 options={{
                     headerShown: true,
                     header: () => <Header showCancel={false} title="Orfanato" />
                 }}
                />

                <Screen
                 name="SelectMapPosition"
                 component={SelectMapPosition}
                 options={{
                    headerShown: true,
                    header: () => <Header title="Selecione no mapa" />
                }}
                />

                <Screen
                 name="OrphanageData"
                 component={OrphanageData}
                 options={{
                    headerShown: true,
                    header: () => <Header title="Informe os dados" />
                }}
                />
            </Navigator>
        </NavigationContainer>
    );
}