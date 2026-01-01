"use client";

import { invoke } from "@tauri-apps/api/core";
import { useEffect } from "react";

export default function Home({}: {}) {
  useEffect(() => {
    invoke("get_locale").then((locale) => {
      console.log("Locale from Tauri: ", locale);
      if (typeof locale === "string" && locale.startsWith("de")) {
        window.location.href = "/de";
      } else {
        window.location.href = "/en";
      }
    });
  }, []);
  return <div>Loading...</div>;
}
