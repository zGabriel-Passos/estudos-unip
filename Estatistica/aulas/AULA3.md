# PROBABILIDADES

**Conceitos · Espaço Amostral · Eventos · Regras de Cálculo · Aplicações em ADS**

*Análise e Desenvolvimento de Sistemas — Prof. José Luís G. Hernandes*

---

## Agenda

1. **Conceitos Básicos**
2. **Experimento Aleatório**
3. **Espaço Amostral**
4. **Evento**
5. **Avaliação da Probabilidade**
6. **Regras de Cálculo**

---

# 1. CONCEITOS BÁSICOS DE PROBABILIDADE

## O que é Probabilidade?

### Definição

Probabilidade é uma medida numérica entre 0 e 1 (ou 0% a 100%) que quantifica a **CHANCE** de ocorrência de um evento em um experimento aleatório.

### Onde a probabilidade aparece em TI?

| **Segurança** | **Qualidade** | **Machine Learning** | **Redes** |
|---------------|---------------|----------------------|-----------|
| Probabilidade de invasão, detecção de fraudes e análise de riscos. | Probabilidade de falhas em software e testes estatísticos. | Classificadores probabilísticos como Naive Bayes. | Probabilidade de perda de pacotes e congestionamento. |

---

## Tipos de Probabilidade

### 1. Probabilidade Clássica (a priori)

Calculada antes da realização do experimento, baseada em raciocínio lógico.

**Exemplo:** P(cara) = 1/2 em uma moeda justa.

### 2. Probabilidade Frequentista (a posteriori)

Calculada a partir da frequência relativa de resultados em experimentos repetidos.

**Exemplo:** 47 caras em 100 lançamentos → P ≈ 0,47.

### 3. Probabilidade Subjetiva

Baseada em crença ou experiência pessoal do observador.

**Exemplo:** 'Acredito que há 80% de chance de concluir o projeto no prazo.'

---

## Escala de Probabilidade

### Propriedade Fundamental

Toda probabilidade P(E) satisfaz: **0 ≤ P(E) ≤ 1**

```
0                    0,25              0,5              0,75                1
|---------------------|-----------------|-----------------|-------------------|
IMPOSSÍVEL                         IGUALMENTE                            CERTO
(nunca ocorre)                     PROVÁVEL                       (sempre ocorre)
```

### Exemplos na escala:

| **P = 0** | **P = 0,5** | **P = 1** |
|-----------|-------------|-----------|
| Tirar 7 num dado comum | Cara ou coroa em moeda justa | Sair número entre 1 e 6 no dado |

---

## Exemplo — Probabilidade no Cotidiano de TI

### Situação

Em um sistema de autenticação, análises históricas mostram que, em 1.000 tentativas de login, 15 são fraudulentas. Qual a probabilidade de uma tentativa ser fraudulenta?

### Dados:
- Total de tentativas = 1.000
- Tentativas fraudulentas = 15

### Cálculo:

```
P(fraude) = 15 / 1.000 = 0,015 = 1,5%
```

### Interpretação:

Há 1,5% de chance de qualquer tentativa de login ser fraudulenta. Este valor pode ser usado para configurar alertas e limiares no sistema de segurança.

---

## Caso Prático 1 — Taxa de Bugs em Software

### Situação

Uma equipe de QA testou 500 funcionalidades e encontrou bugs em 35 delas. Classifique a probabilidade de uma funcionalidade ter bug e interprete o resultado.

### Resolução:

1. Total de funcionalidades (n) = **500**
2. Funcionalidades com bug = **35**
3. P(bug) = **35 / 500 = 0,07 = 7%**
4. Como 0 < 0,07 < 1, é uma probabilidade válida e relativamente baixa

### Conclusão:

```
P(bug) = 35 / 500 = 0,07 → 7% das funcionalidades apresentam bugs
```

---

## Caso Prático 2 — Probabilidade de Downtime

### Situação

Um servidor ficou indisponível (downtime) em 3 dos últimos 30 dias. Qual a probabilidade de o servidor estar fora do ar em um dia qualquer? Qual o tipo de probabilidade utilizada?

### Resolução:

1. Total de dias observados = **30**
2. Dias com downtime = **3**
3. P(downtime) = **3 / 30 = 0,1 = 10%**
4. Tipo: Probabilidade **FREQUENTISTA** (baseada em dados históricos observados)

### Conclusão:

```
P(downtime) = 3/30 = 0,1 → 10% de chance de indisponibilidade por dia
```

---

# 2. EXPERIMENTO ALEATÓRIO

