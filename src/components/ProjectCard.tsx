import React from "react";
import { Proyecto } from '../types/portafolio';
import { GitCommit, ExternalLink, Code2 } from 'lucide-react'
import { GithubIcon } from './SocialIcons';

//Aquí le decimos a TypeScript qué datos necesita este componente para funcionar
interface Props {
  proyecto: Proyecto;
}

export const ProjectCard = ({ proyecto }: Props) => {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${proyecto.destacado
      ? 'bg-slate-900/80 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
      }`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            {proyecto.subtitulo}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">{proyecto.titulo}</h3>
        </div>
        <div className="flex gap-2">
          {/* Solo muestra el botón de GitHub si el proyecto realmente tiene un link */}
          {proyecto.linkGithub && (
            <a 
              href={proyecto.linkGithub} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="Ver código fuente"
            >
              <GithubIcon size={20} />
            </a>
          )}

          {proyecto.linkDemo && (
            <a 
              href={proyecto.linkDemo} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="Ver demo en vivo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {proyecto.descripcion}
      </p>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
        {proyecto.tecnologias.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300"
          >
            <Code2 size={12} className="mr-1 text-slate-400" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};