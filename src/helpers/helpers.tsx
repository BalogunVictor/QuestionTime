import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { MyFormData, QuestionData } from 'src/models/model';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// register User and get token
export async function RegisterMail(payload: string) {
  try {
    const { data } = await axios.post('/token', { email: payload });
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Network error');
  }
}

// fetch questions
export async function fetchQuestions(payload: string) {
  try {
    const { data } = await axios.get('/questions', {
      headers: {
        token: payload,
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw new Error('Failed to fetch questions');
  }
}

// add New question
export async function addQuestion(
  token: string,
  formData: MyFormData,
  refetch: () => void
) {
  try {
    const { data } = await axios.post('/questions', formData, {
      headers: { token },
    });
    refetch();
    return data;
  } catch (error) {
    console.error('Error adding question:', error);
    throw new Error('Failed to add question');
  }
}

// delete question
export async function deleteQuestion(token: string, payload: string) {
  try {
    const { data } = await axios.delete(`/questions/${payload}`, {
      headers: { token },
    });
    fetchQuestions(token);
    return data;
  } catch (error) {
    console.error('Error adding question:', error);
    throw new Error('Failed to add question');
  }
}

// delete question
export async function editQuestion(
  token: string,
  payload: string,
  formData: MyFormData,
  refetch: () => void
) {
  try {
    const { data } = await axios.put(`/questions/${payload}`, formData, {
      headers: { token },
    });
    refetch();
    return data;
  } catch (error) {
    console.error('Error edit question:', error);
    throw new Error('Failed to edit question');
  }
}