## O que é Experimento Aleatório?

### Definição

Experimento aleatório é todo processo que pode ser repetido múltiplas vezes sob as mesmas condições, mas cujo resultado **NÃO** pode ser previsto com certeza antecipadamente.

### Exemplos clássicos e em TI:

| **Lançar Dado** | **Flip de Bit** | **Requisição HTTP** | **Build/Deploy** |
|-----------------|-----------------|---------------------|------------------|
| 6 resultados possíveis. Não sabemos qual sairá. | Transmissão pode gerar erro (0→1 ou 1→0) ou não. | A resposta pode ser 200, 404, 500, etc. | Pode passar ou falhar nos testes. |

---

## Características do Experimento Aleatório

### 🔄 Repetibilidade
O experimento pode ser repetido sob as mesmas condições controladas.

### ❓ Imprevisibilidade
O resultado específico de cada trial é desconhecido antes da realização.

### 📋 Conjunto Definível
Todos os resultados POSSÍVEIS podem ser listados ou descritos (espaço amostral).

### 🎲 Aleatoriedade
Nenhum resultado é forçado; todos os possíveis têm alguma chance de ocorrer.

---

## Exemplo — Lançamento de Um Dado

### Experimento

Lançar um dado de 6 faces e observar o número obtido na face superior.

### Verificando as características:

✓ **Repetível?** Sim — podemos lançar o dado quantas vezes quisermos.

✓ **Imprevisível?** Sim — não sabemos qual face vai aparecer.

✓ **Conjunto Definível?** Sim — resultados possíveis: {1, 2, 3, 4, 5, 6}.

✓ **Aleatório?** Sim — com um dado justo, todas as faces têm igual chance.

### Conclusão: Lançar um dado **É** um experimento aleatório ✓

---

## Caso Prático 1 — Tempo de Resposta de API

### Situação

Uma empresa monitora o tempo de resposta de uma API REST. A cada requisição, o tempo pode variar entre 50ms e 2.000ms dependendo de carga, rede e processamento. Isso é um experimento aleatório?

### Análise das características:

1. **Repetível?** Sim — requisições são feitas continuamente.
2. **Imprevisível?** Sim — o tempo varia a cada chamada.
3. **Conjunto Definível?** Sim — o tempo está em [50ms, 2000ms].
4. **Aleatório?** Sim — depende de múltiplos fatores simultâneos.
5. **CONCLUSÃO:** Monitorar o tempo de resposta da API **É** um experimento aleatório.

---

## Caso Prático 2 — Pipeline de CI/CD

### Situação

A cada push no repositório Git, o pipeline de CI/CD é disparado. O resultado pode ser: 'Sucesso', 'Falha nos Testes', 'Erro de Build' ou 'Timeout'. Classifique este processo.

### Análise:

| **Repetível** | **Imprevisível** | **Definível** |
|---------------|------------------|---------------|
| A cada push, o pipeline executa novamente com os mesmos scripts. | O resultado depende do código enviado, ambiente e versões. | Resultados: {Sucesso, Falha Testes, Erro Build, Timeout}. |

### Conclusão:

**O pipeline de CI/CD É um experimento aleatório com 4 resultados possíveis**

---

# 3. ESPAÇO AMOSTRAL (Ω)

## O que é Espaço Amostral?

### Definição

Espaço Amostral (Ω) é o conjunto de **TODOS** os resultados possíveis de um experimento aleatório. Cada elemento do espaço amostral é chamado de **PONTO AMOSTRAL** (ω).

```
Ω = { ω₁, ω₂, ω₃, ..., ωₙ }
```

### Exemplos de Espaços Amostrais:

| **Moeda** | **Dado (1 face)** | **HTTP Status** | **Build Result** |
|-----------|-------------------|-----------------|------------------|
| Ω = {Cara, Coroa} | Ω = {1,2,3,4,5,6} | Ω = {200,301,400,404,500} | Ω = {Pass, Fail} |

---

## Tipos de Espaço Amostral

### # Finito

Número **LIMITADO** de resultados possíveis.

**Ex:** Ω = {1,2,3,4,5,6} — lançar um dado.

### ∞ Infinito Enumerável

Infinitos resultados, mas **CONTÁVEIS** (um a um).

**Ex:** Ω = {0,1,2,3,...} — número de requisições até o 1º erro.

### ~ Infinito Não-Enumerável

Infinitos resultados **NÃO** contáveis (contínuos).

**Ex:** Ω = [0ms, +∞) — tempo de resposta de uma API.

