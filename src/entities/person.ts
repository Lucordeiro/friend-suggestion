export class Person{
    
    public name :any;
    public cpf :string;
  
    constructor(props: Person){

        if(props.cpf.length != 11 || /^[0-9]+$/.test(props.cpf) == false){
            throw new Error(':( Número de CPF inválido, verifique se possui 11 digitos e se são todos númericos');
        }
        this.name = props.name;
        this.cpf = props.cpf;
    }
    
}

