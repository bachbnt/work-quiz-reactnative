import React from 'react';
import { Text, View } from 'native-base';
import { Props } from './props';
import styles from './styles';
import RadioGroup from '../radioGroup';

const QuizItem = (props: Props) => {
  const { item, ...others } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.question}</Text>
      <RadioGroup
        key={item.id}
        options={item.answers}
        mapLabel={(i) => i.answer}
        mapValue={(i) => i.id}
        mapSubLabel={(i) => `+${i.point}`}
        defaultValue={item.answers[0].id}
        {...others}
      />
    </View>
  );
};

export default QuizItem;
