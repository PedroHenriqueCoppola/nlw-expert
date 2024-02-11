const perguntas = [
    {
      pergunta: "O que significa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Modelo de Objeto de Documento",
        "Design de Objeto Móvel"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retornar o tipo de dado de uma variável",
        "Comparar dois valores",
        "Realizar uma iteração em um array"
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let x = 5;",
        "const x = 'Hello';",
        "ambas as opções anteriores estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de animação",
        "Um método de ordenação de dados",
        "O comportamento de mover declarações para o topo do escopo"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' em relação à declaração de variáveis?",
      respostas: [
        "let é usado para variáveis mutáveis, enquanto const é usado para constantes",
        "let é usado para variáveis de escopo global, enquanto const é usado para escopo local",
        "Não há diferença, são intercambiáveis"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um 'closure' em JavaScript?",
      respostas: [
        "Uma função que não tem acesso ao escopo externo",
        "Uma função que retorna outra função e mantém acesso ao escopo externo",
        "Uma estrutura de controle de fluxo"
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle de fluxo que permite tomar decisões em JavaScript?",
      respostas: [
        "Switch",
        "If-Else",
        "Loop"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "'Este é um comentário'",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de intercâmbio de dados",
        "Um tipo de estrutura de controle de fluxo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para converter uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }