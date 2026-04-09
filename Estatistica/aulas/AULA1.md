# Estatística
**Prof. Ms. José Luís G. Hernandes**

---

## Objetivos Gerais

Apresentar ao aluno os conceitos fundamentais de Estatística, de maneira que ele possa compreender e interpretar dados estatísticos e utilizá-los na tomada de decisões.

---

## Objetivos Específicos

- Apresentar os conceitos básicos da Estatística Descritiva, destacando as medidas sobre distribuição e os principais indicadores ao desenvolvimento da inferência estatística.
- Coletar e interpretar dados de forma sistematizada e imprimir credibilidade a análises quantitativas dos fenômenos de realidade investigada.

---

## Competências

- Compreender as metodologias estatísticas, quantitativas e qualitativas, adequadas para aplicações em projetos.
- Reunir, interpretar e analisar dados para auxiliar gestores nas tomadas de decisões.
- Elaborar relatórios técnicos resultantes da análise técnica dos dados.

---

## Conteúdo Programático

### 1. Conceitos Básicos
- Introdução à estatística
- Conceitos fundamentais
- População e amostra
- Processos estatísticos de abordagem
- Dados estatísticos
- Estatística descritiva
- Dados brutos
- Rol

### 2. Séries Estatísticas
- Apresentação de dados estatísticos
- Distribuição de frequência — variável discreta
- Distribuição de frequência — variável contínua
- Construção da variável discreta
- Construção da variável contínua
- Distribuição das frequências — variável discreta e contínua
- Representação gráfica de séries estatísticas

### 3. Medidas de Tendência Central
- Médias
- Média aritmética simples e ponderada
- Mediana
- Moda

### 4. Medidas de Dispersão
- Desvio médio simples — cálculo
- Variância e desvio padrão — cálculo
- Interpretação do desvio padrão

### 5. Binômio de Newton
- Fatorial de um número
- Coeficientes binomiais
- Triângulo de Pascal
- Somatório
- Teorema binomial
- Termo geral do binômio

### 6. Análise Combinatória
- Introdução
- Princípio geral da contagem
- Arranjos
- Permutações
- Combinações

### 7. Probabilidades
- Conceitos básicos
- Experimento aleatório
- Espaço amostral
- Evento
- Avaliação
- Regras do cálculo de probabilidades
- Exemplos de aplicação das regras

### 8. Variável Aleatória Discreta Unidimensional
- Conceito
- Função de probabilidade
- Valor esperado de uma variável aleatória
- Variância de uma variável aleatória

### 9. Modelos Teóricos Discretos e Contínuos de Probabilidade
- Distribuição binomial
- Distribuição normal e probabilidades
- Operação com distribuições normais
- Aproximação da normal pela binomial

### 10. Inferência Estatística
- Amostragem
- Estimadores
- Propriedades de um estimador

### 11. Estimação
- Intervalos de confiança
- Distribuição amostral das médias
- Intervalo de confiança para a média populacional
- Fator da correção
- Distribuição "t" (Student)
- Uso da tabela "t" em intervalos de confiança
- Determinação do tamanho da amostra para estimativas de proporção
- Intervalos de confiança para proporção
- Intervalos de confiança para soma e diferença entre as médias de duas populações normais e independentes
- Intervalos de confiança para soma e diferença de proporções
- Intervalos de confiança para a variância de uma população

### 12. Regressão Linear Simples
- Relação entre duas variáveis
- Correlação linear
- Coeficiente de correlação linear
- Modelo teórico
- Método dos mínimos quadrados
- Cálculo das estimativas
- Coeficiente de explicação
- Funções linearizáveis

---

## Bibliografia

### Básica
- ANDERSON, D. R.; SWEENEY, D. J.; WILLIANS, T. A.; CAMM, J. D.; COCHRAN, J. J. **Estatística aplicada à administração e economia**. São Paulo: Cengage Learning, 2021.
- QUINSLER, A. P. **Probabilidade e estatística**. Curitiba: InterSaberes, 2022.
- SILVA, R. dos S. **Estatística aplicada**. Curitiba: Contentus, 2020.

