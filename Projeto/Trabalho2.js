/* ----------------------------- Exercicio 1 ----------------------------- */
function verificarNumero(numero) {
    if (numero % 2 === 0 && numero % 10 === 0) {
        return 1;
    } else {
        return 0;
    }
}

if (verificarNumero(numero)) {
    console.log(numero + " é par e divisível por 10.");
} else {
    console.log(numero + " não é par ou não é divisível por 10.");
}
----------------------------- Exercicio 2 -----------------------------
function verificarNumero(numero) {
    if (numero % 7 === 0 || numero % 23 === 0) {
        return 1;
    } else {
        return 0;
    }
}

if (verificarNumero(numero)) {
    console.log(numero + " é divisível por 7 ou por 23.");
} else {
    console.log(numero + " não é divisível por 7 nem por 23.");
}
----------------------------- Exercicio 3 -----------------------------

function encontrarMaiorEPosicao(valores) {
    let maior = valores[0];
    let posicao = 0;

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
            posicao = i;
        }
    }

    return { maior: maior, posicao: posicao + 1 };
}

function lerValoresInteiros(n) {
    let valores = [];
    for (let i = 1; i <= n; i++) {
        let valor = parseInt(prompt("Digite o " + i + "º valor inteiro:"));
        valores.push(valor);
    }
    return valores;
}

const valores = lerValoresInteiros(5);

const resultado = encontrarMaiorEPosicao(valores);

console.log("O maior valor digitado é:", resultado.maior);
console.log("Ele foi digitado na posição:", resultado.posicao);

----------------------------- Exercicio 4 -----------------------------
function calcularPeso(altura, peso) {
    return peso / (altura * altura);
}

function determinarFaixa(pesoIdeal) {
    if (pesoIdeal < 18.5) {
        return "Abaixo do peso";
    } else if (pesoIdeal >= 18.5 && pesoIdeal < 24.9) {
        return "Peso normal";
    } else if (pesoIdeal >= 24.9 && pesoIdeal < 29.9) {
        return "Sobrepeso";
    } else if (pesoIdeal >= 29.9 && pesoIdeal < 34.9) {
        return "Obesidade grau I";
    } else if (pesoIdeal >= 34.9 && pesoIdeal < 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}

function lerDadosPessoa() {
    let nome = prompt("Digite o nome da pessoa:");
    let altura = parseFloat(prompt("Digite a altura (em metros):"));
    let peso = parseFloat(prompt("Digite o peso (em Kg):"));
    return { nome: nome, altura: altura, peso: peso };
}

const dadosPessoa = lerDadosPessoa();

const pesoIdeal = calcularPesoIdeal(dadosPessoa.altura, dadosPessoa.peso);

const faixa = determinarFaixa(pesoIdeal);

console.log("Nome: " + dadosPessoa.nome);
console.log("Faixa de peso: " + faixa);
----------------------------- Exercicio 5 -----------------------------
function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero"; 
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles"; 
    } else {
        return "Escaleno"; 
    }
}

function lerLadosTriangulo() {
    let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
    let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
    let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));
    return { lado1: lado1, lado2: lado2, lado3: lado3 };
}

const lados = lerLadosTriangulo();

const classificacao = classificarTriangulo(lados.lado1, lados.lado2, lados.lado3);

console.log("O triângulo é classificado como:", classificacao);
----------------------------- Exercicio 6 -----------------------------

function calcularNovoSalario(salarioAtual) {
    let novoSalario;

    if (salarioAtual <= 1320) {
        novoSalario = salarioAtual * 1.11; 
    } else if (salarioAtual > 1320 && salarioAtual <= 3000) {
        novoSalario = salarioAtual * 1.09; 
    } else if (salarioAtual > 3000 && salarioAtual <= 7000) {
        novoSalario = salarioAtual * 1.06; 
    } else {
        novoSalario = salarioAtual * 1.01; 
    }

    return novoSalario;
}

function lerSalarioAtual() {
    return parseFloat(prompt("Digite o salário atual do funcionário:"));
}

const salarioAtual = lerSalarioAtual();

const novoSalario = calcularNovoSalario(salarioAtual);

console.log("O novo salário é: R$" + novoSalario.toFixed(2));
----------------------------- Exercicio 7 -----------------------------

function lerTresValoresDiferentes() {
    let valores = [];
    for (let i = 1; i <= 3; i++) {
        let valor = parseInt(prompt("Digite o " + i + "º valor inteiro:"));
        valores.push(valor);
    }
    return valores;
}

function ordenarValoresCrescente(valores) {
    return valores.sort((a, b) => a - b);
}

const valores = lerTresValoresDiferentes();

const valoresOrdenados = ordenarValoresCrescente(valores);

console.log("Valores em ordem crescente:", valoresOrdenados);
----------------------------- Exercicio 8 -----------------------------

function calcularMedia(nota1, nota2, trabalho1, trabalho2) {
    return (nota1 + nota2 + trabalho1 + trabalho2) / 4;
}

