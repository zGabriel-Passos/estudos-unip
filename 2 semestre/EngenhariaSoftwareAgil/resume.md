# Resumo — Engenharia de Software Ágil (Aulas 1 a 5)
### Prof. Me. Denilson de Souza · CST em Análise e Desenvolvimento de Sistemas

---

## Aula 1 — Fundamentos da Engenharia de Software

### 1.1 O que é software
**Software** é o conjunto de **programas, procedimentos, documentação e dados associados** que, em execução, provê as funcionalidades e o desempenho desejados. É um **produto lógico**: não ocupa espaço físico por si só e não se desgasta com o uso, sendo construído sob medida — não fabricado em série.

Três elementos centrais compõem o software:
- **Programas** — instruções executáveis.
- **Estruturas de dados** — permitem manipular e armazenar informações.
- **Documentação** — descreve operação, arquitetura e uso.

### 1.2 Software vs. Hardware
| | Software | Hardware |
|---|---|---|
| Natureza | Lógico, intangível | Físico, tangível |
| Produção | Desenvolvido/projetado sob medida | Fabricado em série |
| Desgaste | Não se desgasta fisicamente, mas pode se **deteriorar logicamente** | Se desgasta fisicamente com o uso |
| Manutenção | Correção, adaptação, evolução do código | Reposição de peças |

### 1.3 Evolução histórica
A engenharia de software surgiu como disciplina formal a partir da **"crise do software"**, no final dos anos 1960 (projetos estourando prazo, orçamento e qualidade). Evolução:
`Programação artesanal (1950-60) → Formalização de processos (1970-80) → Orientação a objetos e internet (1990-2000) → Metodologias ágeis, nuvem e DevOps (2010+)`

### 1.4 Características do software
- **Desenvolvido, não fabricado** — não há linha de montagem; a qualidade depende do processo de engenharia e do fator humano (competência, comunicação, maturidade do processo).
- **Deterioração lógica** ("**erosão do projeto** / design erosion") — mudanças sucessivas, correções às pressas e falta de manutenção aumentam a complexidade e fragilidade do sistema ao longo do tempo.
- **Sob encomenda (bespoke) vs. componentizado** — construir do zero para um cliente específico vs. reaproveitar bibliotecas/frameworks já validados, reduzindo tempo e custo.

### 1.5 Tipos e domínios de aplicação
| Tipo | Função | Exemplo |
|---|---|---|
| Software de sistema | Gerencia recursos do computador | Sistemas operacionais, drivers |
| Software de aplicação | Resolve problema de negócio/usuário | ERPs, apps, jogos |
| Software embarcado | Opera dentro de dispositivos físicos, tempo real | Automotivo, eletrodomésticos |

Domínios em expansão: **web e mobile**, **IoT** (conecta software a sensores físicos), **IA e automação**.

**Case:** sistema de gestão acadêmica — integra matrícula, notas, frequência e financeiro; múltiplos perfis de usuário; exige integração externa (pagamento, e-mail); geralmente sob encomenda.

### 1.6 Fábrica de software
Modelo organizacional que aplica **padronização, processo e escala** à produção de software, buscando previsibilidade de prazo, custo e qualidade. A padronização atua **sobre o processo, não sobre o produto** — que continua sendo elaborado por pessoas.

**Fluxo típico:** `Demanda → Especificação → Desenvolvimento → Entrega`

**Case:** squads multidisciplinares atendendo múltiplos clientes com processo padronizado — comum em outsourcing e consultorias.

**Desafios atuais:** equilibrar velocidade x qualidade/sustentabilidade técnica; gerenciar mudanças constantes de requisitos; integrar pessoas, processos e ferramentas.

---

## Aula 2 — Engenharia de Requisitos

### 2.1 O processo de requisitos
Conjunto estruturado de atividades para **descobrir, analisar, documentar e verificar** requisitos — ponte entre as necessidades do negócio e o que será construído. **Erros descobertos mais tarde custam significativamente mais** para corrigir.

