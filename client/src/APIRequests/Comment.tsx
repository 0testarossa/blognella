import axios, { AxiosResponse } from "axios";

export interface CommentProps {
    _id?: string;
    date: Date;
    text: string;
    user: any;
    comment: any;
}

export const getComments = async () => {
    try {
      const comments = await axios.get(
         '/comments'
      )
      return comments
    } catch (error) {
      throw new Error(error)
    }
  }

  export const getMainComments = async () => {
    try {
      const comments = await axios.get(
         '/commentsMain'
      )
      return comments
    } catch (error) {
      throw new Error(error)
    }
  }

  export const getComment = async (
    _id: string
  ) => {
    try {
      const comment = await axios.get(
        `/comment/${_id}`
      )
      return comment
    } catch (error) {
      throw new Error(error)
    }
  }

export const createComment = async (
    comment: CommentProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const savedComment: AxiosResponse<ApiDataType> = await axios.post(
        `/comment`,
        comment
      )
      return savedComment
    } catch (error) {
      throw new Error(error)
    }
  }

  export const updateComment = async (
    comment: CommentProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const updatedComment: AxiosResponse<ApiDataType> = await axios.put(
        `/comment/${comment._id}`,
        comment
      )
      return updatedComment;
    } catch (error) {
      throw new Error(error)
    }
  }

  export const deleteComment = async (
    _id: string
  ) => {
    try {
      const deletedComment = await axios.delete(
        `/comment/${_id}`
      )
      return deletedComment
    } catch (error) {
      throw new Error(error)
    }
  }