function determinarSituacao(media) {
    if (media >= 7.0) {
        return "Aprovado";
    } else if (media >= 4.0 && media <= 6.99) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function lerNotas() {
    let nota1 = parseFloat(prompt("Digite a nota da Prova 1:"));
    let nota2 = parseFloat(prompt("Digite a nota da Prova 2:"));
    let trabalho1 = parseFloat(prompt("Digite a nota do Trabalho 1:"));
    let trabalho2 = parseFloat(prompt("Digite a nota do Trabalho 2:"));
    return { nota1: nota1, nota2: nota2, trabalho1: trabalho1, trabalho2: trabalho2 };
}

const notas = lerNotas();

const media = calcularMedia(notas.nota1, notas.nota2, notas.trabalho1, notas.trabalho2);

const situacao = determinarSituacao(media);

console.log("Situação do aluno:", situacao);
----------------------------- Exercicio 9 -----------------------------

function verificarAnoBissexto(ano) {
    if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
        return true; 
    } else {
        return false; 
    }
}

function lerAno() {
    return parseInt(prompt("Digite um ano para verificar se é bissexto:"));
}

const ano = lerAno();

const resultado = verificarAnoBissexto(ano);

if (resultado) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
----------------------------- Exercicio 10 -----------------------------

function verificarSenha(senhaDigitada) {
    const senhaCorreta = "5479";
    if (senhaDigitada === senhaCorreta) {
        return true;
    } else {
        return false;
    }
}

function lerSenha() {
    return prompt("Digite a senha:");
}

const senhaDigitada = lerSenha();

const acessoPermitido = verificarSenha(senhaDigitada);

if (acessoPermitido) {
    console.log("ACESSO PERMITIDO");
} else {
    console.log("ACESSO NEGADO");
}
----------------------------- Exercicio 11 -----------------------------

function calcularTaxaCorrecao(valorAplicado) {
    if (valorAplicado <= 2000) {
        return 10; 
    } else if (valorAplicado > 2000 && valorAplicado <= 5000) {
        return 12; 
    } else {
        return 13; 
    }
}

function lerValorAplicado() {
    return parseFloat(prompt("Digite o valor aplicado:"));
}

const valorAplicado = lerValorAplicado();

const taxaCorrecao = calcularTaxaCorrecao(valorAplicado);

console.log("Para o valor aplicado de R$" + valorAplicado.toFixed(2) + ", a taxa de correção é de " + taxaCorrecao + "%.");
----------------------------- Exercicio 12 -----------------------------

function calcularAreaTriangulo(lado) {
    return (lado * lado * Math.sqrt(3)) / 4;
}

function calcularAreaQuadrado(lado) {

    return lado * lado;
}

function verificarPoligono(lados, medidaLado) {
    if (lados < 3) {
        console.log("NÃO É UM POLÍGONO");
    } else if (lados === 3) {
        console.log("TRIÂNGULO");
        console.log("Área: " + calcularAreaTriangulo(medidaLado).toFixed(2) + " cm²");
    } else if (lados === 4) {
        console.log("QUADRADO");
        console.log("Área: " + calcularAreaQuadrado(medidaLado).toFixed(2) + " cm²");
    } else if (lados === 5) {
        console.log("PENTÁGONO");
    } else {
        console.log("POLÍGONO NÃO IDENTIFICADO");
    }
}

function lerInformacoesPoligono() {
    let lados = parseInt(prompt("Digite o número de lados do polígono:"));
    let medidaLado = parseFloat(prompt("Digite a medida do lado (em cm):"));
    return { lados: lados, medidaLado: medidaLado };
}

const informacoesPoligono = lerInformacoesPoligono();

verificarPoligono(informacoesPoligono.lados, informacoesPoligono.medidaLado);
----------------------------- Exercicio 13 -----------------------------

function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero"; 
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles"; 
    } else {
        return "Escaleno"; 
    }
}

function lerLadosTriangulo() {
    let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
    let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
    let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));
    return { lado1: lado1, lado2: lado2, lado3: lado3 };
}

const lados = lerLadosTriangulo();

const classificacao = classificarTriangulo(lados.lado1, lados.lado2, lados.lado3);

console.log("O triângulo é classificado como:", classificacao);
----------------------------- Exercicio 14 -----------------------------

function verificarData(dia, mes, ano) {
    function ehBissexto(ano) {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    }

    function verificarDiaValido(dia, mes, ano) {
        if (mes === 2) { // Fevereiro
            return (dia >= 1 && dia <= 28) || (dia === 29 && ehBissexto(ano));
        } else if{ 
            return (dia >= 1 && dia <= 30);
        } else { 
            return (dia >= 1 && dia <= 31);
        }
    }

    if (ano >= 1 && mes >= 1 && mes <= 12 && verificarDiaValido(dia, mes, ano)) {
        return "Data válida";
    } else {
        return "Data inválida";
    }
}

