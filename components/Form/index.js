import React, {useState, useRef} from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';

import styles from './style';

const Form = (props) => {
	const [todo, setTodo] = useState('')
	const inputText = useRef(null)
	return (
		<View style={styles.formContainer}>
			<TextInput 
				ref={inputText}
				placeholder="Task" 
				style={styles.textInput}
				onChangeText={(text) => setTodo(text)}/>
			<TouchableOpacity 
				style={styles.buttonAdd}
				onPress={() => {
						console.log("Click")
						props.onTodoAdded(todo)
						Keyboard.dismiss()
						inputText.current.clear()
					}
				}
				>
				<Text style={styles.plusText}>+</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Form