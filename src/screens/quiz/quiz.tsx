import React from 'react';
import { Props } from './props';
import styles from './styles';
import useQuiz from '@src/hooks/useQuiz';
import Layout from '@src/components/layout';
import QuizItem from '@src/components/quizItem';
import { FlatList } from 'react-native';
import Button from '@src/components/button';
import { Text } from 'native-base';

const Quiz = (props: Props) => {
  const { data } = useQuiz();

  return (
    <Layout main title={'Khảo Sát'}>
      <FlatList
        data={data}
        key="quiz"
        renderItem={({ item }) => <QuizItem item={item} />}
      />
      <Button style={styles.submitButton} onPress={() => {}}>
        <Text>{'Submit'}</Text>
      </Button>
    </Layout>
  );
};

export default Quiz;
