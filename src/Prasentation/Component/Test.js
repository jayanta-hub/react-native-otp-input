import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './ReactOtpInput/styles';
import ReactOtpInput from '../../Prasentation/Component/ReactOtpInput/ReactOtpInput';
import {scale} from '../../Infrastructure/utils/screenUtility';

const Test = () => {
  const [inputData, setInputData] = useState('');
  return (
    <View style={styles.container}>
      <View style={{marginVertical: scale(20), marginTop: scale(30)}}>
        <Text
          style={{
            fontSize: scale(14),
            fontFamily: 'SourceSansPro-Regular',

            color: '#4D4F5C',
          }}>
          jhghg
        </Text>
        <Text
          style={{
            fontSize: scale(14),
            fontFamily: 'SourceSansPro-Regular',

            color: '#4D4F5C',
          }}>
          jhghg
        </Text>
        <Text
          style={{
            fontSize: scale(14),
            fontFamily: 'SourceSansPro-Regular',

            color: '#4D4F5C',
          }}>
          jhghg
        </Text>
        <Text
          style={{
            fontSize: scale(14),
            fontFamily: 'SourceSansPro-Regular',

            color: '#4D4F5C',
          }}>
          jhghg
        </Text>
        <Text
          style={{
            fontSize: scale(14),
            fontFamily: 'SourceSansPro-Regular',

            color: '#4D4F5C',
          }}>
          jhghg
        </Text>

        <ReactOtpInput onChangeText={setInputData} value={inputData} />
      </View>
    </View>
  );
};

export default Test;
