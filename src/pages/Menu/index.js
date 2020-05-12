import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';


export default function Menu () {

    const navigation = useNavigation();

    function navigateToInput() {
        navigation.navigate('Input');
    }

    function navigateToList() {
        navigation.navigate('List');
    }

    return(
         
    <View style={styles.container}> 

    

        <TouchableOpacity 
                    style={styles.submit} 
                    onPress={navigateToInput}>
                        <Text style={styles.textSubmit}> Add new Task </Text>          
        </TouchableOpacity>
        <TouchableOpacity 
                    style={styles.submit} 
                    onPress={navigateToList}>
                        <Text style={styles.textSubmit}> See List </Text>          
        </TouchableOpacity>
        
     
    </View>

    );

}