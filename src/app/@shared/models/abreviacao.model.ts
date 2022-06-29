export class AbreviacaoModel {
  public id: number;
  public slug: string;
  public nome: string;
  public significado: string;
  public descricao: string;
  public exemplos: string[];

  constructor(
    id?: number,
    slug?: string,
    nome?: string,
    significado?: string,
    descricao?: string,
    exemplos?: string[]
  ) {
    this.id = id || 0;
    this.slug = slug || '';
    this.nome = nome || '';
    this.significado = significado || '';
    this.descricao = descricao || '';
    this.exemplos = exemplos || [];
  }
}
