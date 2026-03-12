# Resumo - Sistemas Operacionais (Aulas 1 e 2)

## O que é um Sistema Operacional?

Um sistema operacional realiza **duas funções essenciais**:

1. **Fornecer abstrações** — Oferece aos programadores um conjunto de recursos abstratos e limpos em vez de recursos confusos de hardware
2. **Gerenciar hardware** — Gerencia os recursos de hardware do sistema (CPU, memória, disco, E/S)

### Visão em Camadas

```
┌─────────────────────────────────────────────────────────────┐
│          Programas Aplicativos (usuário / apps)             │
├─────────────────────────────────────────────────────────────┤
│         Sistema Operacional  ◄── camada de abstração        │
│    (gerencia recursos e fornece interface limpa)            │
├─────────────────────────────────────────────────────────────┤
│              Hardware (CPU, memória, disco, E/S)            │
└─────────────────────────────────────────────────────────────┘
```

---

## História dos Sistemas Operacionais

### Linha do Tempo - 5 Gerações

```
  1945       1955         1965          1980          1990       hoje
    │           │            │             │             │          │
    ▼           ▼            ▼             ▼             ▼          ▼
┌────────┐ ┌────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ ┌────────┐
│  1ª    │ │  2ª    │  │   3ª     │  │   4ª     │  │  5ª    │ │Atual   │
│Geração │ │Geração │  │ Geração  │  │ Geração  │  │Geração │ │        │
│Válvulas│ │Transist│  │CIs e     │  │Computad. │  │Comput. │ │Cloud / │
│        │ │+ Batch │  │Multiprog.│  │Pessoais  │  │Móveis  │ │Mobile  │
└────────┘ └────────┘  └──────────┘  └──────────┘  └────────┘ └────────┘
```

### 1ª Geração (1945–1955): Válvulas

- **Charles Babbage** (1792–1871): projetou o primeiro computador verdadeiramente digital
- Programador reservava horário, descia até a sala de máquinas e inseria painel de programação
- ~20.000 válvulas que podiam queimar durante a operação
- **Sem sistema operacional** — programação direta no hardware

### 2ª Geração (1955–1965): Transistores e Sistemas Batch

- Máquinas chamadas de **mainframes**
- Programador escrevia em FORTRAN ou assembly e perfurava em **cartões**
- **Processamento em lote (batch)**: tarefas agrupadas e executadas sequencialmente

**Fluxo Batch:**
```
Cartões → IBM 1401 (lê para fita) → Operador leva fita → IBM 7094 (processa)
                                                              ↓
Operador leva fita de saída → IBM 1401 (imprime) → Saídas impressas
```

### 3ª Geração (1965–1980): Circuitos Integrados e Multiprogramação

- **IBM 360**: primeira linha importante a usar CIs (circuitos integrados)
- **OS/360**: sistema operacional que funcionava em todos os modelos da família
- **Multiprogramação**: técnica revolucionária que divide memória em partições

#### Multiprogramação

```
┌─────────────────────────────────────────────────────┐
│              MEMÓRIA PRINCIPAL                      │
├─────────────────────────────────────────────────────┤
│  Partição 1 │  Tarefa A  │ (aguardando E/S...)      │
├─────────────────────────────────────────────────────┤
│  Partição 2 │  Tarefa B  │ (usando CPU agora!) ◄──  │
├─────────────────────────────────────────────────────┤
│  Partição 3 │  Tarefa C  │ (aguardando CPU...)       │
├─────────────────────────────────────────────────────┤
│  Partição 4 │  Tarefa D  │ (aguardando E/S...)      │
└─────────────────────────────────────────────────────┘
         │
         ▼
  CPU ocupa quase 100% do tempo!
  Enquanto uma tarefa espera E/S, outra usa a CPU.
```

#### Spooling

**SPOOL** (*Simultaneous Peripheral Operation On Line*): transferência de tarefas de cartões para o disco assim que chegavam.

```
Cartões → Disco (spool) → Partição de memória → CPU → Saída (spool) → Impressora
```

#### Timesharing (Compartilhamento de Tempo)

