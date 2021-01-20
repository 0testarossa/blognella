import axios from "axios";

interface ContentProps {
    _id?: string;
    text: string;
    title: string;
}

export const createContent = async (
    content: ContentProps
  ) => {
    try {
      const savedContent = await axios.post(
        `/content`,
        content
      )
      return savedContent
    } catch (error) {
      throw new Error(error)
    }
  }