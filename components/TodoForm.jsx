import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TodoForm = (props) => {
  const [input, setInput] = useState('');
  const { handleSubmit } = useForm();
  const onTextChange = (e) => {
    setInput(e.target.value);
  };
  const onHendleSubmit = () => {
    props.onSubmitEditing({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    // alert('submit');
    setInput('');
  };
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Add a todo"
        value={input}
        onChange={onTextChange}
        onSubmitEditing={handleSubmit(onHendleSubmit)}
      />
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={handleSubmit(onHendleSubmit)}
      >
        <Text style={styles.buttonText}>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
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

export default TodoForm;
