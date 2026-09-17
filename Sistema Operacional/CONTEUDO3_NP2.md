# AULA 3 - Arquitetura de Computadores e Sistemas

## CIRCUITOS DIGITAIS

*Profa. Msc. Dorlivete Moreira Shitsuaka*

---

## O que é Arquitetura de Computadores?

> "Arquitetura de computadores é a estrutura e a organização dos hardwares e se refere ao funcionamento interno do computador, isto é, como ele está organizado e arranjado, ou seja, a parte não vista pelo usuário de computador."

---

## Conceitos Fundamentais

### O que é um Computador?

Computador nada mais é do que um aparelho que **executa tarefas repetitivas** que sabemos como fazer e **armazena uma grande quantidade de dados**.

Ele pode ser dividido em:
- **Hardware:** a parte física do computador
- **Software:** a parte dos Sistemas Operacionais, programas e aplicativos etc.

---

## Evolução dos Computadores

### Computadores Analógicos

- **Máquina diferencial de Babbage**
- **Computador Colossus:** funcionava com relés que são chaves (liga/desliga) de controle eletromecânicas
- **Multímetro analógico**

### Computadores Digitais

> "Computador digital é uma máquina capaz de solucionar problemas por meio das instruções que lhe são fornecidas." — Tanenbaum (1992)

**Exemplos:** microcomputadores atuais, tablets, supercomputadores etc.

**Supercomputador mais rápido do mundo:** está instalado no Laboratório Nacional Los Alamos, nos Estados Unidos, é um equipamento híbrido, formado por 12.240 processadores PowerXCell 8i 3200 MHz.

---

## Como o Computador Opera

### Camadas do Sistema Computacional

1. **HARDWARE:** é o equipamento físico, consistindo da placa-mãe, CPU, barramento, chips e seus periféricos.

2. **BIOS** (Basic Input Output System): é um programa armazenado em memória tipo ROM que contém subrotinas da inicialização e uso do sistema.

3. **DOS** (Disk Operation System): é o sistema operacional que é carregado do disco para a memória assim que o hardware é inicializado.

4. **APLICATIVO:** é o software que executa em cima do sistema operacional como por exemplo, um editor de texto.

5. **USUÁRIO:** é o operador do sistema.

---

## Os Pais da Computação

### Alan Mathison Turing (1912-1954)

- **Nacionalidade:** Inglês
- **Contribuição:** Criou o conceito de **Máquina Universal**, diferenciando computadores de calculadoras
- **2ª Guerra Mundial:** Trabalhou na tradução de códigos da máquina alemã ENIGMA

### John Von Neumann (1903-1957)

- **Nacionalidade:** Naturalizado americano
- **Contribuição:** Criou a **arquitetura de computadores de von Neumann**, que é a dos computadores atuais
- **Características:** Trabalha com binários, processador, memórias, entradas e saídas

---

## Conceito de Máquina Universal

Para que uma máquina seja definida como um computador, ele tem que ter a **capacidade de ser programada** (conceito de Máquina Universal de Turing).

Computadores atuais podem ser programados utilizando-se uma **linguagem de programação**.

Quando este programa é traduzido em **linguagem de máquina**, os recursos que ele utiliza para as suas tarefas são definidas em um **conjunto de funcionalidades** chamadas de **conjunto de instruções**.

---

## Conjunto de Instruções

### O que são?

São definidas como sendo um **conjunto de funcionalidades** ao qual um computador, por meio do processador ou microprocessador, é capaz de responder executando alguma tarefa.

Estas instruções fazem parte do processador ou do microcomputador.

---

## Categorias de Instruções

### 1. Instruções de Movimentação de Dados

Servem para copiar um dado de um registrador para outro.

### 2. Instruções Aritméticas e Lógicas

Utilizadas para somar, subtrair, multiplicar, dividir, executar operações lógicas, por exemplo: AND, OR, NOT etc.

### 3. Instruções de Comparação e Desvio Condicional

