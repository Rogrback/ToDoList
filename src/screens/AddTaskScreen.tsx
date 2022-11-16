/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import useForm from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

const AddTaskScreen = ({ navigation }: Props) => {

  const { form, onChange } = useForm({
    title: '',
    deadline: '',
    startTime: '',
    endTime: '',
    remind: '',
    repeat: '',
  });

  return (
    <View style={styles.globalScreen}>
      <View style={{ flex: 6 }}>
        <View>
          <Text style={styles.textInput}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Design team meeting"
            onChangeText={(value) => onChange(value, 'title')}
          />
        </View>
        <View>
          <Text style={styles.textInput}>Deadline</Text>
          <TextInput
            style={styles.input}
            placeholder="2021-02-28"
            onChangeText={(value) => onChange(value, 'deadline')}
          />

        </View>
        <View style={{
          flexDirection: 'row',
        }}
        >
          <Text style={{ ...styles.textInput, flex: 1 }} >Start time</Text>
          <Text style={{ ...styles.textInput, flex: 1, marginLeft: 20 }}>End time</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <TextInput
            style={{ ...styles.input, flex: 1, marginRight: 10 }}
            placeholder="11:00 Am                ⏱️"
            onChangeText={(value) => onChange(value, 'startTime')}
          />
          <TextInput
            style={{ ...styles.input, flex: 1, marginLeft: 10 }}
            placeholder="14:00 Pm                ⏱️"
            onChangeText={(value) => onChange(value, 'endTime')}
          />
        </View>
        <View>
          <Text style={styles.textInput}>Remind</Text>
          <TextInput
            style={styles.input}
            placeholder="10 minutes early"
            onChangeText={(value) => onChange(value, 'remind')}
          />
        </View>
        <View>
          <Text style={styles.textInput}>Repeat</Text>
          <TextInput
            style={styles.input}
            placeholder="Weekly"
            onChangeText={(value) => onChange(value, 'repeat')}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ListTasksScreen', form.title)}
          style={styles.btnTask}
        >
          <Text style={styles.textBtnTask}>Create a task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;
