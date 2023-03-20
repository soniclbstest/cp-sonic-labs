import { IsString, Matches, IsNumber, IsNotEmpty } from "class-validator";
import { CurrencyOptions } from "../types/coinpayment.types";

export class CreateCoinPaymentDTO {
    @IsNotEmpty({ message: "please enter currency" })
    currency: CurrencyOptions;

    @IsString()
    @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
        message: 'Please add a valid email',
    })
    email: string

    @IsNotEmpty({ message: "Please enter amount" })
    @IsNumber()
    amount: number
}