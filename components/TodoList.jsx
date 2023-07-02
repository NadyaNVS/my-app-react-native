import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // if (!todo.text || /^\s*/.test(todo.text)) {
    //   return;
    // }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  return (
    <View>
      <Text style={styles.title}>What's the Plan fot Today?</Text>
      <TodoForm onSubmitEditing={addTodo} onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default TodoList;
