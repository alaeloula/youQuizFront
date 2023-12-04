import { Level } from "./level";
import { Subject } from "./subject";

export interface QuestionRes{
    id?: string,
    numberOfCorrectResponses ?: number | null;
    numberOfResponses ?: number | null;
    questionText ?: string | null;
    type ?: string;
    subject ?: Subject | null;
    level ?: Level | null;
}