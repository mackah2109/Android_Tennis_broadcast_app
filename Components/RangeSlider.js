import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider} from '@react-native-assets/slider';

const RangeSlider = ({min, max, step, value, onValueChange}) => {
  return (
    <View>
      <Slider
        range={value}
        minimumValue={min}
        maximumValue={max}
        step={step}
        thumbImage={require('../Assets/thumb1.png')}
        onValueChange={onValueChange}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
      />
    </View>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: 'white',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#EBEBEB'
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor:'white'
  },
});
