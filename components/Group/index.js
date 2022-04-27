import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import React from 'react'
import Checkbox from '../CheckBox';
const Group = () => {
	return (
			<View style={styles.container}>
					<View style={styles.top}>
						<Text style={styles.textTopLeft}>Left</Text>
						<View style={styles.topRight}>
							<View style={styles.checkboxContainer}>
								{/* <CheckBox
									disabled={false}
								/> */}
								<Text style={styles.checkboxLabel}>Label 1</Text>
							</View>
							<View style={styles.checkboxContainer}>
								{/* <CheckBox></CheckBox> */}
								<Text style={styles.checkboxLabel}>Label 2</Text>
							</View>
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button}>
								<Text style={styles.buttonText}>HII</Text>
						</TouchableOpacity>
					</View>
			</View>
	)
}

const styles = StyleSheet.create({
    container : {
			flex: 1,
    },
    top: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: "space-evenly",
			alignItems: 'center'
    },
		topRight: {

		},
		checkboxContainer: {
			flexDirection: 'row',
			alignItems: 'center'
		},
		checkboxLabel: {
			fontSize: 20
		},
		textTopLeft: {
			fontSize: 20,
		},
		textTopRight: {
			fontSize: 20
		},
    button: {
			backgroundColor: 'red',
			borderRadius: 5,
			padding: 10,
			elevation: 10
    },
		buttonText: {
			color: 'white',
			fontSize: 20,
			fontWeight: 'bold',
		},
		buttonContainer: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
		}
})

export default Group