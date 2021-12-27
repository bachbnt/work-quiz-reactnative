class QuizService {
  async fetchQuiz(request: any): Promise<any> {
    return [
      {
        id: 'q1',
        question: 'hello',
        answers: [
          { id: 'q1a1', answer: 'ok', point: 1 },
          { id: 'q1a2', answer: 'ok', point: 2 },
          { id: 'q1a3', answer: 'ok', point: 3 },
          { id: 'q1a4', answer: 'ok', point: 4 },
          { id: 'q1a5', answer: 'ok', point: 5 }
        ]
      },
      {
        id: 'q2',
        question: 'hello',
        answers: [
          { id: 'q2a1', answer: 'ok', point: 1 },
          { id: 'q2a2', answer: 'ok', point: 2 },
          { id: 'q2a3', answer: 'ok', point: 3 },
          { id: 'q2a4', answer: 'ok', point: 4 },
          { id: 'q2a5', answer: 'ok', point: 5 }
        ]
      },
      {
        id: 'q3',
        question: 'hello',
        answers: [
          { id: 'q3a1', answer: 'ok', point: 1 },
          { id: 'q3a2', answer: 'ok', point: 2 },
          { id: 'q3a3', answer: 'ok', point: 3 },
          { id: 'q3a4', answer: 'ok', point: 4 },
          { id: 'q3a5', answer: 'ok', point: 5 }
        ]
      }
    ];
  }

  async submitQuiz(request: any): Promise<any> {}
}

export const quizService = new QuizService();
