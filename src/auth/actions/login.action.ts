import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (email: string, password: string): Promise<AuthResponse> => {

    try {

        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password,
        })
        console.log(data);
        // Return the API response data so the caller (LoginPage) can access the token and other metadata
        return data;



    } catch (error) {
        console.error(error);
        throw error;
    }

}