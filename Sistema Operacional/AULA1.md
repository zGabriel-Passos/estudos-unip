# Sistemas Operacionais

---

## O que é um Sistema Operacional?

Um sistema operacional realiza **duas funções essencialmente não relacionadas**:

1. **Fornecer abstrações** — oferecer aos programadores de aplicativos um conjunto de recursos abstratos e limpos em vez de recursos confusos de hardware.
2. **Gerenciar hardware** — gerenciar os recursos de hardware do sistema.

```
┌─────────────────────────────────────────────────────────────┐
│                     VISÃO EM CAMADAS                        │
├─────────────────────────────────────────────────────────────┤
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

O primeiro computador verdadeiramente digital foi projetado pelo matemático inglês **Charles Babbage (1792–1871)**.

```
LINHA DO TEMPO DOS SISTEMAS OPERACIONAIS
─────────────────────────────────────────────────────────────────────────────►
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

---

### 1ª Geração (1945–1955): Válvulas

O programador reservava um bloco de tempo, descia até a sala de máquinas, inseria seu painel de programação e torcia para que **nenhuma das ~20.000 válvulas queimasse** durante a operação.

```
┌────────────────────────────────────────┐
│  MODO DE OPERAÇÃO — 1ª GERAÇÃO        │
│                                        │
│  Programador                           │
│      │                                 │
│      ▼                                 │
│  Reserva horário na ficha de parede    │
│      │                                 │
│      ▼                                 │
│  Desce até a sala de máquinas          │
│      │                                 │
│      ▼                                 │
│  Insere painel de programação          │
│      │                                 │
│      ▼                                 │
│  Executa o programa (torce para não    │
│  queimar nenhuma válvula!)             │
└────────────────────────────────────────┘
```

---

### 2ª Geração (1955–1965): Transistores e Sistemas Batch

Máquinas chamadas de **mainframes**. O programador escrevia o programa no papel (em FORTRAN ou assembly) e depois perfurava em cartões.

**Fluxo de processamento em lote (batch):**

```
  (a)              (b)              (c)              (d)
Programador    IBM 1401 lê     Operador leva    IBM 7094
leva cartões   lote de         fita p/ o 7094   executa o
para o 1401    tarefas                          processamento
    │          p/ fita              │                │
    ▼              │                ▼                ▼
┌───────┐      ┌───────┐       ┌───────┐        ┌───────┐
│Cartões│─────►│  1401 │──────►│  Fita │───────►│  7094 │
└───────┘      └───────┘       └───────┘        └───┬───┘
                                                     │
  (f)              (e)                               │ fita de saída
IBM 1401       Operador leva  ◄────────────────────────
imprime as     fita de saída
saídas         para o 1401
    ▲              │
    │              ▼
┌───────┐      ┌───────┐
│Saídas │◄─────│  1401 │
└───────┘      └───────┘
```

---

### 3ª Geração (1965–1980): Circuitos Integrados e Multiprogramação

- **IBM 360**: primeira linha importante a usar CIs (circuitos integrados).
- **OS/360**: sistema operacional que devia funcionar em todos os modelos da família.
- Técnica mais importante: **multiprogramação**.

#### Multiprogramação — Divisão de memória em partições

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

Técnica chamada de **SPOOL** (*Simultaneous Peripheral Operation On Line*): transferência de tarefas de cartões para o disco assim que chegavam, permitindo carregamento imediato de novas tarefas ao fim de cada execução.

```
Cartões ──► Disco (spool) ──► Partição de memória ──► CPU ──► Saída (spool) ──► Impressora
```

#### Timesharing (Compartilhamento de Tempo)

Variante da multiprogramação onde **cada usuário tem um terminal on-line**.

- **CTSS** (Compatible Time Sharing System) — desenvolvido no M.I.T., 1962.
- **MULTICS** (MULTiplexed Information and Computing Service) — influenciou fortemente sistemas futuros.

#### Árvore genealógica: de MULTICS ao Linux

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

> **Cloud Computing:** o conceito do computador utilitário do MULTICS pode ser visto hoje na computação em nuvem, onde dispositivos pequenos (smartphones, tablets) se conectam a servidores remotos para processamento.

---

### 4ª Geração (1980–presente): Computadores Pessoais

- **LSI** (Large Scale Integration): chips com milhares de transistores em 1 cm² de silicone.
- **Intel 8080** (1974): primeira CPU de 8 bits de uso geral.
- **Gary Kildall**: criou o primeiro microcomputador com disco para o 8080.

**A história do DOS:**

