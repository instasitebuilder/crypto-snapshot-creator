import { useEffect, useRef } from "react";

export const TradingViewChart = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof TradingView !== "undefined" && container.current) {
        new TradingView.widget({
          container_id: container.current.id,
          symbol: "BITSTAMP:BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: false,
          save_image: false,
          height: "400",
          width: "100%",
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[400px] bg-white rounded-lg p-6">
      <div id="tradingview_widget" ref={container} className="h-full" />
    </div>
  );
};