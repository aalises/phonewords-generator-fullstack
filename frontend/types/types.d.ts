//API Request and Response parameters

interface PhoneWordRequest {
    number: string;
}

interface PhoneWordResponse {
    success: boolean
    phonewords: string[],
    error: string
}