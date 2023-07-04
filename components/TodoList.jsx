import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (completeId) => () => {
    console.log('click', completeId);
    setTodos(todos.filter((todo) => todo.id !== completeId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's the Plan fot Today?</Text>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <View key={index}>
          <Todo {...todo} completeTodo={completeTodo(todo.id)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#7aa899',
  },
  title: {
    color: '#3b3a3d',
    fontSize: 26,
    fontWeight: 700,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default TodoList;
