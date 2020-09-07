import { Organizacao } from './organizacao';

export interface Evento {
    id: number;
    titulo: string;
    localizacao: string;
    organizacao: Organizacao;
    data: string;
}
