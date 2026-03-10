# Resumo - Python Lab 01: Flowgorithm, IDLE, Operadores e Decisão

## Ferramentas de Desenvolvimento

### Flowgorithm
- Software para criar **fluxogramas executáveis**
- Permite testar lógica antes de programar
- Gera código em várias linguagens (Python, C++, Java, etc.)
- Download: http://www.flowgorithm.org

### IDLE (Python)
- **IDE oficial do Python** (Integrated Development Environment)
- Vem instalado com Python
- Dois modos:
  - **Shell**: Modo interativo (testa comandos linha a linha)
  - **Editor**: Modo script (escreve programas completos em .py)

### Alternativas Online
- **Online Python**: https://www.online-python.com/
- **Replit**: https://replit.com/
- Úteis para testar código sem instalar Python

## Lógica de Programação

### Algoritmo vs Programa
- **Algoritmo**: Sequência de instruções para realizar uma tarefa (pode ser executado por humanos)
- **Programa**: Algoritmo implementado em linguagem de programação (executado por computadores)

### Fluxograma - Símbolos Básicos
- **Oval**: Início/Fim
- **Retângulo duplo**: Declaração de variáveis
- **Retângulo**: Atribuição/Processamento
- **Paralelogramo**: Entrada/Saída de dados
- **Losango**: Decisão (True/False)

## Python - Características

### Sobre a Linguagem
- Linguagem de **alto nível** (próxima à linguagem humana)
- Criada por Guido van Rossum (1991)
- Versão atual: 3.14 (2025)
- Usa **interpretador** (converte e executa linha por linha)

### Compilador vs Interpretador
- **Compilador**: Converte todo código de uma vez, gera executável
- **Interpretador**: Converte e executa uma instrução por vez (Python usa este)

### Modos de Programação
- **Modo Interativo**: Shell responde linha a linha (teste rápido)
- **Modo Script**: Código completo em arquivo .py (execução completa)

## Operadores

### Aritméticos
| Operador | Operação | Exemplo |
|----------|----------|---------|
| `+` | Adição | `3 + 7 = 10` |
| `-` | Subtração | `3 - 7 = -4` |
| `*` | Multiplicação | `3 * 2 = 6` |
| `/` | Divisão | `5 / 2 = 2.5` |
| `//` | Divisão inteira | `15 // 2 = 7` |
| `%` | Resto da divisão | `15 % 2 = 1` |
| `**` | Potenciação | `2 ** 3 = 8` |

**Precedência**: `()` → `**` → `* / // %` → `+ -`

### Relacionais (retornam True/False)
| Operador | Operação |
|----------|----------|
| `<` | Menor que |
| `>` | Maior que |
| `<=` | Menor ou igual |
| `>=` | Maior ou igual |
| `==` | Igual a |
| `!=` | Diferente de |

### Atribuição
- `=` atribui valor a uma variável
- Exemplo: `x = 10`

## Tipos de Dados Básicos
- **int**: Número inteiro (ex: `2`, `-5`, `100`)
- **float**: Número real (ex: `3.14`, `34.56`)
- **str**: String/texto (ex: `'Maria'`, `"Olá"`)
- **bool**: Booleano (ex: `True`, `False`)

## Funções Essenciais

### Entrada e Saída
- **`input()`**: Coleta texto do teclado (retorna sempre `str`)
  ```python
  nome = input("Digite seu nome: ")
  ```

- **`print()`**: Exibe mensagem na tela
  ```python
  print("Olá, mundo!")
  print(f"Seu nome é {nome}")  # f-string
  print("Bem-vindo, " + nome)  # concatenação
  ```

### Conversão de Tipos
- `int()`: Converte para inteiro
- `float()`: Converte para real
- `str()`: Converte para string

## Comentários
- **Linha**: `# comentário`
- **Bloco**: `""" comentário em múltiplas linhas """`

## Exemplo Completo
```python
# Programa que calcula o dobro de um número
num = int(input("Digite um nº inteiro: "))
print(f"Dobro de {num} é {num * 2}")
```

## Estruturas de Decisão

### if (Se)
Executa bloco de código se condição for verdadeira
```python
idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("Você é maior de idade")
```

### if-else (Se-Senão)
Executa um bloco se verdadeiro, outro se falso
```python
idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("Você é maior de idade")
else:
    print("Você é menor de idade")
```

### if-elif-else (Se-Senão Se-Senão)
Testa múltiplas condições em sequência
```python
nota = float(input("Digite a nota: "))
if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

### Operadores Lógicos
- **`and`**: Retorna True se ambas condições forem verdadeiras
  ```python
  if idade >= 18 and idade <= 65:
      print("Adulto em idade ativa")
  ```

- **`or`**: Retorna True se pelo menos uma condição for verdadeira
  ```python
  if dia == "sábado" or dia == "domingo":
      print("Final de semana")
  ```

- **`not`**: Inverte o valor booleano
  ```python
  if not chovendo:
      print("Pode sair sem guarda-chuva")
  ```

### Tabela Verdade

| A | B | A and B | A or B | not A |
|---|---|---------|--------|-------|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

## Indentação em Python

**IMPORTANTE**: Python usa indentação (espaços/tabs) para definir blocos de código

```python
# CORRETO
if x > 0:
    print("Positivo")  # 4 espaços de indentação
    print("Maior que zero")

# ERRADO - IndentationError
if x > 0:
print("Positivo")  # Sem indentação
```

**Padrão**: 4 espaços por nível de indentação

## Exemplos Práticos

### Exemplo 1: Par ou Ímpar
```python
num = int(input("Digite um número: "))
if num % 2 == 0:
    print(f"{num} é par")
else:
    print(f"{num} é ímpar")
```

### Exemplo 2: Maior de Três Números
```python
a = int(input("Digite o 1º número: "))
b = int(input("Digite o 2º número: "))
c = int(input("Digite o 3º número: "))

if a > b and a > c:
    print(f"Maior: {a}")
elif b > c:
    print(f"Maior: {b}")
else:
    print(f"Maior: {c}")
```

### Exemplo 3: Calculadora Simples
```python
num1 = float(input("Digite o 1º número: "))
num2 = float(input("Digite o 2º número: "))
op = input("Digite a operação (+, -, *, /): ")

if op == "+":
    print(f"Resultado: {num1 + num2}")
elif op == "-":
    print(f"Resultado: {num1 - num2}")
elif op == "*":
    print(f"Resultado: {num1 * num2}")
elif op == "/":
    if num2 != 0:
        print(f"Resultado: {num1 / num2}")
    else:
        print("Erro: Divisão por zero")
else:
    print("Operação inválida")
```

## Conceitos-Chave

✓ **Flowgorithm**: Ferramenta visual para criar algoritmos antes de programar

✓ **IDLE**: IDE oficial do Python (Shell + Editor)

✓ **Python é interpretado**: Não compilado, executa linha a linha

✓ **`input()` retorna string**: Sempre converter com `int()` ou `float()` para cálculos

✓ **Indentação obrigatória**: Define blocos de código (padrão: 4 espaços)

✓ **if-elif-else**: Estrutura de decisão múltipla

✓ **Operadores lógicos**: `and`, `or`, `not` para combinar condições

✓ **F-strings**: `f"..."` facilita interpolação de variáveis

✓ **Operador `%`**: Resto da divisão (útil para verificar par/ímpar)
