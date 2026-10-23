import { Proyecto, Experiencia } from '../types/portafolio';

export const EXPERIENCIA_LABORAL: Experiencia[] = [
  {
    puesto: "Desarrollador de Software / Analista de Sistemas Senior",
    empresa: "Universidad Privada — Sector Educativo",
    periodo: "Abril 2021 — Actualidad",
    descripcion: [
      "Diagnóstico y refactorización crítica en base de datos (Stored Procedures): resolución de incidentes en producción sobre módulos de cobranzas y facturación electrónica legal, garantizando la integridad transaccional de miles de registros financieros.",
      "Mantenimiento correctivo y evolución de plataforma web institucional: depuración de lógica de negocio y resolución de fallas en entorno web C# (ASP.NET) utilizado diariamente por miles de docentes y alumnos.",
      "Desarrollo e integración de microservicios y reportería: construcción de servicios REST en Python (FastAPI) para ingesta de datos tabulares, y diseño de interfaces interactivas CRUD/reportes dinámicos con React y PHP (Slim Framework).",
      "Continuidad operativa del core institucional: soporte de alta disponibilidad y nuevos desarrollos sobre el ERP de gestión académica y RRHH en base de datos relacional robusta (Sybase SQL Anywhere 17 / PowerBuilder)."
    ],
    tecnologias: [
      "Python (FastAPI)",
      "SQL / Stored Procedures",
      "PostgreSQL / Sybase",
      "C# ASP.NET",
      "React",
      "PHP (Slim)",
      "Git / GitHub"
    ]
  }
];

export const PROYECTOS: Proyecto[] = [
  {
    id: "fastapi-excel-engine",
    titulo: "Microservicio de Ingesta Masiva y Persistencia ETL",
    subtitulo: "Backend Architecture & Data Processing",
    descripcion: "API REST desarrollada bajo arquitectura limpia desacoplada (Routers, Services, Repositories). Permite la carga, validación automatizada de esquemas tabulares (Excel) y persistencia transaccional masiva con control de fallos (Commit/Rollback) y optimización de cursor para alto rendimiento.",
    tecnologias: ["Python", "FastAPI", "Pandas", "pyodbc", "SQL", "REST APIs"],
    linkGithub: "https://github.com/pablomed-dev/fastapi-excel-base-de-datos",
    destacado: true
  },
  {
    id: "fullstack-task-manager",
    titulo: "Sistema Full-Stack de Gestión de Tareas y Flujos",
    subtitulo: "Arquitectura Desacoplada | Next.js & Django REST",
    descripcion: "Aplicación Full-Stack estructurada en dos capas independientes: una API RESTful construida con Python (Django REST Framework) encargada del modelado, serialización y persistencia de datos; y un cliente web reactivo desarrollado con Next.js, React y TypeScript, estilizado con Tailwind CSS y soporte de Dark Mode.",
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Python (Django)",
      "Django REST Framework",
      "Tailwind CSS",
      "REST APIs"
    ],
    linkGithub: "https://github.com/pablomed-dev/proyecto-gestion-tareas", // Pon tu link real
    destacado: true // ¡Cámbialo a true! Ahora es un proyecto estrella
  },
  {
    id: "production-management-core",
    titulo: "Sistema Integral de Gestión de Producción y Servicios",
    subtitulo: "Proyecto de Titulación / Tesis de Grado",
    descripcion: "Sistema integral de control operativo y ventas orientado a PyMEs con el que obtuve el título de Licenciado en Análisis de Sistemas. Diseñado mediante especificación formal UML, arquitectura modular de escritorio/web, persistencia relacional optimizada (MySQL) y generación de reportes analíticos con JasperReports.",
    tecnologias: ["Java", "JSP", "MySQL", "JasperReports", "UML Modeling"],
    destacado: true
  },
  {
    id: "weather-async-dashboard",
    titulo: "Monitor Meteorológico Asíncrono",
    subtitulo: "JavaScript ES6+ & Fetch API",
    descripcion: "Aplicación web ligera orientada al consumo asíncrono de APIs REST en tiempo real. Implementa control defensivo de peticiones HTTP con Async/Await, manipulación reactiva del DOM sin dependencias externas y persistencia de sesión en cliente mediante la Web Storage API (LocalStorage).",
    tecnologias: ["Vanilla JavaScript", "Fetch API / REST", "HTML5 Semántico", "CSS3 Flexbox"],
    linkGithub: "https://github.com/pablomed-dev/app-clima", // Reemplaza por tu enlace real
    destacado: false
  }
];