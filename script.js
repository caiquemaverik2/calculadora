function Limpar(id1, id2){
    document.getElementById(id1).value="";
    document.getElementById(id2).value="";
}

function Calcular(numero1, numero2, operacao, saida){
    var num1 = document.getElementById(numero1).value;
    var num2 = document.getElementById(numero2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    var expressao = num1 + operador + num2;
    resultado = eval(expressao);
    if(operador == '+'){
    document.getElementById(saida).innerHTML = "A soma de "+ num1 + " e "+num2 +" é "+ resultado+".";
    }else if(operador == '-'){
            document.getElementById(saida).innerHTML = "A diferença entre "+ num1 + " e "+num2 +" é "+ resultado+".";
            }else if(operador == '*'){
                document.getElementById(saida).innerHTML = "O produto "+ num1 + " por "+num2 +" é "+ resultado+".";
                }else
                document.getElementById(saida).innerHTML = "O quociente de "+ num1 + " dividido por "+num2 +" é "+ resultado+".";

}
/*
Requisitos funcionais
Os resultados das quatro operações tem nomes diferentes, a saber: 
para a a adição é soma
para a subtração é diferença
para a multiplicação é produto
para a divisão, quociente
Por exemplo:
se o usuário informar os valores 3 e 5 e escolher fazer uma divisão, o que deve ser exibido é: o quociente de 3 dividido por 5 é  0.6. 
Se fosse uma subtração ficaria: A diferença entre 3 e 5 é -2
No caso de uma multiplicação, teríamos: O produto 3 por 5 é 15
Já na adição, ficaria assim: A soma de 3 e 5 é 8.
Desta maneira, o que vai ser atribuído à saída deve estar de acordo com essa nomenclatura. 
Sempre que um novo cálculo for realizado, os valores fornecidos, aqueles que estavam nos inputs, deverão ser apagados.

Requisito não-funcional
O arquivo HTML não deve possuir nenhum estilo e nenhum script. Eles devem estar em arquivos separados que são acessados pela página web


*/