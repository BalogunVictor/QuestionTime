export interface MyDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  token: string;
  onClose: () => void;
}

export interface MyFormData {
  question: string;
  options: string[];
}

export interface QuestionData {
  [key: string]: {
    question: string;
    options: string[];
  };
}
