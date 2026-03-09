# Resumo - Sistemas Operacionais Aula 1

## O que é um Sistema Operacional?

Um SO realiza duas funções essenciais:
1. **Fornecer abstrações**: Interface limpa entre programas e hardware
2. **Gerenciar hardware**: Controlar recursos (CPU, memória, disco, E/S)

```
Programas Aplicativos
        ↓
Sistema Operacional (camada de abstração)
        ↓
Hardware
```

## História dos Sistemas Operacionais

### 1ª Geração (1945-1955): Válvulas
- ~20.000 válvulas
- Programador operava diretamente a máquina
- Sem sistema operacional

### 2ª Geração (1955-1965): Transistores e Batch
- **Mainframes**
- Programação em cartões perfurados
- **Sistemas Batch**: Processamento em lote (sem interação)
- Máquinas: IBM 1401 (leitura) e IBM 7094 (processamento)

### 3ª Geração (1965-1980): Circuitos Integrados
- **IBM 360** e OS/360
- **Multiprogramação**: Várias tarefas na memória, CPU alterna entre elas
- **Spooling**: Transferência de tarefas para disco
- **Timesharing**: Cada usuário tem terminal on-line
- **MULTICS** → **UNIX** → Linux, BSD, macOS

### 4ª Geração (1980-presente): Computadores Pessoais
- **LSI** (Large Scale Integration)
- Intel 8080 (primeira CPU de 8 bits)
- MS-DOS (Microsoft)
- Windows, Linux para PCs

### 5ª Geração (1990-presente): Computadores Móveis
- Smartphones e tablets
- Android, iOS

## Tipos de Sistemas Operacionais

### Por Programação
- **Monoprogramáveis**: Um programa por vez (recursos exclusivos, baixo aproveitamento)
- **Multiprogramáveis**: Vários programas compartilham recursos (alto aproveitamento)

### Por Usuários
- **Monousuário**: Um usuário por vez (PCs)
- **Multiusuário**: Vários usuários simultâneos (servidores)

### Por Aplicação
- **Batch**: Sem interação do usuário (cálculos, compilações, backups)
- **Time-Sharing**: Fatias de tempo (time-slice) divididas entre processos
- **Tempo Real**: Prazos rígidos (deadlines), sem fatia de tempo fixa (controle de voo, UTI, freios ABS)

## Multiprogramação

### Conceito
Memória dividida em partições, cada uma com uma tarefa. Enquanto uma aguarda E/S, outra usa a CPU.

```
Partição 1: Tarefa A (aguardando E/S)
Partição 2: Tarefa B (usando CPU) ←
Partição 3: Tarefa C (aguardando CPU)
Partição 4: Tarefa D (aguardando E/S)
```

### Vantagens
- CPU ocupa quase 100% do tempo
- Melhor aproveitamento de recursos
- Menor tempo total de execução

## Sistemas com Múltiplos Processadores

### Fortemente Acoplados (Tightly Coupled)
- Vários processadores compartilham **uma única memória**
- **Um único SO** gerencia tudo
- Tipos: Simétricos e Assimétricos
- Exemplos: Unix, Windows

### Fracamente Acoplados (Loosely Coupled)
- Sistemas **independentes** conectados por rede
- Cada sistema tem **seu próprio SO**
- Tipos:
  - **SO de Rede**: Sistemas autônomos conectados
  - **Sistemas Distribuídos**: Trabalham como se fossem um único sistema

## Conceitos-Chave

### Timesharing vs Tempo Real
| Time-Sharing | Tempo Real |
|--------------|------------|
| Fatia de tempo fixa | Sem fatia fixa |
| Tempo pode variar | Prazo rígido (deadline) |
| Aplicações comuns | Sistemas críticos |
| Ex: navegador, Word | Ex: controle de voo, UTI |

### Spooling
**SPOOL** (Simultaneous Peripheral Operation On Line): Transferência de tarefas para disco, permitindo carregamento imediato de novas tarefas.

### Cloud Computing
Conceito moderno do "computador utilitário" do MULTICS: dispositivos pequenos se conectam a servidores remotos para processamento.

## Árvore Genealógica
```
MULTICS
   ↓
UNIX
   ├→ FreeBSD
   ├→ iOS
   ├→ Android
   ├→ MINIX → Linux
   └→ macOS (BSD)
```

## Resumo Visual
- **1ª Geração**: Válvulas, sem SO
- **2ª Geração**: Transistores, Batch
- **3ª Geração**: CIs, Multiprogramação, Timesharing
- **4ª Geração**: PCs, MS-DOS, Windows
- **5ª Geração**: Móveis, Android, iOS
