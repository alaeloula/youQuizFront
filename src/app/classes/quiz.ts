import { Trainer } from "./trainer";

export interface Quiz {
    id?: number,
    successScore: number,
    canViewAnswers: boolean,
    canSeeResult: boolean,
    numberOfChances:number,
    remarks: string,
    instructions: string,
    trainer_matricule: number,
    trainer?: Trainer
}