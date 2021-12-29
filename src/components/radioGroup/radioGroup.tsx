import React, { useEffect, useState } from 'react';
import { Props } from './props';
import styles from './styles';
import Radio from '../radio/radio';
import { FlatList } from 'react-native';

const RadioGroup = (props: Props) => {
  const {
    mapLabel,
    mapSubLabel,
    mapValue,
    options,
    defaultValue,
    onValueChanged,
    disable,
    showPoint = false,
    ...others
  } = props;

  const [items, setItems] = useState(() =>
    Array.isArray(options) ? options : []
  );

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    async () => {
      if (Array.isArray(options)) {
        setItems(options);
      } else {
        const data = await options();
        setItems(data);
      }
    };
  }, [options]);

  const onSelected = (value: any) => {
    setSelectedValue(value);
    onValueChanged?.(value);
  };

  return (
    <FlatList
      data={items}
      key="radioGroup"
      scrollEnabled={false}
      renderItem={({ item }) => (
        <Radio
          key={mapValue(item)}
          selected={selectedValue === mapValue(item)}
          onPress={() => {
            !disable && onSelected(mapValue(item));
          }}
          label={mapLabel?.(item) || mapValue(item)}
          subLabel={showPoint ? mapSubLabel?.(item) : undefined}
          {...others}
        />
      )}
    />
  );
};

export default RadioGroup;
