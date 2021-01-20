import axios from "axios"

export interface TagProps {
    _id?: string;
    name: string;
}

export const getTags = async () => {
    try {
      const tags = await axios.get(
         '/tags'
      )
      return tags
    } catch (error) {
      throw new Error(error)
    }
  }

  export const createTag = async (
    tag: TagProps
  ) => {
    try {
      const saveTag = await axios.post(
        '/tag',
        tag
      )
      return saveTag
    } catch (error) {
      throw new Error(error)
    }
  }

  export const deleteTag = async (
    _id: string
  ) => {
    try {
      const deletedTag = await axios.delete(
        `/tag/${_id}`
      )
      return deletedTag
    } catch (error) {
      throw new Error(error)
    }
  }