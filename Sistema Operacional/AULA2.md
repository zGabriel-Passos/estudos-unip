# Gerência de Processos - Sistema Operacional

## Gerenciamento de processos

Com o surgimento dos **sistemas multiprogramáveis**, onde múltiplos processos podem permanecer na memória principal compartilhando o uso da CPU.

Um dos problemas mais difíceis na administração de recursos está relacionado ao fato de muitos processos solicitarem recursos da CPU simultaneamente (**acesso concorrente**).

> A gerência do processador tornou-se uma das atividades mais importantes em um sistema operacional.

---

## Processos concorrentes

Os **processos concorrentes** frequentemente acessam o mesmo arquivo, e o sistema operacional deve garantir que um processo não possa alterar os dados que outro processo esteja usando.

Outro exemplo de processo concorrente ocorre quando um processo gera dados que um outro processo usará, nesse caso o **SO** deve garantir que o segundo processo não tente usar os dados antes que o primeiro os tenha gerado.

O SO deve regular a ordem segundo a qual os processos acessam os dados.

---

## Composição de um processo

Um processo tem duas partes:

### Processo
- **Ativa** - fluxo de controle
- **Passiva** - espaço de endereçamento

### Processo Leve (Thread)
- **Ativa** - fluxo de controle
- **Endereçamento compartilhado** (consume menos recursos do sistema)

---

## Swapping

Um processo em **estado de pronto** ou **de espera** pode não se encontrar na **memória principal**.

Esta condição ocorre quando não existe espaço suficiente para todos os processos na memória principal e parte do contexto do processo é levada para a **memória secundária**.

> Uma técnica conhecida como **swapping** retira processos da memória principal e os traz de volta seguindo critérios de cada sistema operacional.

---

## Tipos de processo

Além dos **processos do usuário**, a CPU também executa **processos do sistema**. Estes executam sempre, com certa prioridade, concorrendo com os processos do usuário.

---

## Tipos de processo

Os processos em execução, do usuário, podem assumir dois tipos diferentes, de acordo com suas características de uso de CPU e periféricos:

### Processo CPU-bound
- É aquele processo que utiliza muito a CPU;
- Ele ganha uma fatia de tempo e a utiliza por inteiro;
- Normalmente fazem pouca ou nenhuma entrada de dados.

### Processo I/O-bound
- Tipo de processo que utiliza muito mais E/S do que CPU
- Permanece mais tempo em espera (tratando interrupções) do que propriamente em execução.

---

## Políticas de escalonamento

A partir do momento em que diversos processos podem estar no estado de pronto, devem ser estabelecidos critérios para determinar qual processo será escolhido para fazer uso do processador.

A **política de escalonamento** de um sistema operacional possui diversas funções básicas, como:

1. manter o processador ocupado a maior parte do tempo;
2. balancear o uso da CPU entre processos;
3. privilegiar a execução de aplicações críticas;
4. maximizar o *throughput* (rendimento) do sistema;
5. oferecer tempos de resposta razoáveis para usuários interativos.

---

## Escalonador (*scheduler*)

Cada **SO** possui sua **política de escalonamento** adequada ao seu propósito e às suas características.

A **rotina do SO** que tem como principal função implementar os critérios da política de escalonamento é denominada escalonador (*scheduler*).

> Em um **sistema multiprogramável**, o escalonador é fundamental, pois todo o compartilhamento do processador é dependente dessa rotina.

---

## Tipos de escalonamento

As **políticas de escalonamento** podem ser classificadas segundo a possibilidade do **SO** interromper um processo em execução e substituí-lo por um outro, atividade esta conhecida como **preempção**.

### Escalonador Não-Preemptivo
### Escalonador Preemptivo

---

## Escalonamento Não-Preemptivo

Nesse tipo de escalonamento, quando um processo está em execução nenhum evento externo pode ocasionar a perda do uso do processador.

