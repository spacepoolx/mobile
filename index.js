/* eslint-disable import/prefer-default-export */
/**
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './src/localization/i18n';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
