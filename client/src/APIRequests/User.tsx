import axios, { AxiosResponse } from "axios";

interface UserProps {
    _id?: string;
    nick: string;
    login: string;
    password: string;
    email: string;
    role?: string;
}

export const createUser = async (
    user: UserProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const savedUser: AxiosResponse<ApiDataType> = await axios.post(
        `/user`,
        user
      )
      return savedUser
    } catch (error) {
      throw new Error(error)
    }
  }