import Screen from "@/components/mc/Screen";
import EnchantTable from "@/components/mc/EnchantTable";

export const metadata = { title: "Skills — Milen Popat" };

export default function SkillsPage() {
  return (
    <Screen title="Skills" maxWidth="1180px">
      <div
        className="scrollbar-hidden flex min-h-0 w-full flex-1 items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-4"
        tabIndex={0}
        aria-label="Skills, scrollable"
      >
        <EnchantTable />
      </div>
    </Screen>
  );
}