Quatro atividades centrais:
1. **Elicitação** — descoberta junto a usuários e stakeholders.
2. **Análise** — organização, priorização e resolução de conflitos entre requisitos.
3. **Especificação** — documentação formal e clara.
4. **Validação** — confirmação junto aos stakeholders antes do desenvolvimento.

### 2.2 Requisitos funcionais x não funcionais
| Tipo | Define | Exemplo | Verificação |
|---|---|---|---|
| Funcional | O que o sistema deve fazer | "O sistema deve emitir boletos" | Testes funcionais diretos |
| Não funcional | Como o sistema deve se comportar (desempenho, segurança, usabilidade) | "Deve responder em até 2 segundos" | Testes de carga, segurança, usabilidade |

### 2.3 Estudo de viabilidade
Análise preliminar que avalia **se vale a pena investir** em um projeto, **antes** do detalhamento completo dos requisitos. Quatro critérios:
- **Técnica** — a tecnologia existe e a equipe consegue implementar?
- **Econômica** — os benefícios justificam o investimento?
- **Operacional** — o sistema se encaixa na operação da empresa?
- **Legal** — cumpre as exigências legais aplicáveis?

**Case:** app de delivery próprio de uma rede de restaurantes — viabilidade técnica (experiência em mobile/pagamentos), econômica (custo x taxas de plataformas terceirizadas) e legal (proteção de dados).

### 2.4 Ergonomia cognitiva e elicitação ágil
**Ergonomia cognitiva:** estuda como pessoas percebem, interpretam e comunicam informações — usuários nem sempre verbalizam claramente o que precisam; cabe ao analista interpretar e reduzir a carga cognitiva das dinâmicas de elicitação.

**Técnicas de elicitação:**
| Técnica | Melhor cenário |
|---|---|
| Entrevistas | Poucos usuários-chave, requisitos complexos |
| Questionários | Muitos usuários, requisitos mais amplos |
| Observação direta | Processos pouco verbalizados |
| Workshops/Brainstorms | Consenso rápido entre múltiplos stakeholders (exige boa facilitação) |

**Modelagem ágil (Agile Modeling):** modelos simples e suficientes, colaborativos, priorizando comunicação e feedback rápido em vez de documentação extensa; evoluem incrementalmente.

**User stories:** formato `"Como [usuário], quero [funcionalidade], para [benefício]"` — complementam, mas não substituem, a análise mais profunda em projetos complexos.

**Desafio comum:** elicitar requisitos apenas com a gerência, sem ouvir quem de fato usa o sistema — gera retrabalho após a entrega.

---

## Aula 3 — Processos de Software

### 3.1 Decomposição do processo
Dividir o desenvolvimento em **atividades, fases ou incrementos menores**, permitindo planejamento, execução e revisão mais independentes e rápidos — reduz o risco de grandes falhas.

| | Processo decomposto | Processo monolítico |
|---|---|---|
| Entregas | Frequentes, ciclos curtos | Concentradas no final |
| Replanejamento | Afeta só o próximo ciclo | Afeta o projeto inteiro |
| Resposta a mudanças | Rápida | Lenta e custosa |

**Fluxo de um ciclo decomposto:** `Planejar/priorizar → Desenvolver e testar → Entregar e coletar feedback → Replanejar o próximo ciclo`

### 3.2 PSP e TSP
- **PSP (Personal Software Process)** — processo estruturado para o desenvolvedor **planejar, medir e melhorar seu próprio trabalho**, com base em dados pessoais de tempo, defeitos e tamanho de código.
- **TSP (Team Software Process)** — aplica os princípios do PSP em **nível de equipe**, coordenando o trabalho coletivo, buscando alto desempenho, qualidade e previsibilidade.

> PSP = disciplina individual · TSP = coordenação e desempenho coletivo — são **complementares**, não substitutos um do outro nem de um modelo de processo.

