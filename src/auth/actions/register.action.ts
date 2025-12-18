import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {

    try {

        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            email,
            password,
            fullName
        })
        // console.log(data);
        // Return the API response data so the caller (LoginPage) can access the token and other metadata
        return data;



    } catch (error) {
        console.error(error);
        throw error;
    }

}