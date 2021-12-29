import React from 'react';
import { Text, View } from 'native-base';
import { Props } from './props';
import styles from './styles';
import RadioGroup from '../radioGroup';

const QuizItem = (props: Props) => {
  const { item, onValueChanged, ...others } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.content}</Text>
      <RadioGroup
        key={item.id}
        options={item.answers}
        mapLabel={(i) => i.content}
        mapValue={(i) => i.id}
        mapSubLabel={(i) => `+${i.point}`}
        defaultValue={item.answers[0].id}
        onValueChanged={(value) => onValueChanged?.(item.id, value)}
        {...others}
      />
    </View>
  );
};

export default QuizItem;
