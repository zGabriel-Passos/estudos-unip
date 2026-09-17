# Resumo — Modelos de Banco de Dados e Modelo Entidade-Relacionamento (MER)
### Prof. Me Cristiane Fidelix

---

## 1. Modelos de Banco de Dados

### 1.1 Conceito
Um **modelo de banco de dados** é uma descrição dos tipos de informações que estão armazenadas em um banco de dados. Para construí-lo, usa-se uma **linguagem de modelagem de dados**, que pode ser:
- **Textual**
- **Gráfica**

Um modelo define um conjunto de conceitos para representar dados (ex.: entidade, tabela, atributo) e existe em **diferentes níveis de abstração**:

| Nível | Foco |
|---|---|
| **Modelo Conceitual** | O quê será representado (alto nível, independente de BD) |
| **Modelo Lógico** | Como os dados são estruturados (dependente de BD) |
| **Modelo Físico** | Como os dados são fisicamente armazenados (dependente de hardware/software) |

### 1.2 Modelo Conceitual
- Representação com **alto nível de abstração**.
- **Independente** do Sistema Gerenciador de Banco de Dados (SGBD) a ser utilizado.
- Modela de forma mais natural os fatos do mundo real, com suas propriedades e relacionamentos.
- Preocupação com a **semântica da aplicação** — especifica **"quais"** dados serão representados, e não **"como"** serão armazenados.
- Principal modelo utilizado: **Modelo Entidade-Relacionamento (MER)**.

### 1.3 Modelo Lógico
- Representa os dados em alguma **estrutura lógica** de armazenamento.
- Também chamado de **modelo de BD** — é **dependente do BD**.
- Exemplos:
  - **Modelo Relacional** — organiza os dados em tabelas.
  - **Modelo Orientado a Objeto** — dados armazenados na forma de objetos.
  - **Modelo Hierárquico** — estrutura em árvore, com apontadores para os registros.
  - **Modelo de Rede** — semelhante ao hierárquico, mas sem sentido puramente descendente; também usa apontadores.
  - **Modelo Dedutivo** — baseado em tabelas, com manipulação por cálculos.

### 1.4 Modelo Físico
- Descreve o modo como os dados são efetivamente salvos em meios de armazenamento (discos, fitas, etc.).
- Exige a definição dos **dispositivos de armazenamento físico** e dos **métodos de acesso** necessários para alcançar os dados.
- É **dependente tanto de software quanto de hardware**.

### 1.5 Fases do Projeto de Banco de Dados
A construção de um banco de dados segue um fluxo que parte do **Mundo Real** até a implementação final:

```
Mundo Real
    │
    ▼
Análise de requisitos
    │
    ├── Requisitos funcionais ──► Análise funcional ──► Projeto de programas de aplicação
    │                                                              │
    └── Requisitos de dados ──► Projeto Conceitual                │
                                     │ (Esquema conceitual - MER)  │
                                     ▼                             │
                                Projeto Lógico                     │
                                     │ (Esquema lógico -           │
                                     │  Modelo Relacional)         │
                                     ▼                             │
                                Projeto Físico                     │
                                     │ (Esquema físico -           │
                                     │  Modelo de Implementação)   │
                                     ▼                             ▼
                                        Implementação das Transações
```

**Ponto-chave:** tudo **acima** da linha de "Especificação de transações" é **independente do SGBD**; tudo **abaixo** é **dependente do SGBD**.

---

## 2. Modelo Entidade-Relacionamento (MER)

### 2.1 O que é
O MER é o principal **modelo conceitual** usado em projeto de banco de dados. Ele é representado graficamente pelo **Diagrama de Entidade-Relacionamento (DER)**.

### 2.2 Componentes do Diagrama ER

| Componente | Símbolo gráfico |
|---|---|
| **Entidade** | Retângulo |
| **Atributo** | Oval (elipse) |
| **Relacionamento** | Losango |

---

## 3. Entidade

### 3.1 Definição
- É a **representação abstrata de um objeto do mundo real** sobre o qual se deseja manter informações.
- Pode ter **existência física** (ex.: um funcionário) ou **conceitual** (ex.: um pedido, uma consulta).
- **Instância**: é uma ocorrência específica de um tipo de entidade (ex.: "João" é uma instância da entidade Aluno).

### 3.2 Exemplos de entidades
- **Sistema Bancário:** Cliente, Conta, Agência, Banco.
- **Sistema de Ambiente Empresarial:** Produto, Empregado, Departamento, Fornecedor.

---

## 4. Atributos

Atributos são as **propriedades que caracterizam uma entidade**. Por exemplo, a entidade "Pedido" pode ter os atributos: data, número do pedido, número do cliente, quantidade, valor unitário, etc.

### 4.1 Classificações de Atributos

| Tipo | Definição | Exemplo |
|---|---|---|
| **Simples** | Não pode ser subdividido | `quantidade`, `nro_pedido` |
| **Composto** | Pode ser dividido em subpartes com significado próprio | `endereço_cliente` → rua, número, bairro, cidade, estado, CEP |
| **Monovalorado** | Possui apenas um valor por instância | `data do pedido` |
| **Multivalorado** | Pode ter mais de um valor por instância | `telefone` (residencial, celular, comercial) |
| **Derivado** | Seu valor é calculado a partir de outro(s) atributo(s) | `total` (calculado a partir de preço unitário × quantidade) |
| **Chave (identificador)** | Seu valor é distinto para cada instância da entidade | `CPF`, `nro_pedido` |

