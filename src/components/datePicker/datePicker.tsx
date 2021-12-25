import React, { useMemo, useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextField from '@src/components/textField';
import { Props } from './props';
import styles from './styles';

const DatePicker = (props: Props) => {
  const {
    label,
    placeholder,
    value,
    formatter,
    error,
    mode,
    minDate,
    maxDate,
    disabled,
    onChange,
    style
  } = props;

  const [pickerVisible, setPickerVisible] = useState(false);

  const formattedDate = useMemo(() => {
    if (!value) {
      return '';
    }
    return formatter ? formatter(value) : value.toDateString();
  }, [value, formatter]);

  const handleOpenPicker = () => {
    if (disabled) {
      return;
    }
    setPickerVisible(true);
  };

  const handleClosePicker = () => {
    setPickerVisible(false);
  };

  const dateTimePicker = useMemo(() => {
    return (
      <DateTimePicker
        mode={mode}
        value={value || new Date()}
        minimumDate={minDate}
        maximumDate={maxDate}
        onChange={(event, date) => {
          setPickerVisible(Platform.OS === 'ios');
          onChange?.(event, date);
        }}
      />
    );
  }, [mode, value, minDate, maxDate, onChange]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, style]}
      onPress={handleOpenPicker}>
      <TextField
        editable={false}
        disabled
        label={label}
        placeholder={placeholder}
        pointerEvents="none"
        value={formattedDate}
        error={error}
        style={style}
      />
      {Platform.OS === 'ios' ? (
        <Modal
          animationType={'fade'}
          visible={pickerVisible}
          transparent={true}>
          <View style={styles.iosPickerContainer}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.iosPickerOutside}
              onPress={handleClosePicker}
            />
            <View style={styles.iosPickerInside}>{dateTimePicker}</View>
          </View>
        </Modal>
      ) : (
        pickerVisible && dateTimePicker
      )}
    </TouchableOpacity>
  );
};

export default DatePicker;
