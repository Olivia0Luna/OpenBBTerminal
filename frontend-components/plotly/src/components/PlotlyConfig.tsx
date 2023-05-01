import { Icons as PlotlyIcons } from "plotly.js-dist-min";
import { ICONS } from "./Config";
import { useHotkeys } from "react-hotkeys-hook";
import { downloadCSV, downloadImage } from "../utils/utils";

export function hideModebar(hide: boolean = true) {
  return new Promise((resolve) => {
    if (!window.MODEBAR) {
      window.MODEBAR = window.document.getElementsByClassName(
        "modebar-container"
      )[0] as HTMLElement;
      window.MODEBAR.style.cssText = `${window.MODEBAR.style.cssText}; display:flex;`;
    }
    let includes_text = "display: none";
    if (window.MODEBAR) {
      if (window.MODEBAR.style.cssText.includes("display: none") && !hide) {
        includes_text = "display: flex";
        window.MODEBAR.style.cssText = `${window.MODEBAR.style.cssText}; display:flex;`;
      } else {
        window.MODEBAR.style.cssText = `${window.MODEBAR.style.cssText}; display:none;`;
      }
      resolve(true);
    }
  });
}

export function PlotConfig({
  setModal,
  changeTheme,
  autoScaling,
  Loading,
  changeColor,
}: {
  setModal: (modal: { modal: string; data?: any }) => void;
  changeTheme: (change: boolean) => void;
  autoScaling: (change: boolean) => void;
  Loading: (change: boolean) => void;
  changeColor: (change: boolean) => void;
}) {
  useHotkeys(
    "ctrl+shift+t",
    () => {
      setModal({ modal: "titleDialog" });
    },
    { preventDefault: true }
  );
  useHotkeys(
    "ctrl+t",
    () => {
      setModal({ modal: "textDialog" });
    },
    { preventDefault: true }
  );
  useHotkeys(
    "ctrl+o",
    () => {
      setModal({ modal: "overlayChart" });
    },
    { preventDefault: true }
  );
  useHotkeys(
    "ctrl+shift+h",
    () => {
      hideModebar();
    },
    { preventDefault: true }
  );
  useHotkeys(
    "ctrl+w",
    () => {
      window.close();
    },
    { preventDefault: true }
  );


  const CONFIG = {
    plotGlPixelRatio: 1,
    scrollZoom: true,
    responsive: true,
    displaylogo: false,
    displayModeBar: true,
    modeBarButtonsToRemove: ["lasso2d", "select2d", "downloadImage"],
    modeBarButtons: [
      [
        {
          name: "Download CSV (Ctrl+Shift+S)",
          icon: ICONS.downloadCsv,
          click: async function (gd: any) {
            setModal({ modal: "downloadCsv" });
            await downloadCSV(gd);
          },
        },
        {
          name: "Download Chart as Image (Ctrl+S)",
          icon: ICONS.downloadImage,
          click: async function () {
            hideModebar();
            await downloadImage("MainChart", hideModebar, Loading);
          },
        },
        // {
        //   name: "Upload Image (Ctrl+U)",
        //   icon: Plotly.Icons.uploadImage,
        //   click: function (gd) {
        //     downloadImage();
        //   },
        // },
      ],
      [
        {
          name: "Edit Color (Ctrl+E)",
          icon: ICONS.changeColor,
          click: function () {
            changeColor(true);
          },
        },
        "drawline",
        "drawopenpath",
        "drawcircle",
        "drawrect",
        "eraseshape",
      ],
      [
        {
          name: "Overlay chart from CSV (Ctrl+O)",
          icon: ICONS.plotCsv,
          click: function () {
            setModal({ modal: "overlayChart" });
          },
        },
        {
          name: "Add Text (Ctrl+T)",
          icon: ICONS.addText,
          click: function () {
            setModal({ modal: "textDialog", data: { text: "" } });
          },
        },
        {
          name: "Change Titles (Ctrl+Shift+T)",
          icon: ICONS.changeTitle,
          click: function () {
            setModal({ modal: "titleDialog" });
          },
        },
        {
          name: "Change Theme",
          icon: ICONS.sunIcon,
          click: function () {
            changeTheme(true);
          },
        },
      ],
      ["hoverClosestCartesian", "hoverCompareCartesian", "toggleSpikelines"],
      [
        {
          name: "Auto Scale (Ctrl+Shift+A)",
          icon: PlotlyIcons.autoscale,
          click: function () {
            autoScaling(true);
          },
        },
        "zoomIn2d",
        "zoomOut2d",
        "autoScale2d",
        "zoom2d",
        "pan2d",
      ],
    ],
  };
  return CONFIG;
}
