import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

const Todo = ({ text, completeTodo, onEditTodo }) => {
  const [edit, setEdit] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');

  const activeEditTodo = () => {
    setEdit(true);
    setTodoTitle(text);
  };
  const endEditTodo = () => {
    setEdit(false);
    onEditTodo(todoTitle);
  };
  const onEditHendler = (text) => {
    console.log(text);
    setTodoTitle(text);
  };

  const iconClose = <Icon name="close" size={25} color="#ffffff" />;
  const iconEdit = <Icon name="edit" size={26} color="#ffffff" />;

  const onCloseTodo = () => {
    completeTodo();
  };

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        {edit ? (
          <TextInput
            style={styles.todoEdit}
            value={todoTitle}
            onBlur={endEditTodo}
            autoFocus
            onChangeText={onEditHendler}
          ></TextInput>
        ) : (
          <Text style={styles.todoText}>{text}</Text>
        )}

        <View style={styles.icons}>
          <TouchableOpacity onPress={onCloseTodo}>{iconClose}</TouchableOpacity>
          <TouchableOpacity onPress={activeEditTodo}>
            {iconEdit}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  todoContainer: {
    backgroundColor: '#6e6c78',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    marginBottom: 20,
  },
  todoText: {
    width: '80%',
    color: '#27263D',
    fontSize: 16,
  },
  todoEdit: {
    width: '80%',
    color: '#27263D',
    fontSize: 16,
    padding: 10,
    outlineStyle: 'none',
  },
  icons: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    padding: 10,
  },
});

export default Todo;
