# Transcrição Completa dos PDFs

Este arquivo contém a junção completa das transcrições dos PDFs enviados.


---

# AULA-3.1-arq-circ-eletr


## Página 1

AULA 3
Arquitetura de Computadores 
e Sistemas
CIRCUITOS DIGITAIS


## Página 2

Profa. Msc. Dorlivete Moreira Shitsuaka
“Arquitetura de computadores é 
a estrutura e a organização dos 
hardwares e se refere ao 
funcionamento interno do 
computador, isto é,  
como ele está organizado e 
arranjado, ou seja, a parte não vista 
pelo usuário de computador”.


## Página 3

Profa. Msc. Dorlivete Moreira Shitsuaka
Computador nada mais é do que um 
aparelho que executa tarefas repetitivas
que sabemos como fazer e armazena uma 
grande quantidade de dados. 
Ele pode ser dividido em Hardware e 
Software.
Hardware é a parte física do computador.  
Software é a parte dos Sistemas 
Operacionais, programas e aplicativos etc.


## Página 4

Profa. Msc. Dorlivete Moreira Shitsuaka
computador analógico
Máquina 
diferencial de 
Babage
Máquina 
diferencial de 
Babage
Computador 
Colossus que 
funcionava com 
relés que são 
chaves 
(liga/desliga) de 
controle 
eletromecânicas.
Multímetro 
analógioco


## Página 5

Profa. Msc. Dorlivete Moreira Shitsuaka
“computador digital é uma máquina 
capaz de solucionar problemas por meio 
das instruções que lhe são fornecidas”. 
Ex: microcomputadores atuais, tablets, 
supercomputadores etc.
Tanenbaum (1992)
Supercomputador mais rápido do mundo: está instalado no Laboratório Nacional Los Alamos, nos 
Estados Unidos, é um equipamento híbrido, formado por 12.240 processadores PowerXCell 8i 3200 
MHz. Disponível em:
http://www.inovacaotecnologica.com.br/noticias/noticia.php?artigo=supercomputador-mais-rapido-do-mundo-usa-processador-de-videogame. Acesso em : 14 ago. 2012.


## Página 6

Profa. Msc. Dorlivete Moreira Shitsuaka
Como o computador opera:


## Página 7

Profa. Msc. Dorlivete Moreira Shitsuaka
HARDWARE = é o equipamento físico, consistindo da 
placa-mãe, cpu, barramento, chips.... e seus periféricos.
BIOS = (Basic Input Ouput System) - é um programa 
armazenado em memória tipo ROM que contém subrotinas 
da inicialização e uso do sistema.
DOS (Disk Operation System) - é o sistema operacional 
que é carregado do disco para a memória assim que o 
hardware é inicializado.
APLICATIVO = é o software que executa em cima do 
sistema operacional como por exemplo, um editor de texto.
USUÁRIO = é o operador do sistema.


## Página 8

Profa. Msc. Dorlivete Moreira Shitsuaka
Recordando um pouco de História dos pais da computação:
Alan Mathson Turing (1912-1954, inglês, 
criou o conceito de Máquina Universal,
diferenciando computadores de 
calculadoras. Trabalhou na 2a. Guerra na 
tradução de códigos da máquina alemã 
ENIGMA
John Von Neumann (1903-1957, naturalizado 
americano, criou a arquitetura de 
computadores de von Neumann, que é a 
dos computadores atuais. Ela trabalha com 
binários, processador, memórias, entradas 
e saídas.


## Página 9

Profa. Msc. Dorlivete Moreira Shitsuaka
Para que uma máquina seja definida como 
um computador, ele tem que ter a 
capacidade de ser programada. (conceito de 
Máquina Universal de Turing)
Computadores atuais podem ser 
programados utilizando-se uma linguagem 
de programação.
Quando este programa é traduzido em 
linguagem de máquina, os recursos que ele 
utiliza para as suas tarefas são definidas em 
um conjunto de funcionalidades chamadas 
de conjunto de instruções.


## Página 10

Profa. Msc. Dorlivete Moreira Shitsuaka
O que são Conjunto de Instruções??
São definidas como sendo um conjunto 
de funcionalidades ao qual um 
computador, por meio do processador 
ou microprocessador, é capaz de 
responder executando alguma tarefa.
Estas instruções fazem parte do 
processador ou do micromputador.


## Página 11

Profa. Msc. Dorlivete Moreira Shitsuaka
Categorias de Instruções:
1) Instruções de movimentação de dados = 
servem para copiar um dado de um 
registrador para outro.
2) Instruções aritméticas e lógicas = 
utilizadas para somar, subtrair,  multiplicar, 
dividir, executar operações lógicas, p. ex. 
AND, OR, NOT etc.
3) Instruções de comparação e desvio
condicional = utilizadas para comparar 
valores ou desviar o fluxo de execução do 
programa.


## Página 12

Profa. Msc. Dorlivete Moreira Shitsuaka
4) Instruções de  chamadas e 
procedimentos = são responsáveis por 
chamar um procedimento ou função 
(subconjunto de instruções).
5) Instruções de LOOP = usadas para 
controlar laços de repetição, fazendo com 
que um conjunto de instruções sejam 
executadas várias vezes.
6) Instruções de Entrada e Saída = são as 
instruções responsáveis pela entrada e 
saída de dados para serem processados  
(entrada) ou que já foram processados 
(saída).


## Página 13

Profa. Msc. Dorlivete Moreira Shitsuaka
As instruções geralmente 
armazenadas nas memórias, 
formam uma sequência e 
recebem o nome de programa 
(software).
O processador, por sua vez, 
“lê” estas instruções e executa 
a tarefa especificada.


## Página 14

Profa. Msc. Dorlivete Moreira Shitsuaka
O processador de um computador digital só 
reconhece dois níveis de sinais elétricos, alto e 
baixo (1 ou 0).
Para enviarmos instruções para o processador 
devemos escrevê-las em códigos formados por 
um conjunto de sinais elétricos compostos de 
níveis alto e baixo.
Uma sequência adequada de sinais altos e 
baixos irá constituir-se em uma instrução.
Escrever instruções no formato de sinais 
elétricos, aliado a pequena quantidade de 
instruções disponíveis, torna o processo longo e 
complexo.
Esta forma de escrever é chamada de linguagem 
de máquina.


## Página 15

Profa. Msc. Dorlivete Moreira Shitsuaka
O interpretador executa linha por linha, comando por comando, um de 
cada vez, isto é, executa uma linha e pára, esperando o próximo 
comando, é ideal para depuração, ou correção de programas, durante a 
fase de programação.


## Página 16

Profa. Msc. Dorlivete Moreira Shitsuaka
QUANTO MAIS PRÓXIMA DA 
LINGUAGEM DE MÁQUINA, MENOR É 
O NÚMERO DE INSTRUÇÕES 
EXISTENTES E, PORTANTO MAIS 
COMPLEXA E DETALHADA DEVE SER 
A PROGRAMAÇÃO: para realizar 
todas operações ter-se-á que usar 
mais linhas e mais detalhes, pois 
conta-se com menos instruções.


## Página 17

Profa. Msc. Dorlivete Moreira Shitsuaka
O conjunto de instruções 
varia sempre de um 
computador para outro, os 
tipos de instruções 
apresentados anteriormente 
e os termos podem ser 
aplicados para quase todos 
os processadores.


## Página 18

Profa. Msc. Dorlivete Moreira Shitsuaka
EXEMPLO DE LINGUAGEM DE MÁQUINA -
SAP1 (processador hipotético – simula um 
processador)
O SAP1 tem poucas instruções (5 
instruções)
A memória do SAP1 é uma memória 16 x 8, 
ou seja, temos 16 posições de memória 
com 8 bits cada posição para o 
armazenamento de um dados.


## Página 19

