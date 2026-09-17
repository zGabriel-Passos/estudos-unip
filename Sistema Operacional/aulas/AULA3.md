# Aula 3: Arquitetura de Computadores e Sistemas

## Circuitos Digitais

**Professora:** Profa. Msc. Dorlivete Moreira Shitsuaka

---

## Definição de arquitetura de computadores

> "Arquitetura de computadores é a estrutura e a organização dos hardwares e se refere ao funcionamento interno do computador, isto é, como ele está organizado e arranjado, ou seja, a parte não vista pelo usuário de computador".

Um computador é um aparelho que executa tarefas repetitivas que sabemos como fazer e armazena uma grande quantidade de dados.

Ele pode ser dividido em:

- **Hardware:** parte física do computador.
- **Software:** sistemas operacionais, programas, aplicativos etc.

---

## Tipos de computador

### Computador analógico

Exemplos citados:

- Máquina diferencial de Babbage
- Computador Colossus com relés eletromecânicos
- Multímetro analógico

### Computador digital

> "Computador digital é uma máquina capaz de solucionar problemas por meio das instruções que lhe são fornecidas."  
> Tanenbaum (1992)

Exemplos:

- Microcomputadores atuais
- Tablets
- Supercomputadores

### Comparação rápida

| Tipo | Característica principal | Exemplos |
|---|---|---|
| Analógico | Processa grandezas/sinais contínuos | Multímetro analógico, máquina diferencial |
| Digital | Processa instruções e dados em binário | PCs, tablets, supercomputadores |

---

## Como o computador opera

| Elemento | Definição |
|---|---|
| **Hardware** | Equipamento físico: placa-mãe, CPU, barramento, chips e periféricos |
| **BIOS** | *Basic Input Output System*, programa em ROM com subrotinas de inicialização e uso do sistema |
| **DOS** | *Disk Operation System*, sistema operacional carregado do disco para a memória após a inicialização do hardware |
| **Aplicativo** | Software executado sobre o sistema operacional, como um editor de texto |
| **Usuário** | Operador do sistema |

---

## História: pais da computação

| Nome | Período | Contribuição |
|---|---|---|
| **Alan Mathison Turing** | 1912-1954 | Criou o conceito de Máquina Universal e trabalhou na quebra de códigos da máquina ENIGMA |
| **John von Neumann** | 1903-1957 | Criou a arquitetura de von Neumann, base dos computadores atuais |

---

## O que define um computador

Para que uma máquina seja definida como computador, ela precisa ter capacidade de ser **programada**.

Os computadores atuais podem ser programados com linguagens de programação. Quando esse programa é traduzido para linguagem de máquina, os recursos usados são definidos por um **conjunto de instruções**.

---

## Conjunto de instruções

Conjunto de instruções é o conjunto de funcionalidades às quais um computador, por meio do processador ou microprocessador, consegue responder executando tarefas.

Essas instruções fazem parte do processador ou do microcomputador.

### Categorias de instruções

| Categoria | Função |
|---|---|
| **Movimentação de dados** | Copiar dados de um registrador para outro |
| **Aritméticas e lógicas** | Somar, subtrair, multiplicar, dividir e executar operações como AND, OR e NOT |
| **Comparação e desvio condicional** | Comparar valores e alterar o fluxo de execução |
| **Chamadas e procedimentos** | Chamar procedimento ou função |
| **Loop** | Controlar laços de repetição |
| **Entrada e saída** | Receber dados de entrada e enviar dados de saída |

As instruções armazenadas na memória formam uma sequência chamada **programa**. O processador lê essas instruções e executa a tarefa especificada.

---

## Linguagem de máquina

O processador de um computador digital reconhece apenas dois níveis de sinais elétricos:

- **1** = nível alto
- **0** = nível baixo

As instruções precisam ser escritas como sequências de sinais altos e baixos. Essa forma de escrita é chamada de **linguagem de máquina**.

### Características

- Muito próxima do hardware
- Poucas instruções disponíveis
- Programação mais longa e detalhada
- Maior complexidade para o programador

> Quanto mais próxima da linguagem de máquina, menor é o número de instruções existentes e mais complexa tende a ser a programação.

---

## Interpretação de programas

O **interpretador** executa linha por linha, comando por comando, um de cada vez.  
Esse modelo é ideal para depuração e correção de programas durante a fase de programação.

---

## Linguagens e tradução

### Visão geral

| Nível | Exemplo | Característica |
|---|---|---|
| **Linguagem de alto nível** | Java, Cobol, Pascal, C | Mais próxima da linguagem humana |
| **Linguagem de montagem** | Assembly | Usa mnemônicos, operandos e frequentemente valores hexadecimais |
| **Linguagem de máquina** | Binário | Executada diretamente pela máquina |

