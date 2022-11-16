/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useState } from 'react';

interface Props extends StackScreenProps<RootStackParams, 'AddTaskScreen'> { }

const ListTasksScreen = ({ route, navigation }: Props) => {

    const [CompletedTask, setCompletedTask] = useState<string>('Design team meeting');
    const [pendingTask, setPendingTask] = useState({
        firstLine: 'Making Wireframes',
        secondLine: 'Create UI elements',
        thirdLine: 'Meeting with Human Khvadaze',
    });

    const params = route.params;

    // const title = JSON.stringify(form, null, 2)

    // const title = params.title

    const pendinToCompleteTask = () => {
        setCompletedTask(pendingTask.thirdLine);
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.topIcons}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/3681/3681128.png',
                        }}
                        style={styles.icon}
                    />
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/3602/3602145.png',
                        }}
                        style={styles.icon}
                    />
                    <Text style={styles.point}>.</Text>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/2976/2976215.png',
                        }}
                        style={styles.icon}
                    />
                </View>
            ),
        });
    },);


    return (
        <View style={styles.globalScreen}>
            <View style={{ flex: 6 }}>
                <Text style={styles.title}>Completed Tasks</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={{
                            ...styles.btnCheck,
                            backgroundColor: '#5856D6',
                        }}
                    >
                        <Text style={styles.check}>✓</Text>
                    </TouchableOpacity>
                    <Text style={styles.task}>{CompletedTask}</Text>
                </View>
                {/* {
                    pendinToCompleteTask()
                    ?
                    ()
                } */}
                <Text style={styles.title}>Pending Tasks</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={{
                            ...styles.btnCheck,
                            backgroundColor: '#5856D6',
                        }}
                        onPress={pendinToCompleteTask}
                    >
                        <Text style={styles.check}>✓</Text>
                    </TouchableOpacity>
                    <Text style={styles.task}>{pendingTask.firstLine}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={{
                            ...styles.btnCheck,
                            backgroundColor: '#5856D6',
                        }}
                        onPress={pendinToCompleteTask}
                    >
                        <Text style={styles.check}>✓</Text>
                    </TouchableOpacity>
                    <Text style={styles.task}>{pendingTask.secondLine}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btnCheck} >
                        <Text style={styles.check}>✓</Text>
                    </TouchableOpacity>
                    <Text style={styles.task}>{pendingTask.thirdLine}</Text>
                </View>
                {params
                    ?
                    (<View style={styles.row}>
                        <TouchableOpacity
                            style={styles.btnNoCheck}
                            onPress={pendinToCompleteTask}
                        />
                        <Text style={styles.task}>{params}</Text>
                    </View>)
                    : ''
                }
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddTaskScreen')}
                    style={styles.btnTask}
                >
                    <Text style={styles.textBtnTask}>Add a task</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ListTasksScreen;
