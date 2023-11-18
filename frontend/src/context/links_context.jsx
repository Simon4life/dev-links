import React, {useContext, useReducer} from "react"
import reducer from "../reducers/links_reducer";
import CustomFetch from "../utils/customFetch";

const initialState = {
  formLinksArr: [
    { _id: 1, link: "", platform: "Github" },
    { _id: 2, link: "", platform: "Github" },
  ],
  areLinksValid: false,
};

const LinksContext = React.createContext();

export const LinksProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLinks = async () => {
    try {
      const response = await CustomFetch.get("/api/v1/links");
      const { links } = response.data;
      dispatch({ type: "GET_LINKS", payload: links });
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  const addLink = () => {
    if(state.formLinksArr.length <= 2) {
      dispatch({ type: "ADD_LINK",});
    }
  }

  const handleFormChange = (values) => {
    dispatch({type: "HANDLE_FORM_CHANGE", payload: values})
  }

  const deleteLink = async (_id) => {
    removeFormLinkRow(_id);
    const response = await CustomFetch.delete(`/api/v1/links/${_id}`, _id);
    console.log(response);
  }

  const createLink = async (linksArr) => {
    try {
      const response = await CustomFetch.post("/api/v1/links", linksArr);
      const data = response.data;
      dispatch({type: "CREATE_LINK", payload: data})
    } catch (error) {
      console.log(error)
    }
  }

  const removeFormLinkRow = (id) => {
    dispatch({type: "REMOVE_FORM_LINK_ROW", payload: id})
  }

  return <LinksContext.Provider value={{...state, getLinks, createLink, addLink, handleFormChange, deleteLink, removeFormLinkRow}}>{children}</LinksContext.Provider>

}

export const useLinksContext = () => {
  return useContext(LinksContext)
}