1. Escalonamento Primeiro a entrar, primeiro a sair (FIFO)
2. Escalonamento Menor Job Primeiro (SJF)
3. Escalonamento pela Próxima Taxa de Resposta mais Alta (HRN)
4. Escalonamento Cooperativo

---

## Escalonamento FIFO

### 1) Escalonamento Primeiro a entrar, primeiro a sair (FIFO)
*First In, First Out*

Neste escalonamento, o processo que chegar primeiro ao estado de pronto é o selecionado para execução.

Os processos que passam para o estado de pronto entram no final da fila e são escalonados quando chegam ao seu início.

Impossibilidade de se prever quando um processo terá sua execução iniciada, já que isso varia em função do tempo de execução dos demais processos posicionais à sua frente na fila de pronto.

---

### Exemplo FIFO ou FCFS

**Gerenciador de tarefas**

| PROCESSO | SURTO | CHEGADA | PRIORIDADE |
|----------|-------|---------|------------|
| PA       | 12    | 0       | 0          |
| PB       | 8     | 2       | 1          |
| PC       | 7     | 4       | 2          |
| PD       | 4     | 5       | 2          |
| PE       | 5     | 6       | 3          |

RR = 5

---

### FIFO ou FCFS

Em Ciência da Computação, algoritmo de fila simples, FIFO (do inglês: first in, first out, "primeiro a entrar, primeiro a sair", "PEPS") ou FCFS (do inglês: first come, first served, "primeiro a chegar, primeiro a ser servido") é um algoritmo de escalonamento para estruturas de dados do tipo fila.

---

### FIFO ou FCFS - Cálculo

| PA  | PB  | PC  | PD  | PE  |
|-----|-----|-----|-----|-----|
| 0   | 12  | 20  | 27  | 31  | 36

TEM (Tempo de Espera Médio) = (0+12+20+27+31)/5 = **18 ms** (milissegundos)

---

## Escalonamento SJF

### 2) Escalonamento Menor Job Primeiro (SJF)
*Shortest Job First*

Seleciona o processo que tiver o **menor tempo** de processador ainda por executar.

Dessa forma, o processo em estado de pronto que necessitar de menos tempo de CPU para terminar seu processamento é selecionado para execução.

Pode ocasionar a situação de **starvation** (inanição) para processos com tempo de processador muito longo.

---

### SJF (Shortest job first) - Não Preemptivo

**ENTROU (Está a esquerda do processo) - SAIU (Chegada na tabela)**

| PROCESSO | Último Executado | Quanto Executou | Chegada | Resultado |
|----------|------------------|-----------------|---------|-----------|
| PD       | 0                | -               | 5       | -5        |
| PE       | 4                | -               | 6       | -2        |
| PC       | 9                | -               | 4       | 5         |
| PB       | 16               | -               | 2       | 14        |
| PA       | 24               | -               | 0       | 24        |

| PD  | PE  | PC  | PB  | PA  |
|-----|-----|-----|-----|-----|
| 0   | 4   | 9   | 16  | 24  | 36

TEM (Tempo de Espera Médio) = (5+2+5+14+24)= 50  
50/5 = **10 ms** (milissegundos)

---

### SJF (Shortest job first) - Preemptivo

Shortest Job First, ou Shortest Job Next, ou ainda Shortest Process Next é uma política de escalonamento que seleciona para ser executado o processo com o menor tempo de execução. SJF é um algoritmo não-preemptivo. **Shortest Remaining Time** é uma variação preemptiva de SJF.

---

### SJF Preemptivo - Linha do Tempo
```
Tempo: 0  01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36
PA:   12 11 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10  9  8  7  6  5  4  3  2  1  0
PB:    8  7  6  5  5  5  5  5  4  3  2  1  0
PC:    7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  7  6  5  4  3  2  1  0
PD:    4  3  2  1  0
PE:    5  5  5  5  5  5  5  5  5  4  3  2  1  0
```

---

### SJF Preemptivo - Cálculo

