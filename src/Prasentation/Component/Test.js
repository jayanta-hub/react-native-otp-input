import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './ReactOtpInput/styles';
import ReactOtpInput from '../../Prasentation/Component/ReactOtpInput/ReactOtpInput';
import {scale} from '../../Infrastructure/utils/screenUtility';

const Test = () => {
  const OnSubmit = () => {
    console.log('parent');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: scale(20),
          marginTop: scale(50),
          justifyContent: 'center',
        }}>
        <Text>skhdbsbdkab</Text>
        <ReactOtpInput
          pinCount={5} //Number of digits in the component
          secureTextEntry={false} //Hide contents of text fields
          onSubmit={OnSubmit}
          autoSubmit={true} // Call a function after fill all field
        />
        <Text>skhdbsbdkab</Text>
      </View>
    </View>
  );
};

export default Test;
