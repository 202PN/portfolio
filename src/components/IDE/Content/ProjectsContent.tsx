import React, { useState } from 'react';
import { Folder, FileText, ExternalLink, ChevronRight } from 'lucide-react';
import { ventures } from '../../../data/ventures';
import CodeBlock from './CodeBlock';

interface ProjectEntry {
  slug: string;
  name: string;
  context: string;
  description: string;
  highlights: string[];
  tech: string[];
  url?: string;
  urlLabel?: string;
}

const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Each venture is a folder; studio client work becomes its own folder under the studio
const projects: ProjectEntry[] = ventures.flatMap((v) => {
  const self: ProjectEntry = {
    slug: v.id,
    name: v.name,
    context: `${v.role}, ${v.period}`,
    description: v.tagline,
    highlights: v.highlights,
    tech: v.tech,
    url: v.url,
    urlLabel: v.urlLabel
  };
  const clients: ProjectEntry[] = (v.clients ?? []).map((c) => ({
    slug: `${v.id}/${toSlug(c.client)}`,
    name: c.client,
    context: `Client of ${v.name}, ${c.period}`,
    description: c.summary,
    highlights: c.highlights,
    tech: c.tech,
    url: c.url,
    urlLabel: c.url?.replace(/^https?:\/\//, '')
  }));
  return v.highlights.length > 0 ? [self, ...clients] : clients;
});

const ProjectsContent: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = projects.find((p) => p.slug === selectedSlug);

  return (
    <div>
      {/* Code Header */}
      <CodeBlock
        className="mb-6"
        lines={[
          <span className="comment"># projects/: production work I designed and built</span>,
          <span className="comment"># Open a folder to read its README</span>,
          <><span className="variable">projects_dir</span> <span className="operator">=</span> <span className="function">Path</span><span className="bracket">(</span><span className="string">"./projects"</span><span className="bracket">)</span></>
        ]}
      />

      {!selected ? (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Folder className="ide-accent" size={20} />
            projects/
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project) => (
              <button
                key={project.slug}
                type="button"
                className="project-card"
                onClick={() => setSelectedSlug(project.slug)}
              >
                <span className="flex items-center gap-2 mb-1">
                  <Folder size={16} className="ide-accent" />
                  <span className="font-bold text-white">{project.slug}/</span>
                </span>
                <span className="block text-gray-400 text-sm mb-2">{project.context}</span>
                <span className="block text-gray-300 text-sm mb-3">{project.description}</span>
                <span className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setSelectedSlug(null)}
            className="flex items-center gap-2 ide-accent hover:underline"
          >
            <ChevronRight size={16} className="rotate-180" />
            Back to projects/
          </button>

          <div className="code-card">
            <div className="code-card-header">
              <FileText size={16} />
              <span>{selected.slug}/README.md</span>
            </div>
            <div className="code-card-body space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white"># {selected.name}</h3>
                <p className="text-gray-400 text-sm">{selected.context}</p>
              </div>
              <p className="text-gray-300">{selected.description}</p>
              <div>
                <h4 className="text-white font-semibold mb-2">## What I built</h4>
                <ul className="ide-list">
                  {selected.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">## Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              {selected.url && (
                <a href={selected.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={14} />
                  {selected.urlLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
