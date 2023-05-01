//@ts-nocheck
import { PostHogProvider } from "posthog-js/react";
import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import { plotlyMockup, candlestickMockup } from "./data/mockup";

declare global {
  interface Window {
    plotly_figure: any;
    export_image: string;
    save_image: boolean;
    title: string;
    Plotly: any;
    MODEBAR: HTMLElement;
  }
}

function App() {
  const [data, setData] = useState(
    process.env.NODE_ENV === "production" ? null : candlestickMockup
  );
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const interval = setInterval(() => {
        if (window.plotly_figure) {
          const data = window.plotly_figure;
          console.log(data);
          setData(data);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  const transformData = (data: any) => {
    if (!data) return null;
    let filename = data.layout?.title?.text
      .replace(/<b>|<\/b>/g, "")
      .replace(/ /g, "_");
    let date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    let time = new Date().toISOString().slice(11, 19).replace(/:/g, "");
    window.title = `openbb_${filename}_${date}_${time}`;

    let extension = "";
    if (window.export_image != undefined) {
      filename = window.export_image.split("/").pop();
      extension = filename.split(".").pop().replace("jpg", "jpeg");
    }

    if (data.layout.annotations != undefined) {
      data.layout.annotations.forEach(function (annotation) {
        if (annotation.text != undefined && !["svg", "pdf"].includes(extension))
          if (annotation.text[0] == "/") {
            annotation.text = "";

            let margin = data.layout.margin;
            if (margin.t != undefined && margin.t > 40) margin.t = 40;

            margin.l = 70;
            if (data.cmd == "/stocks/candle") margin.r -= 40;
          }
      });
    }
    let title = data.layout?.title?.text;
    return {
      data: data,
      date: new Date(),
      cmd: data.command_location,
      posthog: data.posthog,
      python_version: data.python_version,
      pywry_version: data.pywry_version,
      terminal_version: data.terminal_version,
      title,
    };
  };

  const transformedData = transformData(data);

  if (transformedData) {
    if (transformedData.posthog.collect_logs && !options) {
      const opts = {
        api_host: "https://app.posthog.com",
        autocapture: {
          css_selector_allowlist: [".ph-capture"],
        },
        capture_pageview: false,
        loaded: function (posthog: any) {
          const log_id = transformedData?.log_id || "";

          if (log_id != "" && log_id != "REPLACE_ME") posthog.identify(log_id);

          posthog.onFeatureFlags(function () {
            if (
              !posthog.isFeatureEnabled("record-pywry", { send_event: false })
            )
              posthog.stopSessionRecording();

            if (
              !posthog.isFeatureEnabled("collect-logs-pywry", {
                send_event: false,
              })
            )
              posthog.opt_out_capturing();
            else if (posthog.has_opted_out_capturing())
              posthog.opt_in_capturing();
          });
        },
      };
      setOptions(opts);
    }

    const info = {
      INFO: {
        command: transformedData.cmd,
        title: transformedData.title,
        date: transformedData.date,
        python_version: transformedData.python_version,
        pywry_version: transformedData.pywry_version,
        terminal_version: transformedData.terminal_version,
      },
    };

    const chartDiv = (
      <Chart
        json={transformedData.data}
        date={transformedData.date}
        cmd={transformedData.cmd}
        title={transformedData.title}
        info={info}
      />
    );

    if (transformedData.posthog.collect_logs && options) {
      return (
        <PostHogProvider
          apiKey="phc_vhssDAMod5qIplznQ75Kdgz4aB1qPFmeVmfEOZ4hkRw"
          options={options}
        >
          {chartDiv}
        </PostHogProvider>
      );
    }

    return chartDiv;
  } else
    return (
      <div className="absolute inset-0 flex items-center justify-center z-[100]">
        <svg
          className="animate-spin h-20 w-20 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      </div>
    );
}

export default App;
