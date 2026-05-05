# Resumo NP2 - Aula 3 e Aula 4

Este resumo junta os conteúdos da **Aula 3** e da **Aula 4** em uma sequência única, com foco em revisão rápida para prova.

---

## Aula 3 - Estruturas de controle e listas

### 1. Estruturas de repetição

As estruturas de repetição servem para executar um bloco de código várias vezes.

Os dois laços principais vistos foram:

- `while`: repete enquanto uma condição for verdadeira
- `for`: repete percorrendo uma sequência ou intervalo

### 2. Laço `while`

O `while` é usado quando não sabemos exatamente quantas repetições serão feitas, mas sabemos a condição para continuar.

```python
while condicao:
    bloco
```

Exemplo:

```python
i = 5
while i > 0:
    print(i)
    i -= 1
print("Fim")
```

Ideia principal:

- enquanto `i > 0`, o bloco executa
- a variável de controle precisa ser atualizada
- se a condição nunca ficar falsa, acontece loop infinito

### 3. Verdadeiro e falso em Python

Em Python, alguns valores são interpretados como falsos:

- `False`
- `0`
- string vazia `""`
- lista vazia `[]`

Valores diferentes disso costumam ser tratados como verdadeiros.

Isso é importante porque condições em `if`, `while` e outras estruturas dependem dessa interpretação.

### 4. `while` com condição dinâmica

O `while` também pode ser usado para validar entrada do usuário.

```python
resposta = ""

while resposta != "sim" and resposta != "nao":
    resposta = input("Digite sim ou nao: ").lower()
```

Aqui, o programa continua pedindo a resposta até ela ser válida.

### 5. `while True` com `break`

Outra forma comum é usar `while True` e interromper o laço com `break`.

```python
while True:
    palpite = int(input("Digite um numero: "))
    if palpite == 7:
        break
```

Uso típico:

- jogos
- menus
- repetição até acontecer um evento específico

Ponto importante:

- `break` encerra o laço imediatamente

### 6. Laço `for`

O `for` é usado quando queremos percorrer uma sequência ou um intervalo de valores.

```python
for i in range(inicio, fim, passo):
    bloco
```

### 7. Função `range()`

A função `range()` gera valores inteiros para o `for`.

Formas mais comuns:

```python
range(fim)
range(inicio, fim)
range(inicio, fim, passo)
```

Exemplos:

```python
for i in range(3):
    print(i)
```

Saída:

```python
0
1
2
```

Outro exemplo:

```python
for i in range(5, 0, -1):
    print(i)
```

Saída:

```python
5
4
3
2
1
```

Resumo sobre `range()`:

- o início é opcional, padrão `0`
- o fim nao entra na contagem
- o passo é opcional, padrão `1`
- pode ser negativo para contagem regressiva

### 8. `for` percorrendo strings

Strings também podem ser percorridas caractere por caractere.

```python
for letra in "Python":
    print(letra)
```

Aplicação comum:

- contar vogais
- verificar letras
- processar textos

Exemplo:

```python
palavra = "Abacaxi"
vogais = 0

for letra in palavra:
    if letra in "aeiouAEIOU":
        vogais += 1
```

### 9. Listas

Lista é uma estrutura que armazena vários valores em sequência.

Exemplo:

```python
animais = ["peixe", "gato", "cao"]
```

Características:

- usa colchetes `[]`
- pode guardar vários elementos
- os elementos possuem índice
- o primeiro índice é `0`

### 10. Operações com listas

Algumas operações importantes:

```python
animais[2]
animais + animais
animais * 2
```

Interpretação:

- `animais[2]`: acessa o elemento do índice 2
- `+`: concatena listas
- `*`: repete a lista

### 11. Funções e testes úteis com listas

```python
'peixe' in animais
'tartaruga' not in animais
len(animais)
min(animais)
max(animais)
```

Mais cobrados:

- `in`: verifica se existe
- `not in`: verifica se não existe
- `len()`: quantidade de elementos

### 12. Métodos de listas

Principais métodos vistos:

```python
numeros.append(1)
numeros.count(1)
numeros.remove(1)
numeros.pop()
numeros.reverse()
numeros.sort()
numeros.insert(1, 8)
```

Resumo rápido:

- `append(x)`: adiciona no final
- `count(x)`: conta quantas vezes aparece
- `remove(x)`: remove o primeiro valor igual a `x`
- `pop()`: remove o último elemento
- `reverse()`: inverte a ordem
- `sort()`: ordena
- `insert(i, x)`: insere na posição `i`

