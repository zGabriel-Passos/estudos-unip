# Introdução à Linguagem Python: Operadores Lógicos

## O que são Operadores Lógicos?

Os **operadores lógicos** executam uma função lógica entre operandos e retornam um resultado booleano.

> **Resultado Booleano (bool):** Apenas dois valores possíveis:
> - `True` (verdadeiro) = 1
> - `False` (falso) = 0

---

## Os Três Operadores Lógicos

| Operador | Descrição | Retorno |
|----------|-----------|---------|
| `and` | Retorna `True` apenas se **ambos** são verdadeiros | Booleano (`True` ou `False`) |
| `or` | Retorna `True` quando **pelo menos um** é verdadeiro | Booleano (`True` ou `False`) |
| `not` | **Inverte** o valor lógico do operando original | Booleano (`True` ou `False`) |

---

## Ordem de Precedência

Quando múltiplos operadores lógicos aparecem na mesma expressão, a ordem de avaliação é:

```
1. not    (maior prioridade)
2. and
3. or     (menor prioridade)
```

> 💡 **Dica:** Use parênteses `()` para deixar explícita a ordem de avaliação!

---

## 1. Operador AND (E lógico)

### Tabela Verdade

```
┌─────────┬─────────┬───────────┐
│    A    │    B    │  A and B  │
├─────────┼─────────┼───────────┤
│  True   │  True   │   True    │
│  True   │  False  │   False   │
│  False  │  True   │   False   │
│  False  │  False  │   False   │
└─────────┴─────────┴───────────┘
```

### Diagrama Visual

```
        Condição A       Condição B
            ✓        E        ✓       →  True
            ✓        E        ✗       →  False
            ✗        E        ✓       →  False
            ✗        E        ✗       →  False
```

### Exemplos Práticos

```python
>>> x = 5

>>> x == 5 and 2 < 3
True
# Explicação: (5 == 5) = True  AND  (2 < 3) = True  →  True AND True = True

>>> x + 2 == 7 and 3 < 2
True
# Explicação: (5 + 2 == 7) = True  AND  (3 < 2) = False  →  True AND False = False

>>> x != 5 and 9 > 2
False
# Explicação: (5 != 5) = False  AND  (9 > 2) = True  →  False AND True = False

>>> 2 > 7 and 4 >= 5
False
# Explicação: (2 > 7) = False  AND  (4 >= 5) = False  →  False AND False = False
```

### Diagrama de Fluxo

```
         ┌─────────────┐
         │  Condição A │
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │  É True?    │
         └──┬───────┬──┘
            │       │
          Não      Sim
            │       │
            ▼       ▼
         False   ┌─────────────┐
                 │  Condição B │
                 └──────┬──────┘
                        │
                 ┌──────▼──────┐
                 │  É True?    │
                 └──┬───────┬──┘
                    │       │
                  Não      Sim
                    │       │
                    ▼       ▼
                 False    True
```

---

## 2. Operador OR (OU lógico)

### Tabela Verdade

```
┌─────────┬─────────┬──────────┐
│    A    │    B    │  A or B  │
├─────────┼─────────┼──────────┤
│  True   │  True   │   True   │
│  True   │  False  │   True   │
│  False  │  True   │   True   │
│  False  │  False  │  False   │
└─────────┴─────────┴──────────┘
```

### Diagrama Visual

```
        Condição A       Condição B
            ✓       OU        ✓       →  True
            ✓       OU        ✗       →  True
            ✗       OU        ✓       →  True
            ✗       OU        ✗       →  False
```

### Exemplos Práticos

```python
>>> x = 5

>>> x == 5 or 2 < 3
True
# Explicação: (5 == 5) = True  OR  (2 < 3) = True  →  True OR True = True

>>> x != 5 or 9 > 2
True
# Explicação: (5 != 5) = False  OR  (9 > 2) = True  →  False OR True = True

>>> x + 2 == 7 or 3 < 2
True
# Explicação: (5 + 2 == 7) = True  OR  (3 < 2) = False  →  True OR False = True

>>> 2 > 7 or 4 >= 5
False
# Explicação: (2 > 7) = False  OR  (4 >= 5) = False  →  False OR False = False
```

### Diagrama de Fluxo

```
         ┌─────────────┐
         │  Condição A │
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │  É True?    │
         └──┬───────┬──┘
            │       │
          Não      Sim
            │       │
            ▼       ▼
    ┌─────────────┐ True
    │  Condição B │
    └──────┬──────┘
           │
    ┌──────▼──────┐
    │  É True?    │
    └──┬───────┬──┘
       │       │
     Não      Sim
       │       │
       ▼       ▼
     False   True
```

---

## 3. Operador NOT (NÃO lógico)

### Tabela Verdade

```
┌─────────┬─────────┐
│    A    │  not A  │
├─────────┼─────────┤
│  True   │  False  │
│  False  │  True   │
└─────────┴─────────┘
```

### Diagrama Visual

```
        Condição A          not
            ✓        →       ✗
            ✗        →       ✓
```

### Exemplos Práticos

```python
>>> not 3 < 7
False
# Explicação: (3 < 7) = True  →  NOT True = False

>>> not (True or True)
False
# Explicação: (True OR True) = True  →  NOT True = False

>>> not True or True
True
# Explicação: (NOT True) OR True  →  False OR True = True
# Atenção: Pela precedência, NOT é executado primeiro!
```

### Diagrama de Fluxo

