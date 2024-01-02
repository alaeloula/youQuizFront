import { Quiz } from "./quiz";
import { Student } from "./student";

export interface Assignment{
    id?:number,
    dateStart:Date,
    dateEnd: Date,
    score: number,
    passed:boolean,
    test:Quiz,
    student:Student
}