### Complementar
- BONAFINI, F. C. **Estatística**. São Paulo: Pearson, 2019.
- CASTANHEIRA, N. P. **Estatística aplicada a todos os níveis**. Curitiba: InterSaberes, 2018.
- CRESPO, A. A. **Estatística**. São Paulo: Saraiva, 2020.
- OLIVEIRA, F. E. M. **Estatística e probabilidade com ênfase em exercícios resolvidos e propostos**. Rio de Janeiro: LTC, 2017.
- VIEIRA, S. **Fundamentos de estatística**. São Paulo: Atlas, 2019.

---

## Conteúdo da Aula 1

### O que é Estatística?

De acordo com Crespo (2009), a estatística é uma parte da matemática aplicada que fornece métodos para a **coleta, organização, descrição, análise e interpretação de dados**, assim como para a utilização desses recursos na tomada de decisões.

A estatística é a ciência que coleta, organiza, analisa e interpreta dados para auxiliar na tomada de decisões. Conceitos-chave incluem: **população, amostra, variáveis** (qualitativas/quantitativas) e **medidas de tendência central**, essenciais para transformar números em informação.

---

### Áreas da Estatística

```
┌─────────────────────────────────────────────────────────────┐
│                     ESTATÍSTICA                             │
├──────────────────┬──────────────────┬───────────────────────┤
│  DESCRITIVA      │  PROBABILIDADE   │  INDUTIVA             │
│                  │                  │  (Inferencial)        │
├──────────────────┼──────────────────┼───────────────────────┤
│ Organiza,        │ Lida com a       │ Usa amostras para     │
│ descreve e       │ chance de algo   │ estimar características│
│ sintetiza dados  │ acontecer        │ da população          │
│ já ocorridos     │                  │                       │
├──────────────────┼──────────────────┼───────────────────────┤
│ Trabalha com     │ Campo da         │ Possui erro associado │
│ o passado —      │ incerteza e dos  │ para dado intervalo   │
│ sem incerteza    │ eventos aleatórios│ de confiança         │
├──────────────────┼──────────────────┼───────────────────────┤
│ Ex.: calcular a  │ Ex.: 50% de      │ Ex.: pesquisa         │
│ média de idades  │ chance de cara   │ eleitoral com margem  │
│ de 3 pessoas     │ ao lançar moeda  │ de erro de ±3%        │
└──────────────────┴──────────────────┴───────────────────────┘
```

---

### População e Amostra

**População** é a coleção completa de todos os elementos (ou indivíduos) que interessam ao estudo de determinado fenômeno.

**Amostra** é um subconjunto não vazio da população.

```
┌──────────────────────────────────────────────────────┐
│                   POPULAÇÃO                          │
│             (todos os elementos)                     │
│                                                      │
│    ┌─────────────────────┐                           │
│    │      AMOSTRA        │  ← subconjunto            │
│    │  (parte selecionada)│                           │
│    └─────────────────────┘                           │
│                                                      │
│  Elemento (ou indivíduo) ──► cada item da população  │
└──────────────────────────────────────────────────────┘
```

**Por que usar amostras?**
Trabalhar com amostras é mais **rápido, barato e eficiente** do que coletar dados de toda a população.

> ⚠️ **Importante:** "Amostra boa" não é necessariamente "amostra grande". Uma boa amostra traz consigo **todas as características presentes na população e na proporção em que ocorrem**.

---

### Dados Brutos e Rol

| Conceito | Definição |
|----------|-----------|
| **Dados Brutos** | Sequência de valores não organizados, obtidos diretamente da observação de um fenômeno |
| **Rol** | Dados brutos com alguma forma de organização (crescente, decrescente ou alfabética) |

> O **rol** corresponde à etapa de **organização**, não de redução de dados. O número de elementos permanece o mesmo.

#### Exemplo de Aplicação — Notas de alunos

**Dados brutos (sem organização):**

| Aluno    | Nota |
|----------|------|
| Maria    | 9    |
| Pedro    | 4    |
| Otávio   | 6    |
| Mariana  | 7    |
| Sheila   | 8,5  |
| Oswaldo  | 3    |
| Matheus  | 8    |
| Guilherme| 10   |
| Leonardo | 10   |

**Dados brutos:** `9  4  6  7  8,5  3  8  10  10`

