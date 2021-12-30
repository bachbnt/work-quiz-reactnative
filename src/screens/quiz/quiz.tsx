import React, { useState, useEffect } from 'react';
import { Props } from './props';
import styles from './styles';
import useFetchQuiz from '@src/hooks/useFetchQuiz';
import useSubmitQuiz from '@src/hooks/useSubmitQuiz';
import Layout from '@src/components/layout';
import QuizItem from '@src/components/quizItem';
import { FlatList } from 'react-native';
import Button from '@src/components/button';
import { Text } from 'native-base';

const Quiz = (props: Props) => {
  const { data: fetchedData, categoryId } = useFetchQuiz();
  const { submitQuiz } = useSubmitQuiz(categoryId);
  const [submittedData, setSubmittedData] = useState<any[]>([]);
  const [showPoint, setShowPoint] = useState(false);

  useEffect(() => {
    const defaultData = fetchedData.map((element) => {
      return { questionId: element.id, answerId: element.answers[0].id };
    });
    setSubmittedData(defaultData);
  }, [fetchedData]);

  const onSubmit = () => {
    // setShowPoint(true);
    submitQuiz(submittedData);
  };

  const onValueChanged = (questionId: any, answerId: any) => {
    const updatedData = submittedData.map((element) => {
      return element.questionId === questionId
        ? { ...element, answerId }
        : element;
    });
    setSubmittedData(updatedData);
  };

  return (
    <Layout main title={`Khảo Sát ${categoryId === 1 ? 1 : 2}`}>
      <FlatList
        data={fetchedData}
        key="quiz"
        renderItem={({ item }) => (
          <QuizItem
            item={item}
            onValueChanged={onValueChanged}
            showPoint={showPoint}
          />
        )}
      />
      <Button style={styles.submitButton} onPress={onSubmit}>
        <Text>{'Submit'}</Text>
      </Button>
    </Layout>
  );
};

export default Quiz;
