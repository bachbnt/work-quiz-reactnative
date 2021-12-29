import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { HIDE_SPINNER, SHOW_SPINNER } from '@src/redux/spinner/spinnerAction';
import { toast } from '@src/utils/toast';
import useAuth from './useAuth';
import { quizService } from '@src/services/quizService';

const useFetchQuiz = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);
  const [categoryId, setCategoryId] = useState(1);
  const auth = useAuth();

  const getData = useCallback(async () => {
    if (!auth.isSignedIn()) {
      return;
    }

    dispatch({ type: SHOW_SPINNER });
    try {
      const response = await quizService.fetchQuiz({});
      if (response.status === 200) {
        setData(response.data);
        setCategoryId(response.categoryId);
      }
      console.log(response.data);
    } catch (error: any) {
      toast.error(t(error.message));
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [t, auth, dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, categoryId, getData };
};

export default useFetchQuiz;
