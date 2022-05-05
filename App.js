import React from 'react';
import {View} from 'react-native';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import styles from './styles';

function App(){
	return(
		<View style={styles.container}>
		<FirstComponent />
		<SecondComponent />
		</View>
	);
}
	
export default App;