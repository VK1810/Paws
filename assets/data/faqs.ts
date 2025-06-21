export type FAQItem = {
    id: number;
    questiontag: string;
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    { id: 1, questiontag: 'Question 1', question: 'Input Question 1 here?', answer: 'Input Answer 1 here.' },
    { id: 2, questiontag: 'Question 2', question: 'Input Question 2 here?', answer: 'Input Answer 2 here.' },
    { id: 3, questiontag: 'Question 3', question: 'Input Question 3 here?', answer: 'Input Answer 3 here.' },
    { id: 4, questiontag: 'Question 4', question: 'Input Question 4 here?', answer: 'Input Answer 4 here.' },
    { id: 5, questiontag: 'Question 5', question: 'Input Question 5 here?', answer: 'Input Answer 5 here.' },
    { id: 6, questiontag: 'Question 6', question: 'Input Question 6 here?', answer: 'Input Answer 6 here.' },
    { id: 7, questiontag: 'Question 7', question: 'Input Question 7 here?', answer: 'Input Answer 7 here.' },
    { id: 8, questiontag: 'Question 8', question: 'Input Question 8 here?', answer: 'Input Answer 8 here.' },
];

export default faqData;