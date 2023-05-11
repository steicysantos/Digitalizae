import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface Processo{
    nome : string,
    DataInicio: string;
    DataFim: string;
    ativo : boolean,
    qtdeMax : number
}

export interface Candidato{
    id : number,
    nome: string,
    dataNascimento: Date,
    telefone : string,
    email : string,
    nomeProcesso : string,
    curriculo : string,
    login: string,
    senha: string,
    ativo : boolean,
}

export interface Fase {
    id: number,
    idProcessoSeletivo: number,
    tipo : true,
    descricao: string,
    local: string,
}