### 13. `for` percorrendo listas

```python
lista_frutas = ["maca", "uva", "morango", "roma"]

for fruta in lista_frutas:
    print(fruta.upper())
```

Esse padrão é muito importante porque aparece em quase todo programa com coleção de dados.

### 14. Criando uma nova lista a partir de outra

```python
numeros = [2, 3, 4, 5]
dobrados = []

for num in numeros:
    dobrados.append(num * 2)
```

Ideia da prova:

- percorrer uma lista original
- processar cada elemento
- armazenar o resultado em outra lista

### 15. O que memorizar da Aula 3

- `while` depende de condição
- `for` é ideal para percorrer sequência
- `range()` nao inclui o valor final
- strings podem ser percorridas com `for`
- listas guardam múltiplos valores
- métodos de lista alteram ou consultam a estrutura
- `break` interrompe o laço

---

## Aula 4 - Funções e dicionários

### 1. Funções

Funções servem para organizar o código, evitar repetição e reutilizar lógica.

Uma função pode:

- receber argumentos
- processar dados
- retornar um resultado

Exemplo:

```python
def quadrado(num):
    return num ** 2
```

Se chamarmos:

```python
print(quadrado(3))
```

resultado:

```python
9
```

### 2. Conceitos básicos de função

#### `def`

É a palavra-chave usada para definir uma função.

#### Parâmetro

É a variável escrita na definição da função.

Exemplo:

```python
def quadrado(num):
```

`num` é o parâmetro.

#### Argumento

É o valor enviado na chamada da função.

Exemplo:

```python
quadrado(3)
```

`3` é o argumento.

#### Retorno

É o valor devolvido pela função com `return`.

### 3. Fluxo de chamada de função

Exemplo:

```python
def quadrado(num):
    return num ** 2

a = 3
a_quadr = quadrado(a)
print(a_quadr)
```

Passo a passo:

- `a` recebe `3`
- `quadrado(a)` é chamado
- o parâmetro `num` recebe `3`
- a função calcula `3 ** 2`
- retorna `9`
- `a_quadr` recebe `9`
- `print` mostra `9`

### 4. Passagem por valor

Na aula, foi explicado que números e strings se comportam como passagem por valor no contexto estudado.

Ou seja:

- a função recebe uma cópia do valor
- mudanças internas não alteram a variável de fora

Exemplo:

```python
def troca(a, b):
    temp = a
    a = b
    b = temp

a = 3
b = 7
troca(a, b)
print(a, b)
```

Saída:

```python
3 7
```

Mesmo após chamar a função, os valores externos continuam iguais.

### 5. Retorno múltiplo

Para realmente trocar os valores, a função precisa retornar os novos valores.

```python
def troca(a, b):
    temp = a
    a = b
    b = temp
    return a, b

a = 3
b = 7
a, b = troca(a, b)
```

Agora funciona porque:

- a função devolve os dois valores
- esses valores são atribuídos novamente às variáveis externas

### 6. Lista como argumento

Quando uma lista é passada para a função, alterações feitas nela dentro da função aparecem fora também.

```python
def adiciona_um(lista):
    for i in range(len(lista)):
        lista[i] += 1
```

Exemplo:

```python
numeros = [2, 3, 4, 5]
adiciona_um(numeros)
print(numeros)
```

Saída:

```python
[3, 4, 5, 6]
```

Para a prova, memorize:

- números e strings: alterações internas não mudam a variável externa nesse contexto
- listas: podem ser alteradas pela função

### 7. Dicionários

Dicionário é uma estrutura de dados formada por pares `chave: valor`.

Exemplo:

```python
alunos = {"35TA2F": "Ana Santos", "0F83RG": "Joao Torres"}
```

Características:

- usa chaves no lugar de índices numéricos
- cada chave identifica um valor
- chaves costumam ser valores imutáveis, como string e número
- valores podem ser de qualquer tipo

### 8. Acesso e manipulação de dicionários

Exemplos importantes:

```python
dias = {"Seg": "Segunda", "Ter": "Terca", "Qua": "Quarta"}

dias["Qua"]
dias["Qui"] = "Quinta"
len(dias)
"Qua" in dias
del dias["Qui"]
```

Significado:

