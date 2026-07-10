import { create } from "zustand";

export interface LogItem {
  id: number;
  time: string;
  message: string;
}

interface EventLogState {
  logs: LogItem[];

  addLog: (message: string) => void;

  clear: () => void;
}

export const useEventLogStore =
  create<EventLogState>((set) => ({
    logs: [],

    addLog: (message) =>
      set((state) => ({
        logs: [
          {
            id: Date.now(),

            time: new Date().toLocaleTimeString(),

            message,
          },

          ...state.logs,
        ].slice(0, 50),
      })),

    clear: () => set({ logs: [] }),
  }));