**Rol (ordem crescente):** `3  4  6  7  8  8,5  9  10  10`

---

### Exercício Prático

**Enunciado:** Um pesquisador coletou o número de horas semanais que 15 estudantes se dedicam aos estudos. Os dados brutos obtidos foram:

`12 · 8 · 20 · 15 · 8 · 25 · 10 · 18 · 8 · 30 · 12 · 20 · 5 · 15 · 22`

- Quantos dados brutos existem no conjunto?
- Escreva o rol em ordem crescente.

**Resposta:**
- Quantidade de dados brutos: **15 dados**
- Rol em ordem crescente: `5, 8, 8, 8, 10, 12, 12, 15, 15, 18, 20, 20, 22, 25, 30`

---

### Tipos de Variáveis

No contexto estatístico, uma **variável** é qualquer característica dos elementos em estudo.

```
                        VARIÁVEIS
                            │
            ┌───────────────┴────────────────┐
            │                                │
     QUANTITATIVAS                      QUALITATIVAS
     (mensuráveis)                  (categóricas / não mensuráveis)
            │                                │
    ┌───────┴────────┐              ┌─────────┴──────────┐
    │                │              │                    │
 DISCRETAS       CONTÍNUAS       NOMINAIS             ORDINAIS
    │                │              │                    │
Contáveis;       Valores          Sem hierarquia      Com hierarquia
geralmente       fracionários     entre categorias    entre categorias
inteiros         são possíveis
    │                │              │                    │
Ex.: nº de       Ex.: altura,     Ex.: sexo,          Ex.: nível de
filhos, nº de    peso, renda,     cor dos olhos,      escolaridade,
alunos,          temperatura,     estado civil,       faixa etária,
nº de peças      pressão          nacionalidade       classe social
defeituosas      arterial
```

#### Tabela de exemplos de dados (8 elementos)

| #  | Idade (anos) | Peso (kg) | Altura (m) | Renda mensal (R$) | Sexo (M/F) |
|----|-------------|-----------|------------|-------------------|------------|
| 1  | 20          | 75,2      | 1,69       | 1000,00           | M          |
| 2  | 25          | 67,8      | 1,52       | 2500,00           | F          |
| 3  | 54          | 92,5      | 1,86       | 950,50            | M          |
| 4  | 27          | 54,5      | 1,62       | 4000,00           | F          |
| 5  | 32          | 63,0      | 1,74       | 10680,00          | F          |
| 6  | 43          | 72,5      | 1,82       | 870,00            | F          |
| 7  | 17          | 89,4      | 1,90       | 3000,00           | M          |
| 8  | 33          | 52,1      | 1,55       | 2000,40           | F          |

Variáveis identificadas: **idade, peso, altura, renda mensal** (quantitativas) e **sexo** (qualitativa nominal).

---

#### Exemplo — Classificação de variáveis quantitativas

| Variável | Tipo | Justificativa |
|----------|------|---------------|
| Idade | Contínua | Pode assumir qualquer valor num intervalo, mesmo que expressa em anos inteiros |
| Nº de reclamações por departamento | Discreta | Valores inteiros — não há reclamação fracionária |
| Nº de alunos por classe | Discreta | Valores inteiros — não há aluno fracionário |
| Volume de líquido em recipiente | Contínua | Pode assumir qualquer valor, associado a uma unidade (mL, L) |

#### Exemplo — Classificação de variáveis qualitativas

| Variável | Tipo | Justificativa |
|----------|------|---------------|
| Faixa etária | Ordinal | Organiza-se em sequência crescente (infantil → adolescente → adulto → idoso) |
| Raça de cachorro | Nominal | Sem hierarquia entre as categorias |
| Classe social | Ordinal | Organiza-se em sequência (A, B, C, D, E — maior para menor renda) |
| Nacionalidade | Nominal | Sem ordem intrínseca entre as categorias |

---

### Distribuição de Frequência

Uma **distribuição de frequências** representa um conjunto de dados em que os valores aparecem em correspondência com suas repetições — evitando que o mesmo valor apareça mais de uma vez, como no rol.

**Formas de apresentação:**

