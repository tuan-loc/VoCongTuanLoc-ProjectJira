import { baseService } from "./baseService";

export class TaskTypeService extends baseService {
  constructor() {
    super();
  }
  getAllTaskType = () => {
    this.get(`TaskType/getAll`);
  };
}

export const taskTypeService = new TaskTypeService();
