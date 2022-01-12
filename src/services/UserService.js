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
}

export const userService = new UserService();
