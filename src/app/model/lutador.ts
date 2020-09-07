export interface Lutador {
    id: number;
    nome: string;
    url_foto: string;
    apelido: string;
    pais: string;
    idade: number;
    altura: number;
    categoria: string;
    peso: number;
    equipe: string;
    v_kotko: number;
    v_submissao: number;
    v_decisao: number;
    // vitorias_outras: number;
    d_ko_tko: number;
    d_submissao: number;
    d_decisao: number;
    // derrotas_outras: number;
    empates: number;
}
