# 📘 Pensamento Lógico Computacional com Python  
## Aula 03  
**Prof.ª Larissa**

---

## 📑 Sumário

- Estruturas de controle  
  - while  
  - for  

- Estruturas de dados  
  - Listas  
  - for percorrendo listas  

---

# 🔁 Estruturas de controle: repetição (while)

Há casos em que é preciso que um bloco de comandos seja executado várias vezes seguidas. Para isso, usamos estruturas de repetição.

O principal comando é o `while`:

```python
while condição:
    bloco de comandos
```

⚠️ **Indentação obrigatória!**

## Verdadeiro e Falso em Python

| Tipo | Interpretação |
|------|-------------|
| `False`, `0`, strings vazias, listas vazias | Falso |
| `True`, valores ≠ 0, estruturas não vazias | Verdadeiro |

---

## 📌 Exemplo com while

```python
i = 5
while i > 0:
    print(f"Contagem: {i}")
    i -= 1
print("Fim!")
```

### Execução passo a passo

| Execução | Condição | Resultado | Novo valor de i |
|----------|--------|----------|----------------|
| 1 | 5 > 0 | Contagem: 5 | 4 |
| 2 | 4 > 0 | Contagem: 4 | 3 |
| 3 | 3 > 0 | Contagem: 3 | 2 |
| 4 | 2 > 0 | Contagem: 2 | 1 |
| 5 | 1 > 0 | Contagem: 1 | 0 |
| 6 | 0 > 0 | Falso | — |

---

## 🔁 While com condição dinâmica

```python
resposta = ""

while resposta != "sim" and resposta != "não":
    resposta = input("Digite 'sim' ou 'não': ").lower()

print("Resposta válida!")
```

---

## ⛔ While com break

```python
numero_secreto = 7

while True:
    palpite = int(input("Adivinhe o número secreto (1-10): "))

    if palpite == numero_secreto:
        print("Parabéns! Você acertou!")
        break

    print("Errado! Tente novamente.")

print("Fim do jogo!")
```

---

# 🔄 Estruturas de controle: repetição (for)

```python
for i in range(inicio, fim, passo):
    bloco de comandos
```

## Parâmetros do range()

| Parâmetro | Descrição |
|----------|----------|
| início | padrão = 0 |
| fim | obrigatório |
| passo | padrão = 1 |

---

## 📌 Exemplo

```python
for i in range(5, 0, -1):
    print(f"Contagem: {i}")

print("Fim!")
```

---

## ⚙️ Variações do range()

```python
range(inicio, fim, passo)
range(inicio, fim)
range(fim)
```

---

## 📌 Exemplos

```python
for i in range(3):
    print(f"Repetição {i}")
```

```python
for numero in range(1, 6):
    print(f"Número: {numero}")
```

---

# 🔤 For percorrendo strings

```python
palavra = "Python"

for letra in palavra:
    print(letra)
```

---

## 📌 Contando vogais

```python
palavra = "Abacaxi"
vogais = 0

for letra in palavra:
    if letra in "aeiouAEIOU":
        vogais += 1

print(f"Total de vogais: {vogais}")
```

---

# 📦 Estruturas de dados: Listas

```python
animais = ["peixe", "gato", "cão"]
```

---

## ⚙️ Operadores com listas

```python
animais[2]
animais + animais
animais * 2
```

---

## 🔍 Operações úteis

```python
'peixe' in animais
'tartaruga' not in animais
len(animais)
min(animais)
max(animais)
```

---

# 🛠️ Métodos de listas

```python
numeros = [4, 5, 1, 3]

numeros.append(1)
numeros.count(1)
numeros.remove(1)
numeros.pop()
```

---

## 🔄 Mais métodos

```python
numeros.reverse()
numeros.sort()
numeros.insert(1, 8)
```

---

# 🔁 For percorrendo listas

```python
lista_frutas = ["maçã", "uva", "morango", "romã"]

for fruta in lista_frutas:
    print(fruta.upper())
```

---

## 📌 Criando nova lista

```python
numeros = [2, 3, 4, 5]
dobrados = []

for num in numeros:
    dobrados.append(num * 2)

print(dobrados)
```
