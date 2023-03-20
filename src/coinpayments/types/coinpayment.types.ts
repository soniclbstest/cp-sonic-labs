export enum Status {
    PENDING = "0",
    FUNDSSENT = "1",
    COMPLETED = "100",
    COMPLETED_2 = "2",
    CANCELED = "-1",
}

export enum StatusText {
    PENDING = "PENDING",
    FUNDSSENT = "FUNDSSENT",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED",
}

export enum CurrencyOptions {
    ETH = "ETH",
    BTC = "BTC",
    LTC = "LTC",
    LTCT = "LTCT"
}

export interface CoinpaymentsCredentials {
    key: string;
    secret: string;
}

export interface CoinpaymentsCreateTransactionOpts {
    currency1: string
    currency2: string
    amount: number
    buyer_email: string
    address?: string
    buyer_name?: string
    item_name?: string
    item_number?: string
    invoice?: string
    custom?: string
    ipn_url?: string
    success_url?: string
    cancel_url?: string
}

export interface CoinPaymentCallBackResponse {
    amount1: number
    amount2: number
    buyer_name: string
    currency1: string
    currency2: string
    email: string
    fee: string | number
    ipn_id: string
    ipn_mode: string
    ipn_type: string
    ipn_version: string | number
    merchant: string
    received_amount: string | number
    received_confirms: string | number
    status: string
    status_text: string
    txn_id: string
}