/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {CrudApp} from './src/presentation/CrudApp';

AppRegistry.registerComponent(appName, () => CrudApp);
