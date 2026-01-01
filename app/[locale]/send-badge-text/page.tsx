"use client";

import { useI18n } from "@/locales/client";
import { invoke } from "@tauri-apps/api/core";

export default function Home() {
  const t = useI18n(); // Ensure the i18n client is initialized

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <input type="text" id="message"></input>
        <input type="checkbox" aria-label="Use USB" id="useUsb" />{" "}
        {t("use.usb")}
        <button
          onClick={() => {
            const message = (
              document.getElementById("message") as HTMLInputElement
            ).value;
            const useUsb = (
              document.getElementById("useUsb") as HTMLInputElement
            ).checked;
            invoke("send_to_badge", { message, useUsb });
          }}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
        >
          {t("send")}
        </button>
      </main>
    </div>
  );
}
