// funções do jogo do milhão

function jogoPrincipal(){
    // variável que guarda a saída do HTML
    const jogo = []

    // foreach no array que contém os objetos pergunta&respostas
    perguntas.forEach(
        (perguntaAtual,numeroPergunta) =>{
            // variável que guarda as possíveis respostas
            const respostas = []

            // radio button para cada uma das respostas da perguntaAtual
            for(letra in perguntaAtual.respostas){
                respostas.push(
                    `<label>
                        <input type="radio" name="pergunta${numeroPergunta}"
                        value="${letra}" />
                        ${letra} - 
                        ${perguntaAtual.respostas[letra]}
                    </label>`
                )
            }
            // adicionando a pergunta e suas respostas  para o array 'jogo'
            jogo.push(
            `<div class="slide">
                <div class="pergunta">${perguntaAtual.pergunta}</div>
                <div class="respostas">${respostas.join('')}</div>
            </div>` 
            )
        }
    )
    // colocando o array jogo no innerHTML do jogoMilhao
    jogoMilhao.innerHTML = jogo.join('')
}

function mostrarResultados(){
    // pegando todas  as respostas
    const respostas = jogoMilhao.querySelectorAll('.respostas')

    // variável para guardar a pontuação do usuário
    let pontos = 0 

    let msg = ''

    perguntas.forEach(
        (perguntaAtual,numeroPergunta) => {
            // identificando a resposta correta

            const resposta = respostas[numeroPergunta] 
            // criando seletor css com a resposta do usuário
            const seletor = `input[name=pergunta${numeroPergunta}]:checked`
            // resposta do usuário
            const resposta_usuario = (resposta.querySelector(seletor)||{}).value
            
            // se a resposta for correta...
            if(resposta_usuario === perguntaAtual.resposta_certa){
                pontos = pontos+perguntaAtual.valor
                respostas[numeroPergunta].style.color = 'green'
                msg = 'Resposta Correta'
            }
            else if(resposta_usuario){
                respostas[numeroPergunta].style.color = 'goldenrod'
                if(resposta_usuario){
                    respostas[numeroPergunta].style.color = 'red'
                    msg = 'Resposta Errada'
                }
            } 
        }
    )
    // mostrando a pontuação para o usuário
    resultados.innerHTML = `<span>${pontos} pontos!</span> 
    <span id="mensagem">${msg}</span>`
}


function mostrarSlides(numero){
    slides[slideAtual].classList.remove('active-slide')
    slides[numero].classList.add('active-slide')
    slideAtual = numero

    if(slideAtual === slides.length-1){
        proximo.style.display = 'none'
        checkBtn.style.display = 'inline-block'
    }
    else{
        proximo.style.display = 'inline-block'
        checkBtn.style.display = 'inline-block'
    }
}

function proximoSlide(){
    mostrarSlides(slideAtual+1)
}


// variáveis do jogo do milhão
const jogoMilhao = document.getElementById('jogomilhao')
const resultados = document.getElementById('resultados')
const checkBtn = document.getElementById('checkbtn')


// array contendo os objetos perguntas&respostas
const perguntas = [
    {
        pergunta: 'Qual a capital do Mato Grosso do Sul?',
        respostas: {
            a: 'salvador',
            b: 'recife',
            c: 'campo grande',
            d: 'cuiabá'
        },
        resposta_certa: 'c',
        valor: 1000
    },
    {
        pergunta: 'Quantos estados tem o Brasil?',
        respostas: {
            a: 'vinte e cinco',
            b: 'vinte e seis',
            c: 'vinte e sete',
            d: 'vinte e oito'
        },
        resposta_certa: 'b',
        valor: 1000
    },
    {
        pergunta: 'Em qual continente fica localizado o Panamá',
        respostas: {
            a: 'Europa',
            b: 'ásia',
            c: 'áfrica',
            d: 'américa central'
        },
        resposta_certa: 'd',
        valor: 2000
    },
    {
        pergunta : 'Quantos Oceanos tem no planeta Terra?',
        respostas: {
            a: '4',
            b: '5',
            c: '6',
            d: '3'
        },
        resposta_certa: 'b',
        valor: 5000
    },
    {
        pergunta : 'Qual a fórmula química da água',
        respostas: {
            a: '2HO',
            b: 'H2O',
            c: 'O2H2',
            d: 'H2O2'
        },
        resposta_certa: 'b',
        valor: 10000
    },
    {
        pergunta: 'Em que País Europeu fica a cidade de Praga',
        respostas: {
            a: 'Rússia',
            b: 'Luxemburgo',
            c: 'República Tcheca',
            d: 'Croácia'
        },
        resposta_certa: 'c',
        valor: 20000
    },
    {
        pergunta: 'Quantos meses possuem 30 dias?',
        respostas: {
            a: '5',
            b: '7',
            c: '3',
            d: '4'
        },
        resposta_certa: 'd',
        valor: 20000
    },
    {
        pergunta: 'Em que país nasceu o escritor Liev Tolstói',
        respostas: {
            a: 'Alemanha',
            b: 'Rússia',
            c: 'Espanha',
            d: 'Dinamarca'
        },
        resposta_certa: 'b',
        valor: 50000
    },
    {
        pergunta: 'Quantos são os pontos cardeais e colaterais?',
        respostas: {
            a: '8',
            b: '6',
            c: '9',
            d: '7'
        },
        resposta_certa: 'a',
        valor: 50000
    },
    {
        pergunta: 'O Baobá é uma árvore originária da...',
        respostas: {
            a: 'América do Sul',
            b: 'Oceania',
            c: 'Ásia',
            d: 'África'
        },
        resposta_certa: 'd',
        valor: 100000
    },
    {
        pergunta: 'O povo Maori é nativo de qual país?',
        respostas: {
            a: 'Bolívia',
            b: 'México',
            c: 'Índia',
            d: 'Nova Zelândia'
        },
        resposta_certa: 'd',
        valor: 200000
    },
    {
        pergunta: 'Quem escreveu a obra "Triste fim de Policarpo Quaresma"?',
        respostas: {
            a: 'Lima Barreto',
            b: 'Machado de Assis',
            c: 'Castro Alves',
            d: 'Carlos Drummond de Andrade'
        },
        resposta_certa: 'a',
        valor: 200000
    },
    {
        pergunta: 'Liquefação, é a passagem do estado:',
        respostas: {
            a: 'Líquido para o Gasoso',
            b: 'Gasoso para o Líquido',
            c: 'Sólido para o Gasoso',
            d: 'Líquido para o Sólido'
        },
        resposta_certa: 'b',
        valor: 500000
    },
    {
        pergunta: 'Qual instrumento mede a altitude do Sol e outros corpos celestes?',
        respostas: {
            a: 'Oscilômetro',
            b: 'magnetômetro',
            c: 'Sextante',
            d: 'Odômetro'
        },
        resposta_certa: 'c',
        valor: 1000000
    }
]

// executando a função do jogo...
jogoPrincipal()


// paginação
const proximo = document.getElementById('proximobtn')
const slides = document.querySelectorAll('.slide')
let slideAtual = 0

// função de slides
mostrarSlides(slideAtual)

// adicionando event listeners aos botões
checkBtn.addEventListener('click',mostrarResultados)
proximo.addEventListener('click',proximoSlide)


