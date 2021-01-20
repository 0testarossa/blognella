import axios, { AxiosResponse } from "axios";

export interface PostProps {
    _id?: string;
    date: Date;
    tags: string[];
    title: string;
    content: any;
}

export const getPosts = async () => {
    try {
      const posts = await axios.get(
         '/posts'
      )
      return posts
    } catch (error) {
      throw new Error(error)
    }
  }

  export const getPost = async (
    _id: string
  ) => {
    try {
      const post = await axios.get(
        `/post/${_id}`
      )
      return post
    } catch (error) {
      throw new Error(error)
    }
  }

export const createPost = async (
    post: PostProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const savedPost: AxiosResponse<ApiDataType> = await axios.post(
        `/post`,
        post
      )
      return savedPost
    } catch (error) {
      throw new Error(error)
    }
  }

  export const deletePost = async (
    _id: string
  ) => {
    try {
      const deletedPost = await axios.delete(
        `/post/${_id}`
      )
      return deletedPost
    } catch (error) {
      throw new Error(error)
    }
  }
