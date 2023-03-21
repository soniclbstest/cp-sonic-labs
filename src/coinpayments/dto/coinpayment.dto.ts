import { IsString, Matches, IsNumber, IsNotEmpty, IsBoolean } from "class-validator";
import { CurrencyOptions } from "../types/coinpayment.types";
import { User } from "src/common/modules/user/entity/user.entity";
import { Membership } from "src/common/modules/membership/entity/membership.entity";
import { PaymentMethod, PaymentType } from "src/common/modules/payment/types/payment.types";

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

    //additional details
    @IsNotEmpty({ message: 'Please add user' })
    userId: number;

    @IsNotEmpty({ message: 'Please add memberships' })
    membershipId: number

}