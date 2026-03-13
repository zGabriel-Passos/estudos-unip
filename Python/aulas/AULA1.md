# Pensamento Lógico Computacional com Python
**Aula 01 | Prof.ª Larissa**

---

## Sumário

- Introdução à lógica de programação
  - Algoritmo x programa
  - Simbologia de fluxogramas
  - Exemplos de fluxogramas
- Introdução à linguagem Python
  - Sobre a linguagem
  - Compilador x interpretador
  - Modos de programação
  - Operadores aritméticos
  - Operadores relacionais
  - Operador de atribuição
  - Comandos de entrada e de saída
  - Comentários

---

## Bibliografia

- PERKOVIC, L. *Introdução à computação usando Python: um foco no desenvolvimento de aplicações*. Rio de Janeiro: LTC, 2022.
- BARRY, P. *Use a cabeça! Python*. Rio de Janeiro: Alta Books, 2021.
- LAMBERT, K. A. *Fundamentos de Python: Primeiros programas*. São Paulo: Cengage Learning, 2023.
- MUELLER, J. P. *Começando a programar em Python para leigos*. [s.l.]: Alta Books, 2020.
- BANIN, S. L. *Python 3 - conceitos e aplicações - uma abordagem didática*. São Paulo: Erica, 2018.
- DOWNEY, A. B. *Pense em Python*. Disponível em: https://pensepython.caravela.club/introducao.html. Acesso em: 09 fev. 2025.
- PYTHON SOFTWARE FOUNDATION. *Python 3.14.3 documentation*. Disponível em: https://docs.python.org/3/. Acesso em: 21 fev. 2026.

---

## 1. Introdução à Lógica de Programação

### Algoritmo x Programa

| Conceito | Definição |
|----------|-----------|
| **Algoritmo** | Sequência de instruções destinada à realização de uma tarefa. Pode ser executado por um humano. (Pense em uma "receita de bolo".) |
| **Programa** | Um algoritmo implementado por uma linguagem de programação. O algoritmo é escrito em código e executado por processadores digitais. |

```
ALGORITMO                          PROGRAMA
(sequência de passos)    ───►      (algoritmo em código)
executado por humanos              executado por computadores
```

---

### Simbologia de Fluxogramas

Um **fluxograma** é um diagrama que descreve visualmente, por meio de formas geométricas, um algoritmo. Muito aplicado a programas computacionais.

```
┌─────────────────────────────────────────────────────────────────┐
│              SIMBOLOGIA BÁSICA DE FLUXOGRAMAS                   │
├──────────────────────┬──────────────────────────────────────────┤
│  Símbolo (texto)     │  Significado                             │
├──────────────────────┼──────────────────────────────────────────┤
│  (  oval  )          │  INÍCIO ou FIM do programa               │
├──────────────────────┼──────────────────────────────────────────┤
│  |_retângulo duplo_| │  DECLARAÇÃO de variáveis                 │
│                      │  (armazena dados em memória)             │
├──────────────────────┼──────────────────────────────────────────┤
│  [___retângulo___]   │  ATRIBUIÇÃO / PROCESSAMENTO              │
│                      │  (qualquer cálculo ou atribuição         │
│                      │   no conteúdo de uma variável)           │
├──────────────────────┼──────────────────────────────────────────┤
│  /paralelogramo/     │  ENTRADA / SAÍDA de dados                │
│                      │  (lê valor do usuário ou exibe em tela)  │
├──────────────────────┼──────────────────────────────────────────┤
│    < losango >       │  DECISÃO                                 │
│                      │  (verifica expressão lógica;             │
│                      │   desvia para True ou False)             │
└──────────────────────┴──────────────────────────────────────────┘
```

---

### Exemplos de Fluxogramas

#### Exemplo 1 — Programa que exibe "Olá, mundo!"

