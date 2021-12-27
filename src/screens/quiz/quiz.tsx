import React, { useState } from 'react';
import { Props } from './props';
import styles from './styles';
import useFetchQuiz from '@src/hooks/useFetchQuiz';
import useSubmitQuiz from '@src/hooks/useSubmitQuiz';
import Layout from '@src/components/layout';
import QuizItem from '@src/components/quizItem';
import { FlatList } from 'react-native';
import Button from '@src/components/button';
import { Text } from 'native-base';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteParams } from '@src/routes/routeParams';
import { RouteName } from '@src/routes/routeName';

const Quiz = (props: Props) => {
  const { params } = useRoute<RouteProp<RouteParams, RouteName.QUIZ>>();
  const { data: quizData } = useFetchQuiz(params.type);
  const { submitQuiz } = useSubmitQuiz(params.type);
  const [data, setData] = useState<any>([]);

  const onSubmit = () => {
    submitQuiz(data);
  };

  const onValueChanged = (value: any) => {
    setData([...data, value]);

    console.log(data);
  };

  return (
    <Layout main title={'Khảo Sát'}>
      <FlatList
        data={quizData}
        key="quiz"
        renderItem={({ item }) => (
          <QuizItem item={item} onValueChanged={onValueChanged} />
        )}
      />
      <Button style={styles.submitButton} onPress={onSubmit}>
        <Text>{'Submit'}</Text>
      </Button>
    </Layout>
  );
};

export default Quiz;