- Cada usuário tem um **terminal on-line**
- **CTSS** (Compatible Time Sharing System) — M.I.T., 1962
- **MULTICS** (MULTiplexed Information and Computing Service) — influenciou sistemas futuros

#### Árvore Genealógica: de MULTICS ao Linux

```
MULTICS
   │
   ▼
UNIX (Ken Thompson)
   ├──► FreeBSD
   ├──► iOS
   ├──► Android
   ├──► MINIX (Tanenbaum, 1987 — fins educacionais)
   │        │
   │        ▼
   │      Linux (Linus Torvalds — versão gratuita do MINIX)
   └──► macOS (derivado do BSD)
```

### 4ª Geração (1980–presente): Computadores Pessoais

- **LSI** (Large Scale Integration): chips com milhares de transistores
- **Intel 8080** (1974): primeira CPU de 8 bits de uso geral
- **Gary Kildall**: criou o primeiro microcomputador com disco

**A história do DOS:**
```
Intel 8080 (1974) → Gary Kildall cria SO → IBM procura Gates
                                              ↓
                    Gates compra DOS (~US$ 75.000) → MS-DOS
```

### 5ª Geração (1990–presente): Computadores Móveis

- Dispositivos móveis: smartphones e tablets
- Sistemas operacionais: **Android**, **iOS**
- **Cloud Computing**: conceito do computador utilitário (MULTICS) aplicado à nuvem

---

## Tipos de Sistemas Operacionais

```
                    SISTEMAS OPERACIONAIS
                            │
            ┌───────────────┼───────────────┐
            │               │               │
    Monoprogramáveis  Multiprogramáveis  Múltiplos
                            │            Processadores
                    ┌───────┴────────┐
                    │                │
               Monousuário      Multiusuário
                    │
            ┌───────┴────────┐
            │                │
          Batch         Time-Sharing     Tempo Real
```

### Sistemas Monoprogramáveis

- Execução de **um único programa por vez**
- Qualquer outra aplicação aguarda o término da atual
- **Recursos exclusivos** para uma única tarefa
- **Baixo aproveitamento da CPU**

```
┌─────────────────────────────────────────────────────┐
│              SISTEMA MONOPROGRAMÁVEL                │
│                                                     │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐        │
│  │Programa A│──►│Programa B│──►│Programa C│  ...   │
│  └──────────┘   └──────────┘   └──────────┘        │
│  (executa)   (aguarda)      (aguarda)               │
│                                                     │
│  CPU: ████████████░░░░░░░░░░░░░░░░░░░░░░░          │
│       (usada só por A)    (ociosa)                  │
└─────────────────────────────────────────────────────┘
```

### Sistemas Multiprogramáveis

- SO gerencia **acesso concorrente** aos recursos
- Vários programas na memória simultaneamente
- **Alto aproveitamento da CPU**

```
┌─────────────────────────────────────────────────────┐
│              SISTEMA MULTIPROGRAMÁVEL               │
│                                                     │
│  Programa A ──┐                                     │
│  Programa B ──┼──► SO gerencia ──► CPU / Memória    │
│  Programa C ──┘    (escalonador)   / Periféricos    │
│                                                     │
│  CPU: ██░██░░██░██░░██░░██░██░░██  (bem aproveitada)│
│       A B  C  A  B   C  A  B   C                   │
└─────────────────────────────────────────────────────┘
```

#### Comparação: Mono vs Multi

| Característica | Monoprogramável | Multiprogramável |
|----------------|-----------------|------------------|
| Programas simultâneos | 1 | Vários |
| Aproveitamento da CPU | Baixo | Alto |
| Complexidade do SO | Baixa | Alta |
| Recursos | Exclusivos | Compartilhados |
| Tempo total de execução | Maior | Menor (em média) |

---

## Gerência de Aplicações

### Sistemas Batch

- Primeiros SOs multiprogramáveis (década de 1960)
- **Não exigem interação do usuário** durante a execução
- Entradas e saídas via memória secundária
- Exemplos: cálculos numéricos, compilações, ordenações, backups

```
Fila de tarefas ──► [Tarefa 1] ──► [Tarefa 2] ──► [Tarefa 3] ──► ...
                      executa        espera          espera
                    (sem usuário interagindo)
```

### Sistemas de Tempo Compartilhado (Time-Sharing)

