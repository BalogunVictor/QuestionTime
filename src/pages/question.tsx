import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Button } from '@ui/buttons';
import { Modal } from '@ui/modal';
import { useRouter } from 'next/router';
import { deleteQuestion, editQuestion } from 'src/helpers/helpers';
import { useFetchQuestions } from 'src/hooks/hooks';
import { Layout } from 'src/layouts';
import { MyFormData } from 'src/models/model';
import { useAuthStore } from 'src/store/store';

const Index = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editingQuestionId, setEditingQuestionId] = useState<any>(null);
  const [existingQuestionData, setExistingQuestionData] =
    useState<MyFormData | null>(null);

  const { token } = useAuthStore((state) => state.auth);
  const {
    data: questionData,
    isLoading,
    isError,
    refetch,
  } = useFetchQuestions(token);

  const handleCloseModal = () => {
    setIsOpen(false);
    setEditingQuestionId(null);
    setExistingQuestionData(null);
    refetch();
  };

  const handleEditQuestion = (questionId: string) => {
    setEditingQuestionId(questionId);
    setIsOpen(true);

    // Retrieve existing question data based on questionId
    const question = questionData?.[questionId]; // Optional chaining here
    setExistingQuestionData(question || null);
  };

  const handleDeleteQuestion = async (questionId: string) => {
    try {
      await deleteQuestion(token, questionId);
      refetch();
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  // Redirect to homepage if no token is available
  useEffect(() => {
    if (!token) {
      router.push('/');
    }
  }, [token]);

  return (
    <Layout>
      <main className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 p-4 sm:px-6 lg:px-8">
        <Modal
          existingQuestionData={existingQuestionData}
          isOpen={isOpen}
          onClose={handleCloseModal}
          questionId={editingQuestionId}
          refetch={refetch}
          setIsOpen={setIsOpen}
          title={editingQuestionId ? 'Edit Question' : 'Add New question'}
          token={token}
        />

        <div className="mb-4 flex justify-end">
          <Button onClick={() => setIsOpen(true)}>Add New question</Button>
        </div>

        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching questions...</div>}
        {questionData ? (
          Object.entries(questionData).map(
            ([questionId, question]: [string, MyFormData]) => {
              return (
                <div
                  className="mx-auto min-w-full rounded-lg bg-white p-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
                  key={questionId}
                >
                  <div className="flex items-center gap-2 text-white">
                    <div className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
                      {question.question}
                    </div>
                  </div>
                  <div className="mt-2 rounded-lg border-2 border-blue-500 p-4 text-sm text-slate-500 dark:text-slate-400">
                    <fieldset className="space-y-4">
                      <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
                        {question.options.map((option, index) => (
                          <p key={index}>{option}</p>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                  <div className="space mt-2 flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
                    <Button onClick={() => handleEditQuestion(questionId)}>
                      Edit
                      <BiEdit className="text-lg" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteQuestion(questionId)}
                      variants="secondary"
                    >
                      Delete
                      <AiFillDelete className="text-lg" />
                    </Button>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <div>No questions available</div>
        )}
      </main>
    </Layout>
  );
};

export default Index;
