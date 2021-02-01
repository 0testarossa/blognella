import axios from "axios";

export interface CommentProps {
    _id?: string;
    date: string;
    text: string;
    user: any;
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
  ) => {
    try {
      const savedComment = await axios.post(
        `/comment`,
        comment
      )
      return savedComment
    } catch (error) {
    //   throw new Error(error)
        if(error.response.status === 403) {
            return {data: error.response.data.errors, status: 403}
        } else {
            return {data: {}, status: 500}
        }
    }
  }

  export const updateComment = async (
    comment: CommentProps
  ) => {
    try {
      const updatedComment = await axios.put(
        `/comment/${comment._id}`,
        comment
      )
      return updatedComment;
    } catch (error) {
    //   throw new Error(error)
        if(error.response.status === 403) {
            return {data: error.response.data.keyValue, status: 403}
        } else {
            return {data: {}, status: 500}
        }
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
