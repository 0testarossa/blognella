import axios, { AxiosResponse } from "axios";

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

  export const updateContent = async (
    content: ContentProps
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const updatedContent: AxiosResponse<ApiDataType> = await axios.put(
        `/content/${content._id}`,
        content
      )
      return updatedContent
    } catch (error) {
      throw new Error(error)
    }
  }