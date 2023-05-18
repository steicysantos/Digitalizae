import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface Processo{
    id:number,
    nome : string,
    dataInicio: string;
    dataFim: string;
    ativo : boolean,
    qtdeMax : number
}

export interface Candidato{
    id : number,
    nome: string,
    cpf: string,
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
    titulo : string,
    id : number,
    data : string,
    idProcessoSeletivo : number,
    tipo : boolean,
    descricao : string,
    local : string,
    endereco : string,
    atual : boolean,
}