```
DISTRIBUIÇÃO DE FREQUÊNCIAS
          │
    ┌─────┴──────┐
    │            │
TABELA DE    GRÁFICO DE
FREQUÊNCIAS   COLUNAS
    │            │
Conta as     Histograma:
ocorrências  colunas
por classe   justapostas
             por intervalo
```

---

#### Classe e Frequência Simples Absoluta

**Tipos de classe:**

| Tipo de Classe | Aplicação | Característica |
|----------------|-----------|----------------|
| **Discreta** (unitária) | Variáveis discretas | Um único valor por classe |
| **Intervalar** | Variáveis contínuas | Um intervalo de valores por classe |

**Simbologia da tabela de frequências:**

| Símbolo | Significado |
|---------|-------------|
| `i` | Índice (número da classe) |
| `k` | Total de classes |
| `Xᵢ` | Ponto médio de classe (valor da classe) |
| `Fᵢ` ou `fᵢ` | Frequência simples absoluta da classe i |
| `N` | Total de elementos = Σfᵢ |

---

#### Exemplo — Tabela de Frequências com Classes Discretas (Calçados)

Uma fábrica levantou o número de calçado dos operários para encomendar EPIs:

| i (índice) | Xᵢ (nº do calçado) | Fᵢ (frequência) |
|------------|---------------------|-----------------|
| 1          | 36                  | 5               |
| 2          | 37                  | 10              |
| 3          | 38                  | 13              |
| 4          | 39                  | 12              |
| 5          | 40                  | 11              |
| 6          | 41                  | 9               |
| 7          | 42                  | 2               |
| –          | –                   | **Σfᵢ = N = 62** |

**Leitura:** F₃ = 13 → 13 operários calçam 38. x₃ = 38.

**Somatório:** Σfᵢ = f₁ + f₂ + f₃ + f₄ + f₅ + f₆ + f₇ = 5 + 10 + 13 + 12 + 11 + 9 + 2 = **62**

---

#### Exemplo — Tabela de Frequências com Classes Intervalares (Temperaturas)

**Dados brutos (sensores de temperatura, °C):**

```
20,1  22,5  19,8  24,3  21,0  23,4  22,1  25,6  19,5  21,8
22,9  20,0  23,3  19,9  24,0  23,1  21,7  22,3  19,7  21,5
23,0  20,4  22,6  21,2  24,7  25,0  21,4  22,8  23,2  25,3
```

**Rol (ordem crescente):**

```
19,5  19,7  19,8  19,9  20,0  20,1  20,4  21,0  21,2  21,4
21,5  21,7  21,8  22,1  22,3  22,5  22,6  22,8  22,9  23,0
23,1  23,2  23,3  23,4  24,0  24,3  24,7  25,0  25,3  25,6
```

**Tabela de frequências com classes intervalares** (amplitude = 1°C):

| i (índice) | Intervalo de classe | Xᵢ (ponto médio) | Fᵢ (frequência) |
|------------|---------------------|-------------------|-----------------|
| 1          | 19 ⊢ 20             | 19,5              | 4               |
| 2          | 20 ⊢ 21             | 20,5              | 3               |
| 3          | 21 ⊢ 22             | 21,5              | 6               |
| 4          | 22 ⊢ 23             | 22,5              | 6               |
| 5          | 23 ⊢ 24             | 23,5              | 5               |
| 6          | 24 ⊢ 25             | 24,5              | 3               |
| 7          | 25 ⊢ 26             | 25,5              | 3               |
| –          | –                   | –                 | **Σfᵢ = N = 30** |

> **Nota sobre o intervalo `⊢`:** O intervalo é **fechado à esquerda e aberto à direita**. Por exemplo, no intervalo `19 ⊢ 20`, o valor 20,0°C **não** pertence a essa classe — ele pertence à classe `20 ⊢ 21`.

---

### Frequência Simples Relativa

**Contexto:** Tempo de resolução de atividade curricular — 40 candidatos em concurso público.

**Fórmulas:**

```
Frequência simples relativa unitária:    fᵣᵢ = fᵢ / N

Frequência simples relativa percentual:  fᵣᵢ% = (fᵢ / N) × 100 = fᵣᵢ × 100
```

**Tabela completa com frequências relativas:**

