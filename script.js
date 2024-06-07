const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e audios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Isso é maravilhoso!"
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Articial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que voce escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude voce toma? ",
        alternativas: [ 
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debatwe entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: cmo a IA impacta o trabalho do futuro. Nesse debate, como voce se pisiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Me preocupo com as pessoas que perderao seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Ao final da discussão, voce precisou criar uma imagem no computador que representasse o que pensa sobre a IA. E agora?",
        alternativas: [ 
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmacao"
        }
        {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA."
                afirmacao: "afirmacao"
        }
            
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalgho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afiramacao: "afirmacao"
            }
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é prteciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
                afirmacao: "afirmacao"
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPerguntas();
