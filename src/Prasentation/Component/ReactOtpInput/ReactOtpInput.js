import {
  View,
  Text,
  TextInput,
  ProgressViewIOSComponent,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {
  guidelineBaseWidth,
  scale,
} from '../../../Infrastructure/utils/screenUtility';

const OtpInput = props => {
  const length = 6;
  const TextInputss = [];
  let pin = [];
  const mapRef = [];
  for (let index = 0; index < length; index++) {
    mapRef.push(useRef());
  }
  const TextInputs = () => {
    for (let i = 0; i < length; i++) {
      TextInputss.push(
        <View
          style={{
            borderWidth: scale(0.5),
            borderRadius: scale(2),
            backgroundColor: '#FFFFFF',
            marginHorizontal:
              Platform.isPad || guidelineBaseWidth > 500 ? scale(40) : scale(0),
            marginTop:
              Platform.isPad || guidelineBaseWidth > 500 ? scale(20) : scale(0),
          }}>
          <TextInput
            style={{
              height: scale(40),
              width: scale(40),
              margin: scale(4),
              textAlign: 'center',
              fontSize: scale(22),
              fontWeight: '500',
              color: '#000000',
              borderRadius: scale(6),
              backgroundColor: '#F7FOFF',
              paddingBottom: 0,
              paddingTop: 0,
            }}
            value={pin[i]}
            ref={mapRef[1]}
            kev={1}
            autoCorrect={false}
            autoFocus={i === 0}
            maxLength={1}
            keyboardType="number-pad"
            editable={true}
          />
        </View>,
      );
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: scale(10),
          marginHorizontal: scale(30),
        }}>
        {TextInputss}
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          marginVertical: scale(10),
        }}>
        <TextInputs />
      </View>
    </>
  );
};

export default OtpInput;