- `dias["Qua"]`: acessa o valor da chave
- `dias["Qui"] = "Quinta"`: adiciona novo item
- `len(dias)`: quantidade de pares
- `"Qua" in dias`: verifica se a chave existe
- `del dias["Qui"]`: remove o item

### 9. Métodos de dicionários

Principais métodos:

```python
alunos.pop("RA01")
alunos.update(alunos2)
alunos.keys()
alunos.values()
alunos.items()
alunos.get("RA03")
```

Resumo:

- `pop(chave)`: remove e retorna o valor
- `update(outro_dict)`: junta itens de outro dicionário
- `keys()`: retorna as chaves
- `values()`: retorna os valores
- `items()`: retorna pares `(chave, valor)`
- `get(chave)`: retorna o valor da chave

### 10. `for` percorrendo dicionários

Há três formas principais.

#### Percorrendo chaves

```python
for chave in frutas:
    print(chave)
```

Equivale a percorrer `frutas.keys()`.

#### Percorrendo valores

```python
for valor in frutas.values():
    print(valor)
```

#### Percorrendo chave e valor

```python
for chave, valor in frutas.items():
    print(chave, valor)
```

Esse último formato é o mais importante para prova.

### 11. Dicionário como argumento

Assim como listas, dicionários podem ser alterados dentro de funções.

```python
def aumentar_precos(produtos, aumento):
    for item in produtos:
        produtos[item] = produtos[item] + aumento
```

Exemplo:

```python
produtos = {"pao": 5.9, "leite": 4.5, "queijo": 8.0}
aumentar_precos(produtos, 1)
```

Depois da função:

```python
{"pao": 6.9, "leite": 5.5, "queijo": 9.0}
```

### 12. O que memorizar da Aula 4

- função é definida com `def`
- parâmetro é diferente de argumento
- `return` devolve resultado
- uma função pode retornar mais de um valor
- listas e dicionários podem ser alterados dentro da função
- dicionário guarda pares `chave: valor`
- `items()` é muito usado com `for`

---

## Ligação entre Aula 3 e Aula 4

As duas aulas se conectam bastante:

- na Aula 3, você aprende a repetir e percorrer dados com `while` e `for`
- na Aula 4, você usa isso dentro de funções e em estruturas como dicionários

Exemplos de combinação:

- usar `for` para percorrer lista dentro de função
- usar `for` para percorrer dicionário e alterar valores
- usar `while` para validar entrada antes de chamar uma função

---

## Resumo final para revisão rápida

### Se a prova perguntar sobre repetição

- `while`: repete enquanto a condição for verdadeira
- `for`: percorre intervalos, strings, listas e dicionários
- `break`: interrompe o laço
- `range()`: gera sequência e não inclui o fim

### Se a prova perguntar sobre listas

- lista usa `[]`
- possui índices
- pode ser percorrida com `for`
- métodos importantes: `append`, `remove`, `pop`, `sort`, `reverse`, `insert`

### Se a prova perguntar sobre funções

- criada com `def`
- pode receber argumentos
- pode retornar valores com `return`
- pode retornar mais de um valor

### Se a prova perguntar sobre valor e referência

- números e strings: alteração dentro da função não muda a variável externa nesse conteúdo estudado
- listas e dicionários: alteração dentro da função reflete fora

### Se a prova perguntar sobre dicionários

- dicionário usa `{}` e guarda pares `chave: valor`
- acesso por chave
- métodos principais: `get`, `pop`, `keys`, `values`, `items`, `update`
- para percorrer chave e valor juntos, use `for chave, valor in dict.items()`

---

## Perguntas que podem cair

1. Qual a diferença entre `while` e `for`?
2. O que o `range()` faz?
3. O que acontece se um `while` nunca tiver sua condição alterada?
4. Qual a diferença entre parâmetro e argumento?
5. Para que serve o `return`?
6. Por que a troca de dois números não funciona sem retorno?
7. Como percorrer todos os elementos de uma lista?
8. Como acessar, adicionar e remover elementos de um dicionário?
9. Qual a diferença entre `keys()`, `values()` e `items()`?
10. Por que alterações em listas e dicionários podem aparecer fora da função?

---

## Macetes finais

- Leia `while` como: "enquanto"
- Leia `for` como: "para cada"
- Leia dicionário como: "chave aponta para valor"
- Se houver `return`, a função devolve algo
- Se houver lista ou dicionário sendo passado para função, desconfie que a estrutura pode ser alterada

