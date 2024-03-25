import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchQuestions, RegisterMail } from 'src/helpers/helpers';
import { MyFormData, QuestionData } from 'src/models/model';

export function useRegister(payload: string) {
  return useQuery({
    queryFn: () => RegisterMail(payload),
    queryKey: ['register', payload],
    refetchOnWindowFocus: false,
  });
}

export function useFetchQuestions(
  payload: any
): UseQueryResult<QuestionData, Error> {
  return useQuery({
    queryFn: () => fetchQuestions(payload),
    queryKey: ['questions', payload],
    refetchOnWindowFocus: false,
  });
}
