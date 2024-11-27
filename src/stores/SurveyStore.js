import { create } from "zustand";
import { api } from "../api/Axios";
import SurveyRequest from "../Requests/SurveyRequest";

export const useSurveyStore = create((set, get) => ({
  isLoading: false,
  isError: false,
  answers: [],

  pushSurvey(id, title, item) {
    let answers = get().answers;
    answers[id] = [title, [`${item}`]];
    set({ answers });
  },

  async sendSurvey() {
    set({ isLoading: true });
    set({ isError: false });

    const request = new SurveyRequest();
    request.answers = Object.fromEntries(get().answers);

    try {
      await api.post("submission", request);
    } catch (error) {
      set({ isError: true });
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
