# Resumo - Python Aula 1

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

## Conceitos-Chave
- Python é interpretado (não compilado)
- `input()` sempre retorna string (converter com `int()` ou `float()` se necessário)
- F-strings (`f"..."`) facilitam interpolação de variáveis
- Variáveis podem mudar de tipo durante execução