Utilizadas para comparar valores ou desviar o fluxo de execução do programa.

### 4. Instruções de Chamadas e Procedimentos

São responsáveis por chamar um procedimento ou função (subconjunto de instruções).

### 5. Instruções de LOOP

Usadas para controlar laços de repetição, fazendo com que um conjunto de instruções sejam executadas várias vezes.

### 6. Instruções de Entrada e Saída

São as instruções responsáveis pela entrada e saída de dados para serem processados (entrada) ou que já foram processados (saída).

---

## Programas e Processamento

As instruções geralmente armazenadas nas memórias, formam uma sequência e recebem o nome de **programa (software)**.

O **processador**, por sua vez, "lê" estas instruções e executa a tarefa especificada.

---

## Linguagem de Máquina

O processador de um computador digital só reconhece **dois níveis de sinais elétricos**: alto e baixo (1 ou 0).

Para enviarmos instruções para o processador devemos escrevê-las em **códigos formados por um conjunto de sinais elétricos** compostos de níveis alto e baixo.

Uma **sequência adequada** de sinais altos e baixos irá constituir-se em uma **instrução**.

Escrever instruções no formato de sinais elétricos, aliado a pequena quantidade de instruções disponíveis, torna o processo **longo e complexo**.

Esta forma de escrever é chamada de **linguagem de máquina**.

---

## Interpretadores e Compiladores

### Interpretador

Executa **linha por linha**, comando por comando, um de cada vez, isto é, executa uma linha e pára, esperando o próximo comando. É ideal para **depuração** ou correção de programas, durante a fase de programação.

### Importante

**Quanto mais próxima da linguagem de máquina, menor é o número de instruções existentes e, portanto, mais complexa e detalhada deve ser a programação.**

Para realizar todas operações terá que usar mais linhas e mais detalhes, pois conta-se com menos instruções.

---

## Variação entre Processadores

O conjunto de instruções **varia sempre de um computador para outro**, os tipos de instruções apresentados anteriormente e os termos podem ser aplicados para quase todos os processadores.

---

## Exemplo: Processador SAP1

### O que é o SAP1?

**SAP1** (processador hipotético – simula um processador)

- Tem **poucas instruções** (5 instruções)
- A memória do SAP1 é uma memória **16 x 8**, ou seja:
  - 16 posições de memória
  - 8 bits cada posição para o armazenamento de dados

### Memória do SAP1

**Estrutura:** 16 (posições) × 8 (bits)

**Observação:** Os endereços estão em **Hexadecimal**

---

## Componentes das Instruções

### Instruções possuem:

1. **NOME** (também conhecido por **MNEMÔNICO** - apelido)
2. Um ou mais **OPERANDOS**
3. **OPCODE** (código de operação) - cada instrução possui um código em binário

O **OPCODE** é utilizado sempre que for necessário fazer uma programação em linguagem de máquina, ou quando você precisar entender o que se passa dentro da máquina quando uma instrução estiver sendo executada.

---

## Instruções do SAP1

| **MNEMÔNICO** | **OPCODE** | **FUNÇÃO** |
|---------------|------------|------------|
| **LDA** | 0000 | Carrega o valor contido no endereço de memória pelo seu operando no acumulador. |
| **ADD** | 0001 | Soma o valor contido no endereço de memória apontado pelo seu operando com o conteúdo armazenado no acumulador. |
| **SUB** | 0010 | Subtrai do valor contido no acumulador, o valor contido no endereço da memória apontado pelo seu operando. |
| **OUT** | 1110 | Faz com que o conteúdo armazenado no acumulador seja indicado no módulo indicador visual binário. **MOSTRA** |
| **HLT** | 1111 | Para o processamento. É utilizado no final do programa. **ENCERRA** |

---

## Organização da Memória no SAP1

O SAP1 mistura as instruções e os dados em uma única memória e, sendo assim, a divisão entre instruções e dados:

