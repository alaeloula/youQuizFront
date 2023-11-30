
export interface QuestionReq{
    code?: string,
    nbrAnswers ?: number | null;
    rightAnswers ?: number | null;
    maxScore ?: number | null;
    text ?: string;
    subject ?: string | null;
    level ?: string | null;
}