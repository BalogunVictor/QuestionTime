import { useQuery } from '@tanstack/react-query';
import { fetchQuestions, RegisterMail } from 'src/helpers/helpers';

export function useRegister(payload: string) {
  return useQuery({
    queryFn: () => RegisterMail(payload),
    queryKey: ['register', payload],
    refetchOnWindowFocus: false,
  });
}

export function useFetchQuestions(payload: any) {
  return useQuery({
    queryFn: () => fetchQuestions(payload),
    queryKey: ['questions', payload],
    refetchOnWindowFocus: false,
  });
}
