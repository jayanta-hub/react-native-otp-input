import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './ReactOtpInput/styles';
import ReactOtpInput from '../../Prasentation/Component/ReactOtpInput/ReactOtpInput';
import {scale} from '../../Infrastructure/utils/screenUtility';

const Test = () => {
  const [inputData, setInputData] = useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: scale(20),
          marginTop: scale(50),
          justifyContent: 'center',
          //   alignItems: 'center',
          flexDirection: 'column',
        }}>
        <ReactOtpInput />
        <TouchableOpacity
          style={{
            marginLeft: scale(5),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(5),
            backgroundColor: '#00A8DB',
            // borderWidth: 2,
            height: scale(40),
            width: scale(100),
          }}
          disabled={false}>
          <Text
            style={{
              fontSize: scale(18),
              fontFamily: 'SourceSansPro-SemiBold',
              color: '#ffff',
            }}>
            save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Test;