| PROCESSO | Última Execução | Quanto Executou | Chegada | Resultado |
|----------|-----------------|-----------------|---------|-----------|
| PA       | 26              | 2               | 0       | 24        |
| PB       | 9               | 2               | 2       | 5         |
| PC       | 19              | 1               | 4       | 14        |
| PD       | 0               | 1               | 5       | -6        |
| PE       | 14              | 1               | 6       | 7         |

TEM (Tempo de Espera Médio) = (24+5+14+6+7)= 56  
56/5 = **11,2 ms** (milissegundos)

---

## Escalonamento HRN

### 3) Escalonamento pela Próxima Taxa de Resposta Mais Alta (HRN)
*Highest Response-Ratio Next*

Escalonamento em que são priorizados os processos que possuem tempo de execução mais curto (semelhante ao SJF) com a diferença de levar em consideração também o tempo de espera.

**prioridade = tempo de espera + tempo de serviço**

---

## Escalonamento Cooperativo

### 4) Escalonamento Cooperativo

Um processo em execução pode voluntariamente liberar o processador retornando à fila de pronto, possibilitando que um novo processo seja escalonado e, assim, permitir melhor distribuição no uso do processador.

O processo em execução verifica periodicamente uma fila de mensagens para determinar se existem outros processos na fila de pronto.

---

## Escalonamento Preemptivo

O **escalonamento preemptivo** é caracterizado pela possibilidade do sistema operacional interromper um processo em execução e passá-lo para o estado de pronto, com o objetivo de alocar outro processo na CPU.

1. Escalonamento Round Robin (ou Circular)
2. Escalonamento por Prioridades
3. Escalonamento por Múltiplas Filas

---

## Escalonamento Circular

### 1) Escalonamento Round Robin (ou Circular)

Semelhante ao FIFO, porém quando um processo passa para o estado de execução, existe um **tempo limite** para o uso contínuo do processador denominado **fatia de tempo** (*time slice*) ou *quantum*.

Caso a fatia de tempo expire, o **SO** interrompe o processo em execução, salva seu contexto e direciona-o para o final da fila de pronto.

Esse mecanismo é conhecido por **preempção por tempo**.

---

### RR (Round-robin)

Round-robin é um dos algoritmos empregados por escalonadores de processo e de rede, em computação. Como o termo é geralmente usado, fatias de tempo são atribuídas a cada processo em partes iguais e em ordem circular, manipulando todos os processos sem prioridade.

---

### RR (Round-Robin) - Exemplo Completo

**RR = 5 Milissegundos**

| PA 5 | PB 5 | PC 5 | PD 5 | PE 5 | PA 5 | PB 5 | PC 5 | PA 5 |
|------|------|------|------|------|------|------|------|------|
| 0→12₇| 12→20₃| 20→27₂| 27→31₀| 31→36₀| 36→48₂| 48→56₀| 56→63₀| 63→75₀|

**Detalhamento dos Surtos:**
- Surto 12: Executou 5, sobrou 7
- Surto 8: Executou 5, sobrou 3
- Surto 7: Executou 5, sobrou 2
- Surto 4: Executou 4, sobrou 1
- Surto 5: Executou 5, sobrou 0
- Surto 12 (de 5): Executou 5, sobrou 2
- Surto 8 (de 5): Executou 3, sobrou 2
- Surto 7 (de 5): Executou 2, sobrou 3
- Surto 12 (de 5): Executou 2, sobrou 3

**Cálculo do Tempo de Espera:**

| PROCESSO | Último ENTROU | SAIU (Nu × Fatia) | Resultado |
|----------|---------------|-------------------|-----------|
| PA       | 63            | (2×5) = 10        | 53        |
| PB       | 48            | (1×5) = 5         | 43        |
| PC       | 56            | (1×5) = 5         | 51        |
| PD       | 27            | (0×5) = 0         | 27        |
| PE       | 31            | (0×5) = 0         | 31        |