- Tempo do processador dividido em **fatias de tempo (time-slice)**
- Se a fatia não for suficiente, processo é interrompido e outro assume
- Cada usuário tem um **terminal on-line**

```
FATIAS DE TEMPO (time-slice)
──────────────────────────────────────────────────────►  tempo
│   P1   │   P2   │   P3   │   P1   │   P2   │   P3   │
└────────┴────────┴────────┴────────┴────────┴────────┘
   10ms     10ms     10ms     10ms     10ms     10ms

P1, P2, P3 = Processos que se revezam na CPU
```

### Sistemas de Tempo Real (Real-Time)

- Tempos de processamento dentro de **limites rígidos**
- **Não existe fatia de tempo**
- Programa usa CPU até terminar ou até aparecer outro **mais prioritário**
- Exemplos: controle de voo, UTI, freios ABS, usinas nucleares

```
┌──────────────────────────────────────────────────────┐
│           COMPARAÇÃO: TIME-SHARING vs REAL-TIME      │
├─────────────────────┬────────────────────────────────┤
│    Time-Sharing     │        Real-Time               │
├─────────────────────┼────────────────────────────────┤
│ Fatia de tempo fixa │ Sem fatia de tempo             │
│ Tempo pode variar   │ Prazo rígido (deadline)        │
│ Aplicações comuns   │ Sistemas críticos              │
│ Ex: navegador, Word │ Ex: controle de voo, UTI,      │
│                     │ freios ABS, usinas             │
└─────────────────────┴────────────────────────────────┘
```

---

## Sistemas com Múltiplos Processadores

Possuem **duas ou mais UCPs interligadas** trabalhando em conjunto.

**Vantagens:**
- Vários programas executados ao mesmo tempo
- Um programa pode ser subdividido e executado em paralelo
- Escalabilidade, disponibilidade e balanceamento de carga

### Fortemente Acoplados (Tightly Coupled)

- Vários processadores compartilham **uma única memória física**
- Gerenciados por **um único sistema operacional**
- Dividem-se em **Simétricos** e **Assimétricos**
- Exemplos: Unix, Microsoft Windows

### Fracamente Acoplados (Loosely Coupled)

- Dois ou mais sistemas **conectados por linhas de comunicação**
- Cada sistema funciona **de forma independente**, com seu próprio SO
- Dividem-se em:
  - **Sistemas Operacionais de Rede**
  - **Sistemas Distribuídos**

```
┌──────────────────────────────────────────────────────┐
│         TIPOS DE ACOPLAMENTO                         │
│                                                      │
│  FORTEMENTE ACOPLADO        FRACAMENTE ACOPLADO      │
│  (Tightly Coupled)          (Loosely Coupled)        │
│                                                      │
│  ┌─────┐ ┌─────┐            ┌────────────┐           │
│  │UCP 1│ │UCP 2│            │ Sistema A  │           │
│  └──┬──┘ └──┬──┘            │ UCP+Mem+SO │           │
│     └───┬───┘               └─────┬──────┘           │
│    ┌────▼────┐                    │ rede             │
│    │Memória  │              ┌─────▼──────┐           │
│    │Física   │              │ Sistema B  │           │
│    │(shared) │              │ UCP+Mem+SO │           │
│    └─────────┘              └────────────┘           │
│  1 único SO gerencia        Cada sistema tem seu SO  │
└──────────────────────────────────────────────────────┘
```

---

## Gerência de Processos

### O que é um Processo?

Um processo tem **duas partes**:

- **Ativa**: fluxo de controle (execução)
- **Passiva**: espaço de endereçamento (memória)

### Thread (Processo Leve)

- **Ativa**: fluxo de controle
- **Endereçamento compartilhado** (consome menos recursos do sistema)

### Processos Concorrentes

- Múltiplos processos solicitam recursos da CPU simultaneamente (**acesso concorrente**)
- SO deve garantir que um processo não altere dados que outro esteja usando
- SO regula a ordem de acesso aos dados

### Swapping

- Processo em estado de **pronto** ou **espera** pode não estar na memória principal
- Parte do contexto do processo é levada para a **memória secundária**
- **Swapping**: retira processos da memória principal e os traz de volta

