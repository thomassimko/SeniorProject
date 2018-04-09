export interface IUserRegistration {
    firstName?: string;
    lastName?: string;
    gender?: "male" | "female";
    address?: string;
    state?: string;
    zip?: number;
    phoneNumber?: string;
    email?: string;
    birthDate?: Date;
    emergencyContact?: {
        name: string;
        phone: string;
    };
    ccsNumber?: number;
    signedIn?: boolean;
}
