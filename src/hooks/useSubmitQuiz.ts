import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from '@src/redux/spinner/spinnerAction';
import { toast } from '@src/utils/toast';
import { quizService } from '@src/services/quizService';
import { Alert, AlertButton } from 'react-native';
import { goBack, navigate } from '@src/routes/navigation';
import { RouteName } from '@src/routes/routeName';

const useSubmitQuiz = (type: number) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const alertButtons = useCallback((): AlertButton[] | undefined => {
    if (type === 1) {
      return [
        {
          text: 'Next',
          onPress: () => {
            goBack();
            navigate(RouteName.QUIZ, { type: 2 });
          }
        }
      ];
    } else if (type === 2) {
      return [
        {
          text: 'OK',
          onPress: () => {
            goBack();
          }
        }
      ];
    }
  }, [type]);

  const submitQuiz = useCallback(
    async (params: string[]) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await quizService.submitQuiz({});
        Alert.alert('50 diem', 'ban lam rat tot', alertButtons());
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