```
        ┌─────────┐
        │  Main   │  ← Início do programa
        └────┬────┘
             │
             ▼
   ┌──────────────────────┐
   /  Output "Olá, mundo!" /  ← Saída de dados: exibe "Olá, mundo!" em tela
   └──────────┬───────────┘
              │
              ▼
        ┌─────────┐
        │   End   │  ← Fim do programa
        └─────────┘
```

---

#### Exemplo 2 — Programa que solicita um nº inteiro e exibe o dobro

**Fórmula:** `resultado = numInt × 2`

**Exemplo de execução:** entrada `10` → saída `20`

```
          ┌──────────────┐
          │     Main     │  ← Início do programa
          └──────┬───────┘
                 │
                 ▼
        |─────────────────|
        |  Integer numInt  |  ← Declaração: variável numInt (inteiro)
        |─────────────────|
                 │
                 ▼
   /──────────────────────────────/
   /  Output "Insira um número inteiro"  /  ← Saída: exibe mensagem em tela
   /──────────────────────────────/
                 │
                 ▼
   /──────────────────/
   /   Input numInt   /  ← Entrada: usuário digita o valor (ex: 10)
   /──────────────────/
                 │
                 ▼
   /──────────────────────/
   /  Output 2 * numInt   /  ← Saída: exibe numInt × 2 (ex: 20)
   /──────────────────────/
                 │
                 ▼
          ┌──────────┐
          │   End    │  ← Fim do programa
          └──────────┘
```

---

#### Exemplo 3 — Programa que calcula consumo médio de combustível (km/L)

**Fórmula:**

```
Consumo = distância percorrida [km] / combustível gasto [L]
```

**Exemplo de execução:** distância = `650.5` km, combustível = `50` L → consumo = `13.01 km/L`

> **Nota:** No Flowgorithm, o símbolo `&` representa um **operador de concatenação**, permitindo colocar texto e valores de variáveis lado a lado no mesmo comando de output.

```
          ┌──────────────┐
          │     Main     │
          └──────┬───────┘
                 │
                 ▼
   |─────────────────────────────────|
   |  Real distancia, combustivel,   |  ← Declaração de variáveis (tipo real)
   |  consumo                        |
   |─────────────────────────────────|
                 │
                 ▼
   /─────────────────────────────────────/
   /  Output "Insira a distância         /
   /  percorrida, em km"                 /  ← Saída: solicita distância
   /─────────────────────────────────────/
                 │
                 ▼
   /──────────────────────/
   /   Input distancia    /  ← Entrada: usuário digita 650.5
   /──────────────────────/
                 │
                 ▼
   /──────────────────────────────────────/
   /  Output "Insira o volume de          /
   /  combustível gasto, em L"            /  ← Saída: solicita combustível
   /──────────────────────────────────────/
                 │
                 ▼
   /───────────────────────────/
   /   Input combustivel       /  ← Entrada: usuário digita 50
   /───────────────────────────/
                 │
                 ▼
   [──────────────────────────────────────]
   [  consumo = distancia / combustivel   ]  ← Atribuição: cálculo
   [──────────────────────────────────────]
                 │
                 ▼
   /────────────────────────────────────────────────────/
   /  Output "O consumo médio é de " & consumo & " km/L" /  ← Exibe resultado
   /────────────────────────────────────────────────────/
                 │
                 ▼
          ┌──────────┐
          │   End    │
          └──────────┘
```

---

#### Exemplo 4 — Programa que testa se uma pessoa pode estacionar em vaga especial

> O símbolo `==` representa um **operador relacional "igual a"**. Ele compara o valor da variável com o que há à sua direita.

