import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Todo = ({ text, completeTodo }) => {
  const iconClose = <Icon name="close" size={25} color="#ffffff" />;
  const iconEdit = <Icon name="edit" size={26} color="#ffffff" />;

  const onCloseTodo = () => {
    completeTodo();
  };

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{text}</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={onCloseTodo}>{iconClose}</TouchableOpacity>
          <TouchableOpacity>{iconEdit}</TouchableOpacity>
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
  complete: {
    backgroundColor: 'orange',
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
