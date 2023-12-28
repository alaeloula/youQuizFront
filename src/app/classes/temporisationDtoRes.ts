import { QuestionRes } from "./QuestionRes";
import { Quiz } from "./quiz";

export interface TemporisationDtoRes
{
    id:number,
    time:number,
    test:Quiz,
    question:QuestionRes
}