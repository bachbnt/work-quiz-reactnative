import { Endpoint } from '@src/configs/endpoint';
import { apiClient } from './apiClient';

class QuizService {
  async fetchQuiz(request: any): Promise<any> {
    const result = await apiClient.get(Endpoint.QUESTION, request);
    const response = result.data;
    return response;
  }

  async submitQuiz(request: any): Promise<any> {
    const result = await apiClient.post(Endpoint.ANSWER, request);
    const response = result.data;
    return response;
  }
}

export const quizService = new QuizService();
