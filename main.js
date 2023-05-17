

//Inicio do programa //Variaveis

//Variaveis normais
var texto,escolha,nome,randS,atkRand,classe,reset,lvlHeroi = 99

//Arraylist nome npc
var npcNick = new Array("Nathley","Navid","Tadon","Cynri","Ven")

//Arraylist com os hps em geral
var hp = {miniBoss:850, boss:1000, secretBoss:750,hpHeroi:1500, pot:375}

//Arraylist com os nomes dos monstros e dos herois
var nomeMonstros = new Array("Dragão Zeru","Black Abishai - Rei demonio","Gashagr - Lider dos Orcs")
var nomeHeroi = new Array(null,"Mago","Guerreiro","Arqueiro")

//Arraylist dos itens
var pots = {magoPot: 2,guerreiroPot: 5,arqueiroPot: 1}
var armas = {magoArma:"Cajado encantado",guerreiroArma:"Espada encantada",arqueiroArma:"Arco 'encantado'"}

//Função para criar as opções de combate
function options(){
    if(hp["hpHeroi"] > 0){
        var i = 0
        while(i <= 5){
            i++
        }
        alert("["+(i - 5)+"]" + "Atacar\n"+ "["+(i - 4)+"]"+ "Ver inventario\n" + "["+(i - 3)+"]" + "Status\n"+ "["+(i - 2)+"]" +"Fugir")
        return escolha = prompt("O que vai fazer?");
    }else{
        return false;
        //Mensagem pro heroi morto
    }
}

//Função para gerar randomicamente os valores de atk/block
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

//Função para arredondar valor decimal para inteiro
function arredondar(x){
    return Math.round(x)
}

function bonus(){
    if(classe == 1){
        if(limitAtk < 6){
            limitAtk = 6;
            pots["magoPot"] += 2;
        }
    }else if(classe == 2){
        if(limitAtk < 3){
            limitAtk = 3; 
            pots["guerreiroPot"] += 2;
        }
    }else{
        if(limitAtk < 5){
            limitAtk = 5;
            pots["arqueiroPot"] += 2;
        }
    }
    limitAtk++;

    alert(`${nomeHeroi[classe]}, Matou o ${nomeMonstros[nMob]}!`)
    alert(`Bonus adquiridos: \n1x + ATK\n2x + Pots`)

}

//Sistema de ataque do heroi
function atkHeroi(){
    if(randS <= 6){
        atkRand = getRandomNumber(270,320);
        alert(`${nomeHeroi[classe]} Ataca: ` + atkRand + " Atk")
    }else if(randS <= 10){
        atkRand = getRandomNumber(320,543)
        alert(`${nomeHeroi[classe]} Ataca: ` + atkRand + " Atk")
    }else if(randS <= 13){  
        atkRand = getRandomNumber(543,857);
        alert(`${nomeHeroi[classe]} Ataca: ` + atkRand + " Atk");
    }else{
        atkRand = getRandomNumber(900,1200);
        alert(`${nomeHeroi[classe]} Ataca: ` + atkRand + " Atk/Critico");
    }
}

