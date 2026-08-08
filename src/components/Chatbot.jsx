import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const handleMessage = (e) => {
      const iframe = document.getElementById("widget-iframe");
      if (!iframe || e.source !== iframe.contentWindow) return;

      if (e.data?.type === "widget:resize") {
        iframe.style.width = e.data.width;
        iframe.style.height = e.data.height;
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      id="widget-iframe"
      src="https://chat-widget.sicada.ai/06a7216f-3a7f-75b8-8000-e81e525b5359?type=chat"
      title="Portfolio Chatbot"
      allow="microphone; camera; autoplay"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "260px",
        height: "76px",
        border: "none",
        zIndex: 999999,
      }}
    />
  );
};

export default Chatbot;
