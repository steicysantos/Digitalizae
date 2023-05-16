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
    CPF: string,
    login: string,
    senha: string,
    dataNascimento: Date,
    telefone : string,
    nomeProcesso : string,
    caminhoFt : string,
    ativo : boolean,
    email : string,
}

export interface Fase {
    id: number,
    idProcessoSeletivo: number,
    tipo : true,
    descricao: string,
    local: string,
}

