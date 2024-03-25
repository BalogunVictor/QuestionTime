import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchQuestions } from 'src/helpers/helpers';
import { QuestionData } from 'src/models/model';

export function useFetchQuestions(
  payload: any
): UseQueryResult<QuestionData, Error> {
  return useQuery({
    queryFn: () => fetchQuestions(payload),
    queryKey: ['questions', payload],
    refetchOnWindowFocus: false,
  });
}