```
         ┌─────────────┐
         │  Condição A │
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │  É True?    │
         └──┬───────┬──┘
            │       │
          Não      Sim
            │       │
            ▼       ▼
          True    False
```

---

## Combinando Operadores Lógicos

### Exemplo 1: Precedência de Operadores

```python
>>> not True or True
True
```

**Passo a passo:**
```
1. not True        →  False    (NOT tem maior prioridade)
2. False or True   →  True     (OR é executado depois)
```

**Diagrama:**
```
    not True  or  True
       │           │
       ▼           │
     False  or  True
         │      │
         └──┬───┘
            ▼
          True
```

---

### Exemplo 2: Usando Parênteses

```python
>>> not (True or True)
False
```

**Passo a passo:**
```
1. (True or True)     →  True     (Parênteses são avaliados primeiro)
2. not True           →  False    (NOT é aplicado ao resultado)
```

**Diagrama:**
```
    not (True or True)
           │      │
           └──┬───┘
              ▼
          not True
              │
              ▼
            False
```

---

## Tabela Resumo de Precedência

```
┌──────────┬─────────────────┬──────────────────────┐
│ Prioridade│   Operador     │      Exemplo         │
├──────────┼─────────────────┼──────────────────────┤
│    1     │   Parênteses   │   (True or False)    │
│    2     │      not       │   not True           │
│    3     │      and       │   True and False     │
│    4     │      or        │   True or False      │
└──────────┴─────────────────┴──────────────────────┘
```

---

## Exercícios Práticos

### Exercício 1
Determine o resultado das seguintes expressões:

```python
a) True and False or True
b) not False and True
c) True or False and False
d) not (True and False)
e) (True or False) and (False or True)
```

<details>
<summary>Ver Respostas</summary>

```python
a) True and False or True  →  True
   # (True AND False) OR True → False OR True → True

b) not False and True  →  True
   # (NOT False) AND True → True AND True → True

c) True or False and False  →  True
   # True OR (False AND False) → True OR False → True

d) not (True and False)  →  True
   # NOT (True AND False) → NOT False → True

e) (True or False) and (False or True)  →  True
   # True AND True → True
```
</details>

---

### Exercício 2
Complete o código com operadores lógicos:

```python
idade = 25
tem_carteira = True

# Pode dirigir se tem 18 anos ou mais E tem carteira
pode_dirigir = idade >= 18 _____ tem_carteira

# É jovem se tem menos de 30 anos OU é estudante
estudante = False
eh_jovem = idade < 30 _____ estudante

# Não pode entrar se é menor de idade
pode_entrar = _____ (idade < 18)
```

<details>
<summary>Ver Respostas</summary>

```python
pode_dirigir = idade >= 18 and tem_carteira
eh_jovem = idade < 30 or estudante
pode_entrar = not (idade < 18)
```
</details>

---

## Casos de Uso Reais

### 1. Validação de Login

```python
usuario = "admin"
senha = "1234"

# Login válido se usuário E senha estão corretos
login_valido = (usuario == "admin") and (senha == "1234")
print(f"Login válido: {login_valido}")  # True
```

---

### 2. Verificação de Acesso

```python
idade = 20
eh_vip = False

# Pode entrar se tem 18+ OU é VIP
pode_entrar = (idade >= 18) or eh_vip
print(f"Pode entrar: {pode_entrar}")  # True
```

---

### 3. Filtro de Produtos

```python
preco = 150
em_estoque = True
categoria = "eletrônicos"

# Mostrar produto se: está em estoque E (preço <= 200 OU é eletrônico)
mostrar = em_estoque and (preco <= 200 or categoria == "eletrônicos")
print(f"Mostrar produto: {mostrar}")  # True
```

---

## Dicas e Boas Práticas

### ✅ Faça:

1. **Use parênteses** para deixar clara a intenção:
   ```python
   # Bom
   if (idade >= 18) and (tem_carteira):
       print("Pode dirigir")
   ```

2. **Nomeie variáveis booleanas** de forma clara:
   ```python
   # Bom
   is_valid = True
   has_permission = False
   can_access = True
   ```

3. **Evite comparações redundantes**:
   ```python
   # Ruim
   if is_valid == True:
   
   # Bom
   if is_valid:
   ```

---

### ❌ Evite:

1. **Lógica complexa sem parênteses**:
   ```python
   # Confuso
   if not a and b or c and not d:
   
   # Melhor
   if (not a and b) or (c and not d):
   ```

2. **Negações duplas**:
   ```python
   # Ruim
   if not (not is_valid):
   
   # Bom
   if is_valid:
   ```

---

## Resumo Visual

```
┌─────────────────────────────────────────────────────────┐
│                 OPERADORES LÓGICOS                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  AND → Ambos precisam ser True                         │
│        ✓ and ✓ = ✓                                     │
│        ✓ and ✗ = ✗                                     │
│                                                         │
│  OR  → Pelo menos um precisa ser True                  │
│        ✓ or ✗ = ✓                                      │
│        ✗ or ✗ = ✗                                      │
│                                                         │
│  NOT → Inverte o valor                                 │
│        not ✓ = ✗                                       │
│        not ✗ = ✓                                       │
│                                                         │
│  Precedência: not > and > or                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Conclusão

Os operadores lógicos são fundamentais para:
- ✅ Criar condições complexas
- ✅ Validar múltiplos critérios
- ✅ Controlar fluxo de execução
- ✅ Implementar regras de negócio

**Próximo passo:** Pratique com os exercícios e experimente criar suas próprias condições lógicas!

---

**© Material Didático - Python**