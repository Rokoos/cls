import { FETCH_PROJECT, FETCH_PROJECTS, SET_LOADING } from "./types";
import { db } from "../firebase/firebase";

const fetchProjects = (projects) => ({
  type: FETCH_PROJECTS,
  projects,
});
const setLoading = () => ({
  type: SET_LOADING,
});

export const startFetchProjects = () => {
  return (dispatch) => {
    return db
      .collection("projects")
      .get()
      .then((snapshot) => {
        const projects = [];
        snapshot.docs.forEach((doc) => {
          projects.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch(fetchProjects(projects));
        dispatch(setLoading());
      });
  };
};

const fetchProject = (project) => ({
  type: FETCH_PROJECT,
  project,
});

export const startFetchProject = (id) => {
  return (dispatch) => {
    return db
      .collection("projects")
      .doc(`${id}`)
      .get()
      .then((doc) => {
        const project = [];
        project.push({ id: doc.id, ...doc.data() });
        dispatch(fetchProject(project[0]));
      });
  };
};