---

## Exemplo — Dois Dados Lançados Simultaneamente

### Experimento

Lançar 2 dados e observar o par (face do dado 1, face do dado 2). Construir o espaço amostral.

### Espaço Amostral Ω (36 pontos amostrais):

|       | **D2=1** | **D2=2** | **D2=3** | **D2=4** | **D2=5** | **D2=6** |
|-------|----------|----------|----------|----------|----------|----------|
| **D1=1** | (1,1) | (1,2) | (1,3) | (1,4) | (1,5) | (1,6) |
| **D1=2** | (2,1) | (2,2) | (2,3) | (2,4) | (2,5) | (2,6) |
| **D1=3** | (3,1) | (3,2) | (3,3) | (3,4) | (3,5) | (3,6) |
| **D1=4** | (4,1) | (4,2) | (4,3) | (4,4) | (4,5) | (4,6) |
| **D1=5** | (5,1) | (5,2) | (5,3) | (5,4) | (5,5) | (5,6) |
| **D1=6** | (6,1) | (6,2) | (6,3) | (6,4) | (6,5) | (6,6) |

**Observações:**
- Laranja = soma 7
- Verde = dupla (par igual)
- |Ω| = 36 pontos amostrais

---

## Caso Prático 1 — Respostas de uma API

### Situação

Uma API de e-commerce pode retornar os seguintes códigos HTTP: 200 (OK), 201 (Criado), 400 (Requisição inválida), 401 (Não autorizado), 404 (Não encontrado), 500 (Erro interno). Monte o espaço amostral.

### Construção do Espaço Amostral:

```
Ω = { 200, 201, 400, 401, 404, 500 }
```

### Classificação dos pontos amostrais:

| **Sucesso (2xx)** | **Erro Cliente (4xx)** | **Erro Servidor (5xx)** |
|-------------------|------------------------|-------------------------|
| 200 – OK<br>201 – Created | 400 – Bad Request<br>401 – Unauthorized<br>404 – Not Found | 500 – Internal Error |

**Tipo:** Espaço amostral **FINITO** com |Ω| = 6 pontos amostrais

---

## Caso Prático 2 — Monitoramento de Servidor

### Situação

Um sistema de monitoramento verifica a cada minuto o estado de um servidor. Os estados possíveis são: Online, Degradado (lento), Offline. Monte e classifique o espaço amostral.

```
Ω = { Online, Degradado, Offline }
```

### Detalhamento dos pontos amostrais:

| **Online** | **Degradado** | **Offline** |
|------------|---------------|-------------|
| Servidor respondendo normalmente, CPU e memória em níveis normais. | Servidor respondendo, mas com latência alta ou uso de recursos acima do normal. | Servidor não responde ou processo está encerrado. |

**Tipo:** Espaço amostral **FINITO** com |Ω| = 3 pontos amostrais.

**Verificação:** cada minuto é um experimento.

---

# 4. EVENTO (E)

## O que é Evento?

### Definição

Evento é qualquer **SUBCONJUNTO** do espaço amostral Ω. É um conjunto de resultados que nos interessa observar em um experimento aleatório.

```
E ⊆ Ω  (E é subconjunto de Ω)
```

### Exemplos em TI:

| **Dado par** | **Erro HTTP** | **Alta latência** | **Build falhou** |
|--------------|---------------|-------------------|------------------|
| Ω={1,2,3,4,5,6}<br>E={2,4,6} | Ω={200,400,404,500}<br>E={400,404,500} | Ω=[0ms,∞)<br>E=[500ms,∞) | Ω={Pass,Fail}<br>E={Fail} |

---

## Tipos de Eventos

### 1️⃣ Evento Simples (Elementar)

Contém apenas um único ponto amostral.

**Ex:** E = {cara} no lançamento de uma moeda.

### n Evento Composto

Contém dois ou mais pontos amostrais.

**Ex:** E = {2,4,6} — sair número par no dado.

### Ω Evento Certo

E = Ω — contém todos os pontos amostrais. Sempre ocorre. P = 1.

**Ex:** Sair algum número entre 1 e 6 no dado.

### ∅ Evento Impossível

E = ∅ — conjunto vazio. Nunca ocorre. P = 0.

**Ex:** Sair número 7 em um dado de 6 faces.

### Ē Eventos Complementares

E e Ē são complementares.

**Ex:** Par={2,4,6} e Ímpar={1,3,5}.

---

# 5. AVALIAÇÃO DA PROBABILIDADE P(E)

## Definição Clássica — Regra de Laplace

