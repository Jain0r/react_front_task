export const BASE_URL = "https://flask-task-service.onrender.com";
// export const BASE_URL = "http://127.0.0.1:5000";
export default class Api {
  static get(URL) {
    return fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  static post(URL, data) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  static put(URL, data) {
    return fetch(URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data && JSON.stringify(data),
    });
  }
  static delete(URL) {
    return fetch(URL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}
