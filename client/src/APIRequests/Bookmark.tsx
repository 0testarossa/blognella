import axios, { AxiosResponse } from "axios";

export interface BookmarkProps {
    _id?: string;
    title: string;
    post: any;
}

export const getBookmarks = async () => {
    try {
      const bookmarks = await axios.get(
         '/bookmarks'
      )
      return bookmarks
    } catch (error) {
      throw new Error(error)
    }
  }

  export const getBookmark = async (
    _id: string
  ) => {
    try {
      const bookmark = await axios.get(
        `/bookmark/${_id}`
      )
      return bookmark
    } catch (error) {
      throw new Error(error)
    }
  }

export const createBookmark = async (
    bookmark: BookmarkProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const savedBookmark: AxiosResponse<ApiDataType> = await axios.post(
        `/bookmark`,
        bookmark
      )
      return savedBookmark
    } catch (error) {
      throw new Error(error)
    }
  }

  export const updateBookmark = async (
    bookmark: BookmarkProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const updatedBookmark: AxiosResponse<ApiDataType> = await axios.put(
        `/bookmark/${bookmark._id}`,
        bookmark
      )
      return updatedBookmark;
    } catch (error) {
      throw new Error(error)
    }
  }

  export const deleteBookmark = async (
    _id: string
  ) => {
    try {
      const deletedBookmark = await axios.delete(
        `/bookmark/${_id}`
      )
      return deletedBookmark;
    } catch (error) {
      throw new Error(error)
    }
  }
