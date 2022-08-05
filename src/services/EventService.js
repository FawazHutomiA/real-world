/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/FawazHutomiA/events",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
