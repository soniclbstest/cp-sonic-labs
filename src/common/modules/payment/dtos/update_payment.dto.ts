import { IsNotEmpty, IsString} from "class-validator";
import { Status } from "../types/payment.types";

export class UpdatePaymentStatusDto{
    @IsString()
    @IsNotEmpty({ message: 'Do not have txn_Id' })
    txn_id:string

    @IsNotEmpty({ message: 'Do not have status' })
    status:Status
}