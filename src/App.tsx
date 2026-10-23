import { PROYECTOS, EXPERIENCIA_LABORAL } from './data/portafolioData';
import { ProjectCard } from './components/ProjectCard';
import { Mail, Check, FileText, Database, Server, Laptop } from 'lucide-react';
import { LinkedinIcon } from './components/SocialIcons';
import { useState } from 'react';

const BotonCopiarCorreo = () => {
  const [copiado, setCopiado] = useState(false);
  const miCorreo = "pmeldina1993@gmail.com";

  const handleCopiar = () => {
    navigator.clipboard.writeText(miCorreo);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000); // Vuelve al estado normal tras 2 segundos
  };

  return (
    <button
      onClick={handleCopiar}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
      title="Copiar correo al portapapeles"
    >
      {copiado ? (
        <>
          <Check size={18} className="text-emerald-400" />
          <span className="text-emerald-400">¡Email copiado al portapapeles!</span>
        </>
      ) : (
        <>
          <Mail size={18} />
          <span>Contactar</span>
        </>
      )}
    </button>
  );
};

function App() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      {/* 1. SECCIÓN HERO */}
      <header className="mb-16">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Disponible para nuevas oportunidades (Remoto / Híbrido / Presencial)
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Software Engineer
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
          Licenciado en Análisis de Sistemas con 5 años de trayectoria en desarrollo y estabilización de sistemas críticos en producción. Especializado en arquitectura backend con <span className="text-indigo-400 font-semibold">Python (FastAPI)</span>, gestión avanzada de <span className="text-indigo-400 font-semibold">bases de datos relacionales (SQL & Stored Procedures)</span> e integración de aplicaciones web con <span className="text-indigo-400 font-semibold">React</span>.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/pablo-medina-montania-756782331"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors text-sm"
          >
            <LinkedinIcon size={18} /> Conectar en LinkedIn
          </a>
          {/*<a
            href="mailto:tu-email@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Mail size={18} /> Contactar
          </a>*/}
          <BotonCopiarCorreo />

        </div>
      </header>

      {/* 2. PILARES / HABILIDADES RÁPIDAS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <Server className="text-indigo-400 mb-2" size={24} />
          <h4 className="font-semibold text-white">Backend & APIs</h4>
          <p className="text-xs text-slate-400 mt-1">Python, FastAPI, Arquitectura limpia, RESTful APIs, C#.</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <Database className="text-indigo-400 mb-2" size={24} />
          <h4 className="font-semibold text-white">Bases de Datos</h4>
          <p className="text-xs text-slate-400 mt-1">Diseño relacional, consultas SQL complejas, migraciones y transacciones.</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <Laptop className="text-indigo-400 mb-2" size={24} />
          <h4 className="font-semibold text-white">Frontend Web</h4>
          <p className="text-xs text-slate-400 mt-1">React, TypeScript, Tailwind CSS, integración de servicios.</p>
        </div>
      </section>

      {/* 3. EXPERIENCIA LABORAL */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
          Experiencia Profesional
        </h2>
        <div className="space-y-8">
          {EXPERIENCIA_LABORAL.map((exp, index) => (
            <div key={index} className="border-l-2 border-indigo-500 pl-4 space-y-2">
              <div className="flex justify-between items-baseline flex-wrap">
                <h3 className="text-lg font-bold text-white">{exp.puesto}</h3>
                <span className="text-xs text-slate-400">{exp.periodo}</span>
              </div>
              <p className="text-sm font-medium text-indigo-400">{exp.empresa}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                {exp.descripcion.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROYECTOS TÉCNICOS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
          Proyectos Técnicos & Código
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {PROYECTOS.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
        Diseñado y desarrollado con React, TypeScript y Tailwind CSS.
      </footer>
    </div>
  );
};

export default App;