- As **instruções** deverão ocupar, **sequencialmente**, as primeiras posições da memória
- Somente **após o término das instruções** é que deverão ser inseridos os **dados**

### Regras:

- **Não existe um ponto fixo** separando a área de programação da área disponível para o armazenamento dos dados
- O programador deverá analisar a quantidade de memória necessária
- **Endereços mais baixos:** conterão as instruções
- **Endereços mais altos:** conterão os dados

---

## Exemplo de Programa

### Exemplo: Calcular 3 + 5

**Linguagem de Montagem (Assembly)**

Faremos um programa para retornar o resultado de **3 + 5**

**OBS.:** Os valores 3 e 5 estão no sistema de numeração decimal e deverão ser armazenados nas posições **EH** e **FH** da memória.

```assembly
LDA EH    ; Carrega o valor 3
ADD FH    ; Soma com 5
OUT       ; Mostra resultado
HLT       ; Encerra
```

**Linguagem de Máquina**

O mesmo programa em binário (usando os OPCODEs).

---

## Hierarquia das Linguagens

### Fluxo de Tradução

```
LINGUAGEM DE ALTO NÍVEL (Java, Cobol...)
           ↓
LINGUAGEM DE MONTAGEM (Assembly)
- Utiliza mnemônicos, valores hexadecimal e operandos
- Programa fonte
           ↓
    Tradutores (Assembler)
    Compiladores ou Interpretadores
           ↓
LINGUAGEM DE MÁQUINA (binários)
- Programa objeto
```

---

## Exercícios Propostos

### Exercício 1

Escreva um programa fonte em **linguagem de montagem** para o SAP1, que seja capaz de executar **7 – 3**

**OBS.:** Os valores 7 e 3 estão no sistema de numeração decimal e deverão ser armazenados nas posições **EH** e **FH** da memória.

### Exercício 2

Escreva um programa fonte em **linguagem de montagem** para o SAP1, que seja capaz de executar **2 + 5 + 20 - 17**

**OBS.:** Os valores 2, 5, 20 e 17 estão no sistema de numeração decimal e deverão ser armazenados nas posições compreendidas entre **CH** e **FH** da memória.

### Exercício 3

Escreva um programa fonte em **linguagem de máquina** para o SAP1, que seja capaz de executar **7 – 3**

**OBS.:** Os valores 7 e 3 estão no sistema de numeração decimal e deverão ser armazenados nas posições **EH** e **FH** da memória.

### Exercício 4

Escreva um programa fonte em **linguagem de máquina** para o SAP1, que seja capaz de executar **2 + 5 + 20 - 17**

**OBS.:** Os valores 2, 5, 20 e 17 estão no sistema de numeração decimal e deverão ser armazenados nas posições compreendidas entre **CH** e **FH** da memória.

---

## Níveis de Máquinas

Os computadores atuais possuem **6 ou mais níveis de máquinas**:

1. **Linguagens de Alto Nível:** Java, Pascal, C...
2. **Linguagem de Montagem:** Assembly
3. **Sistema Operacional:** desenvolve operações complexas
4. **Assembler**
5. **Processadores**
6. **Binários**

---

# TECNOLOGIAS E MATERIAIS

## Materiais que Possibilitaram o Desenvolvimento dos Computadores

---

## 1. Metal

### Características:
- Tipo de material com ligação química na qual os átomos ficam em posições fixas formando uma **grade cristalina**
- Elétrons da última camada eletrônica ficam livres para se movimentar
- Formam uma espécie de **nuvem eletrônica** dentro da estrutura cristalina
- **Bom condutor** de eletricidade e calor
- Possui brilho metálico

### Uso:
- Todos os fios condutores
- Placa-mãe, trilhas
- Cabos (flat, USB, teclado, mouse, força, molex)

---

## 2. Semicondutores

### Características:
- Materiais que apresentam **4 elétrons na última camada**
- Podem se comportar como **condutores** ou como **isolantes**:
  - Se recebem **mais elétrons que 4:** comportam-se como metais
  - Se perdem **um elétron:** comportam-se como isolantes
