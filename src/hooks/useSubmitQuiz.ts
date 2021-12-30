import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from '@src/redux/spinner/spinnerAction';
import { toast } from '@src/utils/toast';
import { quizService } from '@src/services/quizService';
import { Alert, AlertButton } from 'react-native';
import { goBack, navigate } from '@src/routes/navigation';
import { RouteName } from '@src/routes/routeName';

const useSubmitQuiz = (categoryId: number) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const alertButtons = useCallback((): AlertButton[] | undefined => {
    if (categoryId === 1) {
      return [
        {
          text: 'Next',
          onPress: () => {
            goBack();
            navigate(RouteName.QUIZ);
          }
        }
      ];
    } else {
      return [
        {
          text: 'OK',
          onPress: () => {
            goBack();
          }
        }
      ];
    }
  }, [categoryId]);

  const submitQuiz = useCallback(
    async (params: any[]) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await quizService.submitQuiz(params);
        if (response.status === 200) {
          Alert.alert(
            `${response.sumPoint} điểm`,
            response.message,
            alertButtons()
          );
        }
      } catch (error: any) {
        toast.error(t(error.message));
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [t, dispatch, alertButtons]
  );

  return { submitQuiz };
};

export default useSubmitQuiz;