```
Intel lança o 8080 (1974)
        │
        ▼
Gary Kildall cria controlador de disco + SO
        │
        ▼
IBM procura Gates para um SO
        │
        ▼
Gates compra DOS da Seattle Computer Products (~US$ 75.000)
        │
        ▼
Gates vende DOS/BASIC para a IBM
        │
        ▼
IBM PC lançado com MS-DOS
```

---

### 5ª Geração (1990–presente): Computadores Móveis

Surgimento dos dispositivos móveis e sistemas operacionais para smartphones e tablets (Android, iOS).

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
            │                │               │
          Batch         Time-Sharing     Tempo Real
```

---

### Sistemas Monoprogramáveis

Os primeiros SOs, voltados para a **execução de um único programa por vez**. Qualquer outra aplicação aguardava o término da atual.

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

**Característica:** todos os recursos (CPU, memória, periféricos) ficam **exclusivamente dedicados** a uma única tarefa.

---

### Sistemas Multiprogramáveis

O SO gerencia o **acesso concorrente** aos recursos (memória, processador, periféricos) de forma ordenada e protegida entre os diversos programas.

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

#### Mono vs. Multi — Comparação

| Característica | Monoprogramável | Multiprogramável |
|----------------|-----------------|------------------|
| Programas simultâneos | 1 | Vários |
| Aproveitamento da CPU | Baixo | Alto |
| Complexidade do SO | Baixa | Alta |
| Custo / compartilhamento | Recursos exclusivos | Recursos compartilhados |
| Tempo total de execução | Maior | Menor (em média) |

---

### Gerência de Usuários

```
SISTEMAS MULTIPROGRAMÁVEIS
           │
     ┌─────┴──────┐
     │             │
Monousuário    Multiusuário
     │             │
PCs e         Servidores /
estações de   terminais com
trabalho      vários usuários
              simultâneos
```

---

### Gerência de Aplicações

#### Sistemas Batch

- Primeiros SOs multiprogramáveis (década de 1960).
- **Não exigem interação do usuário** durante a execução.
- Entradas e saídas via memória secundária.
- Exemplos: cálculos numéricos, compilações, ordenações, backups.

```
Fila de tarefas ──► [Tarefa 1] ──► [Tarefa 2] ──► [Tarefa 3] ──► ...
                      executa        espera          espera
                    (sem usuário interagindo)
```

---

#### Sistemas de Tempo Compartilhado (Time-Sharing)

O tempo do processador é dividido em **fatias de tempo (time-slice)**. Se a fatia não for suficiente para concluir o programa, ele é interrompido e outro assume.

```
FATIAS DE TEMPO (time-slice)
──────────────────────────────────────────────────────►  tempo
│   P1   │   P2   │   P3   │   P1   │   P2   │   P3   │
└────────┴────────┴────────┴────────┴────────┴────────┘
   10ms     10ms     10ms     10ms     10ms     10ms

P1, P2, P3 = Processos que se revezam na CPU
Cada processo percebe que tem a CPU "para si"
```

---

#### Sistemas de Tempo Real (Real-Time)

Os tempos de processamento devem estar dentro de **limites rígidos**. Não existe fatia de tempo — um programa usa a CPU o tempo necessário ou até que apareça outro **mais prioritário**.

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
- Vários programas executados ao mesmo tempo.
- Um programa pode ser subdividido e executado em paralelo.
- Escalabilidade, disponibilidade e balanceamento de carga.

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

### Sistemas Fortemente Acoplados (Tightly Coupled)

- Vários processadores compartilham **uma única memória física**.
- Gerenciados por **um único sistema operacional**.
- Dividem-se em **Simétricos** e **Assimétricos**.
- Exemplos: Unix, Microsoft Windows.

### Sistemas Fracamente Acoplados (Loosely Coupled)

- Dois ou mais sistemas **conectados por linhas de comunicação**.
- Cada sistema funciona **de forma independente**, com seu próprio SO e recursos.
- Dividem-se em:
  - **Sistemas Operacionais de Rede**
  - **Sistemas Distribuídos**

```
┌──────────────────────────────────────────────────────────┐
│          SISTEMAS FRACAMENTE ACOPLADOS                   │
│                                                          │
│  ┌──────────┐   rede/link   ┌──────────┐                │
│  │Sistema A │◄─────────────►│Sistema B │                │
│  │ SO-A     │               │ SO-B     │                │
│  │ CPU-A    │               │ CPU-B    │                │
│  │ Mem-A    │               │ Mem-B    │                │
│  └──────────┘               └──────────┘                │
│                                                          │
│       ┌──────────────────────────────┐                  │
│       │  SO de Rede  │  Distribuído  │                  │
│       └──────────────────────────────┘                  │
└──────────────────────────────────────────────────────────┘
```

---

## Visão Geral — Mapa Mental

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
```