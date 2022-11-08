import {View, Text, TextInput, ProgressViewIOSComponent} from 'react-native';
import React from 'react';
import styles from './styles';

const ReactOtpInput = props => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          {/* <Text>ReactOtpInput</Text> */}
          <TextInput
            name="userID"
            // placeholder="Enter"
            placeholderTextColor="#4D4F5C"
            value={props.value}
            onBlur={props.onBlur ? props.onBlur : null}
            onChangeText={props.onChangeText}
            style={props.style ? props.style : styles.TextInput}
          />
          <TextInput
            name="userID"
            // placeholder="Enter"
            placeholderTextColor="#4D4F5C"
            value={props.value}
            onBlur={props.onBlur ? props.onBlur : null}
            onChangeText={props.onChangeText}
            style={props.style ? props.style : styles.TextInput}
          />
          <TextInput
            name="userID"
            // placeholder="Enter"
            placeholderTextColor="#4D4F5C"
            value={props.value}
            onBlur={props.onBlur ? props.onBlur : null}
            onChangeText={props.onChangeText}
            style={props.style ? props.style : styles.TextInput}
          />
        </View>
      </View>
    </>
  );
};

export default ReactOtpInput;
