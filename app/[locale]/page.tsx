import { getI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold">{t("hello.world")}</h1>
        <Link href={`/${locale}/send-badge-text`}>
          {t("menubar.pages.test")}
        </Link>
      </main>
    </div>
  );
}
