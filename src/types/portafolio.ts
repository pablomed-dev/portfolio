export interface Proyecto {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  tecnologias: string[];
  linkGithub?: string;
  linkDemo?: string; //EL signo ? indica que es opcional
  destacado: boolean;
}

export interface Experiencia {
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string[];
  tecnologias: string[];
}