### Tipos de Processo

**Processo CPU-bound:**
- Utiliza muito a CPU
- Ganha fatia de tempo e a utiliza por inteiro
- Faz pouca ou nenhuma entrada de dados

**Processo I/O-bound:**
- Utiliza muito mais E/S do que CPU
- Permanece mais tempo em espera (tratando interrupções)

---

## Políticas de Escalonamento

### Funções Básicas

1. Manter o processador ocupado a maior parte do tempo
2. Balancear o uso da CPU entre processos
3. Privilegiar a execução de aplicações críticas
4. Maximizar o *throughput* (rendimento) do sistema
5. Oferecer tempos de resposta razoáveis para usuários interativos

### Escalonador (*Scheduler*)

- Rotina do SO que implementa os critérios da política de escalonamento
- Fundamental em sistemas multiprogramáveis
- Todo compartilhamento do processador depende dessa rotina

### Tipos de Escalonamento

**Preempção**: possibilidade do SO interromper um processo em execução e substituí-lo por outro

- **Escalonamento Não-Preemptivo**: processo não pode ser interrompido
- **Escalonamento Preemptivo**: processo pode ser interrompido pelo SO

---

## Algoritmos de Escalonamento Não-Preemptivo

### 1. FIFO (First In, First Out) ou FCFS (First Come, First Served)

- Processo que chega primeiro ao estado de pronto é selecionado
- Processos entram no final da fila e são escalonados quando chegam ao início
- Impossível prever quando um processo terá sua execução iniciada

**Exemplo:**

| PROCESSO | SURTO | CHEGADA |
|----------|-------|---------|
| PA       | 12    | 0       |
| PB       | 8     | 2       |
| PC       | 7     | 4       |
| PD       | 4     | 5       |
| PE       | 5     | 6       |

```
| PA  | PB  | PC  | PD  | PE  |
| 0   | 12  | 20  | 27  | 31  | 36
```

**TEM (Tempo de Espera Médio)** = (0+12+20+27+31)/5 = **18 ms**

### 2. SJF (Shortest Job First)

- Seleciona o processo com **menor tempo** de processador ainda por executar
- Pode ocasionar **starvation** (inanição) para processos longos

**Exemplo SJF Não-Preemptivo:**

```
| PD  | PE  | PC  | PB  | PA  |
| 0   | 4   | 9   | 16  | 24  | 36
```

**TEM** = (5+2+5+14+24)/5 = **10 ms**

**Exemplo SJF Preemptivo:**

- Processo pode ser interrompido se chegar outro com tempo menor
- **Shortest Remaining Time**: variação preemptiva de SJF

**TEM** = (24+5+14+6+7)/5 = **11,2 ms**

### 3. HRN (Highest Response-Ratio Next)

- Prioriza processos com tempo de execução mais curto (semelhante ao SJF)
- Leva em consideração também o **tempo de espera**

**Fórmula:** prioridade = tempo de espera + tempo de serviço

### 4. Escalonamento Cooperativo

- Processo em execução pode **voluntariamente liberar** o processador
- Retorna à fila de pronto, permitindo melhor distribuição no uso do processador
- Processo verifica periodicamente uma fila de mensagens

---

## Algoritmos de Escalonamento Preemptivo

### 1. Round Robin (Circular)

- Semelhante ao FIFO, mas com **tempo limite** para uso contínuo do processador
- **Fatia de tempo** (*time slice*) ou *quantum*
- Se a fatia expira, SO interrompe o processo e o direciona para o final da fila
- **Preempção por tempo**

**Exemplo RR = 5 ms:**

| PROCESSO | SURTO | CHEGADA |
|----------|-------|---------|
| PA       | 12    | 0       |
| PB       | 8     | 2       |
| PC       | 7     | 4       |
| PD       | 4     | 5       |
| PE       | 5     | 6       |

```
| PA 5 | PB 5 | PC 5 | PD 4 | PE 5 | PA 5 | PB 3 | PC 2 | PA 2 |
| 0    | 5    | 10   | 15   | 19   | 24   | 29   | 32   | 34   | 36
```

**TEM** = (53+43+51+27+31)/5 = **41 ms**

