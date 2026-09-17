## Aula 3: Introdução ao Hardware

**Aula 06 - Sistema Binário**

*Prof. Suzana Mota*

---

### Hoje você vai aprender

- **Sistema de Numeração Binário**
- Converter binário em decimal
- Converter decimal em binário

---

### Eis que o homem começou a contar

Desde que passou a contar o resultado do que produzia, o homem precisou de instrumentos de calcular.

### Interessante...

Existem vários sistemas numéricos: decimal, binário, octal, hexadecimal.

Adotamos matematicamente o sistema com base 10 por ser mais intuitivo desde o princípio utilizar nossas mãozinhas na contagem.

---

### E por qual razão os computadores usam binário?

**Para garantir que a informação seja mais confiável.**

**Facilita a realização dos cálculos.**

---

### Tabela de Conversão Decimal ↔ Binário

| **Decimal** | **Binário** | **Decimal** | **Binário** |
|-------------|-------------|-------------|-------------|
| 0 | 0 | 11 | 1011 |
| 1 | 1 | 12 | 1100 |
| 2 | 10 | 13 | 1101 |
| 3 | 11 | 14 | 1110 |
| 4 | 100 | 15 | 1111 |
| 5 | 101 | 16 | 10000 |
| 6 | 110 | 17 | 10001 |
| 7 | 111 | 18 | 10010 |
| 8 | 1000 | 19 | 10011 |
| 9 | 1001 | 20 | 10100 |
| 10 | 1010 | ... | .... |

---

### Tabela de Conversão Letra ↔ Binário

| **Letra** | **Decimal** | **Binário** | **Letra** | **Decimal** | **Binário** | **Letra** | **Decimal** | **Binário** |
|-----------|-------------|-------------|-----------|-------------|-------------|-----------|-------------|-------------|
| — | 0 | 00000 | I | 10 | 01010 | Q | 20 | 10100 |
| A | 1 | 00001 | J | 11 | 01011 | R | 21 | 10101 |
| B | 2 | 00010 | K | 12 | 01100 | S | 22 | 10110 |
| C | 3 | 00011 | L | 13 | 01101 | T | 23 | 10111 |
| Ch | 4 | 00100 | Ll | 14 | 01110 | U | 24 | 11000 |
| D | 5 | 00101 | M | 15 | 01111 | V | 25 | 11001 |
| E | 6 | 00110 | N | 16 | 10000 | W | 26 | 11010 |
| F | 7 | 00111 | Ñ | 17 | 10001 | X | 27 | 11011 |
| G | 8 | 01000 | O | 18 | 10010 | Y | 28 | 11100 |
| H | 9 | 01001 | P | 19 | 10011 | Z | 29 | 11101 |

---

### Atividade: Escreva seu nome em binário

Use a tabela acima para converter as letras do seu nome para binário!

---

### Como converter decimal em binário?

### Método das Divisões Sucessivas por 2

**Exemplo: Converter 34₁₀ para binário**

```
Conversão de Decimal para Binário

34 | 2
    ——
0   17 | 2
        ——
    1    8 | 2
            ——
        0    4 | 2
                ——
            0    2 | 2
                    ——
                0    1

Resultado: 100010₂
```

**Regra:** Divide-se sucessivamente por 2, anotando os restos de baixo para cima.

---

### Exemplo: Converter 45₁₀ para binário

```
        45 | 2
           ——
Menor   1  22 | 2
significância  ——
           0  11 | 2
                 ——
              1   5 | 2
                    ——
                 1  2 | 2
                       ——
                    0  1 | 2
                          ——
                       1  0
                       
Maior Significância

Resultado: 45 = 101101₂
```

---

### Exemplo: Converter 67₁₀ para binário

```
67 | 2
   ——
1  33 | 2
       ——
   1  16 | 2
          ——
      0   8 | 2
             ——
          0  4 | 2
                ——
             0  2 | 2
                   ——
                0  1

Resultado: 67₁₀ = 1000011₂
```

---

### Exemplo: Converter 53₁₀ para binário

```
    53 | 2
       ——
    1  26 | 2
           ——
        0  13 | 2
              ——
           1   6 | 2
                  ——
               0  3 | 2
                     ——
                  1  1

Resultado: 53₁₀ = 110101₂
```

---

### Agora é com você!

Converta os números decimais abaixo em binário:

a) **29**

b) **100**

c) **128**

d) **1024**

---

### Transformar binário em decimal

### Binary Base = 2

Cada posição representa uma potência de 2:

|  | **Column 8** | **Column 7** | **Column 6** | **Column 5** | **Column 4** | **Column 3** | **Column 2** | **Column 1** |
|--|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|
| **Base^exp** | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| **Weight** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Potências de 2:

```
2⁰ = 1
2¹ = 2
2² = 2 × 2 = 4
2³ = 2 × 2 × 2 = 8
2⁴ = 2 × 2 × 2 × 2 = 16
2⁵ = 2 × 2 × 2 × 2 × 2 = 32
2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64
2⁷ = 2 × 2 × 2 × 2 × 2 × 2 × 2 = 128
```

---

### Exemplo: Converter 110101₂ para decimal

```
      1  1  0  1  0  1₂
      ↓  ↓  ↓  ↓  ↓  ↓
1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰
  ↓     ↓     ↓     ↓     ↓     ↓
 32  + 16  +  0  +  4  +  0  +  1  = 53

110101₂ = 53₁₀
```

---

### Exemplo: Converter 100011₂ para decimal

```
100011₍₂₎ = 35₍₁₀₎

1 × 2⁵ + 0 × 2⁴ + 0 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰

32  +  0   +  0   +  0   +  2   +  1   = 35₍₁₀₎
```

---

### Agora é com você!

A partir do binário, encontre o decimal correspondente:

a) **1010010**

b) **1000110**

c) **0000010**

d) **0000011**

---

### Resumo - Sistema Binário

### Conceitos Fundamentais

- **Sistema Binário:** Base 2 (apenas 0 e 1)
- **Sistema Decimal:** Base 10 (0 a 9)
- **Bit:** Menor unidade de informação (0 ou 1)
- **Por que binário?** Confiabilidade e simplicidade nos circuitos eletrônicos

### Decimal → Binário

**Método:** Divisões sucessivas por 2

1. Divida o número por 2
2. Anote o resto (0 ou 1)
3. Use o quociente para a próxima divisão
4. Repita até o quociente ser 0
5. Leia os restos de **baixo para cima**

**Exemplo:** 45₁₀ = 101101₂

### Binário → Decimal

**Método:** Soma das potências de 2

1. Numere as posições da direita para esquerda (começando em 0)
2. Multiplique cada bit por 2 elevado à sua posição
3. Some todos os resultados

**Exemplo:** 110101₂ = 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰ = 32+16+4+1 = 53₁₀

### Tabela Rápida de Potências de 2

| **2⁰** | **2¹** | **2²** | **2³** | **2⁴** | **2⁵** | **2⁶** | **2⁷** | **2⁸** | **2⁹** | **2¹⁰** |
|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|---------|
| 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

---

**Fim do Material Completo**

*Material elaborado para os cursos de Análise e Desenvolvimento de Sistemas, Pensamento Lógico Computacional e Introdução ao Hardware*
