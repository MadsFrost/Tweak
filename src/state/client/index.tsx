import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppElement, ClientOptions } from "./types";
import { ColorResult } from "react-color";

interface ClientState {
  options: ClientOptions;
  settingsOpen: boolean;
  isUserNew: boolean;
  hideAppBars: boolean;
}

interface SetBackgroundPayload {
  color: Pick<ColorResult, "rgb">;
  type: AppElement;
}

interface SetTextPayload {
  color: Pick<ColorResult, "rgb">;
  type: AppElement;
}

// Define the initial state using that type
const initialState: ClientState = {
  settingsOpen: false,
  isUserNew: true,
  hideAppBars: false,
  options: {
    appBar: {
      style: {
        background: localStorage.getItem("appBarBG") ?? "rgba(0,0,0,0.1)",
        text: localStorage.getItem("appBarText") ?? "rgba(255,255,255,1)",
      },
    },
    editor: {
      style: {
        background: localStorage.getItem("editorBG") ?? "rgba(0,0,0,0.5)",
        text: localStorage.getItem("editorText") ?? "rgba(255,255,255,1)",
      },
    },
    appFooter: {
      style: {
        background: localStorage.getItem("appFooterBG") ?? "rgba(0,0,0,0.1)",
        text: localStorage.getItem("appFooterText") ?? "rgba(255,255,255,1)",
      },
    },
  },
};

export const client = createSlice({
  name: "client",
  initialState,
  reducers: {
    setBackground: (state, action: PayloadAction<SetBackgroundPayload>) => {
      const bgColor = action.payload.color.rgb;
      const rgbaColor = `rgba(${bgColor.r},${bgColor.g},${bgColor.b},${
        bgColor.a ?? 1
      })`;
      const element = action.payload.type;

      if (element === "appbar") {
        localStorage.setItem("appBarBG", rgbaColor);
        state.options.appBar.style.background = rgbaColor;
      } else if (element === "appfooter") {
        localStorage.setItem("appFooterBG", rgbaColor);
        state.options.appFooter.style.background = rgbaColor;
      } else if (element === "editor") {
        localStorage.setItem("editorBG", rgbaColor);
        state.options.editor.style.background = rgbaColor;
      }
    },
    setText: (state, action: PayloadAction<SetTextPayload>) => {
      const textColor = action.payload.color.rgb;
      const rgbaColor = `rgba(${textColor.r}, ${textColor.g}, ${textColor.b}, ${
        textColor.a ?? 1
      })`;
      const element = action.payload.type;

      if (element === "appbar") {
        localStorage.setItem("appBarText", rgbaColor);
        state.options.appBar.style.text = rgbaColor;
      } else if (element === "appfooter") {
        localStorage.setItem("appFooterText", rgbaColor);
        state.options.appFooter.style.text = rgbaColor;
      } else if (element === "editor") {
        localStorage.setItem("editorText", rgbaColor);
        state.options.editor.style.text = rgbaColor;
      }
    },
    toggleSettings: (state) => {
      state.settingsOpen = !state.settingsOpen;
      state.hideAppBars = !state.settingsOpen;
    },
    userOnBoarded: (state) => {
      state.isUserNew = false;
    },
    toggleAppBars: (state) => {
      state.hideAppBars = !state.hideAppBars;
    },
  },
});

export const {
  setBackground,
  setText,
  toggleSettings,
  toggleAppBars,
  userOnBoarded,
} = client.actions;

export default client.reducer;
