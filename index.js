/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Calculadora from './src/Calculadora';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Calculadora);