### 3.3 Modelos de processo de software
| Modelo | Como funciona | Melhor cenário |
|---|---|---|
| **Cascata** | Fases sequenciais (requisitos → projeto → implementação → testes → manutenção), sem sobreposição | Requisitos estáveis e bem conhecidos |
| **Iterativo** | Revisita repetidamente as mesmas atividades, refinando o sistema | Entendimento do problema ainda em construção |
| **Incremental** | Entrega o sistema em partes funcionais crescentes | Necessidade de entregar valor rápido e de forma crescente |
| **Espiral** | Ciclos ("voltas") com planejamento, análise de risco, desenvolvimento e avaliação | Projetos grandes, complexos ou de alto risco técnico |

**Exemplos de aplicação:** controle de tráfego aéreo (crítico) → modelo espiral; app de cupons de desconto (simples) → incremental ágil. Na prática, é comum combinar modelos — ex.: disciplina de PSP/TSP dentro de ciclos ágeis.

---

## Aula 4 — Planejamento do Processo de Software

### 4.1 SDLC (Software Development Life Cycle)
Ciclo de vida completo do desenvolvimento — do planejamento inicial à manutenção contínua. Serve como referência para organizar o trabalho da equipe e definir marcos de entrega.

**Fases principais:** Planejamento e análise → Projeto (design) e implementação → Testes, implantação e manutenção.

**Fluxo geral, na prática:**
```
Planejar   → escopo, viabilidade, cronograma inicial
Construir  → analisar requisitos, projetar, implementar
Verificar  → testar e corrigir problemas antes da entrega
Manter     → implantar, monitorar, evoluir continuamente
```

### 4.2 Aspectos humanos da engenharia de software
Software é construído **por pessoas, para pessoas** — qualidade técnica sozinha não garante sucesso. Equipes desmotivadas ou mal comunicadas produzem sistemas de qualidade inferior, mesmo com boas ferramentas.

- Equipes motivadas → melhor qualidade de código e mais consistência de prazos.
- **Falhas de comunicação** estão entre as causas mais comuns de **retrabalho**.
- Práticas úteis: reuniões objetivas, feedback constante, clareza de papéis.

**Exemplo clássico:** atraso técnico que na verdade é um problema de comunicação — dois desenvolvedores constroem partes incompatíveis do sistema por falta de alinhamento (reuniões diárias curtas ajudariam).

### 4.3 Análise de recursos e infraestrutura de TI
Três tipos de recursos a analisar:
- **Humanos** — quantidade e perfil dos profissionais.
- **Técnicos** — ferramentas, servidores, tecnologias.
- **Financeiros** — orçamento para pessoas, ferramentas e infraestrutura.

**Modelagem de infraestrutura:** define servidores, redes, bancos de dados etc., considerando picos de uso, segurança da informação e crescimento futuro.

**Riscos do planejamento inadequado:**
- **Subdimensionar** → atrasos, sobrecarga da equipe, sistemas instáveis.
- **Superdimensionar** → desperdício de orçamento.

**Exemplo:** loja virtual precisa de infraestrutura dimensionada para o **pico** de acessos (ex.: Black Friday), não apenas a média do dia a dia.

**Papel do gestor:** equilibrar recursos humanos, técnicos e financeiros de forma realista, apoiado por ferramentas (planilhas de gestão, dashboards de alocação, monitoramento de infraestrutura), revisando o planejamento periodicamente.

---

## Aula 5 — Fusão do Produto e do Processo de Software

### 5.1 Domínio da análise do engenheiro de software
Capacidade de **compreender profundamente um problema de negócio** antes de propor qualquer solução técnica — investigar o contexto real, não apenas registrar literalmente o pedido. Reduz retrabalho.

**Habilidades-chave:**
- **Pensamento crítico** — questionar suposições, identificar o problema real.
- **Comunicação clara** — traduzir negócio em termos técnicos compreensíveis.
- **Visão sistêmica** — entender como uma mudança pontual afeta o restante do sistema/negócio.

> Analista de sistemas foca em **entender o problema**; programador foca em **implementar a solução** — papéis complementares.

### 5.2 JAD (Joint Application Development)
Reúne **usuários, gestores e equipe técnica** em sessões estruturadas para definir requisitos **em conjunto**, reduzindo o tempo de elicitação e gerando maior comprometimento dos usuários.