```
          ┌──────────────┐
          │     Main     │
          └──────┬───────┘
                 │
                 ▼
   |─────────────────|
   |  String cartao  |  ← Declaração: variável cartao (texto/string)
   |─────────────────|
                 │
                 ▼
   /───────────────────────────────────────────/
   /  Output "Você tem um cartão de            /
   /  estacionamento especial? [sim/não]"       /
   /───────────────────────────────────────────/
                 │
                 ▼
   /─────────────────────/
   /   Input cartao      /  ← Entrada: usuário digita "sim" ou "não"
   /─────────────────────/
                 │
                 ▼
         < cartao == "sim" >  ← Decisão: verifica se cartao é igual a "sim"
        /                    \
   False                      True
      │                          │
      ▼                          ▼
/───────────────────/    /────────────────────────────/
/ Output "Dirija-se  /    / Output "Você pode           /
/ a outra vaga."     /    / estacionar na vaga."        /
/───────────────────/    /────────────────────────────/
      │                          │
      └──────────┬───────────────┘
                 │
                 ▼
          ┌──────────┐
          │   End    │
          └──────────┘
```

---

## 2. Introdução à Linguagem Python

### Sobre a Linguagem

Python é uma linguagem de programação de **alto nível**, o que significa que possui um alto nível de abstração — utiliza comandos "parecidos" com a linguagem humana, para que não seja necessário lidar com linguagem binária.

Como toda linguagem de programação, Python é um meio de comunicação entre humanos e os circuitos computacionais. Por meio de seus comandos, conseguimos criar programas que enviam instruções ao *hardware*.

| Dado | Informação |
|------|------------|
| Criador | Guido van Rossum (matemático holandês) |
| Primeira versão | 1991 |
| Versão atual | 3.14 (lançada em 2025) |
| Implementação principal | CPython (escrita em linguagem C) |
| Principais usos | Ciência de dados, Inteligência Artificial, automação, web |

---

### Compilador x Interpretador

O **código-fonte** de um programa é um conjunto de palavras e símbolos que dita as instruções que o programa deve executar. Ele é escrito em linguagem próxima à dos humanos, mas não tem significado para o *hardware*.

Para que o código seja entendido pelo computador, é preciso convertê-lo para **linguagem de máquina**. Há dois processos principais:

```
┌───────────────────────────────┬───────────────────────────────────┐
│         COMPILADOR            │          INTERPRETADOR            │
├───────────────────────────────┼───────────────────────────────────┤
│ Converte TODAS as instruções  │ Converte e executa UMA instrução  │
│ de uma só vez, ANTES de       │ por vez, antes de passar para a   │
│ executar                      │ próxima                           │
├───────────────────────────────┼───────────────────────────────────┤
│ Gera um arquivo executável    │ NÃO gera arquivo executável       │
│ (pode ser executado quantas   │ (cada execução exige novo         │
│ vezes quisermos)              │ processo de conversão)            │
├───────────────────────────────┼───────────────────────────────────┤
│ Execução geralmente mais      │ Exige menos memória; pode         │
│ eficiente                     │ acontecer de forma interativa     │
├───────────────────────────────┼───────────────────────────────────┤
│ Exemplos: C, C++, Go          │ Exemplos: Python, JavaScript      │
└───────────────────────────────┴───────────────────────────────────┘
```

**Fluxo geral:**

```
Código-fonte (.py)
       │
       ▼
  Interpretador Python
       │
       ▼ (instrução por instrução)
  Linguagem de máquina
       │
       ▼
    Hardware executa
```

---

### Modos de Programação

Podemos trabalhar com Python no **modo interativo** ou no **modo script**.

#### Modo Interativo

"Conversamos" com o interpretador por meio do *shell*, que responde aos comandos linha a linha. Ótimo para entender e testar comandos.

```python
>>> print("Hello World")
Hello World
>>> 4 + 2
6
>>>
```

#### Modo Script

Escrevemos o código completo, salvamos com extensão `.py` e pedimos ao interpretador para executá-lo. Tudo é executado, mas é exibido apenas o que foi solicitado.

**Script.py:**
```python
print('Hello World')
4 + 2
```

**Saída:**
```
Hello World
```

> Nota: a linha `4 + 2` foi executada, mas como não há `print()`, seu resultado não foi exibido.

