import { Quiz } from "./quiz";
import { Student } from "./student";

export interface Assignment{
    id?:number,
    dateStart:Date,
    dateEnd: Date,
    score: number,
    test:Quiz,
    student:Student
}