TEM (Tempo de Espera Médio) = (53+43+51+27+31)= 205  
205/5 = **41 ms** (milissegundos)

---

## Escalonamento por Prioridades

### 2) Escalonamento por Prioridades

O processo com **maior prioridade** no estado de pronto é sempre o escolhido para execução, e **processos com valores iguais são escalonados seguindo o critério do FIFO**.

A perda do uso do processador só ocorrerá no caso de uma mudança voluntária para o estado de espera ou quando um processo de prioridade maior passa para o estado de pronto.

Neste caso, o **SO** deverá interromper o processo corrente, salvar seu contexto e colocá-lo no estado de pronto.

Esse mecanismo é conhecido como **preempção por prioridade**.

---

### Prioridade - Exemplo

**Montar com a ordem seguindo a Prioridade da Tabela**

| PROCESSO | SURTO | CHEGADA | PRIORIDADE |
|----------|-------|---------|------------|
| PA       | 12    | 0       | 0          |
| PB       | 8     | 2       | 1          |
| PC       | 7     | 4       | 2          |
| PD       | 4     | 5       | 2          |
| PE       | 5     | 6       | 3          |

| PA  | PB  | PC  | PD  | PE  |
|-----|-----|-----|-----|-----|
| 0   | 12  | 20  | 27  | 31  | 36

TEM (Tempo de Espera Médio) = (0+12+20+27+31)/5 = **18 ms** (milissegundos)

---

## Escalonamento por Múltiplas Filas

### 3) Escalonamento por Múltiplas Filas

Os processos são associados às **filas em função de características próprias**, como importância para a aplicação, tipo de processamento ou área de memória necessária.

A principal vantagem de múltiplas filas é a possibilidade da convivência de mecanismos de escalonamento distintos em um mesmo sistema operacional.

---

## Atividade 1 (ENTREGA INDIVIDUAL)

Cria **2 tabelas** de Gerenciamento de Processos, Contendo:
- Mínimo 6 Processos
- Surto de cada Processo
- Ordem de chegada na CPU de cada Processo
- Prioridade do sistema para cada Processo
- RR (para o Round-Robin)

### Calcular:

1. Qual o tempo de Espera Médio para executar os 6 Processos, utilizando o **Escalonamento FCFS**?

2. Qual o tempo de Espera Médio para executar os 6 Processos, utilizando o **Escalonamento SJF não Preemptivo**?

3. Qual o tempo de Espera Médio para executar os 6 Processos, utilizando o **Escalonamento SJF Preemptivo**? 
   - **(Obrigatório: Linha do Tempos e Cálculos)**

4. Qual o tempo de Espera Médio para executar os 6 Processos, utilizando o **Escalonamento RR Round-robin**? 
   - **(Obrigatório: Linha do Tempos e Cálculos)**

### PARA HOJE

**Enviar para:** atividades.prof.allexandre@gmail.com
- Nome Completo, RGM e Turma

---

## Links para Atividades

**Tabela 1:** https://encurtador.com.br/agJMP  
**Tabela 2:** https://encurtador.com.br/iopr7

**Instruções:**
- Para Hoje
- Grupos de até 5 integrantes
- Apenas 1 (um) envio por grupo

---

## Diagrama de Estados dos Processos
```
Estado de criação → Fila de processos no estado de Pronto → CPU → Estado de término
                           ↑                                    ↓
                           └──────── Estado de espera ─────────┘
                                  (Preempção por tempo)
```

---

## Observações Finais

- O escalonador é fundamental em sistemas multiprogramáveis
- Diferentes políticas de escalonamento atendem a diferentes necessidades
- Escalonamento não-preemptivo: processo não pode ser interrompido
- Escalonamento preemptivo: processo pode ser interrompido pelo SO
- A escolha do algoritmo depende dos objetivos do sistema (tempo de resposta, throughput, etc.)

---

**Professor:** Allexandre  
**Email:** atividades.prof.allexandre@gmail.com