- Podem ser utilizados como:
  - **Chaves eletrônicas** tipo liga-desliga (transistores)
  - Materiais que só permitem passagem de corrente em **única direção** (diodos)
  - **Amplificadores** de correntes e sinais elétricos (transistores)

### Uso:
- Diodos
- Diodo emissor de luz (LED)
- Diodo Zener (regula tensão)
- Transistores (NPN e PNP) com Base (B), Coletor (C) e Emissor (E)

---

## 3. Solda Elétrica

### Características:
- Utiliza-se a solda **Chumbo-Estanho** (Pb-Sn)
- Mistura de dois elementos formando uma **liga metálica**
- Proporção: aproximadamente **63% de estanho** e **37% de chumbo** em peso

### Uso:
- Fixar chips em placas
- Fixar componentes (resistores, transistores, diodos etc.)
- Unir pedaços de fio
- Consertar trilhas quebradas

---

## 4. Aço

### Características:
- Liga **ferro-carbono**
- Menos de 1% de carbono
- Condutor de elétrons
- Material barato

### Uso:
- Chaparias (chapa do gabinete)
- Armários
- Partes metálicas de mesas e cadeiras

---

## 5. Alumínio

### Características:
- Metal condutor de elétrons
- **Dissipador de calor**

### Uso:
- Base (onde fixa) do cooler

---

## 6. Cobre

### Características:
- Metal condutor de elétrons
- **Bom dissipador de calor**

### Uso:
- Base do cooler
- Fios
- Barramento

---

## 7. Cerâmica

### Características:
- **Isolante**
- Resiste a altas temperaturas
- Formado por óxidos

### Uso:
- Envólucro do processador
- Capacitores (reservatório de energia)

---

## 8. Poliéster

### Características:
- Polímero ou plástico

### Uso:
- Encapar fios (cabo flat, fonte de alimentação, capacitores etc.)

---

## 9. Ouro

### Características:
- Metal condutor de sinais (elétrons)
- **Não se oxida**

### Uso:
- Pintura em pernas do processador
- Pernas dos chips para evitar corrosão

---

## 10. Silício

### Características:
- **Semi-metal** (ou semicondutor)
- Possui **4 elétrons** na última camada eletrônica
- Se receber mais 1 elétron → vira metal (5 elétrons)
- Se perder 1 elétron → vira isolante (3 elétrons)
- Pode ligar e desligar e atuar como amplificador

### Dopagem:
- **Silício tipo N (negativo):** adiciona-se Fósforo (5 elétrons) ao Silício (4 elétrons)
- **Silício tipo P (positivo):** adiciona-se Índio (3 elétrons) ao Silício (4 elétrons)

### Uso:
- Portas lógicas (chips e processador)
- Transistores (chip)
- Diodos (chips, fonte de alimentação)

---

## 11. Lítio

### Características:
- Elemento químico, não metálico
- Serve para gerar energia

### Uso:
- Baterias (não recarregáveis) na placa-mãe

---

## 12. Níquel-Cádmio

### Características:
- Metais utilizados em energia recarregável
- **Tóxico**

### Uso:
- Baterias (recarregáveis) na placa-mãe, celular, notebook

---

## 13. Estanho

### Características:
- Metal de **baixo ponto de fusão**
- Condutor de elétrons
- Pode formar liga de solda com chumbo

### Uso:
- Fixação de chips na placa-mãe
- Fixação de componentes na placa-mãe
- União de fios
- Reparos eletrônicos
- Fonte de alimentação

---

## 14. Plástico

### Características:
- Polímero
- Isolante

### Uso:
- Placa-mãe (placa de acrílico multicamada)
- Capacitores
- Revestimento de fios

---

# CIRCUITOS DIGITAIS

## Introdução aos Circuitos Digitais

### Classificação dos Computadores

Existem vários parâmetros para a classificação de computadores, entretanto o que mais nos interessa é **quanto ao tipo de processamento**.

