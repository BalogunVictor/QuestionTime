import axios from 'axios';
import { useRouter } from 'next/router';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// register User and get token
export async function RegisterMail(payload: string) {
  try {
    const response = await axios.post('/token', { email: payload });
    const token = response.data.token;
    return token;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Network error');
  }
}

// fetch questions
export async function fetchQuestions(payload: string) {
  try {
    const token = JSON.parse(payload);
    const response = await axios.get('/questions', {
      headers: {
        Token: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Network error');
  }
}
