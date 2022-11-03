export class Relationship {

    public cpf1: string;
    public cpf2: string;
    
    constructor(props: Relationship){

        if(props.cpf1.length != 11 || /^[0-9]+$/.test(props.cpf1) == false){
            throw new Error(':( Número do CPF1 inválido, verifique se possui 11 digitos e se são todos númericos');
        } 
        if(props.cpf2.length != 11 || /^[0-9]+$/.test(props.cpf2) == false){
            throw new Error(':( Número de CPF2 inválido, verifique se possui 11 digitos e se são todos númericos');
        }
        
        this.cpf1 = props.cpf1;
        this.cpf2 = props.cpf2
    }
    
}