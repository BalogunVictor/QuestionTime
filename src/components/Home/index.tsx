import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useRegister } from 'src/hooks/hooks';
import { useAuthStore } from 'src/store/store';

export const HomePage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const { data: token, isLoading, isError } = useRegister(email);
  const setToken = useAuthStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If isLoading is true, it means the request is still pending
    if (isLoading) {
      toast.promise(Promise.resolve(), {
        error: 'Error!',
        loading: 'Creating...',
        success: 'Success!',
      });
      return;
    }

    // If isError is true, it means there was an error while fetching the data
    if (isError) {
      toast.error('Error creating token');
      return;
    }

    if (!token) {
      toast.error('Token not received');
      router.push('/error-page');
    } else {
      // If token is available
      setToken(token);
      toast.success('Successful...!');
      router.push('/question');
    }
  };

  return (
    <div className="container mx-auto mt-10 w-1/2">
      <div className="title flex flex-col items-center">
        <h4 className="text-2xl font-bold sm:text-5xl">Welcome!</h4>
        <span className="w-2/3 py-4 text-center text-xl text-gray-500">
          Explore More.
        </span>
      </div>

      <form className="text-xl" onSubmit={handleSubmit}>
        <div className="mt-2">
          <label>Email</label>
          <input
            className="mt-2 block h-8 w-full rounded border-2 border-solid border-black bg-gray-200 pl-2 tracking-widest"
            onChange={handleEmailChange}
            placeholder="example@gmail.com"
            type="text"
            value={email}
          />
        </div>
        <div className="mt-10">
          <button
            className="btn h-12 w-full rounded-full bg-gray-800 p-1 font-bold tracking-wide text-white outline-none"
            type="submit"
          >
            Let&#39;s Go
          </button>
        </div>
      </form>
    </div>
  );
};