---

### Operadores Aritméticos

| Operador | Operação | Retorna tipo |
|----------|----------|--------------|
| `+` | Adição | `float` ou `int` |
| `-` | Subtração | `float` ou `int` |
| `*` | Multiplicação | `float` ou `int` |
| `/` | Divisão | `float` (sempre) |
| `//` | Divisão inteira | `int` |
| `%` | Resto da divisão | `int` |
| `**` | Potenciação | `float` ou `int` |

**Ordem de precedência:**
1. Parênteses `()`
2. Potenciação `**`
3. Multiplicação e divisões `* / // %` (da esquerda para direita)
4. Adição e subtração `+ -` (da esquerda para direita)

**Exemplos no shell interativo:**

```python
>>> 3 + 7
10
>>> 3 - 7
-4
>>> 3 * 2
6
>>> 5 / 2
2.5
>>> 4 / 2
2.0          # divisão sempre retorna float
>>> 15 // 2
7            # divisão inteira (descarta o resto)
>>> 15 % 2
1            # resto da divisão
>>> 2 ** 3
8
>>> 2 ** 4
16
>>> 3 + 2*3
9            # multiplicação antes da adição
>>> (3+2) * 3
15           # parênteses primeiro
>>> 5.2 + 2
7.2
>>> 2.5 + 8//2
6.5          # 8//2 = 4, depois 2.5 + 4 = 6.5
>>> 2.5 + (8//2)
6.5          # mesmo resultado
```

---

### Operadores Relacionais

Comparam valores entre si e retornam um resultado do tipo **booleano** (`bool`): `True` (verdadeiro) ou `False` (falso).

| Operador | Operação | Retorna tipo |
|----------|----------|--------------|
| `<` | Menor que | `bool` (True ou False) |
| `>` | Maior que | `bool` |
| `<=` | Menor ou igual a | `bool` |
| `>=` | Maior ou igual a | `bool` |
| `==` | Igual a | `bool` |
| `!=` | Diferente de | `bool` |

**Ordem de precedência:**
1. Parênteses `()`
2. Operadores aritméticos
3. Operadores relacionais

**Exemplos no shell interativo:**

```python
>>> 2 < 3
True
>>> 2 > 3
False
>>> 5 == 5
True
>>> 5 != 5
False
>>> 4 <= 5
True
>>> 4 <= 4
True
>>> 7-2 != 4+1
False
>>> 5 >= 10.9
False
>>> 2+3 == 5
True
>>> True == 1
True           # True equivale a 1
>>> False == 0
True           # False equivale a 0
>>> True + True
2              # True + True = 1 + 1 = 2
```

---

### Operador de Atribuição

O **operador de atribuição** (`=`) atribui um valor a uma variável, que é declarada em tempo de execução com um tipo compatível com o dado que se quer guardar.

> **Variável:** espaço em memória tratado por um nome específico dentro do código. O valor e o tipo da variável podem mudar ao longo da execução.

**Tipos básicos em Python:**

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `int` | Número inteiro | `2`, `-5`, `100` |
| `float` | Número real (ponto flutuante) | `3.14`, `34.56` |
| `str` | String — conjunto de caracteres alfanuméricos | `'Maria'`, `"Olá"` |
| `bool` | Booleano — verdadeiro ou falso | `True`, `False` |

**Exemplos no shell interativo:**

```python
>>> nome1 = 'Maria'        # atribuição de string
>>> nome1
'Maria'
>>> type(nome1)
<class 'str'>

>>> x = 2                  # x é int
>>> type(x)
<class 'int'>

>>> x = 34.56              # x agora é float
>>> type(x)
<class 'float'>

>>> x = True               # x agora é bool
>>> type(x)
<class 'bool'>
>>> x + x + x              # True = 1, então 1+1+1 = 3
3

>>> r = s = 20             # atribuição múltipla
>>> r
20
>>> r = 30                 # r muda, s permanece
>>> s
20
```

