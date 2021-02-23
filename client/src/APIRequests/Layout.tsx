import axios from "axios"

export interface LayoutProps {
    _id?: string;
    name: string;
    mainWidth: number;
}

export const getLayouts = async () => {
    try {
      const layouts = await axios.get(
         '/layouts'
      )
      return layouts
    } catch (error) {
      throw new Error(error)
    }
  }

  export const createLayout = async (
    layout: LayoutProps
  ) => {
    try {
      const saveLayout = await axios.post(
        '/layout',
        layout
      )
      return saveLayout
    } catch (error) {
    //   throw new Error(error)
        if(error.response.status === 403) {
            return {data: error.response.data.errors, status: 403}
        } else {
            return {data: {}, status: 500}
        }
    }
  }

  export const updateLayout = async (
    layout: LayoutProps
  ) => {
    try {
      const updatedLayout = await axios.put(
        `/layout/${layout._id}`,
        layout
      )
      return updatedLayout;
    } catch (error) {
    //   throw new Error(error)
        if(error.response.status === 403) {
            return {data: error.response.data.keyValue, status: 403}
        } else {
            return {data: {}, status: 500}
        }
    }
  }

  export const deleteLayout = async (
    _id: string
  ) => {
    try {
      const deletedLayout = await axios.delete(
        `/layout/${_id}`
      )
      return deletedLayout
    } catch (error) {
      throw new Error(error)
    }
  }