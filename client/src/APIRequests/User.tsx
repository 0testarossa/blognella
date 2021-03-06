import axios from "axios";

export interface UserProps {
    _id?: string;
    nick: string;
    login: string;
    password: string;
    email: string;
    role?: string;
}

export const getUsers = async () => {
    try {
      const users = await axios.get(
         '/users'
      )
      return users
    } catch (error) {
      throw new Error(error)
    }
  }

  export const getUser = async (
    _id: string
  ) => {
    try {
      const user = await axios.get(
        `/user/${_id}`
      )
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

export const createUser = async (
    user: UserProps
  ) => {
    try {
      const savedUser = await axios.post(
        `/user`,
        user
      )
      return savedUser
    } catch (error) {
    //   throw new Error(error)
    return {data: [], status: 403}
    }
  }

  export const updateUser = async (
    user: UserProps
  ) => {
    try {
      const updatedUser = await axios.put(
        `/user/${user._id}`,
        user
      )
      return updatedUser;
    } catch (error) {
    //   throw new Error(error)
    return {data: [], status: 403}
    }
  }

  export const deleteUser = async (
    _id: string
  ) => {
    try {
      const deletedUser = await axios.delete(
        `/user/${_id}`
      )
      return deletedUser;
    } catch (error) {
      throw new Error(error)
    }
  }