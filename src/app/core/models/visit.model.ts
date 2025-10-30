export interface Visit {
  id: string;
  data: Date;
  visitanteNome: string;
  anfitriao: string;
  departamento: string;
  motivo: string;
  entrada: string;     // 'HH:mm'
  saida?: string;
  duracaoMin?: number; // calculado
}
