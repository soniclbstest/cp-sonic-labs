import {  IsNotEmpty } from "class-validator";

export class HandleCoinPaymentDto {
    @IsNotEmpty({ message: 'Please add user' })
    userId: number;

    @IsNotEmpty({ message: 'Please add memberships' })
    membershipId: number

}