function lerData() {
    let dia = parseInt(prompt("Digite o dia da data:"));
    let mes = parseInt(prompt("Digite o mês da data:"));
    let ano = parseInt(prompt("Digite o ano da data:"));
    return { dia: dia, mes: mes, ano: ano };
}

const data = lerData();

const resultado = verificarData(data.dia, data.mes, data.ano);

console.log(resultado);
----------------------------- Exercicio 15 -----------------------------

function calcularValorTotalLaranjas(quantidade) {
    const precoMenosDoze = 0.40; 
    const precoDozeOuMais = 0.28; 
    let precoTotal;

    if (quantidade < 12) {
        precoTotal = quantidade * precoMenosDoze;
    } else {
        precoTotal = quantidade * precoDozeOuMais;
    }

    return precoTotal.toFixed(2); 
}

function lerQuantidadeLaranjas() {
    return parseInt(prompt("Digite o número de laranjas compradas:"));
}

const quantidade = lerQuantidadeLaranjas();

const valorTotal = calcularValorTotalLaranjas(quantidade);

console.log("O valor total da compra é R$" + valorTotal);
----------------------------- Exercicio 16 -----------------------------

function classificarTriangulo(angulo1, angulo2, angulo3) {
    if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {
        return "Triângulo Retângulo";
    } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        return "Triângulo Obtusângulo";
    } else if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        return "Triângulo Acutângulo";
    } else {
        return "Ângulos inválidos";
    }
}

function lerAngulosTriangulo() {
    let angulo1 = parseInt(prompt("Digite o primeiro ângulo do triângulo:"));
    let angulo2 = parseInt(prompt("Digite o segundo ângulo do triângulo:"));
    let angulo3 = parseInt(prompt("Digite o terceiro ângulo do triângulo:"));
    return { angulo1: angulo1, angulo2: angulo2, angulo3: angulo3 };
}

const angulos = lerAngulosTriangulo();

const classificacao = classificarTriangulo(angulos.angulo1, angulos.angulo2, angulos.angulo3);

console.log("O triângulo é classificado como:", classificacao);
----------------------------- Exercicio 17 -----------------------------

function obterNomeMes(numeroMes) {
    switch (numeroMes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mês inválido!";
    }
}

function lerNumeroMes() {
    return parseInt(prompt("Digite o número do mês (1 a 12):"));
}

const numeroMes = lerNumeroMes();

const nomeMes = obterNomeMes(numeroMes);

console.log("O mês correspondente é:", nomeMes);
----------------------------- Exercicio 18 -----------------------------

function podeVotar(anoNascimento) {
    const idadeMinimaParaVotar = 16;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (idade >= idadeMinimaParaVotar) {
        return "Você pode votar este ano!";
    } else {
        return "Você não pode votar este ano.";
    }
}

function lerAnoNascimento() {
    return parseInt(prompt("Digite o ano de nascimento:"));
}

const anoNascimento = lerAnoNascimento();

const mensagem = podeVotar(anoNascimento);

console.log(mensagem);
----------------------------- Exercicio 19 -----------------------------

function calcularMediaFinal(prova1, prova2, trabalho1, trabalho2, trabalho3, trabalho4) {
    const pesoProvas = 0.5;

    const pesoTrabalhos = 0.5;

    const mediaProvas = ((prova1 + prova2) / 2) * pesoProvas;

    const mediaTrabalhos = ((trabalho1 + trabalho2 + trabalho3 + trabalho4) / 4) * pesoTrabalhos;

    const mediaFinal = mediaProvas + mediaTrabalhos;

    return mediaFinal;
}

function verificarSituacaoAluno(mediaFinal) {
    if (mediaFinal >= 7.0) {
        return "Aprovado";
    } else if (mediaFinal >= 4.0 && mediaFinal < 7.0) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function lerNotasAluno() {
    let prova1 = parseFloat(prompt("Digite a nota da Prova 1:"));
    let prova2 = parseFloat(prompt("Digite a nota da Prova 2:"));
    let trabalho1 = parseFloat(prompt("Digite a nota do Trabalho 1:"));
    let trabalho2 = parseFloat(prompt("Digite a nota do Trabalho 2:"));
    let trabalho3 = parseFloat(prompt("Digite a nota do Trabalho 3:"));
    let trabalho4 = parseFloat(prompt("Digite a nota do Trabalho 4:"));
    return { prova1: prova1, prova2: prova2, trabalho1: trabalho1, trabalho2: trabalho2, trabalho3: trabalho3, trabalho4: trabalho4 };
}

const notas = lerNotasAluno();

const mediaFinal = calcularMediaFinal(notas.prova1, notas.prova2, notas.trabalho1, notas.trabalho2, notas.trabalho3, notas.trabalho4);

const situacao = verificarSituacaoAluno(mediaFinal);

console.log("Situação do aluno:", situacao);