### Processo de tradução

| Origem | Tradutor | Saída |
|---|---|---|
| Linguagem de alto nível | Compilador ou interpretador | Código de menor nível |
| Linguagem de montagem | Assembler | Programa objeto em linguagem de máquina |
| Linguagem de máquina | Não precisa de tradução adicional | Execução pelo processador |

### Resumo comparativo

| Critério | Alto nível | Montagem | Máquina |
|---|---|---|---|
| Facilidade de leitura | Alta | Média | Baixa |
| Proximidade do hardware | Baixa | Alta | Máxima |
| Uso de mnemônicos | Não necessariamente | Sim | Não |
| Uso de binário explícito | Não | Não na maior parte | Sim |
| Facilidade de programação | Alta | Média/baixa | Muito baixa |

Fonte mencionada na aula: `http://algol.dcc.ufla.br/~monserrat/icc/Capitulo3.html`

---

## Exemplo: SAP1

O **SAP1** é um processador hipotético usado para simulação.

### Características do SAP1

| Item | Descrição |
|---|---|
| Quantidade de instruções | 5 instruções |
| Memória | 16 x 8 |
| Significado da memória 16 x 8 | 16 posições de memória com 8 bits em cada posição |
| Endereços | Em hexadecimal |

---

## Instruções, mnemônicos e opcode

As instruções possuem:

- **Nome**
- **Mnemônico:** apelido legível da instrução
- **Operandos:** valores ou endereços usados pela instrução
- **Opcode:** código de operação em binário

O computador entende apenas presença ou ausência de sinal, então cada instrução precisa de um opcode.

### Tabela de instruções do SAP1

| Mnemônico | Opcode | Função |
|---|---|---|
| **LDA** | `0000` | Carrega no acumulador o valor contido no endereço de memória indicado pelo operando |
| **ADD** | `0001` | Soma ao acumulador o valor do endereço de memória indicado pelo operando |
| **SUB** | `0010` | Subtrai do acumulador o valor contido no endereço de memória indicado pelo operando |
| **OUT** | `1110` | Mostra no módulo indicador visual binário o conteúdo do acumulador |
| **HLT** | `1111` | Para o processamento e encerra o programa |

### Leitura prática da tabela

| Instrução | O que faz no acumulador |
|---|---|
| `LDA X` | Carrega o valor armazenado em `X` |
| `ADD X` | Soma ao valor atual do acumulador o conteúdo de `X` |
| `SUB X` | Subtrai do valor atual do acumulador o conteúdo de `X` |
| `OUT` | Exibe o resultado atual |
| `HLT` | Finaliza a execução |

---

## Organização da memória no SAP1

O SAP1 mistura **instruções e dados em uma única memória**.

### Regra de organização

- As **primeiras posições** da memória devem conter as instruções
- Após o fim das instruções, devem ser inseridos os dados
- Não há ponto fixo separando área de programa e área de dados

### Regra prática

| Faixa de endereços | Conteúdo esperado |
|---|---|
| Endereços mais baixos | Instruções |
| Endereços mais altos | Dados |

O programador deve analisar o espaço disponível para verificar se o programa cabe na memória.

---

## Exemplos propostos na aula

### Em linguagem de montagem

1. Programa para retornar o resultado de `3 + 5`
2. Os valores `3` e `5` devem ser armazenados nas posições `EH` e `FH` da memória

### Em linguagem de máquina

1. Programa para retornar o resultado de `3 + 5`
2. Os valores `3` e `5` também devem ser armazenados nas posições `EH` e `FH`

---

## Exercícios

### Exercícios em linguagem de montagem

1. Escreva um programa-fonte em linguagem de montagem para o SAP1 capaz de executar `7 - 3`  
   Observação: os valores `7` e `3` estão em decimal e devem ser armazenados em `EH` e `FH`.

2. Escreva um programa-fonte em linguagem de montagem para o SAP1 capaz de executar `2 + 5 + 20 - 17`  
   Observação: os valores `2`, `5`, `20` e `17` devem ser armazenados entre `CH` e `FH`.

### Exercícios em linguagem de máquina

3. Escreva um programa-fonte em linguagem de máquina para o SAP1 capaz de executar `7 - 3`  
   Observação: os valores `7` e `3` estão em decimal e devem ser ser armazenados em `EH` e `FH`.

4. Escreva um programa-fonte em linguagem de máquina para o SAP1 capaz de executar `2 + 5 + 20 - 17`  
   Observação: os valores `2`, `5`, `20` e `17` devem ser armazenados entre `CH` e `FH`.

---

## Níveis de máquina nos computadores atuais

Os computadores atuais possuem 6 ou mais níveis de máquina.

