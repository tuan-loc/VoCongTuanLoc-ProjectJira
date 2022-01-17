import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor() {
    super();
  }

  getUser = (KeyWord) => {
    return this.get(`Users/getUser?keyword=${KeyWord}`);
  };

  assignUserProject = (userProject) => {
    return this.post(`Project/assignUserProject`, userProject);
  };

  deleteUserFromProject = (userProject) => {
    return this.post(`Project/removeUserFromProject`, userProject);
  };

  getUserByProjectId = (idProject) => {
    return this.get(`Users/getUserByProjectId?idProject=${idProject}`);
  };
}

export const userService = new UserService();
