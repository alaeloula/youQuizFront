import { QuestionRes } from "./QuestionRes"
import { Answer } from "./answer"

export interface validation{
    "id"?:number
    "point"?:number,
    "response_id": number,
    "question_id":number,
    "question"?:QuestionRes,
    "response"?:Answer,
}