//Perda de hp do inimigo e informações da batalha
function perdaHpM(){
    if(nDef == "nBlock"){
        hp[hpMob] -= arredondar(atkRand);
        alert(`${nomeMonstros[nMob]} perdeu ${arredondar(atkRand)} hp`)
    }else if(nDef == "vintBlock"){
        hp[hpMob] -= arredondar(atkRand - (atkRand * 0.25));
        alert(`${nomeMonstros[nMob]} perdeu ${atkRand - (arredondar((atkRand * 0.25)))} hp`)
    }else if(nDef == "metadeBlock"){
        hp[hpMob] -= arredondar(atkRand/2);
        alert(`${nomeMonstros[nMob]} perdeu ${arredondar((atkRand/2))} hp`)
    }else if(nDef == "todoBlock"){
        alert(`${nomeMonstros[nMob]} perdeu 0 hp`)
    }
    if(hp[hpMob] > 0){
        if(atkRand < 900){
            if(nDef == "nBlock"){
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: ${arredondar(atkRand)} Atk`)
            }else if(nDef == "vintBlock"){
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: ${atkRand - (arredondar((atkRand * 0.25)))} Atk`)                
            }else if(nDef == "metadeBlock"){
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: ${arredondar((atkRand/2))} Atk`)
            }else if(nDef == "todoBlock"){
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: 0 Atk`)
            }
        }else{
            if(nDef == "nBlock"){
                alert(`Você conseguiu um critic.atk de ${atkRand} Dano.`)
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: ${arredondar(atkRand)} Atk/Critico`)
            }else if(nDef == "vintBlock"){
                alert(`Você conseguiu um critic.atk de ${atkRand - (arredondar((atkRand * 0.25)))} Dano.`)
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: ${atkRand - (arredondar((atkRand * 0.25)))} Atk/Critico`)                
            }else if(nDef == "metadeBlock"){
                alert(`Você conseguiu um critic.atk de ${arredondar((atkRand/2))} Dano.`)
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: ${(atkRand/2)} Atk/Critico`)
            }else if(nDef == "todoBlock"){
                alert(`Você conseguiu um critic.atk de ${arredondar((atkRand/2))} Dano.`)
                alert(`${nomeMonstros[nMob]} Hp: ${hp[hpMob]}, Seu Dano: 0 Atk/Critico`)
            }
        }
    }else{
        alert(`${nomeMonstros[nMob]} derrotado!`)
    }
}

//Sistema de ataque do monstro
function atkMonster(){
    if(randM <= 6){
        atkM = getRandomNumber(150,220);
        alert(`${nomeMonstros[nMob]} Ataca: ` + atkM + " Atk")
    }else if(randM <= 9){
        atkM = getRandomNumber(220,383)
        alert(`${nomeMonstros[nMob]} Ataca: ` + atkM + " Atk")
    }else if(randM <= 13){  
        atkM = getRandomNumber(383,557);
        alert(`${nomeMonstros[nMob]} Ataca: ` + atkM + " Atk");
    }else{
        atkM = getRandomNumber(710,940);
        alert(`${nomeMonstros[nMob]} Ataca: ` + atkM + " Atk/Critico");
    }
}

//Perda de hp do heroi
function perdaHpH(){
    alert(`${nomeHeroi[classe]} perdeu ${atkM} hp`)
    hp["hpHeroi"] -= arredondar(atkM);   
    if(hp["hpHeroi"] > 0){
        if(atkM < 710){
            alert(`${nomeHeroi[classe]} Hp: ${hp["hpHeroi"]}, Dano Recebido: ${atkM} Atk`)
        }else{
            alert(`${nomeMonstros[nMob]} conseguiu um critic.atk de ${atkM} Dano.`)
            alert(`${nomeHeroi[classe]} recebeu um Dano Critico!`)
            alert(`${nomeHeroi[classe]} Hp: ${hp["hpHeroi"]}, Dano Recebido: ${atkM} Atk/Critico`)
        }
    }else{
        alert(`${nomeHeroi[classe]} derrotado!`)
        alert("Game over!")
    }
}

//Sistema de bloqueio do monstro
function blkMonster(){
    alert(`Chance de bloqueio do ${nomeMonstros[nMob]}!`)
    if(randDM <= 6){
        defM = getRandomNumber(150,220);
        alert(`${nomeMonstros[nMob]}: ` + " Não conseguiu bloquear!")
        nDef = "nBlock"
    }else if(randDM <= 9){
        defM = getRandomNumber(220,383)
        alert(`${nomeMonstros[nMob]}: ` + " Bloqueiou 25% do dano")
        nDef = "vintBlock"
    }else if(randDM <= 13){  
        defM = getRandomNumber(383,557);
        alert(`${nomeMonstros[nMob]}: ` + " Bloqueiou 50% do dano");
        nDef = "metadeBlock"
    }else{
        defM = getRandomNumber(710,940);
        alert(`${nomeMonstros[nMob]}: ` + " Bloqueiou todo o dano!");
        nDef = "todoBlock"
    }
}

//Sistema para continuar ou desistir da batalha
function chance(){
        alert(`Você tem a oção de desistir! O que quer fazer? `)
        ultimaEscolha = prompt("[1]Desistir\n[2]Continuar")
        if(ultimaEscolha == 1){
            alert(`Você desistiu de atacar o ${nomeMonstros[nMob]} e tentou correr, mas o monstro conseguiu te atacar...!`)
            alert("Você morreu!")
            alert("Game over!")
            return true;
        }else{
            return false;
             //Mensagem pro heroi morto
        }
}


//Função para gerar menu de batalha e Dano ao inimigo!
function battle(escolha){
    if(limitAtk > 0 && hp["hpHeroi"] > 0){
        if(escolha == 1){
                //Balanceamento do dano dos herois
            if(classe == 1){randS = getRandomNumber(4,15);
            }else if(classe == 2){randS = getRandomNumber(4,15);
            }else{randS = getRandomNumber(0,6)}
            atkHeroi();
            limitAtk--;
            alert(`Sua Quantidade de Ataques restantes é: ${limitAtk}x`)

            //Sistema de block do inimigo
                //Balanceamento do block no miniboss
            if(nMob == 0){randDM = getRandomNumber(6,15)
            }else{randDM = getRandomNumber(0, 15);}
            blkMonster()

            //Perda de hp do inimigo e informações da batalha
            perdaHpM();

            //Vez de ataque do monstro
            if(hp[hpMob] > 0){
                alert(`Vez do ${nomeMonstros[nMob]} Atacar!`)

                //Sistema de ataque do inimigo
                    //Balanceamento do dano dos monstros
                if(nMob == 0){randM = getRandomNumber(6,15);
                }else if(nMob == 1){randM = getRandomNumber(4,15);
                }else{randM = getRandomNumber(14,15)}
                
                if(hp["secretBoss"] < 500){
                    alert(`${nomeMonstros[nMob]} usou habilidade especial de cura!`)
                    alert(`${nomeMonstros[nMob]} recebeu 20000 hp!`)
                    hp["secretBoss"] += 20000;
                    alert(`${nomeMonstros[nMob]} hp:${hp["secretBoss"]}`)
                }
                atkMonster()

                //Perda de hp do heroi e informações da batalha
                perdaHpH();
            }

        }else if(escolha == 2){ //Inventario
            //Itens
            if(classe == 1){
                nHeroi = "Mago";
                nPot = "magoPot";
                if(pots["magoPot"] > 1){
                    alert(`${nomeHeroi[classe]} - Itens:\nArma: ${armas["magoArma"]}\n${pots["magoPot"]}x poções`)
                }else{
                    alert(`${nomeHeroi[classe]} - Itens:\nArma: ${armas["magoArma"]}\n${pots["magoPot"]}x poção`)
                }
            }else if(classe == 2){
                nHeroi = "Guerreiro"
                nPot = "guerreiroPot";
                if(pots["guerreiroPot"] > 1){
                    alert(`${nomeHeroi[classe]} - Itens:\nArma: ${armas["guerreiroArma"]}\n${pots["guerreiroPot"]}x poções`)
                }else{
                    alert(`${nomeHeroi[classe]} - Itens:\nArma: ${armas["guerreiroArma"]}\n${pots["guerreiroPot"]}x poção`)
                }
            }else if(classe == 3){
                nHeroi = "Arqueiro"
                nPot = "arqueiroPot";
                if(pots["arqueiroPot"] > 1){
                    alert(`${nomeHeroi[classe]} - Itens:\nArma: ${armas["arqueiroArma"]}\n${pots["arqueiroPot"]}x poções`)
                }else{
                    alert(`${nomeHeroi[classe]} - Itens:\nArma: ${armas["arqueiroArma"]}\n${pots["arqueiroPot"]}x poção`)
                }
            }

            //Sistema de cura
            if(pots[nPot] >= 1){
                if(pots[nPot] > 1){
                    alert(`Você possui ${pots[nPot]}x poções`)
                    if((pots[nPot] - 1) > 1){
                        usar = prompt(`Deseja usar 1 poção?\nvocê ficará com ${pots[nPot]-1}x poções\nDigite [1]Sim ou [2]Não`)
                    }else if((pots[nPot] - 1) == 1){
                        usar = prompt(`Deseja usar 1 poção?\nvocê ficará com 1x poção\nDigite [1]Sim ou [2]Não`)
                    }else{
                        usar = prompt(`Deseja usar 1 poção?\nvocê ficará com 0x poção\nDigite [1]Sim ou [2]Não`)
                    }
                }else if(pots[nPot] == 1){
                    alert(`Você possui ${pots[nPot]}x poção`)
                    usar = prompt(`Deseja usar 1 poção?\nvocê ficará com 0x poção\nDigite [1]Sim ou [2]Não`)
                    
                }

                if(usar == 1){
                    pots[nPot]-=1;
                    if(pots[nPot] > 2){
                        alert(`Sobrou ${pots[nPot]}x poções`)
                        hp["hpHeroi"] += hp["pot"];
                        alert(`${nomeHeroi[classe]} recuperou ${hp["pot"]} de hp`);
                    }else if(pots[nPot] >= 1){
                        alert(`Sobrou ${pots[nPot]}x poção`)
                        hp["hpHeroi"] += hp["pot"];
                        alert(`${nomeHeroi[classe]} recuperou ${hp["pot"]} de hp`);
                    }else if(pots[nPot] < 1){
                        alert(`Usou a ultima poção!`)
                        hp["hpHeroi"] += hp["pot"];
                        alert(`${nomeHeroi[classe]} recuperou ${hp["pot"]} de hp`);
                    }
                }

            }
        }else if(escolha == 3){ // Status
            alert(`Nome: ${nome} - Sua Classe: ${nomeHeroi[classe]}\nSeu HP: ${hp["hpHeroi"]} - Seu LVL: ${lvlHeroi}\nQuantidade de Ataques Restante: ${limitAtk}x`)
        }else if(escolha == 4){
            alert("Você tentou fugir, mas enquanto isso o monstro lhe atacou!")
            alert("Você morreu!")
            alert("Game over!")
        }
    }else{
        if(hp["hpHeroi"] > 0){
            alert(`Sua Quantidade de Ataques restantes é: ${limitAtk}x\nVez do ${nomeMonstros[0]}`)
           
            //Sistema de ataque do inimigo
            atkMonster(randM)

            //Perda de hp do Heroi e informações da batalha
            perdaHpH();

            //Desistir ou continuar
            chance()
        }else{
            return false;
            //Mensagem pro heroi morto
        }
    }
}


//NPC DIALOGO
function npc(nome, classe){
    alert("Um npc apareceu!")
    if(classe == 1){
        heroi = "Mago"
        nNpc = 0
    }else if(classe == 2){
        heroi = "Guerreio"
        nNpc = 1
    }else if(classe == 3){
        heroi = "Arqueiro"
        nNpc = 2
    }else{
        alert("Error 404!")
    }

    alert(`${npcNick[nNpc]}:\nOlá Sr. ${nome},${heroi}`)

    alert(`${npcNick[nNpc]}:\n${nome},${heroi}` + ",ultimamente nessa area tem ocorrido aparição de monstros bem fortes e estranhos com tendencias a violencia, quer andar por ai?")

    var acao = [[1],[2]] 

    acao = prompt(`Ir com ${npcNick[nNpc]}\n[1]sim\n[2]não`)

    if(acao == 1){
        alert(`Você foi com ${npcNick[nNpc]}`)
        alert("30 minutos depois....")
        alert("Mais para frente você encontra mais alguem!")   
    }else if (acao == 2){
        alert("Você seguiu em frente...")
        alert("30 minutos depois....")
        alert("Você encontra mais alguem!")
    }
}

function npc2(nome, classe){
    alert("Um npc apareceu!")
    alert(`${npcNick[3]}:\nOlá ${npcNick[nNpc]}, recentemente abri um restaurante.. que tal passar nele?}`)
    acao = [1,2]

    acao = prompt(`Ir com ${npcNick[nNpc]} e ${npcNick[3]} para o restaurante?\n[1]sim\n[2]não`)
    if(acao == 1){
        alert("Você entrou no restaurante e comeu ovo com farinha e um pãozin com manteiga!")
        alert(`${nomeHeroi[classe]} adquiriu 200 hp!`)
        hp["hpHeroi"] += 200;
        alert(`Hp: ${hp["hpHeroi"]}`)
    }else{
        alert(`${nomeHeroi[classe]} se separou de ${npcNick[nNpc]}`)
        alert("Você seguiu enfrente...")
        alert("30 minutos depois....")
        alert("Você encontra mais alguem!")
    }
}

function npc3(){
    alert("Uma pedra apareceu!")
    chutar = prompt("Você deseja chuta-la?\n[1]sim\n[2]não")
    if(chutar == 1){
        alert("Você chutou a pedra....")
        alert("E logo após isso....")
        alert("Seguiu em frente!")
    }else{
        alert("Você passou por ela!")
        alert("Recebeu 100 hp")
        hp["hpHeroi"] += 100;
        alert(`Hp: ${hp["hpHeroi"]}`)
    }
}

function npc4(nome, classe){
    var compra = [[1],[2]]
    alert("Um npc apareceu")
    alert(`${npcNick[4]}:\nOlá Sr. ${nome},${heroi}`)
    alert(`${npcNick[4]}:\nOlá, sou um mercado anadarilho\nVocê quer algo,tenho muitas opcões!`)
    alert("Itens:\nÁgua magica\n...\n...\n...") 
    compra = prompt("Deseja comprar algo?\n[1]sim\n[2]não")
    if (compra == 1) {
       alert("Você adiquiriu Água magica")
       alert("...")
       alert("Sem querer você deixa cair a Água magica")
       alert("O mercador foi embora!")
    } else if (compra == 2) {
        alert("O mercado foi embora!")
    }
}
function npc5(nome,classe){
    var animalf
    alert("Você viu algo a sua frente..")
    alert("Achou um animal ferido pelo caminho em uma armadilha")
    animalf = prompt("Você deseja ajudar?\n[1]sim\n[2]não")
    if(animalf == 1) {
        alert("Você ajudou o animal a sair da armadilha")
    }else if(animalf == 2) {
        alert("Você deixou o animal na armadilha e ele acabou morrendo")
    }
}
//Historia
texto = alert("Você apareceu em mundo mundo magico desconhecido baseado em um RPG onde deve escolher entre tres racas dentre as de mago,guerreiro ou um arqueiro")
        alert("1- Mago equipado com seu cajado magico e um livro de feitico, equipado com 6 ataques e 2 poções de saúde.");
        alert("2- Guerreiro equipado com uma espada e um escudo, equipado com 3 ataques e 5 pocoes de saude.");
        alert("3 -arqueiro equipado com um arco encantado da arovre sagrada,equipado com 5 ataques e 1 porcao ")

classe = prompt("Você tem escolha entre 1,2 e 3") 

//Escolha do personagem
if (classe == 1){
    alert("Mago encantador de feiticos poderosos,quais sao esses feiticos?");
    nome = prompt("Escolha seu nome.");
    alert(`${nome}` +", treinado por um dos melhores magos que ja existiu no mundo, Merlin o mago mais poderoso da historia");
    alert( "MAGO PASSOU ANOS DE TREINAMENTO COM O MERLIN ( O MAIS PODEROSO MAGO DA HISTORIA DURANTE OS 500 ANOS QUE TEVE ),o Black Abishai FOI UMA CRIATURA NASCIDA NA AREA DAS TREVAS ANTES DOS 120 d.t.OCORREU UMA GRANDE GUERRA ENTRE O REINO E A AREA DAS TREVAS QUE OCORREU NO PERIODO DE 342 d.tO Black Abishai FOI APRISONADO PELO REI WILSONZIN II DURANTE A GUERRRA DAS TREVAS NUMA MONTANHA ENFEITIÇADA.DESDE ENTÃO ELA VEIO PERDENDO FORÇA E PARA QUE O Black Abishai NÃO SEJA LIBERTADO E QUE POSSA COMEÇAR UMA GUERRA NOVAMENTE.OS 3 GUERREIROS TEM QUE DERROTA-LO ANTES QUE CAIA A BARREIRA.")
    npc(nome, classe) //Sistema de NPC
    npc2(nome,classe) //Sistema de NPC
    npc3(nome,classe)//só uma pedra
    npc4(nome,classe)//mercador
    npc5(nome,classe)//animalzin
    alert(`1 hora de caminhada....\nVocê entra na montanha!\nChegando no final você encontra um grupo de guerreiros,magos e alguns arqueiros!`)
    alert(`${nomeHeroi[classe]} Entrou na zona de combate!`)
    alert("Apareceu um monstro!") //Battle inicia
    limitAtk = 6;
    nMob = 0;
    hpMob = "miniBoss"
    while(hp[hpMob] > 0){
        options()
        battle(escolha) //Sistema de batalha
        if(escolha == 4 || hp["hpHeroi"] <= 0){break}
    }
    if(hp[hpMob] < 0){
        bonus();//reset de limit + msg de bonus
    }
    if(hp["hpHeroi"] > 0){
        alert(`Logo após isso aparece um circulo de magia embaixo do corpo do ${nomeMonstros[nMob]}...`)
        alert(`O corpo do ${nomeMonstros[nMob]} some...\n*A sala fica escura*\n10 minutos se passaram\n*A sala fica mais clara*\nVocê vê algo no meio do circulo!`)
        alert(`${nomeHeroi[classe]} Entrou na zona de combate!`)
        alert("Apareceu um monstro!") //Battle inicia
        nMob = 1;
        hpMob = "boss"
        while(hp[hpMob] > 0){
            options()
            battle(escolha) //Sistema de batalha
            if(escolha == 4 || hp["hpHeroi"] <= 0){break}
        }
        alert(`Parabéns ${nome}.`) // MENSAGEM FINAL
        alert("Você concluiu o jogo!\nPressione alt + f4 para sair do jogo.")
    }
}else if(classe == 2){
    alert("Guerreiro rapido entre seus golpes com a espada e defesa de seu escudo de aco");
    nome =  prompt("escolha seu nome.");
    alert(`${nome}` + ",um crianca desconhecido que foi pega pelo rei bem novo para praticas militares,vulgo Rei Arthur detentor de umas das espadas mais fortes ja feita")
    npc(nome, classe) //Sistema de NPC
    npc2(nome,classe) //Sistema de NPC
    npc3(nome,classe)//só uma pedra
    npc4(nome,classe)//mercador
    npc5(nome,classe)//animalzin
    alert(`1 hora de caminhada....\nVocê entra na montanha!\nChegando no final você encontra um grupo de guerreiros,magos e alguns arqueiros!`)
    alert(`${nomeHeroi[classe]} Entrou na zona de combate!`)
    alert("Apareceu um monstro!") //Battle inicia
    limitAtk = 3;
    nMob = 0;
    hpMob = "miniBoss"
    while(hp[hpMob] > 0){
        options()
        battle(escolha) //Sistema de batalha
        if(escolha == 4 || hp["hpHeroi"] <= 0){break}
    }
    if(hp[hpMob] < 0){
        bonus();//reset de limit + msg de bonus
    }
    if(hp["hpHeroi"] > 0){
        alert(`Logo após isso aparece um circulo de magia embaixo do corpo do ${nomeMonstros[nMob]}...`)
        alert(`O corpo do ${nomeMonstros[nMob]} some...\n*A sala fica escura*\n10 minutos se passaram\n*A sala fica mais clara*\nVocê vê algo no meio do circulo!`)
        alert(`${nomeHeroi[classe]} Entrou na zona de combate!`)
        alert("Apareceu um monstro!") //Battle inicia
        nMob = 1;
        hpMob = "boss"
        while(hp[hpMob] > 0){
            options()
            battle(escolha) //Sistema de batalha
            if(escolha == 4 || hp["hpHeroi"] <= 0){break}
        }
        alert(`Parabéns ${nome}.`) // MENSAGEM FINAL
        alert("Você concluiu o jogo!\nPressione alt + f4 para sair do jogo.")
    }
}else if (classe == 3){
    alert("Arqueiro do clan dos elfo milenares,treinado por 500 anos pelo elfo mais forte")
    nome = prompt("digite seu nome.")
    alert(`${nome}` + " um arqueiro em formacao que esta em busca de um grande feito")
    npc(nome, classe) //Sistema de NPC
    npc2(nome,classe) //Sistema de NPC
    npc3(nome,classe)//só uma pedra
    npc4(nome,classe)//mercador
    npc5(nome,classe)//animalzin
    alert(`1 hora de caminhada....\nVocê entra na montanha!\nChegando no final você encontra uma porta selada!\nVocê consegue abrir a porta..`)
    alert("Você entra num salão gigante!\n*A porta se fecha*...")
    alert(`${nomeHeroi[classe]} Entrou na zona de combate!`)
    alert("Apareceu um monstro!") //Battle inicia
    limitAtk = 5;
    nMob = 2;
    hpMob = "secretBoss"
    while(hp[hpMob] > 0){
        options()
        battle(escolha) //Sistema de batalha
        if(escolha == 4 || hp["hpHeroi"] <= 0){break}
    }
}