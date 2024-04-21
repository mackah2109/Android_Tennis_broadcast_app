import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RangeSlider } from '@react-native-assets/slider';

const DualRangeSlider = () => {
  const [value, setValue] = useState([0, 100]);

  return (
    <View>
      <RangeSlider
        range={value}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumRange={1}
        thumbImage={require('../Assets/thumb1.png')}
        onValueChange={(value) => setValue(value)}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
      />
    </View>
  );
};

export default DualRangeSlider;

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