### Quando usar a Definição Clássica

Aplicada quando o espaço amostral é **FINITO** e todos os resultados são **IGUALMENTE PROVÁVEIS** (equiprováveis). Desenvolvida pelo matemático Pierre-Simon Laplace (1749-1827).

```
P(E) = n(E) / n(Ω) = (Nº de casos favoráveis) / (Nº de casos possíveis)
```

### Condições necessárias:

1. O espaço amostral deve ser **FINITO** (|Ω| < ∞)
2. Todos os pontos amostrais devem ser **EQUIPROVÁVEIS** (mesma chance)
3. O evento E deve ser um subconjunto de Ω
4. Resultado: 0 ≤ P(E) ≤ 1 sempre

---

## Exemplo — Probabilidade em Deploy de Software

### Situação

Em 200 deploys realizados: 140 foram bem-sucedidos, 35 causaram bugs menores e 25 causaram falhas críticas. Calcule as probabilidades.

Espaço amostral: Ω = {Sucesso, Bug Menor, Falha Crítica} | n(Ω) = 200

### Cálculos:

| **P(Sucesso)** | **P(Bug Menor)** | **P(Falha Crítica)** |
|----------------|------------------|----------------------|
| P = 140/200<br>= 0,70 = **70%** | P = 35/200<br>= 0,175 = **17,5%** | P = 25/200<br>= 0,125 = **12,5%** |

### Verificação:

```
0,70 + 0,175 + 0,125 = 1,00 ✓ (soma das probabilidades = 1)
```

### Probabilidade de Falha:

```
P(Falha) = P(Bug Menor) + P(Falha Crítica) 
         = 0,175 + 0,125 
         = 0,30 = 30% de chance de algum problema
```

---

## Caso Prático 1 — Probabilidade de Erro por Módulo

### Situação

Em 500 execuções de um sistema, os erros foram: Módulo de Login (40), Módulo de Pagamento (25), Módulo de Relatórios (15), sem erros (420). Calcule as probabilidades.

### Resolução (Definição Frequentista — n = 500):

1. **P(Erro Login)** = 40/500 = 0,080 = **8,0%**
2. **P(Erro Pagamento)** = 25/500 = 0,050 = **5,0%**
3. **P(Erro Relatório)** = 15/500 = 0,030 = **3,0%**
4. **P(Sem Erro)** = 420/500 = 0,840 = **84,0%**
5. **Verificação:** 0,08 + 0,05 + 0,03 + 0,84 = 1,00 ✓

### Probabilidade de algum erro:

```
P(algum erro) = 1 − P(sem erro) 
              = 1 − 0,84 
              = 0,16 = 16%
```

---

## Caso Prático 2 — Qualidade de Dados em ETL

### Situação

Um processo ETL carrega 1.000 registros. Análise: 850 válidos, 90 com dados incompletos, 45 com formato incorreto, 15 duplicados. Calcule as probabilidades e use a propriedade do complemento.

### Resolução:

1. **P(válido)** = 850/1000 = 0,850 = **85%**
2. **P(incompleto)** = 90/1000 = 0,090 = **9%**
3. **P(incorreto)** = 45/1000 = 0,045 = **4,5%**
4. **P(duplicado)** = 15/1000 = 0,015 = **1,5%**

### Usando a propriedade do complemento:

```
P(inválido) = 1 − P(válido) 
            = 1 − 0,85 
            = 0,15 = 15% dos registros têm problemas
```

---

## Resumo - Conceitos Fundamentais

### Experimento Aleatório
- Processo repetível com resultado imprevisível
- Exemplos: lançar dado, tempo de resposta de API, resultado de build

### Espaço Amostral (Ω)
- Conjunto de todos os resultados possíveis
- Pode ser finito, infinito enumerável ou infinito não-enumerável

### Evento (E)
- Subconjunto do espaço amostral (E ⊆ Ω)
- Representa resultado(s) de interesse

### Probabilidade P(E)
- Medida numérica: 0 ≤ P(E) ≤ 1
- **Clássica:** P(E) = n(E) / n(Ω)
- **Frequentista:** baseada em dados observados
- **Subjetiva:** baseada em crença/experiência

### Propriedades Importantes
- P(Ω) = 1 (evento certo)
- P(∅) = 0 (evento impossível)
- P(Ē) = 1 - P(E) (complementar)
- Soma de todas as probabilidades = 1

---

**Fim da Aula 3 - Probabilidades**

*Material elaborado para o curso de Análise e Desenvolvimento de Sistemas*