---

### Função de Saída `print()`

`print()` é uma **função embutida** (*built-in*) do Python que exibe uma mensagem em tela (função de *output*).

- **Função:** conjunto de comandos que realizam uma tarefa específica — um "pedaço" de código que pode ser invocado e executado diversas vezes.
- **Função embutida:** já está automaticamente disponível (não precisa ser importada de nenhum módulo).
- **Argumento:** informação passada para a função agir, colocada entre os parênteses `()`.

```python
# Script:
print("Olá, mundo!")

# Saída:
Olá, mundo!
```

---

### Função de Entrada `input()` e Saída `print()`

`input()` é uma função embutida que coleta textos da entrada padrão da máquina (teclado). **Por padrão, retorna tipo `str`.**

**Script:**
```python
print("Digite seu nome: ")
nome = input()
print(f"Seu nome é {nome}")
print("Seja bem-vindo(a), " + nome)
```

**Saída** (supondo que o usuário digitou "Ana"):
```
Digite seu nome:
Ana
Seu nome é Ana
Seja bem-vindo(a), Ana
```

**Explicação linha a linha:**

| Linha | Código | O que faz |
|-------|--------|-----------|
| 1 | `print("Digite seu nome: ")` | Exibe mensagem em tela |
| 2 | `nome = input()` | Aguarda digitação; armazena como `str` na variável `nome` |
| 3 | `print(f"Seu nome é {nome}")` | Usa **f-string** para interpolação |
| 4 | `print("Seja bem-vindo(a), " + nome)` | Usa **concatenação** com `+` |

**F-string:** string com a letra `f` no início e chaves `{}` para inserir expressões diretamente. Exemplo: `f"O dobro de {x} é {x*2}"`.

**Interpolação:** processo de inserir valores diretamente dentro de uma string, usando *placeholders* (marcadores de posição).

**Concatenação com `+`:** permite unir strings. Variáveis de outros tipos precisam ser convertidas com `str()` antes de concatenar.

---

### Comentários

Um **comentário** é um trecho de texto incluído no código para descrever o que aquele pedaço do programa faz. Comentários são **ignorados pelo interpretador** e não modificam o funcionamento do programa.

#### Comentário por linha — `#`

Adicione `#` na frente da linha ou ao final de um comando. Tudo após `#` na mesma linha é ignorado.

```python
# Este é um comentário de linha inteira
x = 10  # Este comentário fica no final do comando
```

#### Comentário por bloco — `""" """`

Adicione `"""` ao início e ao fim do comentário, cobrindo quantas linhas forem necessárias.

```python
"""
Este é um comentário de bloco.
Pode ocupar várias linhas.
Útil para documentar funções e programas.
"""
```

---

### Exemplo de Programa Completo

**Programa que solicita um nº inteiro e exibe o dobro desse nº.**

```python
"""
Programa que solicita um nº inteiro e
exibe o dobro desse nº.
"""

num = int(input("Digite um nº inteiro: "))
print(f"Dobro de {num} é {num * 2}")

# input também realiza saída de dados
# input retorna tipo str por padrão
```

**Observações:**
- `input("texto")` — quando passamos um texto como argumento, ele é exibido em tela antes de aguardar a digitação (combinando entrada e saída em uma linha).
- `int(input(...))` — converte o valor retornado por `input()` (que é `str`) para `int`.
- A f-string `f"Dobro de {num} é {num * 2}"` interpola tanto o valor de `num` quanto o resultado da expressão `num * 2` diretamente na string.

**Fluxo de execução:**

```
Usuário vê: "Digite um nº inteiro: "
     │
     ▼ (usuário digita, ex: 5)
input() captura "5" como str
     │
     ▼
int("5") converte para inteiro 5
     │
     ▼
num = 5
     │
     ▼
print(f"Dobro de {5} é {5 * 2}")
     │
     ▼
Saída: "Dobro de 5 é 10"
```