"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    // Check if service workers are supported
    if ("serviceWorker" in navigator) {
      // Register the service worker
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return <div>Test</div>;
}
