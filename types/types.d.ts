//API Request and Response parameters

interface PhoneWordRequest {
    number: string;
}

interface PhoneWordResponse {
    success: boolean
    words: string[],
    error: string
}