Profa. Msc. Dorlivete Moreira Shitsuaka
Como é a MEMÓRIA DO SAP1 – 16 (posições) X 8 (bits)
Observe que 
os endereços 
estão em 
Hexadecimal


## Página 20

Profa. Msc. Dorlivete Moreira Shitsuaka
Instruções:
As instruções possuem um NOME, 
também conhecido por MNEMÔNICO
(apelido) e podem contar com um ou 
mais OPERANDOS.
Além disso, como o computador 
entende apenas a presença ou 
ausência de sinal (0 ou 1), cada 
instrução possui um código 
denominado OPCODE (código de 
operação).


## Página 21

Profa. Msc. Dorlivete Moreira Shitsuaka
Instruções:
O OPCODE é utilizado sempre que for 
necessário fazer uma programação em 
linguagem de máquina, ou quando 
você precisar entender o que se passa 
dentro da máquina quando uma 
instrução estiver sendo executada.


## Página 22

Profa. Msc. Dorlivete Moreira Shitsuaka
MNEMÔNICO
OPCODE
FUNÇÃO
LDA
0000
Carrega o valor contido no endereço de 
memória pelo seu operando no acumulador.
ADD
0001
Soma o valor contido no endereço de 
memória apontado pelo seu operando com o 
conteúdo armazenado no acumulador.
SUB
0010
Subtrai do valor contido no acumulador, o 
valor contido no endereço da memória 
apontado pelo seu operando.
OUT
1110
Faz com que o conteúdo armazenado no 
acumulador seja indicado no módulo 
indicador visual binário. MOSTRA
HLT
1111
Para o processamento. É utilizado no final do 
programa. ENCERRA
Instruções:


## Página 23

Profa. Msc. Dorlivete Moreira Shitsuaka
Instruções:
O SAP1 mistura as instruções e os 
dados em uma única memória e, sendo 
assim, a divisão entre instruções e 
dados:
As instruções deverão ocupar, 
sequencialmente, as primeiras 
posições da memória e somente após 
o término das instruções é que 
deverão ser inseridos os dados.


## Página 24

Profa. Msc. Dorlivete Moreira Shitsuaka
Instruções:
Não existe um ponto fixo separando a área de 
programação da área disponível para o 
armazenamento dos dados.
O programador deverá analisar a quantidade 
de memória que será necessária para o armaz. 
de dados e instruções, e estudar a viabilidade 
de escrever o programa com a memória 
disponível.
Endereços mais baixos - conterão as 
instruções.
Endereços mais altos - conterão os dados.


## Página 25

Profa. Msc. Dorlivete Moreira Shitsuaka
Exemplo de programa de LINGUAGEM DE MONTAGEM (Ex. 
Assembly)
•
Faremos um programa para retornar o resultado de 3 + 5
•
OBS.: os valores 3 e 5 estão no sistema de numeração 
decimal e deverão ser armazenados nas posições EH e FH 
da memória.


## Página 26

Profa. Msc. Dorlivete Moreira Shitsuaka
Exemplo de programa de LINGUAGEM DE MÁQUINA
•
Faremos um programa para retornar o resultado de 
3 + 5
•
OBS.: os valores 3 e 5 estão no sistema de 
numeração decimal e deverão ser armazenados nas 
posições EH e FH da memória.


## Página 27

Profa. Msc. Dorlivete Moreira Shitsuaka


## Página 28

Profa. Msc. Dorlivete Moreira Shitsuaka
LINGUAGEM DE ALTO NÍVEL (Java, Cobol..) 
LINGUAGEM DE MONTAGEM (Assembly –
utiliza mnmônicos, valores hexadecimal e 
operandos – programa fonte
tradutores (Assembler)  - compil. ou interpret.
LINGUAGEM DE MÁQUINA (binários) –
programa objeto
Fonte: http://algol.dcc.ufla.br/~monserrat/icc/Capitulo3.html


## Página 29

Profa. Msc. Dorlivete Moreira Shitsuaka
Exercícios:
1)     Escreva um programa fonte em linguagem de 
montagem para o SAP1, que seja capaz de executar 
7 – 3
OBS.: os valores 7 e  3 estão no sistema de numeração 
decimal e deverão ser armazenados nas posições 
EH e FH da memória.
2)     Escreva um programa fonte em linguagem de 
montagem para o SAP1, que seja capaz de executar 
2 + 5 + 20 - 17
OBS.: os valores 2, 5, 20  e 17 estão no sistema de 
numeração decimal e deverão ser armazenados nas 
posições compreendidas entre CH e FH da 
memória.


## Página 30

Profa. Msc. Dorlivete Moreira Shitsuaka
Exercícios:
3)     Escreva um programa fonte em linguagem de 
máquina para o SAP1, que seja capaz de executar 7 
– 3
OBS.: os valores 7 e  3 estão no sistema de numeração 
decimal e deverão ser armazenados nas posições 
EH e FH da memória.
4)     Escreva um programa fonte em linguagem de 
máquina para o SAP1, que seja capaz de executar 2 
+ 5 + 20 - 17
OBS.: os valores 2, 5, 20  e 17 estão no sistema de 
numeração decimal e deverão ser armazenados nas 
posições compreendidas entre CH e FH da 
memória.


## Página 31

Profa. Msc. Dorlivete Moreira Shitsuaka
Avançando um pouco mais  !!!!!!


## Página 32

Profa. Msc. Dorlivete Moreira Shitsuaka
Os computadores atuais possuem 6 ou 
mais níveis de máquinas conforme 
podemos observar na figura abaixo.
BINÁRIOS
PROCESSADORES
JAVA, PASCAL, C
....
ASSEMBLY
SO – desenv. Op. complexas
ASSEMBLER


## Página 33

