// export default function Home() {
//   return (
//     <div className="">
//       <h1>home page</h1>
//     </div>
//   );
// }
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
