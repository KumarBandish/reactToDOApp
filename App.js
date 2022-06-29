import React, {useState} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Task from './Components/Task';

const App = () => {
  const [task, setTask] = useState();

  const [taskItem, setTaskItem] = useState([]); //to store all task

  const handleAddTask = () => {
    Keyboard.dismiss(); // if tap on add button then dismiss the keboard , if it's appearing
    setTaskItem([...taskItem, task]); //take previous array of tasks and append new task
    setTask(null);
  };

  const completeTask = index => {
    let itemCopy = [...taskItem];
    itemCopy.splice(index, 1); //Removes elements from an array and,if necessary, inserts new elements in their place, returning the deleted elements
    setTaskItem(itemCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Todays's tasks</Text>
        <View style={styles.items}>
          {/* task will go here */}
          {taskItem.map(function (value, index) {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={value} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* write a   task */}
      {/*  */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskwrapper}>
        {/* Input of new task */}
        <TextInput
          style={styles.input}
          placeholder={'write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        {/* Add button */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },

  writeTaskwrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderRadius: 60,
    borderWidth: 1,
    marginLeft: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