### Exemplo de níveis citados

| Nível/elemento citado | Exemplo |
|---|---|
| Binários | Base mais próxima do hardware |
| Processadores | Execução física das instruções |
| Assembly | Linguagem de baixo nível |
| Assembler | Tradutor da linguagem de montagem |
| Linguagens de alto nível | Java, Pascal, C |
| SO | Camada de operações complexas |

---

## Tecnologias e materiais que possibilitaram os computadores atuais

### Tabela de materiais

| Material | Característica principal | Uso citado |
|---|---|---|
| **Metal** | Bom condutor de eletricidade e calor | Fios, trilhas, cabos, barramentos |
| **Semicondutores** | Podem se comportar como condutores ou isolantes | Diodos, LEDs, transistores |
| **Solda PbSn** | Liga metálica de chumbo e estanho | Fixação de chips e componentes |
| **Aço** | Liga ferro-carbono, material barato | Gabinetes, armários, estruturas metálicas |
| **Alumínio** | Condutor e dissipador de calor | Base do cooler |
| **Cobre** | Bom condutor e dissipador de calor | Fios, barramentos, base do cooler |
| **Cerâmica** | Isolante e resistente a altas temperaturas | Invólucro do processador, capacitores |
| **Poliéster** | Polímero/plástico isolante | Revestimento de fios e capacitores |
| **Ouro** | Condutor que não oxida | Contatos de processadores e chips |
| **Silício** | Semicondutor base da eletrônica digital | Portas lógicas, transistores, diodos |
| **Lítio** | Geração de energia | Baterias não recarregáveis da placa-mãe |
| **Níquel-Cádmio** | Metais usados em baterias recarregáveis | Placa-mãe, celular, notebook |
| **Estanho** | Baixo ponto de fusão, usado em solda | Fixação de componentes e reparos |
| **Plástico** | Material isolante | Placa-mãe multicamada, capacitores, fios |

### Observações sobre semicondutores

- Se recebem mais elétrons, podem comportar-se como condutores
- Se perdem elétrons, podem comportar-se como isolantes
- Por isso podem atuar como chaves eletrônicas

### Silício dopado

| Combinação | Resultado |
|---|---|
| Silício + Fósforo | Tipo **N** |
| Silício + Índio | Tipo **P** |

---

## Circuitos digitais

Os computadores podem ser classificados quanto ao tipo de processamento em:

- **Analógicos:** processam sinais elétricos
- **Digitais:** utilizam dígitos binários para representar a programação

Os computadores digitais trabalham com a presença ou ausência de sinais elétricos ao longo do circuito. Por meio da combinação desses sinais, as informações são processadas.

A lógica usada nesse processamento é a **lógica booleana**.

Os componentes físicos capazes de efetuar operações booleanas sobre os sinais elétricos são chamados de **portas lógicas**, implementadas com circuitos de transistores.

---

## Circuito elétrico da fonte de alimentação

### Componentes citados

| Componente | Função |
|---|---|
| **Transformador** | Reduz a tensão de 110V para 12V |
| **Ponte de diodos (4)** | Retifica a tensão |
| **Capacitor** | Armazena e libera energia para reduzir oscilações |
| **Resistor** | Atua no circuito oferecendo resistência elétrica |

---

## Componentes eletrônicos básicos

| Componente | Descrição |
|---|---|
| **Resistores** | Opoem-se à passagem de corrente, dissipam calor e podem dividir tensão ou corrente |
| **Indutores** | Tendem a conservar a energia posta no sistema |
| **Capacitores** | Armazenam cargas ou energia elétrica |
| **Diodo** | Permite passagem de corrente em um único sentido |
| **Transistores** | Amplificam sinais e funcionam como chave liga/desliga |

---

## Portas lógicas

As portas lógicas funcionam com ondas quadradas ou digitais.

### Níveis lógicos citados

| Valor lógico | Tensão |
|---|---|
| **1** | Acima de 3V |
| **0** | Abaixo de 2V |

---

## Resumo final

- A arquitetura de computadores trata da organização interna do hardware
- O computador é dividido em hardware e software
- Um computador digital executa instruções usando binários
- O processador lê instruções armazenadas na memória e as executa
- O conjunto de instruções define o que a máquina pode fazer
- O SAP1 é um modelo didático útil para entender linguagem de máquina e montagem
- Circuitos digitais dependem de portas lógicas, transistores e materiais semicondutores

---

## Referência citada na aula

- Supercomputador: `http://www.inovacaotecnologica.com.br/noticias/noticia.php?artigo=supercomputador-mais-rapido-do-mundo-usa-processador-de-videogame`
- Fonte adicional mencionada: `http://algol.dcc.ufla.br/~monserrat/icc/Capitulo3.html`
