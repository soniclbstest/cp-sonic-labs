import {  IsNotEmpty } from "class-validator";

export class HandleCoinPaymentDto {
    @IsNotEmpty({ message: 'Please add user' })
    userId: string;

    @IsNotEmpty({ message: 'Please add memberships' })
    membershipId: string

}