Os computadores podem ser classificados em:
- **Analógicos:** processam sinais elétricos
- **Digitais:** utilizam dígitos binários para representar a programação

---

## Funcionamento dos Computadores Digitais

Os computadores digitais trabalham com a **presença ou ausência de sinais elétricos** ao longo do seu circuito e, por meio de **combinação desses sinais**, todas as informações são processadas.

A lógica utilizada para processar as informações digitais é a **lógica booleana** e, agora, como os operadores booleanos terão de efetuar operações sobre dados físicos, teremos também que ter componentes físicos para a implementação do circuito digital.

Os componentes físicos capazes de efetuar as operações booleanas sobre os sinais elétricos recebem o nome de **portas lógicas** (circuitos de transistor).

---

## Circuito Elétrico da Fonte de Alimentação

### Componentes Principais:

1. **TRANSFORMADOR:** Reduz a tensão de 110V para 12V

2. **PONTE DE DIODO (4 diodos):** Retifica a tensão (ou energia), fica positivo num sentido

3. **CAPACITOR:** Armazena e libera tensão (ou energia) para tirar as subidas

4. **RESISTOR:** Ligando o circuito

---

## Componentes de Circuitos Digitais

### Resistores

**Função:**
- Representa uma **resistência** (se opõe) à passagem da corrente
- Dissipa calor
- Serve como **divisores de tensão ou de corrente**

**Definição:** Componentes cuja finalidade é apresentar uma certa resistência elétrica.

---

### Indutores

**Função:**
- Tende a **conservar a energia** posta (colocada) no sistema

---

### Capacitores

**Definição:** Componente que pode **armazenar cargas ou energia elétrica**.

---

### Diodos

**Função:**
- Deixa corrente passar num **único sentido**
- **Retifica a corrente**

---

### Transistores

**Funções:**
- **Amplifica sinais**
- Serve de **chave liga/desliga**

---

## Portas Lógicas

As portas lógicas são os blocos básicos dos circuitos digitais. Elas funcionam com **ondas quadradas** ou **digitais**.

### Níveis de Tensão:

- **1 (HIGH):** acima de 3V
- **0 (LOW):** abaixo de 2V

### Tipos de Portas Lógicas:

As portas lógicas implementam as operações booleanas básicas:

- **AND** (E)
- **OR** (OU)
- **NOT** (NÃO)
- **NAND** (NÃO-E)
- **NOR** (NÃO-OU)
- **XOR** (OU-EXCLUSIVO)
- **XNOR** (NÃO-OU-EXCLUSIVO)

---

## Resumo - Arquitetura de Computadores

### Conceitos Fundamentais

- **Arquitetura:** estrutura e organização dos hardwares
- **Hardware:** parte física do computador
- **Software:** programas e sistemas operacionais
- **Processador:** executa instruções em linguagem de máquina

### Linguagens de Programação

1. **Linguagem de Alto Nível:** Java, C, Python (mais próxima do humano)
2. **Linguagem de Montagem:** Assembly (mnemônicos)
3. **Linguagem de Máquina:** Binário (0s e 1s)

### Conjunto de Instruções

- **Movimentação de dados**
- **Aritméticas e lógicas**
- **Comparação e desvio**
- **Chamadas e procedimentos**
- **Loops**
- **Entrada e Saída**

### Materiais Importantes

- **Semicondutores:** base dos transistores e chips
- **Metais:** condutores (cobre, ouro, alumínio)
- **Isolantes:** plástico, cerâmica
- **Silício:** material principal dos processadores

### Circuitos Digitais

- **Trabalham com sinais binários** (0 e 1)
- **Portas lógicas:** implementam operações booleanas
- **Componentes:** resistores, capacitores, diodos, transistores
- **Processam informações** através da lógica booleana

---

**Fim da Aula 3 - Arquitetura de Computadores e Circuitos Digitais**

*Material elaborado pela Profa. Msc. Dorlivete Moreira Shitsuaka*