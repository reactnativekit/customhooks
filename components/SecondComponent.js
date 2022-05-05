import React from "react";
import {View, Text, Button} from 'react-native';
// Importing the custom hook
import useCustomHook from "../useCustomHook";
import styles from '../styles'

function SecondComponent(props){

	// ClickedButton = resetCounter;
	const clickedButton = useCustomHook(0 , "SecondComponent");
	
	return (
		
		<View>
			<Text style={styles.FSText}>This is the Second Component</Text>
			<Button title="Click here!" onPress={clickedButton}/>
		</View>
	);
}

export default SecondComponent;
