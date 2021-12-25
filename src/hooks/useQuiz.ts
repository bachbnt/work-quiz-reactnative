import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from '@src/redux/spinner/spinnerAction';
import { toast } from '@src/utils/toast';
import useAuth from './useAuth';
import { quizService } from '@src/services/quizService';

const useQuiz = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const auth = useAuth();

  const getData = useCallback(async () => {
    if (!auth.isSignedIn()) {
      return;
    }

    dispatch({ type: SHOW_SPINNER });
    try {
      const response = await quizService.getQuestions({});
      setData(response);
    } catch (error) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, auth, dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, getData };
};

export default useQuiz;
