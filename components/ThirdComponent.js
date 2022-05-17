import React from "react";
import {View, Text, Button} from 'react-native';
// Importing the custom hook
import useCustomHook from "../useCustomHook";
import styles from '../styles'

function ThirdComponent(props){

	// ClickedButton = resetCounter;
	const clickedButton = useCustomHook(0 , "ThirdComponent");
	
	return (
		
		<View>
			<Text style={styles.FSText}>This is the Third Component</Text>
			<Button title="Click here!" onPress={clickedButton}/>
		</View>
	);
}

export default ThirdComponent;
