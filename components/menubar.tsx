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

  return (
    <Menubar className="absolute top-4 left-4">
      <MenubarMenu>
        <MenubarTrigger>Datei</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            disabled={
              characterSlug === "none" || characterSlug === "characters"
            }
            onClick={() => router.push("/characters")}
          >
            Schließen
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
