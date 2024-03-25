import React, { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import { addQuestion } from 'src/helpers/helpers';
import { MyDialogProps, MyFormData } from 'src/models/model';

import { Button } from '..';

export function Modal({
  isOpen,
  setIsOpen,
  title,
  token,
  onClose,
}: MyDialogProps) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '', '']);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // filter non-empty options to the options array
    const nonEmptyOptions = options.filter((option) => option.trim() !== '');

    if (nonEmptyOptions.length < 3 || nonEmptyOptions.length > 5) {
      toast.error('Minimum of 3 Options');
      return;
    }

    const formData: MyFormData = {
      options: nonEmptyOptions,
      question,
    };
    addQuestion(token, formData);
    setIsOpen(false);
  }

  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog
        onClose={() => {
          setIsOpen(false);
          onClose();
        }}
        open={isOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Dialog.Panel className="relative w-full max-w-md transform space-y-6 overflow-hidden rounded bg-gray-100 p-8 text-left align-middle shadow-xl transition-all md:p-10">
              <Dialog.Title className="text-sm font-semibold text-gray-700">
                {title}
              </Dialog.Title>

              <form onSubmit={handleSubmit}>
                <div className="relative mt-6">
                  <input
                    className="peer mt-1 w-full border-b-2 border-gray-300 bg-transparent px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    name="text"
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Question"
                    type="text"
                    value={question}
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                    Question
                  </label>
                </div>
                {options.map((option, index) => (
                  <div className="relative mt-6" key={index}>
                    <input
                      className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      name={`option${index + 1}`}
                      onChange={(e) =>
                        setOptions((prevOptions) =>
                          prevOptions.map((prevOption, i) =>
                            i === index ? e.target.value : prevOption
                          )
                        )
                      }
                      placeholder="Option"
                      type="text"
                      value={option}
                    />
                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                      Option
                    </label>
                  </div>
                ))}
                <div className="my-6 flex justify-center gap-4">
                  <Button type="submit">Submit</Button>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      onClose(); // Call the onClose function passed as a prop
                    }}
                    variants="secondary"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
