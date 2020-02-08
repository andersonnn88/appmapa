import { createAppContainer } from  'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main  from './pages/Main';
import Profile from './pages/Profile';
import Onibus from './pages/Onibus';
import Imc from './pages/Imc';
import Extras from './pages/Extras';
import Desconto from './pages/Desconto';
import MeusLocais from './pages/MeusLocais'
import Mapalocais from './pages/Mapalocais'

const Routes = createAppContainer(
    createStackNavigator({
        Main :{
            screen: Main,
            navigationOptions: {
                title   : 'Calculos basicos',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Passagem'
            },
        },
        Desconto: {
            screen: Desconto,
            navigationOptions:{
                title: 'Desconto'
            },
        },
        Imc: {
            screen: Imc,
            navigationOptions:{
                title: 'Imc'
            },
        },
        Extras: {
            screen: Extras,
            navigationOptions:{
                title: 'Horas Extras'
            },
        },
        Onibus: {
            screen: Onibus,
            navigationOptions:{
                title: 'Onibus'
            },
        },
        MeusLocais: {
            screen: MeusLocais,
            navigationOptions:{
                title: 'Meus Locais'
            },
        },
        Mapalocais: {
            screen: Mapalocais,
            navigationOptions:{
                title: 'Mapa'
            },
        },
    },{
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#7D40E7'
            },
        }
    })
)

export default Routes;