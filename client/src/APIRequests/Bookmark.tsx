import axios from "axios";

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
  ) => {
    try {
      const savedBookmark = await axios.post(
        `/bookmark`,
        bookmark
      )
      return savedBookmark
    } catch (error) {
    //   throw new Error(error)
    return {data: [], status: 403}
    }
  }

  export const updateBookmark = async (
    bookmark: BookmarkProps
  ) => {
    try {
      const updatedBookmark = await axios.put(
        `/bookmark/${bookmark._id}`,
        bookmark
      )
      return updatedBookmark;
    } catch (error) {
    //   throw new Error(error)
    return {data: [], status: 403}
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
