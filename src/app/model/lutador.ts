export interface Lutador {
    id: number;
    nome: string;
    foto: string;
    apelido: string;
    pais: string;
    idade: number;
    altura: number;
    categoria: string;
    peso: number;
    equipe: string;
    vitorias_ko: number;
    vitorias_sub: number;
    vitorias_dec: number;
    vitorias_outras: number;
    derrotas_ko: number;
    derrotas_sub: number;
    derrotas_dec: number;
    derrotas_outras: number;
    empates_nc: number;
}