### 4.2 Valor Nulo ou Opcional
- Um atributo tem **valor nulo** quando a entidade não possui um valor para ele.
- Representa a **inexistência** de um valor — o usuário não é obrigado a preenchê-lo.
- Exemplo clássico: nem todo cliente possui e-mail cadastrado.
- **Observação:** o valor nulo é identificado pela sua **cardinalidade** no diagrama.

### 4.3 Resumo dos Atributos
```
Um valor por instância               → Atributo simples
Subdividido em atributos mais básicos → Atributo composto
Valor distinto por instância          → Atributo chave
Conjunto de valores possíveis         → Atributo multivalorado
Calculado a partir de outros          → Atributo derivado
```

Exemplo integrador (entidade **Pessoa**):
```
Pessoa
 ├─ CPF          (chave)
 ├─ nome         (simples)
 ├─ sexo         (simples)
 ├─ dt_nasc      (simples)
 ├─ endereço     (composto) → rua, nº, cidade
 ├─ fone         (multivalorado)
 └─ idade        (derivado, a partir de dt_nasc)
```

---

## 5. Chave Primária (Primary Key – PK)

- Um conjunto de atributos que tem a propriedade de identificar **univocamente** (de forma única) uma instância de uma entidade é chamado de **identificador** dessa entidade.
- Toda entidade deve possuir um atributo — ou conjunto de atributos, chamado **chave candidata** — capaz de identificá-la.
- O identificador escolhido é chamado de **Chave Primária**.
- **Representação gráfica:** o atributo chave primária aparece com uma **bolinha pintada** (preenchida) ou com o **nome sublinhado**.

**Exemplo:** na entidade "Funcionário", o atributo `matrícula` é a chave primária — cada funcionário tem uma matrícula única.

---

## 6. Relacionamento

### 6.1 Definição
- É uma **associação entre entidades**.
- Representado graficamente por um **losango**, ligado às entidades relacionadas por meio de linhas.
- Estrutura geral: `Entidade A — nome_do_relacionamento — Entidade B`

### 6.2 Exemplos de relacionamentos
| Entidade A | Relacionamento | Entidade B |
|---|---|---|
| Médico | Consulta | Paciente |
| Proprietário | Contacta | Corretor |
| Aluno | Pertence | Turma |
| Produto | Contém | Venda |
| Livro | Pertence | Sessão |
| Pedido | Recebe | Pagamento |

### 6.3 Exemplo completo com cardinalidade
No diagrama do relacionamento **Pedido — Recebe — Pagamento**:
- `Pedido (1,n)` — um pedido pode gerar um ou vários registros associados ao relacionamento.
- `Pagamento (0,1)` — um pagamento está associado a no máximo um pedido, podendo não existir ainda (0).

A notação **(mínimo, máximo)** ao lado de cada entidade no relacionamento indica a **cardinalidade** — quantas instâncias de uma entidade podem se relacionar com instâncias da outra.

---

## 7. Exemplo Completo — Entidade "Pedido"

Reunindo os conceitos de entidade, atributos (simples, composto, multivalorado e derivado) e relacionamento, a entidade **Pedido** pode ser modelada assim:

```
Pedido
 ├─ nro_pedido        (chave primária)
 ├─ dta_pedido        (simples)
 ├─ nome_cliente       (simples)
 ├─ quantidade         (simples)
 ├─ vlr_unitário       (simples)
 ├─ material           (simples)
 ├─ telefone (1,n)     (multivalorado) → celular, residencial, comercial
 ├─ endereço_cliente   (composto) → rua, número, bairro, cidade, estado, CEP
 └─ total              (derivado, calculado a partir de vlr_unitário × quantidade)
```

E o relacionamento com a entidade Pagamento:
```
Pedido (1,n) ── Recebe ── (0,1) Pagamento
                              ├─ nro_pedido (chave, também referência ao Pedido)
                              ├─ vlr_pago
                              └─ data_pagamento
```

---

## 8. Exercícios Propostos no Material

1. **Sistema acadêmico:** para as entidades **Aluno**, **Turma**, **Professor** e **Disciplina**, definir no mínimo 3 atributos para cada uma e indicar suas chaves primárias.
2. **Definição de entidade:** explicar o conceito e dar pelo menos 3 exemplos de entidades diferentes das apresentadas em aula.
3. **Diagrama Entidade-Relacionamento:** modelar a situação em que um **carro pertence a uma marca**, e essa marca **possui um determinado modelo** — criando o DER com atributos para cada entidade e marcando as chaves primárias.

---

## 9. Síntese dos Conceitos-Chave

| Conceito | Definição resumida |
|---|---|
| Modelo de dados | Descrição de quais informações um BD armazena |
| Modelo Conceitual | Alto nível de abstração, independente de SGBD — ex.: MER |
| Modelo Lógico | Estrutura de armazenamento, dependente de BD — ex.: Modelo Relacional |
| Modelo Físico | Como os dados são salvos fisicamente — dependente de hardware/software |
| Entidade | Objeto do mundo real sobre o qual se quer manter dados (retângulo) |
| Atributo | Propriedade que caracteriza uma entidade (oval) |
| Relacionamento | Associação entre entidades (losango) |
| Atributo simples | Não divisível |
| Atributo composto | Divisível em subpartes |
| Atributo monovalorado | Um único valor |
| Atributo multivalorado | Pode ter vários valores |
| Atributo derivado | Calculado a partir de outros atributos |
| Valor nulo | Ausência de valor para o atributo em uma instância |
| Chave Primária (PK) | Atributo(s) que identifica(m) univocamente uma instância — representada por bolinha pintada ou nome sublinhado |
| Cardinalidade | Indica quantas instâncias de uma entidade se relacionam com instâncias da outra, no formato (mínimo, máximo) |