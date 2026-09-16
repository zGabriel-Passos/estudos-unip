# Resumo Teórico — Comandos de Repetição e Vetores em Linguagem C

## 1. Comandos de Repetição

Comandos de repetição (ou **laços/loops**) permitem executar um bloco de instruções múltiplas vezes, evitando a repetição manual de código. Em C, os principais são `while`, `do-while` e `for`.

### 1.1 `while`
- Executa o bloco **enquanto** a condição for verdadeira.
- A condição é testada **antes** de cada execução (laço com teste no início).
- Se a condição for falsa já na primeira verificação, o bloco nunca executa.

```c
while (condição) {
    // instruções
}
```

### 1.2 `while (true)` combinado com `break`
- Cria um laço **infinito** por definição.
- A única forma de sair é através de uma instrução `break` dentro do bloco, geralmente controlada por uma condição interna (`if`).
- É útil quando a condição de parada depende de algo que só é conhecido **durante** a execução do laço (ex.: um valor digitado pelo usuário).

```c
while (true) {
    // leitura de dado
    if (condição_de_parada)
        break;
    // processamento
}
```

**Conceito-chave:** o `break` interrompe o laço mais interno imediatamente, pulando para a primeira instrução após o bloco do laço. O valor que provocou o `break` normalmente **não é processado** pelas instruções seguintes dentro do laço.

### 1.3 `for`
- Estrutura mais compacta para laços com número definido (ou contável) de repetições.
- Reúne em uma única linha: inicialização, condição de parada e incremento/decremento.

```c
for (inicialização; condição; incremento) {
    // instruções
}
```

- **Inicialização**: executada uma única vez, antes do laço começar.
- **Condição**: testada antes de cada iteração; se falsa, o laço termina.
- **Incremento/decremento**: executado ao final de cada iteração.

### 1.4 Operadores relacionados a laços
- `%` (módulo): retorna o resto da divisão inteira; muito usado para testar paridade (`n % 2 == 0` → par).
- `+=`: forma abreviada de acumulação (`s += x` é equivalente a `s = s + x`).
- `++` / `--`: incremento e decremento de uma unidade.

### 1.5 Cuidados conceituais
- A condição de parada de um `for` ou `while` define **até onde** o laço realmente executa — é comum haver "pegadinhas" quando o limite não é exatamente o esperado (ex.: `i < n` executa `n` vezes, de `0` a `n-1`; já `i <= n` executa `n+1` vezes).
- Um laço mal dimensionado pode deixar de processar o último elemento (ou processar um a mais) — por isso é essencial verificar cuidadosamente os limites.

---

## 2. Variáveis Dimensionadas (Vetores / Arrays)

### 2.1 O que é
Uma **variável dimensionada** (também chamada de **vetor** ou **array unidimensional**) é uma estrutura de dados que permite armazenar **múltiplos valores do mesmo tipo** em um único nome de variável, ocupando posições de memória **contíguas**.

Diferente de uma variável comum — que guarda apenas um valor por vez —, um vetor guarda **vários valores simultaneamente**, acessados por meio de um **índice**.

### 2.2 Propriedades de uma variável dimensionada
Toda variável dimensionada possui quatro propriedades fundamentais:
1. **Nome** — identificador da variável.
2. **Tipo** — tipo de dado dos elementos (int, float, char, etc.).
3. **Conteúdo** — os valores armazenados.
4. **Quantidade de conteúdo** — o tamanho (número de posições) do vetor.

### 2.3 Declaração
```c
tipo nome[tamanho];
```
Exemplo:
```c
int num[100];   // vetor de 100 inteiros
```

### 2.4 Indexação
- O acesso a um vetor é **posicional**: cada elemento tem um índice numérico.
- Em C, os índices **sempre começam em 0**.
- Para um vetor de tamanho `N`, os índices válidos vão de `0` até `N-1`.
- **Não existe** ajuste automático para índices fora do intervalo — acessar uma posição inválida (ex.: índice negativo ou maior que `N-1`) é um **comportamento indefinido**, um dos erros mais comuns entre iniciantes.

### 2.5 Inicialização
Um vetor pode ser inicializado no momento da declaração, de diferentes formas:

| Forma | Efeito |
|---|---|
| `int v[5] = {10,20,30,40,50};` | Todos os 5 elementos definidos explicitamente |
| `int v[5] = {20,10};` | Os elementos não citados (v[2], v[3], v[4]) são automaticamente preenchidos com **0** |
| `int v[100] = {0};` | Forma comum de zerar um vetor inteiro |
| `int v[] = {5,10,15,20};` | O tamanho é **inferido automaticamente** pelo compilador (nesse caso, 4) |

**Importante:** não é obrigatório inicializar todos os elementos de um vetor na declaração.

### 2.6 Vetor não inicializado
Quando um vetor é declarado sem inicialização (`int v[5];`), seu conteúdo inicial é indeterminado — conhecido informalmente como **"lixo de memória"**. Ler esse conteúdo sem antes atribuir valores produz resultados imprevisíveis.

### 2.7 Vetores e laços
Vetores são quase sempre manipulados em conjunto com laços de repetição, pois permitem:
- **Percorrer** todos os elementos (leitura, exibição, cópia).
- **Processar** subconjuntos de elementos (soma, filtragem por condição, busca).
- **Inverter** a ordem de exibição (percorrendo do último índice ao primeiro).

Padrão típico de leitura:
```c
for (i = 0; i < tamanho; i++) {
    scanf("%d", &v[i]);
}
```

Padrão típico de processamento condicional (ex.: somar apenas os pares):
```c
for (i = 0; i < tamanho; i++) {
    if ((v[i] % 2) == 0) {
        soma += v[i];
    }
}
```

### 2.8 Vetores como estrutura de dados fundamental
O conceito de vetor é a base para estruturas mais avançadas (matrizes, structs de dados, listas), e também aparece em outras linguagens sob formas equivalentes — como os **arrays em JavaScript**, usados, por exemplo, para agrupar elementos de interface (checkboxes) e percorrê-los com um laço, evitando repetição de código para cada elemento individual.

---

## 3. Síntese dos Conceitos-Chave

| Conceito | Definição resumida |
|---|---|
| Laço `while` | Repete enquanto a condição for verdadeira; teste no início |
| Laço `for` | Repete com contador definido: inicialização + condição + incremento |
| `break` | Interrompe o laço imediatamente |
| Vetor (array) | Variável que armazena múltiplos valores do mesmo tipo, em memória contígua |
| Índice | Posição de um elemento no vetor, sempre iniciando em 0 |
| Inicialização parcial | Elementos não citados são preenchidos com 0 |
| Vetor não inicializado | Contém lixo de memória |
| Acesso fora do limite | Comportamento indefinido, não gera erro de compilação |
| `int v[]` | Compilador infere o tamanho pela quantidade de elementos |