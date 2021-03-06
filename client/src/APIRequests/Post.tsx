import axios from "axios";

export interface PostProps {
    _id?: string;
    date: Date;
    tags: string[];
    title: string;
    content: any;
    user: string;
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
  ) => {
    try {
      const savedPost = await axios.post(
        `/post`,
        post
      )
      return savedPost
    } catch (error) {
    //   throw new Error(error)
    return {data: [], status: 403}
    }
  }

  export const updatePost = async (
    post: PostProps
  ) => {
    try {
      const updatedPost = await axios.put(
        `/post/${post._id}`,
        post
      )
      return updatedPost;
    } catch (error) {
    //   throw new Error(error)
        return {data: [], status: 403}
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
