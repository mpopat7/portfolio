import Screen from "@/components/mc/Screen";
import ProjectList from "@/components/mc/ProjectList";

export const metadata = { title: "Projects — Milen Popat" };

export default function ProjectsPage() {
  return (
    <Screen title="Select Project" maxWidth="100%">
      <ProjectList />
    </Screen>
  );
}