### 2. Escalonamento por Prioridades

- Processo com **maior prioridade** no estado de pronto é sempre escolhido
- Processos com valores iguais seguem critério FIFO
- Perda do processador ocorre quando:
  - Mudança voluntária para estado de espera
  - Processo de prioridade maior passa para estado de pronto
- **Preempção por prioridade**

**Exemplo:**

```
| PA  | PB  | PC  | PD  | PE  |
| 0   | 12  | 20  | 27  | 31  | 36
```

**TEM** = (0+12+20+27+31)/5 = **18 ms**

### 3. Escalonamento por Múltiplas Filas

- Processos associados às **filas em função de características próprias**
- Importância para a aplicação, tipo de processamento, área de memória necessária
- **Vantagem**: convivência de mecanismos de escalonamento distintos em um mesmo SO

---

## Diagrama de Estados dos Processos

```
Estado de criação → Fila de processos no estado de Pronto → CPU → Estado de término
                           ↑                                    ↓
                           └──────── Estado de espera ─────────┘
                                  (Preempção por tempo)
```

---

## Conceitos-Chave

✓ **SO**: Fornece abstrações e gerencia hardware

✓ **Multiprogramação**: Vários programas na memória, CPU bem aproveitada

✓ **Spooling**: Transferência de tarefas para disco para carregamento imediato

✓ **Timesharing**: Compartilhamento de tempo com fatias (time-slice)

✓ **Real-Time**: Prazos rígidos, sem fatia de tempo

✓ **Processo**: Parte ativa (fluxo) + parte passiva (endereçamento)

✓ **Thread**: Processo leve com endereçamento compartilhado

✓ **Swapping**: Troca de processos entre memória principal e secundária

✓ **CPU-bound**: Processo que usa muito a CPU

✓ **I/O-bound**: Processo que usa muito E/S

✓ **Escalonador**: Rotina do SO que implementa política de escalonamento

✓ **Preempção**: SO pode interromper processo em execução

✓ **FIFO/FCFS**: Primeiro a chegar, primeiro a ser servido

✓ **SJF**: Menor job primeiro (pode causar starvation)

✓ **Round Robin**: Fatia de tempo fixa, preempção por tempo

✓ **Prioridades**: Processo com maior prioridade é escolhido, preempção por prioridade

✓ **Starvation**: Processo nunca é executado (inanição)

✓ **TEM**: Tempo de Espera Médio (métrica de desempenho)

---

## Comparação de Algoritmos

| Algoritmo | Tipo | Vantagem | Desvantagem |
|-----------|------|----------|-------------|
| **FIFO** | Não-preemptivo | Simples | Tempo de espera pode ser alto |
| **SJF** | Não-preemptivo | Menor TEM | Starvation para processos longos |
| **SJF Preemptivo** | Preemptivo | Otimiza tempo | Overhead de troca de contexto |
| **Round Robin** | Preemptivo | Justo, bom para interativo | TEM pode ser alto |
| **Prioridades** | Preemptivo | Atende processos críticos | Starvation para baixa prioridade |
| **Múltiplas Filas** | Preemptivo | Flexível | Complexo de implementar |

---

## Mapa Mental - Visão Geral

```
                        SISTEMAS OPERACIONAIS
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                       │
   Monoprogramáveis       Multiprogramáveis      Múltiplos
   (monotarefa)                  │               Processadores
                    ┌────────────┼────────────┐       │
                    │            │            │  ┌────┴────┐
              Monousuário   Multiusuário   Gerência  Fort. │ Frac.
                                           Aplicações Acop.│Acop.
                                           │
                           ┌───────────────┼──────────────┐
                           │               │              │
                         Batch        Time-Sharing    Real-Time
                      (sem interação) (fatia de      (prazos
                                       tempo)         rígidos)
                                       
                        ESCALONAMENTO DE PROCESSOS
                                 │
                    ┌────────────┴────────────┐
                    │                         │
            Não-Preemptivo              Preemptivo
                    │                         │
        ┌───────────┼───────────┐   ┌─────────┼─────────┐
        │           │           │   │         │         │
      FIFO        SJF         HRN  RR    Prioridades  Múltiplas
                                                        Filas
```
