import { Quiz } from "./quiz";

export interface Assignment{
    id?:number,
    dateStart:Date,
    dateEnd: Date,
    score: number,
    test:Quiz,
    student_id:number
}