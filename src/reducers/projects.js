import { FETCH_PROJECTS, FETCH_PROJECT, SET_LOADING } from "../actions/types";

const initState = {
  projects: [],
  project: null,
  loading: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };
    case FETCH_PROJECT:
      return {
        ...state,
        project: action.project,
      };
    default:
      return state;
  }
};
