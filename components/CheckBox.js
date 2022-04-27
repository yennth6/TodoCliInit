import React, {useState} from 'react';
import {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {Images, Colors, fontFamily} from '../../../../config';

const Checkbox = ({title, onValueChange, checked}) => {
  const [isChecked, setIsChecked] = useState(checked ? true : false);
  let scaleValue = useRef(new Animated.Value(isChecked ? 1 : 0)).current;
  let fadeInValue = useRef(new Animated.Value(isChecked ? 1 : 0)).current;

  let buttonScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 0.8, 1],
    outputRange: [1, 0.8, 1.1, 1],
  });

  let opacity = fadeInValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fadeAndScale = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: isChecked ? 0 : 1,
        duration: 300,
        easing: Easing.easeInOutBack,
        useNativeDriver: true,
      }),
      Animated.timing(fadeInValue, {
        toValue: isChecked ? 0 : 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsChecked(!isChecked);
    });
  };

  const _onPress = () => {
    fadeAndScale();
    if (typeof onValueChange === 'function') {
      onValueChange(isChecked);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={_onPress}
      style={styles.container}>
      <Text style={styles.titleModal}>{title}</Text>

      <View style={styles.box}>
        <View style={styles.unCheck} />
        <Animated.View
          style={[
            styles.checked,
            {transform: [{scale: buttonScale}], opacity: opacity},
          ]}>
          <Image style={styles.iconCheck} source={Images.ic_check} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    marginRight: 16,
    position: 'relative',
  },
  unCheck: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderColor: '#4F4F4F',
    borderWidth: 1,
  },
  checked: {
    position: 'absolute',
    backgroundColor: 'green',
    borderRadius: 4,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCheck: {
    width: 16.75,
    height: 12.57,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fontFamily.f2,
    fontSize: 15,
    color: '#2D2C31',
  },
  titleModal: {
    fontSize: 35,
    fontFamily: fontFamily.f1,
    alignSelf: 'center',
  },
});

