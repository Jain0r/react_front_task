import Api, { BASE_URL } from ".";

export default class TaskService {
  static async getAllTasks() {
    try {
      const rsp = await Api.get(`${BASE_URL}/tasks`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async createTask(data) {
    try {
      const rsp = await Api.post(`${BASE_URL}/tasks`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async updateTask(data) {
    try {
      const rsp = await Api.post(`${BASE_URL}/tasks`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async getTaskComments(idTask) {
    try {
      const rsp = await Api.get(`${BASE_URL}/tasks/${idTask}/comments`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async createTaskComment(idTask, data) {
    try {
      const rsp = await Api.post(`${BASE_URL}/tasks/${idTask}/comments`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async getCommentsByTask(idTask) {
    try {
      const rsp = await Api.get(`${BASE_URL}/tasks/${idTask}/comments`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async changeTaskStatus(idTask) {
    try {
      const rsp = await Api.put(`${BASE_URL}/tasks/${idTask}/status`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
