"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import { useI18n, useScopedI18n } from "@/locales/client";

export function CustomMenubar() {
  const router = useRouter();
  const characterSlug =
    typeof window !== "undefined"
      ? decodeURIComponent(
          (window.location.pathname
            .split("/")
            .filter(Boolean)
            .pop() as string) ?? "none"
        )
      : "none";

  const t = useScopedI18n("menubar.file");

  return (
    <Menubar className="absolute top-4 left-4">
      <MenubarMenu>
        <MenubarTrigger>{t("title")}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            disabled={
              characterSlug === "none" || characterSlug === "characters"
            }
            onClick={() => router.push("/characters")}
          >
            {t("closeCharacter")}
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Charaktere</MenubarTrigger>
        <MenubarContent></MenubarContent>
      </MenubarMenu>
      <ModeToggle />
    </Menubar>
  );
}
