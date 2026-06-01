type ProjectStatus = "active" | "staging" | "archived";

type ProjectCardProps = {
  name: string;
  status: ProjectStatus;
  summary: string;
  stack: string[];
};

const statusLabel: Record<ProjectStatus, string> = {
  active: "稼働中",
  staging: "検証中",
  archived: "アーカイブ済み",
};

export function ProjectCard({ name, status, summary, stack }: ProjectCardProps) {
  return (
    <article className="project-card">
      <header className="project-card__header">
        <h2>{name}</h2>
        <span data-status={status}>{statusLabel[status]}</span>
      </header>

      <p>{summary}</p>

      <ul aria-label={`${name} の技術スタック`}>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
