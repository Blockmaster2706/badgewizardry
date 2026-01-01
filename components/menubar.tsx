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
import { useScopedI18n } from "@/locales/client";

export function CustomMenubar() {
  const router = useRouter();

  const t = useScopedI18n("menubar");

  return (
    <Menubar className="absolute top-4 left-4">
      <MenubarMenu>
        <MenubarTrigger>{t("pages.title")}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            onClick={() => {
              const currentLocale =
                window.location.pathname.split("/")[1] || "en";
              router.push(`/${currentLocale}`);
            }}
          >
            {t("pages.home")}
          </MenubarItem>
          <MenubarItem
            onClick={() => {
              const currentLocale =
                window.location.pathname.split("/")[1] || "en";
              router.push(`/${currentLocale}/send-badge-text`);
            }}
          >
            {t("pages.test")}
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>{t("languages.title")}</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup
            value={""}
            onValueChange={(value) => {
              const pathParts = window.location.pathname
                .split("/")
                .filter(Boolean);
              pathParts[0] = value; // Set the locale part
              const newPath = "/" + pathParts.join("/");
              router.push(newPath);
            }}
          >
            <MenubarRadioItem value="en">English</MenubarRadioItem>
            <MenubarRadioItem value="de">Deutsch</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <ModeToggle />
    </Menubar>
  );
}
