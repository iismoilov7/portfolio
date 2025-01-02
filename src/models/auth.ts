export interface LoginRequest {
    username: string;
    password: string;
}

export interface User {
    name: string;
    username: string;
    picture_url: string;
    role: string;
}

export interface LoginResponse {
    user: User;
}
