# Resumo — Comandos de Repetição e Vetores em Linguagem C

## 1. Comandos de Repetição (`while`, `break`)

### Estrutura típica de leitura com `while(true)` + `break`
```c
int qtp=0, qti=0, nro;
while (true){
    printf("Digite um nro: ");
    scanf("%d", &nro);
    if(nro < 0)
        break;
    if ((nro % 2)==0) {
        qtp++;
    } else
        qti++;
}
printf("\nqtp=%d, qti=%d\n", qtp, qti);
```
**Pontos-chave:**
- O laço `while(true)` roda indefinidamente até um `break` explícito.
- `break` interrompe o laço imediatamente quando a condição é satisfeita (ex.: número negativo).
- O número que causa o `break` **não** é contabilizado nas variáveis internas do laço.
- `nro % 2 == 0` testa se o número é **par**.

### Alternativa com condição no `while`
```c
int i, nro=0, qtpar=0, qtimpar=0;
while(nro >= 0){
    printf("Digite um nro:");
    scanf("%d", &nro);
    if(nro < 0)
        break;
    if((nro % 2) == 0)
        qtpar++;
    else
        qtimpar++;
}
printf("\nQtde par = %d\n", qtpar);
printf("\nQtde impar = %d\n", qtimpar);
```

### Soma dos n primeiros inteiros (com `for`)
```c
int i, n, soma=0;
printf("Digite o n: ");
scanf("%d", &n);
for(i=0; i<=n; i++){
    soma += i;
}
printf("\nSoma = %d\n", soma);
```

---

## 2. Variáveis Dimensionadas (Vetores/Arrays)

### Conceito
Uma **variável dimensionada** (vetor/array) tem 4 propriedades:
1. Nome
2. Tipo
3. Conteúdo
4. Quantidade de conteúdo

Diferente de uma variável comum (que guarda 1 valor por vez), um vetor guarda **vários valores** simultaneamente, em **posições de memória contíguas**.

### Declaração
```c
int num[100];   // vetor de 100 inteiros
```
- Índices vão de `0` a `tamanho-1` (ex.: `num[0]` até `num[99]`).

### Atribuição de valores
```c
int numbers[5];
numbers[0] = -100;
numbers[1] = 100;
numbers[2] = 20;
numbers[3] = -50;
numbers[4] = 0;
```

### Inicialização na declaração
```c
int numbers[5] = {10, 20, 30, 40, 50};       // todos definidos
int numbers[5] = {20, 10};                    // restantes viram 0
int numbers[100] = {0};                       // zera o vetor inteiro
int numbers[] = {5, 10, 15, 20};              // tamanho inferido = 4
```

### Cuidados importantes
- **Vetor não inicializado** contém **"lixo de memória"** (valores indeterminados).
- Acessar um índice **fora do intervalo válido** (ex.: `numbers[4]` num vetor de tamanho 4, índices 0–3) é **comportamento indefinido** — não gera erro de compilação, mas é um bug.
- Índices sempre começam em **0**, nunca em 1.

### Exemplos de execução (printf)
| Código | Saída |
|---|---|
| `numbers[3], numbers[0], numbers[4]` com `{-100,100,20,-50,0}` | `-50, -100, 0` |
| `numbers[1], numbers[2], numbers[3]` com `{10,20,30,40,50}` | `20, 30, 40` |
| `numbers[2], numbers[3], numbers[0]` com `{20,10}` (resto zerado) | `0, 0, 20` |

### Laços com vetores
```c
int v[5], i;
for (i = 0; i < 3; i++) {
    scanf("%d", &v[i]);
}
for (i = 2; i >= 0; i--) {
    printf("%d ", v[i]);   // imprime em ordem inversa
}
```
Entrada `10, -20, 30` → Saída: `30 -20 10`

```c
int v[5] = {2, 4, 6, 8, 10};
int i, sum = 0;
for (i = 0; i < 3; i++) {
    sum += v[i];   // soma v[0]+v[1]+v[2] = 2+4+6
}
// Sum = 12
```

### Combinação de vetor com filtro (par/ímpar)
```c
int i, s=0, a[10];
for(i=0;i<10;i++){ a[i]=i; }
for(i=0;i<10;i++){
    if((a[i]%2)==0){ s += a[i]; }
}
```
- Soma apenas os elementos pares do vetor.
- Pode ser reescrito como `for(i=0;i<10;i+=2){ s += a[i]; }` (percorre direto os índices pares — funciona pois `a[i]=i`, logo índice par = valor par).

### Validação de acesso a vetores (tabela OK/NOK)
Dado: `int a, d, num[100]; float b; char c[100];`

| Operação | OK/NOK | Motivo |
|---|---|---|
| `num[0] = a - 200;` | OK | atribuição válida |
| `c[5] = 5;` | NOK | tipos incompatíveis (char vs int) |
| `num = b[2];` | NOK | `num` é vetor, não pode receber atribuição direta; `b` não é vetor |
| `a = num[d];` | OK | válido se `d` estiver entre 0 e 99 |
| `b = num[10]+num[20]+30;` | OK | operação válida |
| `num[30] = num[80]+b;` | NOK | mistura de tipos (int = int + float sem cast, dependendo do contexto) |

---

## 3. Erros Conceituais Comuns (pegadinhas de prova)

- ❌ Índices de vetor em C **começam em 0**, não em 1.
- ❌ `int vet[n];` → o **último** elemento válido é `vet[n-1]`, não `vet[n]`.
- ❌ Acessar índice fora do intervalo **não é seguro** — C não ajusta automaticamente.
- ❌ Não é obrigatório inicializar todos os elementos de um vetor na declaração.
- ✔️ `int v[] = {10, 20, 30};` define automaticamente um vetor de tamanho 3.
- ✔️ O tamanho de um vetor estático deve ser conhecido em **tempo de compilação**.
- ✔️ Vetor = variável dimensionada = array unidimensional (sinônimos).

---

## 4. Vetores em HTML/JavaScript (analogia com checkboxes)

Uso de vetor (array) de elementos DOM para simplificar validação de checkboxes:
```javascript
let checkboxes = document.querySelectorAll('input[name="interest"]');
let result = "";
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        result += checkboxes[i].value + " selected<br>";
    }
}
```
Isso evita escrever um `if` separado para cada checkbox, usando a mesma lógica de percorrer um vetor com um laço `for`.