Profa. Msc. Dorlivete Moreira Shitsuaka
Tecnologias que possibilitaram o desenvolvimento dos 
computadores eletrônicos atuais:
Metal
É um tipo de material com  ligação química na qual 
os átomos ficam em posições fixas formando uma 
grade cristalina e os elétrons da última camada 
eletrônica ficam livres para se movimentar, 
formando um espécie de nuvem eletrônica dentro 
da estrutura cristalina dos metais. 
É bom condutor de eletricidade, de calor e possue 
brilho metálico.
Uso = todos os fios condutores (placa-mãe, trilhas, 
cabos (flat, USB, teclado, mouse, força, molex)


## Página 34

Profa. Msc. Dorlivete Moreira Shitsuaka
Semicondutores - são materiais que 
apresentam 4 elétrons na sua última camada e 
podem se comportar ou como condutores ou 
como isolantes: se recebem mais elétrons que 4 
(na última camada eletrônica atômica) se 
comportam como metais. Se perdem um elétron 
nesta camada, se comportam como isolantes. 
Por este motivo, eles podem ser utilizados 
como chaves eletrônicas do tipo liga desliga 
(transistores) ou como materiais que só 
permitem a passagem da corrente numa única 
direção (diodos) ou então como amplificadores 
de correntes e sinais elétricos (transistores).
Uso = diodos, diodo emissor de luz, diodo zener 
(regula tensão), transistores (NPN e PNP).


## Página 35

Profa. Msc. Dorlivete Moreira Shitsuaka
semicondutores
LEDs
Transistor
Transistores com Base (B), Coletor (C) e Emissor (E)


## Página 36

Profa. Msc. Dorlivete Moreira Shitsuaka
Solda elétrica.
Utiliza-se a solda Chumbo-Estanho, ou Pb-
Sn. Esta é uma mistura dois elementos 
formando uma liga metálica. Liga é a junção 
de um metal com outro material. Nesta a 
proporção no caso da liga Pb-Sn é mais ou 
menos 63% de estanho e 37% de chumbo 
em peso.
Uso = para fixar chips em placas, para fixar 
componentes (resistores, transistores, 
diodos etc), para unir pedaços de fio, para 
consertar trilhas quebradas etc.


## Página 37

Profa. Msc. Dorlivete Moreira Shitsuaka
Solda elétrica


## Página 38

Profa. Msc. Dorlivete Moreira Shitsuaka
Aço
Liga ferro-carbono, com menos de 1% 
de carbono, condutor de elétrons, é 
material barato. 
Uso = chaparias (chapa do gabinete), 
armários, partes metálicas de mesas e 
cadeiras.


## Página 39

Profa. Msc. Dorlivete Moreira Shitsuaka
Alumínio
Metal condutor de elétrons
Dissipador de calor
Uso = base (onde fixa) do cooler


## Página 40

Profa. Msc. Dorlivete Moreira Shitsuaka
Cobre
Metal condutor de eletrons.
Bom dissipador de calor.
Uso = base do cooler, fios, barramento 
etc.


## Página 41

Profa. Msc. Dorlivete Moreira Shitsuaka
Cerâmica
Isolante, resiste a altas temperaturas, 
formado por óxidos.
Uso =  envólucro do processador, 
capacitores (reservatório de energia)


## Página 42

Profa. Msc. Dorlivete Moreira Shitsuaka
Poliester
Polímero ou plástico;
Uso = encapar fios (cabo flat, fonte de 
alimentação, capacitores etc.)


## Página 43

Profa. Msc. Dorlivete Moreira Shitsuaka
Ouro
Metal condutor de sinais (elétrons), que 
não se oxida.
Uso =  pintura em pernas do 
processador, pernas dos chips para 
evitar corrosão.


## Página 44

Profa. Msc. Dorlivete Moreira Shitsuaka
Silício
Semi-metal (ou semi-condutor). Possui 4 elétrons na 
sua última camada eletrônica. Se receber mais 1 
elétron vira metal (5 elétrons). Se perder 1 elétron vira 
isolante (3 elétrons). Desde modo pode ligar e desligar 
e atuar como amplificador.
Quando se adiciona Fósforo (5 elétrons) ao Silício 
(4 elétrons) ele se torna do tipo N (negativo)
Quando se adiciona o elemento Indio (3 elétrons) 
ao Silício (4 elétrons) ele se torna do tipo P 
(positivo)
Uso = portas lógicas (chips e processador), 
transistores (chip) e diodos (chips, fonte de 
alimentação)


## Página 45

Profa. Msc. Dorlivete Moreira Shitsuaka
Litio
Elemento químico, não metálico, que 
serve para gerar energia.
Uso = baterias (não recarregáveis) está 
na placa-mãe


## Página 46

Profa. Msc. Dorlivete Moreira Shitsuaka
Níquel-Cadmio
Metais utilizados na energia recarregável 
e tóxica.
Uso = baterias (recarregáveis) está na 
placa-mãe, celular, notebook


## Página 47

Profa. Msc. Dorlivete Moreira Shitsuaka
Estanho
Metal de baixo ponto de fusão, 
condutor de elétrons, pode formar liga 
de solda com chumbo.
Uso =  fixação de chips na placa-mãe, 
fixação de componentes na placa-mãe, 
união de fios, reparos eletrônicos, fonte 
de alimentação.


## Página 48

Profa. Msc. Dorlivete Moreira Shitsuaka
Plástico
Polímero, isolante etc.
Uso = placa mãe (placa de acrílico 
multicamada), capacitores, revestimento de fios 
etc.


## Página 49

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS DIGITAIS
Existem vários parâmetros para a classificação de 
computadores, entretanto o que mais nos interessa é quanto 
ao tipo de processamento. 
Os computadores podem ser classificados em: analógicos 
(processam sinais elétricos) e digitais (utilizam dígitos 
binários para representar a programação.
Os computadores digitais trabalham com a presença ou com a 
ausência de sinais elétricos ao longo do seu circuito e, por 
meio de combinação desses sinais, todas as informações são 
processadas.
A lógica utilizada para processar as informações digitais é a 
lógica booleana e, agora, como os operadores booleanos 
terão de efetuar operações sobre dados físicos teremos 
também que ter componentes físicos para a implementação 
do circuito digital.
Os componentes físicos capazes de efetuar as operações 
booleanas sobre os sinais elétricos recebem o nome de portas 
lógicas (circuitos de transsistor).


## Página 50

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS DIGITAIS


## Página 51

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITO ELÉTRICO DA FONTE DE 
ALIMENTAÇÃO


## Página 52

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITO ELÉTRICO DA FONTE DE 
ALIMENTAÇÃO


## Página 53

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITO ELÉTRICO DA FONTE DE 
ALIMENTAÇÃO


## Página 54

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITO ELÉTRICO DA FONTE DE 
ALIMENTAÇÃO


## Página 55

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS ELÉTRICOS
TRANSFORMADOR = REDUZ A TENSÃO DE 110V PARA 
12V.
PONTE DE DIODO (4) = RETIFICA A TENSÃO (OU 
ENERGIA) FICA POSITIVO NUM 
SENTIDO.
CAPACITOR = ARMAZENA E LIBERA TENSÃO (OU 
ENERGIA) PARA TIRAR AS 
SUBIDAS.
RESISTOR = LIGANDO O CIRCUITO


## Página 56

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS DIGITAIS
RESISTORES = Representa uma resistência (se opõe) à passagem da 
corrente. Dissipa calor. Serve como divisores de tensão ou de corrente. 
Os resistores podem ser definidos como componentes cuja finalidade é 
apresentar uma certa resistência elétrica.
INDUTORES = Tende a conservar a energia posta (colocada) no sistema. 
CAPACITORES = Podemos definir o capacitor como um componente que 
pode armazenar cargas ou energia elétrica.


## Página 57

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS DIGITAIS
DIODO = Deixa corrente passar num único sentido. 
Retifica a corrente. 
TRANSISTORES = Amplifica sinais. Serve de chave 
liga/desliga.


## Página 58

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS DIGITAIS


## Página 59

Profa. Msc. Dorlivete Moreira Shitsuaka
CIRCUITOS DIGITAIS


## Página 60

Profa. Msc. Dorlivete Moreira Shitsuaka
PORTAS LÓGICAS


## Página 61

Profa. Msc. Dorlivete Moreira Shitsuaka
PORTAS LÓGICAS


## Página 62

Profa. Msc. Dorlivete Moreira Shitsuaka
PORTAS LÓGICAS


## Página 63

Profa. Msc. Dorlivete Moreira Shitsuaka
PORTAS LÓGICAS
As portas lógicas funcionam com as ondas 
quadradas ou digitais. 
1 = acima de 3V
0 = abaixo de 2V


## Página 64

Profa. Msc. Dorlivete Moreira Shitsuaka
Vamos continuar avançando 
!!!!!


---

# FuncoesLogicasPortasLogicas


## Página 1

Histórico
D Em meados do século XIX o  
matemático inglês George Boole  
desenvolveu um sistema  
matemático de análise lógica
D Em meados do século XX, o  
americano Claude Elwood  
Shannon sugeriu que a Álgebra  
Booleana poderia ser usada para  
análise e projeto de circuitos de  
comutação
George Boole (1815-1864)
1
Claude Elwood Shannon (1916-2001)


## Página 2

Histórico
2
D Nos primórdios da eletrônica, todos os problemas eram 
solucionados por meio de sistemas analógicos
D Com o avanço da tecnologia, os problemas passaram a  
ser solucionados pela eletrônica digital
D Na eletrônica digital, os sistemas (computadores, 
processadores de dados, sistemas de controle,  
codificadores, decodificadores, etc) empregam um  
pequeno grupo de circuitos lógicos básicos, que são  
conhecidos como portas e, ou, não e flip-flop
D Com a utilização adequadas dessas portas é possível 
implementar todas as expressões geradas pela álgebra  
de Boole


## Página 3

Álgebra Booleana
3
D Na álgebra de Boole, há somente dois estados
(valores ou símbolos) permitidos
• Estado 0 (zero)
• Estado 1 (um)
D Em geral
• O estado zero representa não, falso, aparelho  
desligado, ausência de tensão, chave elétrica  
desligada, etc
• O estado um representa sim, verdadeiro, aparelho  
ligado, presença de tensão, chave ligada, etc


## Página 4

Álgebra Booleana
4
D Assim, na álgebra booleana, se  
representarmos por 0 uma situação, a  
situação contrária é representada por 1
D Portanto, em qualquer bloco (porta ou  
função) lógico somente esses dois estados  
(0 ou 1) são permitidos em suas entradas e  
saídas
D Uma variável booleana também só assume  
um dos dois estados permitidos (0 ou 1)


## Página 5

Álgebra Booleana
5
D Nesta apresentação trataremos dos seguintes blocos 
lógicos
• E (AND)
• OU (OR)
• NÃO (NOT)
• NÃO E (NAND)
• NÃO OU (NOR)
• OU EXCLUSIVO (XOR)
D Após, veremos a correspondência entre expressões, 
circuitos e tabelas verdade
D Por último, veremos a equivalência entre blocos lógicos


## Página 6

Função E (AND)
D Executa a multiplicação (conjunção) booleana  
de duas ou mais variáveis binárias
D Por exemplo, assuma a convenção no circuito
• Chave aberta = 0; Chave fechada = 1
• Lâmpada apagada = 0; Lâmpada acesa = 1
A
6
B


## Página 7

Função E (AND)
D Situações possíveis:
A=0
B=0
S=0
A=1
B=0
S=0
A=0
B=1
S=0
A=1
B=1
S=1
7


## Página 8

Função E (AND)
8
D
Se a chave A está aberta (A=0) e a chave B aberta (B=0),não haverá 
circulação de energia no circuito, logo a lâmpada fica apagada(S=0)
D
Se a chave A está fechada (A=1) e a chave B aberta(B=0), não  
haverá circulação de energia no circuito, logo a lâmpada fica apagada  
(S=0)
D
Se a chave A está aberta (A=0) e a chave B fechada(B=1), não  
haverá circulação de energia no circuito, logo a lâmpada fica apagada  
(S=0)
D
Se a chave A está fechada (A=1) e a chave B fechada(B=1), haverá 
circulação de energia no circuito e a lâmpada fica acesa(S=1)
D
Observando todas as quatro situações possíveis (interpretações), é  
possível concluir que a lâmpada fica acesa somente quando as  
chaves A e B estiverem simultaneamente fechadas (A=1 e B=1)


## Página 9

Função E (AND)
9
D Para representar a expressão
•S = A e B
D Adotaremos a representação
•S = A.B, onde se lê S = A e B
D Porém, existem notações alternativas
•S = A & B
•S = A, B
•S = A ∧ B


## Página 10

Tabela Verdade
10
D A tabela verdade é um mapa onde são  
colocadas todas as possíveis  
interpretações (situações), com seus  
respectivos resultados para uma expressão  
booleana qualquer
D Como visto no exemplo anterior, para 2  
variáveis booleanas (A e B), há 4  
interpretações possíveis
D Em geral, para N variáveis booleanas de  
entrada, há 2N interpretaçõespossíveis


## Página 11

Tabela Verdade da Função E (AND)
11
A
B
A.B
0
0
0
0
1
0
1
0
0
1
1
1


## Página 12

Porta Lógica E (AND)
D A porta E é um circuito que executa a função E
D A porta E executa a tabela verdade da função E
• Portanto, a saída será 1 somente se ambas as  
entradas forem iguais a 1; nos demais casos, a saída  
será 0
D Representação
Porta E
(AND)
Entrada A
Saída S
Entrada B
12


## Página 13

Porta Lógica E (AND)
A
B
S=A.B
A B S=A.B
0
0
0
0
1
0
1
0
0
1
1
1
0
0
0
A B S=A.B
0
0
0
0
1
0
1
0
0
1
1
1
0
1
0
A B S=A.B
0
0
0
0
1
0
1
0
0
1
1
1
1
0
0
A B S=A.B
0
0
0
0
1
0
1
0
0
1
1
1
1
1
13
1


## Página 14

Porta Lógica E (AND)
D É possível estender o  
conceito de uma porta E 
para um número qualquer
de variáveis de entrada
D Nesse caso, temos uma  
porta E com N entradas e  
somente uma saída
D A saída será 1 se e  
somente se as N entradas  
forem iguais a 1; nos  
demais casos, a saída  
será 0
A
B
14
S=A.B.C…N
C
N
…


## Página 15

Porta Lógica E (AND)
D Por exemplo,  
S=A.B.C.D
A
B
15
S=A.B.C.D
C
D
A
B
C
D
S
0
0
0
0
0
0
0
0
1
0
0
0
1
0
0
0
0
1
1
0
0
1
0
0
0
0
1
0
1
0
0
1
1
0
0
0
1
1
1
0
1
0
0
0
0
1
0
0
1
0
1
0
1
0
0
1
0
1
1
0
1
1
0
0
0
1
1
0
1
0
1
1
1
0
0
1
1
1
1
1


## Página 16

Função OU (OR)
D Executa a soma (disjunção) booleana de duas  
ou mais variáveis binárias
D Por exemplo, assuma a convenção no circuito
• Chave aberta = 0; Chave fechada = 1
• Lâmpada apagada = 0; Lâmpada acesa = 1
B
A
16


## Página 17

Função OU (OR)
S=0
B=0
A=0
S=1
B=1
A=1
S=1
B=0
A=1
S=1
B=1
A=0
17


## Página 18

Função OU (OR)
18
D
Se a chave A está aberta (A=0) e a chave B aberta (B=0),não haverá 
circulação de energia no circuito, logo a lâmpada fica apagada(S=0)
D
Se a chave A está fechada (A=1) e a chave B aberta (B=0), haverá 
circulação de energia no circuito e a lâmpada fica acesa (S=1)
D
Se a chave A está aberta (A=0) e a chave B fechada (B=1), haverá 
circulação de energia no circuito e a lâmpada fica acesa(S=1)
D
Se a chave A está fechada (A=1) e a chave B fechada(B=1), haverá 
circulação de energia no circuito e a lâmpada fica acesa (S=1)
D
Observando todas as quatro situações possíveis, é possível concluir 
que a lâmpada fica acesa somente quando a chave A ou a chave B  
ou ambas estiverem fechadas


## Página 19

Função OU (OR)
19
D Para representar a expressão
•S = A ou B
D Adotaremos a representação
•S = A+B, onde se lê S = A ou B
D Porém, existem notações alternativas
•S = A | B
•S = A; B
•S = A ∨B


## Página 20

Tabela Verdade da Função OU
(OR)
20
D Observe que, no  
sistema de numeração  
binário, a soma  
1+1=10
D Na álgebra booleana,  
1+1=1, já que  
somente dois valores  
são permitidos (0 e 1)
A
B
A+B
0
0
0
0
1
1
1
0
1
1
1
1


## Página 21

Porta Lógica OU (OR)
Entrada A
Saída S
Entrada B
D A porta OU é um circuito que executa a função OU
D A porta OU executa a tabela verdade da função OU
• Portanto, a saída será 0 somente se ambas as entradasforem  
iguais a 0; nos demais casos, a saída será1
D Representação
Porta OU
(OR)
Entrada A
Saída S
Entrada B
21


## Página 22

Porta Lógica OU (OR)
A B S=A+B
0
0
0
0
1
1
1
0
1
1
1
1
A B S=A+B
0
0
0
0
1
1
1
0
1
1
1
1
A B S=A+B
0
0
0
0
1
1
1
0
1
1
1
1
A B S=A+B
0
0
0
0
1
1
1
0
1
1
1
1
0
0
0
0
1
1
1
0
1
1
1
1
A
B
S=A+B
22


## Página 23

Porta Lógica OU (OR)
D É possível estender o  
conceito de uma porta OU 
para um número qualquer
de variáveis de entrada
D Nesse caso, temos uma  
porta OU com N entradas  
e somente uma saída
D A saída será 0 se e  
somente se as N entradas  
forem iguais a 0; nos  
demais casos, a saída  
será 1
A
B
23
S=A+B+C+…+N
C
N
…


## Página 24

Porta Lógica OU (OR)
D Por exemplo,  
S=A+B+C+D
A
B
C
D
S
0
0
0
0
0
0
0
0
1
1
0
0
1
0
1
0
0
1
1
1
0
1
0
0
1
0
1
0
1
1
0
1
1
0
1
0
1
1
1
1
1
0
0
0
1
1
0
0
1
1
1
0
1
0
1
1
0
1
1
1
1
1
0
0
1
1
1
0
1
1
1
1
1
0
1
1
1
1
1
1
A
B
24
S=A+B+C+D
C
D


## Página 25

Função NÃO (NOT)
25
D Executa o complemento (negação) de  
uma variável binária
•Se a variável estiver em 0, o resultado da  
função é 1
•Se a variável estiver em 1, o resultado da  
função é 0
D Essa função também é chamada de
inversora


## Página 26

Função NÃO (NOT)
D Usando as mesmas convenções dos circuitos  
anteriores, tem-se que:
• Quando a chave A está aberta (A=0), passará corrente  
pela lâmpada e ela acenderá (S=1)
• Quando a chave A está fechada (A=1), a lâmpada  
estará em curto-circuito e não passará corrente por  
ela, ficando apagada (S=0)
S=1
A=0
S=0
A=1
26


## Página 27

Função NÃO (NOT)
27
D Para representar a  
expressão
• S = não A
D Adotaremos a  
representação
• S = Ā, onde se lê S = nãoA
D Notações alternativas
• S = A’
• S = ¬ A
• S = Ã
D Tabela verdade da  
função NÃO (NOT)
A
Ā
0
1
1
0


## Página 28

Porta Lógica NÃO (NOT)
D A porta lógica NÃO, ou inversor, é o circuito que executa 
a função NÃO
D O inversor executa a tabela verdade da função NÃO
• Se a entrada for 0, a saída será 1; se a entrada for 1, a saídaserá  
0
D Representação
Entrada A
Saída S
Porta
NÃO
(NOT)
Após um  
bloco lógico
28
Antes de um  
bloco lógico
Alternativamente,


## Página 29

Porta Lógica NÃO (NOT)
0
1
A
S=Ā
A
S=Ā
0
1
1
0
1
0
A
S=Ā
0
1
1
0
29


## Página 30

Função NÃO E (NAND)
D Composição da  
função E com a  
função NÃO, ou seja,  
a saída da função E é  
invertida
D S
= (A.B) = A.B
= (A.B)’
= ¬(A.B)
D Tabela verdade
A
B
S=A.B
0
0
1
0
1
1
1
0
1
1
1
0
30


## Página 31

Porta NÃO E (NAND)
D A porta NÃO E (NE) é o bloco lógico que executa  
a função NÃO E, ou seja, sua tabela verdade
D Representação
A
B
S=A.B
A
B
S=A.B
31


## Página 32

Porta NÃO E (NAND)
D Como a porta E, a porta
NÃO E pode ter duas ou
mais entradas
D Nesse caso, temos uma  
porta NÃO E com N  
entradas e somente uma  
saída
D A saída será 0 se e  
somente se as N entradas  
forem iguais a 1; nos  
demais casos, a saída  
será 1
A
B
32
S=A.B.C…N
C
N
…


## Página 33

Função NÃO OU (NOR)
D Composição da  
função OU com a  
função NÃO, ou seja,  
a saída da função OU  
é invertida
D S
= (A+B) = A+B
= (A+B)’
= ¬(A+B)
D Tabela verdade
A
B
S=A+B
0
0
1
0
1
0
1
0
0
1
1
0
33


## Página 34

Porta NÃO OU (NOR)
D A porta NÃO OU (NOU) é o bloco lógico que  
executa a função NÃO OU, ou seja, sua tabela  
verdade
D Representação
A
B
S=A+B
S=A+B
A
B
34


## Página 35

Porta NÃO OU (NOR)
D Como a porta OU, a porta
NÃO OU pode ter duas ou
mais entradas
D Nesse caso, temos uma  
porta NÃO OU com N  
entradas e somente uma  
saída
D A saída será 1 se e  
somente se as N entradas  
forem iguais a 0; nos  
demais casos, a saída  
será 0
A
B
35
S=A+B+C+…+N
C
N
…


## Página 36

Função OU Exclusivo (XOR)
36
D A função OU  
Exclusivo fornece
• 1 na saída quando as  
entradas forem  
diferentes entre si e
• 0 caso contrário
D S
= A ⊕B
= Ā.B + A.B
D Tabela verdade
A
B
S=A⊕B
0
0
0
0
1
1
1
0
1
1
1
0


## Página 37

Porta OU Exclusivo (XOR)  
como Bloco Básico
A
B
S=A⊕B
⊕
A
B
S=A⊕B
|
Outros símbolos utilizados
Simbologia adotada
A
37
B
S=A⊕B


## Página 38

Porta OU Exclusivo (XOR)  
como Circuito Combinacional
A
B
S=A⊕B
38


## Página 39

Resumo dos Blocos Lógicos  
Básicos
Nome
Símbolo Gráfico
Função Algébrica
Tabela Verdade
E (AND)
S=A.B  
S=AB
OU (OR)
S=A+B
NÃO (NOT)
Inversor
S=Ā
S=A’
S= ¬A
NE (NAND)
S=A.B  
S=(A.B)’
S= ¬(A.B)
NOU (NOR)
S=A+B  
S=(A+B)’  
S= ¬(A+B)
XOR
S=A⊕B
A
B
S=A.B
A
B
S=A+B
A
S=Ā
A
B
S=A.B
A
B
S=A+B
S=A.B  
0
A
B
0
0
0
1
1
0
1
1
0
0
1
A
B
S=A+B
0
0
0
1
1
0
1
1
0
1
1
1
A  
0
S=Ā  
1
1
0
S=A⊕B  
0
A
B
0
0
0
1
1
0
1
1
1
1
0
A
B
S=A.B
0
0
0
1
1
0
1
1
1
1
1
0
A
B
0
0
S=A+B  
1
0
1
1
0
1
1
0
0
0
A
41
B
S=A⊕B


## Página 40

Correspondência entre expressões,  
circuitos e tabelas verdade
42
D Todo circuito lógico executa uma  
expressão booleana
D Um circuito, por mais complexo que seja, é  
composto pela interligação dos blocos  
lógicos básicos
D Veremos, a seguir, como obter as  
expressões booleanas geradas por um  
circuito lógico


## Página 41

Expressões Booleanas Geradas  
por Circuitos Lógicos
D Seja o circuito:
A
B
S
C
43


## Página 42

Expressões Booleanas Geradas  
por Circuitos Lógicos
D Vamos dividi-lo em duas partes (1) e (2)
•No circuito (1), a saída S1 contém o produto  
A.B, já que o bloco é uma porta E
•Portanto, S1  =A.B
A
B
S
C
(1)
44
(2)
S1


## Página 43

Expressões Booleanas Geradas  
por Circuitos Lógicos
D No circuito (2), note que a saída S1 é utilizada  
como uma das entradas da porta OU
D A outra entrada da porta OU corresponde à  
variável C, o que nos leva à:
• S = S1  +C
A
B
S=S1+C
C
(1)
45
(2)
S1=A.B


## Página 44

Expressões Booleanas Geradas  
por Circuitos Lógicos
D Para obter a expressão final em relação às  
entradas A, B e C basta substituir a expressão S1  
na expressão de S, ou seja:
• (1) S1  =A.B
• (2) S = S1  +C
• Obtém-se S = S1  + C = (A.B) + C
A
B
S=S1+C
C
(1)
46
(2)
S1=A.B


## Página 45

Expressões Booleanas Geradas  
por Circuitos Lógicos
D Portanto, a expressão que o circuito executa é:
• S = (A.B) + C = A.B + C
A
B
S=A.B+C
C
47
(2)
A.B


## Página 46

Exercício
D Escreva a expressão booleana executada  
pelo circuito
S
48
A
B
C
D


## Página 47

Solução
S=(A+B).(C+D)
49
A
B
C
D
(A+B)
(C+D)


## Página 48

Exercício
D Determinar a expressão booleana  
característica do circuito
A
B
S
C
D
50


## Página 49

Solução
A
B
S=(A.B)+C+(C.D)
C
D
(A.B)
C
(C.D)
51


## Página 50

Circuitos Gerados por  
Expressões Booleanas
52
D Até o momento, vimos como obter uma
expressão característica a partir de um
circuito
D Também é possível obter um circuito  
lógico, dada uma expressão booleana
D Nesse caso, como na aritmética elementar,  
parênteses têm maior prioridade, seguidos  
pela multiplicação (função E) e, por último,  
pela soma (função OU)


## Página 51

Circuitos Gerados por  
Expressões Booleanas
53
D
Seja a expressão
• S = (A+B).C.(B+D)
D
Vamos separar as subfórmulas da 
expressão, ou seja:
• S = (A+B) . C . (B+D)


## Página 52

Circuitos Gerados por  
Expressões Booleanas
D
Seja a expressão
• S = (A+B).C.(B+D)
D
Vamos separar as subfórmulas da 
expressão, ou seja:
• S = (A+B) . C . (B+D)
D
Dentro do primeiro parêntese temos a 
soma booleana S1=(A+B), portanto o  
circuito que executa esse parêntese será  
uma porta OU
D
Dentro do segundo parêntese temos a 
soma booleana S2=(B+D). Novamente, o  
circuito que executa esse parêntese será  
uma porta OU
A
B
S1=(A+B)
B
D
S2=(B+D)
54


## Página 53

Circuitos Gerados por  
Expressões Booleanas
D
Seja a expressão
• S = (A+B).C.(B+D)
D
Vamos separar as subfórmulas da 
expressão, ou seja:
• S = (A+B) . C . (B+D)
D
Dentro do primeiro parêntese temos a 
soma booleana S1=(A+B), portanto o  
circuito que executa esse parêntese será  
uma porta OU
D
Dentro do segundo parêntese temos a 
soma booleana S2=(B+D). Novamente, o  
circuito que executa esse parêntese será  
uma porta OU
D
Portanto, temos:
• S = S1 . C . S2
D
Agora temos uma multiplicação booleana 
e o circuito que a executa é uma porta E
A
B
S1=(A+B)
B
D
S2=(B+D)
S1
C
55
S
S2


## Página 54

Circuitos Gerados por  
Expressões Booleanas
D O circuito completo é:
A
B
S1=(A+B)
D
S2=(B+D)
C
S = (A+B).C.(B+D)
56


## Página 55

Exercício
57
D Desenhe o circuito lógico que executa a  
seguinte expressão booleana
•S = (A.B.C) + (A+B).C


## Página 56

Solução
A
B
(A+B).C
C
C
A+B
S=(A.B.C)+(A+B).C
D
É importante lembrar que as entradas que representam a mesma  
variável estão interligadas
D
Contudo o desenho sem interligações facilita a interpretação do  
circuito
A
A.B.C
B
58


## Página 57

Exercício
D Desenhe o circuito lógico cuja expressão  
característica é
•S = (A.B + C.D)’
59


## Página 58

Solução
A
B
A.B
D
C.D
S=((A.B)+(C.D))’
C
60


## Página 59

Expressões ou Circuitos  
representados por Tabelas Verdade
61
D Uma forma de estudar uma função booleana  
consiste em utilizar sua tabela verdade
D Como visto anteriormente, há uma equivalência  
entre o circuito lógico e sua expressão  
característica
• Podemos obter um circuito a partir de sua expressão
• Podemos obter expressões a partir dos circuitos
D Uma tabela verdade representa o comportamento  
tanto do circuito como de sua expressão  
característica


## Página 60

Como obter a Tabela Verdade a  
partir de uma Expressão
62
D Colocar todas as possibilidades (interpretações)  
para as variáveis de entrada
• Lembrar que para N variáveis, há 2N possibilidades
D Adicionar colunas para cada subfórmula da  
expressão
• Preencher cada coluna com seus resultados
D Adicionar uma coluna para o resultado final
• Preencher essa coluna com o resultado final


## Página 61

Exemplo
63
D Considere a expressão
• S = A.B.C + A.D + A.B.D
D Como há 4 variáveis de
entrada (A, B, C, D), há
24=16 interpretações
• Variação 1 zero, 1 um
A
B
C
D
0
1
0
1
0
1
0
1
0
1
0
1
0
1
0
1


## Página 62

Exemplo
1
1
64
D Considere a expressão
• S = A.B.C + A.D + A.B.D
D Como há 4 variáveis de
entrada (A, B, C, D), há
24=16 interpretações
• Variação 1 zero, 1 um
• Variação 2 zeros, 2 um
A
B
C
D
0
0
0
1
1
0
1
1
0
0
0
1
1
0
1
1
0
0
0
1
1
0
1
1
0
0
0
1
1
0


## Página 63

Exemplo
1
1
1
65
D Considere a expressão
• S = A.B.C + A.D + A.B.D
D Como há 4 variáveis de
entrada (A, B, C, D), há
24=16 interpretações
• Variação 1 zero, 1 um
• Variação 2 zeros, 2 um
• Variação 4 zeros, 4 um
A
B
C
D
0
0
0
0
0
1
0
1
0
0
1
1
1
0
0
1
0
1
1
1
0
1
1
1
0
0
0
0
0
1
0
1
0
0
1
1
1
0
0
1
0
1
1
1
0


## Página 64

Exemplo
1
1
1
1
66
D Considere a expressão
• S = A.B.C + A.D + A.B.D
D Como há 4 variáveis de
entrada (A, B, C, D), há
24=16 interpretações
• Variação 1 zero, 1 um
• Variação 2 zeros, 2 um
• Variação 4 zeros, 4 um
• Variação 8 zeros, 8 um
A
B
C
D
0
0
0
0
0
0
0
1
0
0
1
0
0
0
1
1
0
1
0
0
0
1
0
1
0
1
1
0
0
1
1
1
1
0
0
0
1
0
0
1
1
0
1
0
1
0
1
1
1
1
0
0
1
1
0
1
1
1
1
0


## Página 65

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
1
0
0
1
0
0
0
1
1
0
1
0
0
0
1
0
1
0
1
1
0
0
1
1
1
1
0
0
0
1
0
0
1
1
0
1
0
1
0
1
1
1
1
0
0
1
1
0
1
1
1
1
0
1
1
1
1
67


## Página 66

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
1
0
0
1
0
0
0
1
1
0
1
0
0
0
1
0
1
0
1
1
0
0
1
1
1
1
0
0
0
1
0
0
1
1
0
1
0
1
1
1
1
1
0
1
1
1
1
1
0
0
1
1
1
0
1
0
1
D Preencher cada coluna
com seu respectivo  
resultado
1
1
68


## Página 67

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
1
0
0
0
1
0
0
0
0
1
1
0
0
1
0
0
0
0
1
0
1
0
0
1
1
0
0
0
1
1
1
0
1
0
0
0
0
1
0
0
1
0
1
0
1
0
0
1
1
1
1
1
0
1
1
1
1
1
0
0
1
1
1
0
1
0
1
0
0
0
1
1
D Preencher cada coluna
com seu respectivo  
resultado
69


## Página 68

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
D Preencher cada coluna 
com seu respectivo
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
1
0
0
0
1
0
0
0
0
1
1
0
0
1
0
0
0
0
1
0
1
0
0
1
1
0
0
0
1
1
1
0
1
0
0
0
0
1
0
0
1
0
1
1
0
1
0
0
1
0
1
1
0
1
1
1
0
0
0
1
1
0
1
0
1
resultado
1
1
1
1
1
1
0
1
1
1
1
70


## Página 69

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
D Preencher cada coluna 
com seu respectivo
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
0
1
0
0
0
0
1
0
0
0
0
0
1
1
0
0
0
1
0
0
0
0
0
1
0
1
0
0
0
1
1
0
0
0
0
1
1
1
0
0
1
0
0
0
0
0
1
0
0
1
0
1
1
0
1
0
0
0
1
0
1
1
0
1
1
1
0
0
0
0
1
1
0
1
0
1
resultado
1
1
1
1
1
1
0
1
1
1
0
1
71


## Página 70

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
D Preencher cada coluna 
com seu respectivo
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
0
1
0
0
0
0
1
0
0
0
0
0
1
1
0
0
0
1
0
0
0
0
0
1
0
1
0
0
0
1
1
0
0
0
0
1
1
1
0
0
1
0
0
0
0
0
1
0
0
1
0
1
1
0
1
0
0
0
1
0
1
1
0
1
1
1
0
0
0
0
1
1
0
1
0
1
1
resultado
1
1
1
1
1
1
0
1
1
1
0
1
1
72


## Página 71

Exemplo
D S = A.B.C + A.D + A.B.D
D A seguir, adicionar uma  
coluna para cada  
subfórmula de S, além de  
uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
D Preencher cada coluna 
com seu respectivo
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
0
0
1
0
0
0
0
0
1
0
0
0
0
0
0
1
1
0
0
0
0
1
0
0
0
0
0
0
1
0
1
0
0
0
0
1
1
0
0
0
0
0
1
1
1
0
0
0
1
0
0
0
0
0
0
1
0
0
1
0
1
0
1
0
1
0
0
0
0
1
0
1
1
0
1
0
1
1
0
0
0
0
0
1
1
0
1
0
1
1
resultado
1
1
1
1
1
1
0
1
1
1
0
1
0
1
73


## Página 72

Exemplo
74
D
S = A.B.C + A.D + A.B.D
D
A seguir, adicionar uma coluna  
para cada subfórmula de S,  
além de uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
D
Preencher cada coluna com  
seu respectivo resultado
D
Por último, preencher a coluna  
do resultado final
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
0
0
1
0
0
0
0
0
1
0
0
0
0
0
0
1
1
0
0
0
0
1
0
0
0
0
0
0
1
0
1
0
0
0
0
1
1
0
0
0
0
0
1
1
1
0
0
0
1
0
0
0
0
0
0
1
0
0
1
0
1
0
1
1
0
1
0
0
0
0
1
0
1
1
0
1
0
1
1
1
0
0
0
0
0
1
1
0
1
0
1
1
1
1
1
1
0
1
0
0
1
1
1
1
1
1
1
1
1


## Página 73

Exemplo
75
D
S = A.B.C + A.D + A.B.D
D
A seguir, adicionar uma coluna  
para cada subfórmula de S,  
além de uma coluna para o  
resultado final S
• A.B.C
• A.D
• A.B.D
D
Preencher cada coluna com  
seu respectivo resultado
D
Por último, preencher a coluna  
do resultado final
A
B
C
D
A.B.C
A.D
A.B.D
S
0
0
0
0
0
0
0
0
0
0
0
1
0
0
0
0
0
0
1
0
0
0
0
0
0
0
1
1
0
0
0
0
0
1
0
0
0
0
0
0
0
1
0
1
0
0
0
0
0
1
1
0
0
0
0
0
0
1
1
1
0
0
0
0
1
0
0
0
0
0
0
0
1
0
0
1
0
1
0
1
1
0
1
0
0
0
0
0
1
0
1
1
0
1
0
1
1
1
0
0
0
0
0
0
1
1
0
1
0
1
1
1
1
1
1
0
1
0
0
1
1
1
1
1
1
1
1
1


## Página 74

Exercício
76
D Encontre a tabela  
verdade da expressão
• S = Ā+B+A.B.C’


## Página 75

Exercício
D Encontre a tabela  
verdade da expressão
• S = Ā+B+A.B.C’
S
77
A
B
C
Ā
C’
A.B.C’
0
0
0
1
1
0
0
1
1
0
0
1
0
1
1
0
1
1
1
0
1
0
0
0
1
1
0
1
0
0
1
1
0
0
1
1
1
1
0
0


## Página 76

Solução
78
D Encontre a tabela  
verdade da expressão
• S = Ā+B+A.B.C’
A
B
C
Ā
C’
A.B.C’
S
0
0
0
1
1
0
1
0
0
1
1
0
0
1
0
1
0
1
1
0
1
0
1
1
1
0
0
1
1
0
0
0
1
0
0
1
0
1
0
0
0
0
1
1
0
0
1
1
1
1
1
1
0
0
0
1


## Página 77

Exercício
79
D Montar a tabela verdade da expressão
•S = A.B.C + A.B’.C + A’.B’.C + A’.B’.C’


## Página 78

Exercício
80
D Montar a tabela verdade da expressão
•S = A.B.C + A.B’.C + A’.B’.C + A’.B’.C’
A
B
C
A’
B’
C’
A.B.C
A.B’.C
A’.B’.C
A’.B’.C’
S
0
0
0
1
1
1
0
0
1
1
1
0
0
1
0
1
0
1
0
1
1
1
0
0
1
0
0
0
1
1
1
0
1
0
1
0
1
1
0
0
0
1
1
1
1
0
0
0


## Página 79

Solução
81
D Montar a tabela verdade da expressão
•S = A.B.C + A.B’.C + A’.B’.C + A’.B’.C’
A
B
C
A’
B’
C’
A.B.C
A.B’.C
A’.B’.C
A’.B’.C’
S
0
0
0
1
1
1
0
0
0
1
1
0
0
1
1
1
0
0
0
1
0
1
0
1
0
1
0
1
0
0
0
0
0
0
1
1
1
0
0
0
0
0
0
0
1
0
0
0
1
1
0
0
0
0
0
1
0
1
0
1
0
0
1
0
0
1
1
1
0
0
0
1
0
0
0
0
0
1
1
1
0
0
0
1
0
0
0
1


## Página 80

Equivalência de Expressões  
Booleanas por Tabela Verdade
82
D Sejam S1 e S2 duas expressões booleanas
D S1 e S2 são equivalentes se e somente se para  
todas as interpretações possíveis (linhas) na  
tabela verdade ocorre S1=S2
D Se S1≠S2 em pelo menos uma interpretação,  
então S1 e S2 não são equivalentes


## Página 81

Exercício
83
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = A
• S2 = A.(A+B)
A
B
A+B
S1
S2
0
0
0
1
1
0
1
1


## Página 82

Solução
84
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = A
• S2 = A.(A+B)
D
Como S1=S2 em todas as  
interpretações possíveis na  
tabela verdade, as expressões  
são equivalentes
• A.(A+B) = A
D
Como veremos mais adiante,  
esta é uma propriedade,  
conhecida como absorção
A
B
A+B
S1
S2
0
0
0
0
0
0
1
1
0
0
1
0
1
1
1
1
1
1
1
1


## Página 83

Exercício
85
D
Verifique, usando tabela 
verdade, se as expressões S1,  
S2, S3 são equivalentes entre  
si
• S1 = A
• S2 = A.(1 + B)
• S3 = A + A.B
A
B
1+B
A.B
S1
S2
S3
0
0
0
1
1
0
1
1


## Página 84

Solução
86
D
Verifique, usando tabela 
verdade, se as expressões S1,  
S2, S3 são equivalentes entre  
si
• S1 = A
• S2 = A.(1 + B)
• S3 = A + A.B
D
Como S1=S2=S3 em todas as  
interpretações possíveis na  
tabela verdade, as expressões  
são equivalentes
• A + A.B = A.(1+B) = A
D
Como veremos mais adiante,  
esta é uma propriedade,  
conhecida como absorção
A
B
1+B
A.B
S1
S2
S3
0
0
1
0
0
0
0
0
1
1
0
0
0
0
1
0
1
0
1
1
1
1
1
1
1
1
1
1


## Página 85

Exercício
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = A.(B + C)
• S2 = A.B + A.C
A
B
C
B+C
A.B
A.C
S1
S2
0
0
0
0
0
1
0
1
0
0
1
1
1
0
0
1
0
1
1
1
0
1
1
1
87


## Página 86

Solução
88
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = A.(B + C)
• S2 = A.B + A.C
D
Como S1=S2 em todas as  
interpretações possíveis na  
tabela verdade, as expressões  
são equivalentes
• A.(B + C) = A.B + A.C
D
Como veremos mais adiante,  
esta é a propriedade 
distributiva da multiplicação  
booleana
A
B
C
B+C
A.B
A.C
S1
S2
0
0
0
0
0
0
0
0
0
0
1
1
0
0
0
0
0
1
0
1
0
0
0
0
0
1
1
1
0
0
0
0
1
0
0
0
0
0
0
0
1
0
1
1
0
1
1
1
1
1
0
1
1
0
1
1
1
1
1
1
1
1
1
1


## Página 87

Exercício
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = A+(B.C)
• S2 = (A+B) . (A+C)
A
B
C
B.C
A+B
A+C
S1
S2
0
0
0
0
0
1
0
1
0
0
1
1
1
0
0
1
0
1
1
1
0
1
1
1
89


## Página 88

Solução
90
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = A+(B.C)
• S2 = (A+B) . (A+C)
D
Como S1=S2 em todas as  
interpretações possíveis na  
tabela verdade, as expressões  
são equivalentes
• A+(B.C) = (A+B) . (A+C)
D
Como veremos mais adiante,  
esta é a propriedade 
distributiva da adição  
booleana
A
B
C
B.C
A+B
A+C
S1
S2
0
0
0
0
0
0
0
0
0
0
1
0
0
1
0
0
0
1
0
0
1
0
0
0
0
1
1
1
1
1
1
1
1
0
0
0
1
1
1
1
1
0
1
0
1
1
1
1
1
1
0
0
1
1
1
1
1
1
1
1
1
1
1
1


## Página 89

Exercício
91
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = (Ā.B)
• S2 = (A.B)’
A B
A’
B’
A.B
S1
S2
0 0
0 1
1 0
1 1


## Página 90

Solução
92
D
Verifique, usando tabela 
verdade, se as expressões S1  
e S2 são equivalentes
• S1 = (Ā.B)
• S2 = (A.B)’
D
Como S1≠S2 em pelo menos  
uma interpretação (de fato, em  
2 das 4 possíveis) na tabela  
verdade, as expressões não  
são equivalentes
D
Portanto,
• (Ā.B) ≠(A.B)’
A B
A’
B’
A.B
S1
S2
0 0
1
1
0
1
1
0 1
1
0
0
0
1
1 0
0
1
0
0
1
1 1
0
0
1
0
0


## Página 91

Resumo de Algumas Propriedades  
provadas por Tabelas Verdade
93
DAbsorção
• A + (A.B) = A
• A . (A+B) = A
DDistributiva
• A.(B+C) = A.B + A.C
• A+(B.C) = (A+B) . (A+C)


## Página 92

Obtendo a Tabela Verdade a  
partir de um Circuito
94
D De forma análoga, é possível estudar o  
comportamento de um circuito por meio da  
sua tabela verdade
D Dado um circuito, é necessário extrair sua  
expressão característica; a partir dela é  
possível montar a tabela verdade  
correspondente


## Página 93

Exemplo
D A partir do circuito:
S
95
A
B
B
C


## Página 94

Exemplo
D A partir do circuito:
D Extraímos sua expressão característica
•S = (A+B) . (B.C)
S=(A+B).(B.C)’
A
B
B
C
(A+B)
(B.C)’
96


## Página 95

Exemplo
D A partir da expressão
• S = (A+B) . (B.C)
D Obtém-se a tabela  
verdade, como  
anteriormente  
explicado
A
B
C
A+B
B.C
(B.C)’
S
0
0
0
0
0
1
0
0
0
1
0
0
1
0
0
1
0
1
0
1
1
0
1
1
1
1
0
0
1
0
0
1
0
1
1
1
0
1
1
0
1
1
1
1
0
1
0
1
1
1
1
1
1
1
0
0
97


## Página 96

Equivalência de Blocos Lógicos
98
D Qualquer bloco lógico básico pode ser obtido utilizando 
outro bloco qualquer e inversores
D Inversores podem ser obtidos a partir de portas NAND e
NOR
D Veremos a seguir essas equivalências entre  
determinados blocos
D Tais equivalências podem ser provadas pela tabelas 
verdades correspondentes da seguinte forma
• Seja S1 a expressão característica do primeiro bloco B1
• Seja S2 a expressão característica do segundo bloco B2
• Se para todas as interpretações possíveis de B1 e B2, sempre  
ocorrer que S1=S2, então B1 é equivalente a B2


## Página 97

Inversor a partir de porta NAND
D Inversor
D Ao interligar as  
entradas de uma porta  
NAND, obtém-se um  
inversor
A
S=Ā
A
B
S=Ā
A
S
0
1
1
0
A B
S
0 0
0 1
1 0
1 1
1
1
1
0
A
B
S=A.B
A B
S
0 0
1 1
1
0
Note que, para cada  
interpretação  
possível, os  
resultados são  
equivalentes
99


## Página 98

Inversor a partir de porta NOR
D Inversor
D Ao interligar as  
entradas de uma porta  
NOR, obtém-se um  
inversor
A
S=Ā
A
S
0
1
1
0
A B
S
0 0
0 1
1 0
1 1
1
0
0
0
A B
S
0 0
1 1
1
0
A
B
S=Ā
A
B
S=A+B
100


## Página 99

Porta NOU a partir de porta E e  
inversores
D Porta NOU
B
D Porta E e inversores
Ā
A
B
A
B
S
A
B
S=A+B
A B
Ā
B
S
A
B
S=A+B
0 0
1
1
1
0
0
1
0 1
1
0
0
0
1
0
1 0
0
1
0
1
0
0
1 1
0
0
0
1
1
0
101


## Página 100

Equivalência de Blocos Lógicos
102
D De maneira similar, a equivalência entre os  
blocos mostrados a seguir pode ser  
verificada


## Página 101

Blocos Lógicos Equivalentes
Nome
Bloco Lógico
Bloco Equivalente
AND
NAND
OR
NOR
A
B
S=A.B
A
B
S=A+B
A
B
S=A.B
A
B
A
S=A+B
B
S=Ā.B
A
B
S=(Ā+B)
A
B
S=Ā+B
A
B
S=(Ā.B)
103


## Página 102

Exercício
D Prove, usando tabela verdade, que os  
seguintes blocos lógicos são equivalentes
A
B
S1=A+B
A
B
S2=(Ā.B)
104


## Página 103

Solução
A
B
Ā
B
Ā.B
S1=
A+B
S2=
Ā.B
0
0
1
1
1
0
0
0
1
1
0
0
1
1
1
0
0
1
0
1
1
1
1
0
0
0
1
1
A
B
S1=A+B
A
B
S2=(Ā.B)
≡
105
