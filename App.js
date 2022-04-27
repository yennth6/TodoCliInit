import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Task from './components/Task'
import Form from './components/Form';
import Group from './components/Group';

export default function App() {
  const [todoList, setTodoList] = useState([])

  const onTodoAdded = (todo) => {
    console.log("onTodoAdded", todo)
    setTodoList([...todoList, {id: todoList.length + 1, title: todo}])
  }

  // useEffect(()=> {
  //   console.log(todoList)
  // }, [todoList])
  const alert = (index) => {
    Alert.alert(
      "Alert",
      "Do you really want to delete this task?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => {
            console.log("Alert", index)

            console.log("OK Pressed")
            let list = [...todoList]
            list.splice(index-1, 1)
            setTodoList(list)
          } 
        }
      ]
    );
  }
  const renderItem =({item}) => {
    return (
      <Task 
        alert={alert}
        title={item.title} 
        index={item.id}/>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Todo List</Text>
        </View>
        <FlatList style={styles.listTodo}
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}>
        
        </FlatList>
        {/* <Group/> */}
        <View style={styles.formAdd}>
          <Form onTodoAdded={onTodoAdded}></Form>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff'
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40
  },
  title: {
    // marginTop: 20
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#52b5f7'
  },
  listTodo: {
    marginTop: 20
  },
  formAdd: {
    marginVertical: 10
  }
});
