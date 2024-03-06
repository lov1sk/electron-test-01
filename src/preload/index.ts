import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { IPC } from "../shared/constants/ipc";
import { WindowAction } from "../shared/types/ipc";
declare global {
  export interface Window {
    api: typeof api;
  }
}

// Custom APIs for renderer
const api = {
  doWindowAction({ action }: WindowAction): Promise<void> {
    return ipcRenderer.invoke(IPC.WINDOW.WINDOW_ACTION, {
      action: action,
    });
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
