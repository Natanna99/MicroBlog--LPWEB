export class Publicacao{
    id: number;
    descricao: string;
    curtida: boolean;

    constructor(id: number, descricao: string, curtida: boolean){
        this.id = id;
        this.descricao = descricao;
        this.curtida = curtida;

    }

}