| Tempo (min) | Fᵢ (f. s. absoluta) | Fᵣᵢ (f. s. relativa unitária) | Fᵣᵢ% (f. s. relativa percentual) |
|-------------|----------------------|-------------------------------|-----------------------------------|
| 60 ⊢ 70     | 12                   | 0,300                         | 30,0%                             |
| 70 ⊢ 80     | 14                   | 0,350                         | 35,0%                             |
| 80 ⊢ 90     | 11                   | 0,275                         | 27,5%                             |
| 90 ⊢ 100    | 1                    | 0,025                         | 2,5%                              |
| 100 ⊢ 110   | 1                    | 0,025                         | 2,5%                              |
| 110 ⊢ 120   | 0                    | 0                             | 0%                                |
| 120 ⊢ 130   | 1                    | 0,025                         | 2,5%                              |
| –           | Σfᵢ = N = 40         | Σfᵣᵢ = 1                      | Σfᵣᵢ% = 100%                      |

**Exemplos de cálculo:**
- `fᵣ₂ = f₂ / N = 14 / 40 = 0,35`
- `fᵣ₃% = (f₃ / N) × 100 = (11 / 40) × 100 = 27,5%`

---

### Frequência Acumulada Absoluta

**Fórmula:** `Fᵢ = Fᵢ₋₁ + fᵢ`, com `F₁ = f₁`

**Tabela com frequência acumulada absoluta:**

| Tempo (min) | Fᵢ (f. s. absoluta) | Fᵢ (f. ac. absoluta) |
|-------------|----------------------|----------------------|
| 60 ⊢ 70     | 12                   | 12                   |
| 70 ⊢ 80     | 14                   | 26                   |
| 80 ⊢ 90     | 11                   | 37                   |
| 90 ⊢ 100    | 1                    | 38                   |
| 100 ⊢ 110   | 1                    | 39                   |
| 110 ⊢ 120   | 0                    | 39                   |
| 120 ⊢ 130   | 1                    | 40                   |
| –           | Σfᵢ = N = 40         | –                    |

**Exemplo de cálculo:** `F₂ = F₁ + f₂ = 12 + 14 = 26`

**Notação alternativa (frequência acumulada):**

| Tempo (min) | Fᵢ (f. ac. absoluta) |
|-------------|----------------------|
| < 70        | 12                   |
| < 80        | 26                   |
| < 90        | 37                   |
| < 100       | 38                   |
| < 110       | 39                   |
| < 120       | 39                   |
| < 130       | 40                   |

---

### Histograma e Polígono de Frequências

Distribuições de frequências com classes intervalares são frequentemente representadas por **histogramas** — gráficos de colunas justapostas que mostram visualmente a distribuição dos dados.

**Representação textual do histograma** (tempo de resolução — 40 candidatos):

```
Freq.
  14 |        ████
  13 |        ████
  12 | ████   ████
  11 | ████   ████   ████
  10 | ████   ████   ████
   9 | ████   ████   ████
   8 | ████   ████   ████
   7 | ████   ████   ████
   6 | ████   ████   ████
   5 | ████   ████   ████
   4 | ████   ████   ████
   3 | ████   ████   ████
   2 | ████   ████   ████   ░░░░   ░░░░           ░░░░
   1 | ████   ████   ████   ░░░░   ░░░░           ░░░░
   0 +────────────────────────────────────────────────────► Tempo (min)
      60-70  70-80  80-90  90-100 100-110 110-120 120-130

Legenda:  ████ = barras com maior frequência
          ░░░░ = barras com menor frequência (f=1)
          classe 110-120: frequência = 0 (sem barra)
```

**Dados do histograma:**

| Intervalo   | Frequência | Representação visual |
|-------------|------------|----------------------|
| 60 ⊢ 70     | 12         | `████████████`       |
| 70 ⊢ 80     | 14         | `██████████████`     |
| 80 ⊢ 90     | 11         | `███████████`        |
| 90 ⊢ 100    | 1          | `█`                  |
| 100 ⊢ 110   | 1          | `█`                  |
| 110 ⊢ 120   | 0          | *(sem barra)*        |
| 120 ⊢ 130   | 1          | `█`                  |

> A maioria dos candidatos resolveu a atividade entre **60 e 90 minutos** (37 de 40 candidatos = 92,5%).