import Axios from "axios";
import {
  ACCESS_TOKEN,
  DOMAIN_JIRA,
  TOKEN_CYBERSOFT,
} from "../util/constants/settingSystem";
import { baseService } from "./baseService";

export const jiraService = {
  signinJira: (userLogin) => {
    return Axios({
      url: `${DOMAIN_JIRA}/users/signin`,
      method: "POST",
      data: userLogin,
    });
  },

  getAllProjectCategory: () => {
    return Axios({
      url: `${DOMAIN_JIRA}/ProjectCategory`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },

  createProject: (newProject) => {
    return Axios({
      url: `${DOMAIN_JIRA}/Project/createProject`,
      method: "POST",
      data: newProject,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },

  createProjectAuthorization: (newProject) => {
    return Axios({
      url: `${DOMAIN_JIRA}/Project/createProjectAuthorize`,
      method: "POST",
      data: newProject,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  },

  getListProject: () => {
    return Axios({
      url: `${DOMAIN_JIRA}/Project/getAllProject`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  },

  updateProject: (projectUpdate) => {
    return Axios({
      url: `${DOMAIN_JIRA}/Project/updateProject?projectId=${projectUpdate.id}`,
      method: "PUT",
      data: projectUpdate,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  },
};

// export class jiraService extends baseService {
//   constructor() {
//     super();
//   }

//   deleteProject
// }