**Papéis em uma sessão JAD:**
- **Facilitador** — conduz a sessão, mantém o foco, garante que todas as vozes sejam ouvidas.
- **Usuários/stakeholders** — trazem as necessidades reais de negócio.
- **Equipe técnica** — traduz as necessidades em requisitos viáveis.

**Fluxo JAD:** `Preparação → Sessão conjunta → Documentação → Validação`

**JAD x elicitação tradicional:**
| | JAD | Tradicional (entrevistas separadas) |
|---|---|---|
| Velocidade | Mais rápido (decisão conjunta) | Mais lento |
| Comprometimento | Maior (participação ativa) | Menor |
| Risco | Exige boa facilitação | Risco de informações contraditórias entre entrevistados |

### 5.3 Gerenciamento da equipe de desenvolvimento
**Líder técnico:** equilibra necessidades técnicas e humanas; remove obstáculos; cria ambiente de confiança onde erros são aprendizado, não punição.

**Formação de equipes:** perfis multidisciplinares (análise, desenvolvimento, testes, infraestrutura); equipes muito grandes sofrem com comunicação; papéis claros evitam sobreposição e lacunas.

**Estilos de liderança:**
| Estilo | Características | Melhor contexto |
|---|---|---|
| Diretivo | Define tarefas e prazos, pouca autonomia | Prazo apertado, equipe menos experiente |
| Participativo | Envolve a equipe nas decisões, busca consenso | Engajamento e maturidade crescente |
| Delegativo | Confia tarefas e decisões à equipe, pouca supervisão | Equipes maduras e autônomas |
| Situacional | Adapta a abordagem conforme maturidade/contexto | Times que evoluem ao longo do projeto (ex.: júnior no início → mais participativo depois) |

### 5.4 Revisão geral (preparação para a Prova 1)
| Aula | Tema central |
|---|---|
| 1 | Fundamentos, características, aplicabilidade e fábrica de software |
| 2 | Engenharia de requisitos, estudo de viabilidade, elicitação e modelagem ágil |
| 3 | Decomposição do processo, PSP, TSP e modelos de processo |
| 4 | SDLC, aspectos humanos e análise de recursos/infraestrutura de TI |
| 5 | Domínio da análise, JAD e gerenciamento de equipes |

---

## Síntese Geral — Conceitos-Chave das 5 Aulas

| Conceito | Definição resumida |
|---|---|
| Software | Programas + dados + documentação, produto lógico, não fabricado em série |
| Deterioração lógica (erosão) | Perda de qualidade por mudanças e manutenções mal geridas |
| Fábrica de software | Padronização de processo (não do produto) para previsibilidade e escala |
| Elicitação | Descoberta de requisitos junto a usuários e stakeholders |
| Requisito funcional | O que o sistema deve fazer |
| Requisito não funcional | Como o sistema deve se comportar (desempenho, segurança, usabilidade) |
| Estudo de viabilidade | Avaliação técnica, econômica, operacional e legal antes de investir no projeto |
| User story | "Como [usuário], quero [funcionalidade], para [benefício]" |
| Decomposição do processo | Divisão em ciclos menores para reduzir risco e aumentar agilidade |
| PSP | Disciplina individual do desenvolvedor (tempo, defeitos, código) |
| TSP | Coordenação da disciplina em nível de equipe |
| Cascata | Fases sequenciais, sem sobreposição — requisitos estáveis |
| Iterativo | Refinamento repetido do sistema a cada ciclo |
| Incremental | Entrega em partes funcionais crescentes |
| Espiral | Ciclos com forte análise/mitigação de risco — projetos complexos |
| SDLC | Ciclo de vida completo: planejar → construir → verificar → manter |
| JAD | Sessões conjuntas (usuários + gestores + equipe técnica) para definir requisitos |
| Domínio da análise | Compreender o problema de negócio antes de propor solução técnica |
| Estilos de liderança | Diretivo, participativo, delegativo, situacional |