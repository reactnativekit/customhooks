import React from "react";
import {View, Text, Button} from 'react-native';
// importing the custom hook
import useCustomHook from '../useCustomHook';
import styles from '../styles'

function FirstComponent(){

	// ClickedButton = resetCounter;
	const clickedButton = useCustomHook(0 , "FirstComponent");
	
	return (
		<View>
			<Text style={styles.MText}>CUSTOM HOOKS {'\n'}</Text>
			<Text style={styles.FSText}>This is the First Component</Text>
			<Button title="Click here!" onPress={clickedButton}/>
		</View>
	);
}

export default FirstComponent;
