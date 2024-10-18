export interface UserI {
    email: string;
    password: string;
    role: "admin" | "user";
    token: string;
}