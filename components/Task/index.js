import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
const Task = (props) => {
    const {index} = props
    const indexText = index < 10 ? `0${index}` : index
    const backGroundType = index % 2 ? styles.odd : styles.even
    return (
        <TouchableOpacity
          onPress={() => props.alert(index)}>
            <View style={styles.item}>
              <View style={[styles.index, backGroundType]}>
                <Text style={styles.textIndex}>{indexText}</Text>
              </View>
              <Text style={styles.todoDetail}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task