let level = '';
let currentQuestionIndex = 0;
let currentStep = 0;


const questions = {
    fácil: [
        {
            question: "Deriva \\(f(x) = (x+1)^2\\)",
            steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada externa?",
                    options: ["\\(2(x+1)\\)", "\\(2x\\)", "\\((x+1)^2\\)"],
                    correct: "\(2(x+1)\)",
                    tips: ["Piensa en la derivada de una función cuadrática.", "No olvides el exponente.", "Revisa la regla de la potencia."]
                },
                {
                    question: "Paso 2: ¿Cuál es la derivada interna?",
                    options: ["\\(1\\)", "\\(2\\)", "\\(x\\)"],
                    correct: "\(1\)",
                    tips: ["Considera la derivada del argumento (x+1).", "Recuerda la derivada de una constante.", "¿Qué pasa cuando derivas x+1?"]
                },
                {
                    question: "Paso 3: ¿Cuál es el resultado final?",
                    options: ["\\(2(x+1) * 1\\)", "\\(2x\\)", "\\((x+1)^2\\)"],
                    correct: "\(2(x+1) * 1\)",
                    tips: ["Combina la derivada externa e interna.", "Revisa tus respuestas anteriores.", "Aplica la regla de la cadena."]
                }
            ]



            
        },

        {
            question: "Deriva \\(f(x) = (2x-3)^3\\)",
            steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada externa?",
                    options: ["\\(3(2x-3)\\)", "\\(6x\\)", "\\((2x-3)^3\\)"],
                    correct: "\(3(2x-3)\)",
                    tips: ["Piensa en la derivada de una función cúbica.", "No olvides el exponente.", "Revisa la regla de la potencia."]
                },
                {
                    question: "Paso 2: ¿Cuál es la derivada interna?",
                    options: ["\\(2\\)", "\\(3\\)", "\\(2x\\)"],
                    correct: "\(2\)",
                    tips: ["Considera la derivada del argumento (2x-3).", "Recuerda la derivada de una constante.", "¿Qué pasa cuando derivas 2x-3?"]
                },
                {
                    question: "Paso 3: ¿Cuál es el resultado final?",
                    options: ["\\(3(2x-3) * 2\\)", "\\(6x\\)", "\\((2x-3)^3\\)"],
                    correct: "\(3(2x-3) * 2\)",
                    tips: ["Combina la derivada externa e interna.", "Revisa tus respuestas anteriores.", "Aplica la regla de la cadena."]
                }
            ]
        },

        {
            question: "Deriva \\(f(x) = sin(3x)\\)",
            steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada externa?",
                    options: ["\\(cos(3x)\\)", "\\(-sin(3x)\\)", "\\(3x\\)"],
                    correct: "\(cos(3x)\)",
                    tips: ["Piensa en la derivada de la función seno.", "No olvides cambiar seno a coseno.", "Revisa la regla de la cadena."]
                },
                {
                    question: "Paso 2: ¿Cuál es la derivada interna?",
                    options: ["\\(3\\)", "\\(x\\)", "\\(1\\)"],
                    correct: "\(3\)",
                    tips: ["Considera la derivada del argumento 3x.", "Recuerda la derivada de x.", "¿Qué pasa cuando derivas 3x?"]
                },
                {
                    question: "Paso 3: ¿Cuál es el resultado final?",
                    options: ["\\(cos(3x) * 3\\)", "\\(-sin(3x)\\)", "\\(3x\\)"],
                    correct: "\(cos(3x) * 3\)",
                    tips: ["Combina la derivada externa e interna.", "Revisa tus respuestas anteriores.", "Aplica la regla de la cadena."]
                }
            ]
        }

    ],
    medio: [
        {
        question: "Deriva \\(f(x) = (x^2 + 2x - 1)^2\\)",
        steps: [
            {
                question: "Paso 1: ¿Cuál es la derivada externa?",
                options: ["\\(2(x^2 + 2x - 1)\\)", "\\(4x\\)", "\\((x^2 + 2x - 1)^2\\)"],
                correct: "\(2(x^2 + 2x - 1)\)",
                tips: ["Piensa en la derivada de una función cuadrática.", "No olvides el exponente.", "Revisa la regla de la potencia."]
            },
            {
                question: "Paso 2: ¿Cuál es la derivada interna?",
                options: ["\\(2x + 2\\)", "\\(x + 1\\)", "\\(2x - 1\\)"],
                correct: "\(2x + 2\)",
                tips: ["Considera la derivada del argumento (x^2 + 2x - 1).", "Recuerda la derivada de una constante.", "¿Qué pasa cuando derivas x^2 + 2x - 1?"]
            },
            {
                question: "Paso 3: ¿Cuál es el resultado final?",
                options: ["\\(2(x^2 + 2x - 1) * (2x + 2)\\)", "\\(4x\\)", "\\((x^2 + 2x - 1)^2\\)"],
                correct: "\(2(x^2 + 2x - 1) * (2x + 2)\)",
                tips: ["Combina la derivada externa e interna.", "Revisa tus respuestas anteriores.", "Aplica la regla de la cadena."]
            } 
            ] 
        },

        {
            question: "Deriva \\(f(x) = (1/2 * x^2 + 3/4 * x - 1/3)^3\\)",
            steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada externa?",
                    options: [
                        "\\(3(1/2 * x^2 + 3/4 * x - 1/3)^2\\)",
                        "\\(6x\\)",
                        "\\((1/2 * x^2 + 3/4 * x - 1/3)^3\\)"
                    ],
                    correct: "\(3(1/2 * x^2 + 3/4 * x - 1/3)^2\)",
                    tips: [
                        "Piensa en la derivada de una función cúbica.",
                        "No olvides el exponente.",
                        "Revisa la regla de la potencia."
                    ]
                },
                {
                    question: "Paso 2: ¿Cuál es la derivada interna?",
                    options: [
                        "\\(x + 3/4\\)",
                        "\\(x + 2\\)",
                        "\\((1/2 * 2x + 3/4)\\)"
                    ],
                    correct: "\(x + 3/4\)",
                    tips: [
                        "Considera la derivada del argumento (1/2 * x^2 + 3/4 * x - 1/3).",
                        "Recuerda la derivada de una constante.",
                        "¿Qué pasa cuando derivas (1/2 * x^2)?"
                    ]
                },
                {
                    question: "Paso 3: ¿Cuál es el resultado final?",
                    options: [
                        "\\(3(1/2 * x^2 + 3/4 * x - 1/3)^2 * (x + 3/4)\\)",
                        "\\(3(1/2 * x^2 + 3/4 * x - 1/3)\\)",
                        "\\(6x * (x + 3/4)\\)"
                    ],
                    correct: "\(3(1/2 * x^2 + 3/4 * x - 1/3)^2 * (x + 3/4)\)",
                    tips: [
                        "Combina la derivada externa e interna.",
                        "Revisa tus respuestas anteriores.",
                        "Aplica la regla de la cadena."
                    ]
                }
            ]
        },

        {
            question: "Deriva \\(f(x) = sin(x^2)\\)",
            steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada externa?",
                    options: ["\\(cos(x^2)\\)", "\\(2x\\)", "\\(-sin(x^2)\\)"],
                    correct: "\(cos(x^2)\)",
                    tips: [
                        "Considera la derivada de sin(u) donde u es una función de x.",
                        "No olvides la regla de la cadena.",
                        "Recuerda la derivada de la función seno."
                    ]
                },
                {
                    question: "Paso 2: ¿Cuál es la derivada interna?",
                    options: ["\\(2x\\)", "\\(x\\)", "\\(cos(x)\\)"],
                    correct: "\(2x\)",
                    tips: [
                        "Considera la derivada del argumento x^2.",
                        "Aplica la regla de la potencia.",
                        "¿Qué pasa cuando derivas x^2?"
                    ]
                },
                {
                    question: "Paso 3: ¿Cuál es el resultado final?",
                    options: ["\\(cos(x^2) * 2x\\)", "\\(2x\\)", "\\(-sin(x^2) * 2x\\)"],
                    correct: "\(cos(x^2) * 2x\)",
                    tips: [
                        "Combina la derivada externa e interna.",
                        "Revisa tus respuestas anteriores.",
                        "Aplica la regla de la cadena."
                    ]
                }
            ]
        }

    ],
    difícil: [
        {
            question: "Deriva \\( f(x) = \\sqrt{(x^2 + 2x + 1)} \ * \\sqrt{(x + 1)} \\)",
            steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada de sqrt(x^2 + 2x + 1)?",
                    options: [
                        "\\(1 / (2\\sqrt{(x^2 + 2x + 1)})\ * (2x + 2)\\)",
                        "\\(2\\sqrt{(x^2 + 2x + 1)}\\)",
                        "\\({1}/{(2\\sqrt{x^2 + 2x + 1})}\\)"
                    ],
                    correct: "\({1}/{(2sqrt{x^2 + 2x + 1})}\)",
                    tips: [
                        "Usa la regla de la cadena para derivar la raíz cuadrada.",
                        "Recuerda que la derivada de sqrt(u) es 1 / (2sqrt(u)) multiplicada por la derivada de u.",
                        "Aplica la regla de la cadena correctamente."
                    ]
                },
                {
                    question: "Paso 2: ¿Cuál es la derivada de sqrt(x + 1)?",
                    options: [
                        "\\(1 / (2\\sqrt(x + 1))\\)",
                        "\\(\\sqrt(x + 1)\\)",
                        "\\(1 / (2\\sqrt(x + 1))\ * 1\\)"
                    ],
                    correct: "\(1 / (2sqrt(x + 1)) * 1\)",
                    tips: [
                        "Usa la regla de la cadena para derivar la raíz cuadrada.",
                        "Recuerda que la derivada de sqrt(u) es 1 / (2sqrt(u)) multiplicada por la derivada de u.",
                        "Aplica la regla de la cadena correctamente."
                    ]
                },
                {
                    question: "Paso 3: ¿Cómo aplicas la regla del producto a f(x) = sqrt(x^2 + 2x + 1) * sqrt(x + 1)?",
                    options: [
                        "Deriva cada parte por separado y luego multiplícalas.",
                        "Deriva la primera parte, luego la segunda, y sumas los resultados.",
                        "Aplica la regla del producto: uv + uv."
                    ],
                    correct: "Aplica la regla del producto: uv + uv.",
                    tips: [
                        "Recuerda la fórmula de la regla del producto: si f(x) = u(x)v(x), entonces f'(x) = u'(x)v(x) + u(x)v'(x).",
                        "Aplica correctamente las derivadas que ya calculaste.",
                        "Combina las derivadas parciales correctamente."
                    ]
                },
                {
                    question: "Paso 4: ¿Cuál es el resultado final de la derivada de f(x)?",
                    options: [
                        "\\((1 / (2\\sqrt(x^2 + 2x + 1))\ * (2x + 2)) * \\sqrt(x + 1)\ + \\sqrt(x^2 + 2x + 1)\ * (1 / (2\\sqrt(x + 1)) * 1)\\)",
                        "\\(\\sqrt(x^2 + 2x + 1)\ * \\sqrt(x + 1)\\)",
                        "\\(2 * \\sqrt(x^2 + 2x + 1)\ * \\sqrt(x + 1)\\)"
                    ],
                    correct: "\((1 / (2sqrt(x^2 + 2x + 1)) * (2x + 2)) * sqrt(x + 1) + sqrt(x^2 + 2x + 1) * (1 / (2sqrt(x + 1)) * 1)\)",
                    tips: [
                        "Combina las derivadas de los pasos anteriores usando la regla del producto.",
                        "Simplifica cada término correctamente.",
                        "Revisa que has aplicado correctamente cada derivada parcial."
                    ]
                }
            ]
        },

        {
            question: "Deriva \\( f(x) = e^{2x^3 + 5x^2 + 3x} \\)",
            steps: [
        {
            question: "Paso 1: ¿Cuál es la derivada del exponente?",
            options: [
                "\\(2e^{2x^3 + 5x^2 + 3x}\\)",
                "\\(6x^2 + 10x + 3\\)",
                "\\(3e^{2x^3 + 5x^2 + 3x}\\)"
            ],
            correct: "\(3e^{2x^3 + 5x^2 + 3x}\)",
            tips: [
                "Recuerda que la derivada de una función exponencial es la función misma multiplicada por la derivada del exponente.",
                "Aplica correctamente la regla de la cadena.",
                "Consulta el formulario."
            ]
        },
        {
            question: "Paso 2: ¿Cómo aplicas la regla del producto a f(x) = e^{2x^3 + 5x^2 + 3x}?",
            options: [
                "Deriva cada parte por separado y luego multiplícalas.",
                "Deriva la primera parte, luego la segunda, y sumas los resultados.",
                "Aplica la regla del producto: uv + uv."
            ],
            correct: "Deriva cada parte por separado y luego multiplícalas.",
            tips: [
                "Recuerda que la derivada del producto de dos funciones es la primera función derivada multiplicada por la segunda más la primera función multiplicada por la segunda función derivada.",
                "Aplica correctamente la regla del producto.",
                "Consulta el formulario."
            ]
        },
        ]
        },
        {
            question: "Deriva \\( f(x) = \\ln(3x^2 + 2x + 1) \\)",
                steps: [
                {
                    question: "Paso 1: ¿Cuál es la derivada del argumento del logaritmo?",
                    options: [
                        "\\(\\frac{3x + 2}{3x^2 + 2x + 1}\\)",
                        "\\(\\frac{6x + 2}{3x^2 + 2x + 1}\\)",
                        "\\(\\frac{3}{3x^2 + 2x + 1}\\)"
                    ],
                    correct: "\(\frac{6x + 2}{3x^2 + 2x + 1}\)",
                    tips: [
                        "Recuerda que la derivada del logaritmo natural de una función es la derivada de la función dividida por la función misma.",
                        "Aplica correctamente la regla de la cadena."
                    ]
                },
                {
                    question: "Paso 2: ¿Cómo aplicas la regla del cociente a f(x) = \\ln(3x^2 + 2x + 1)?",
                    options: [
                        "Deriva cada parte por separado y luego divide sus derivadas.",
                        "Aplica la regla del cociente: (u'v - uv') / v^2.",
                        "Deriva la primera parte, luego la segunda, y sumas los resultados."
                    ],
                    correct: "Deriva cada parte por separado y luego divide sus derivadas.",
                    tips: [
                        "Recuerda que la derivada del cociente de dos funciones es (la derivada de la primera función multiplicada por la segunda menos la primera función multiplicada por la derivada de la segunda) dividido por el cuadrado de la segunda función.",
                        "Aplica correctamente la regla del cociente."
                    ]
                },
                ]
        },
        

    ]
};

function startGame(selectedLevel) {
    level = selectedLevel;
    localStorage.setItem('level', level);
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.setItem('currentStep', currentStep);
    window.location.href = 'game.html';
}

function loadGame() {
    level = localStorage.getItem('level');
    currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
    currentStep = parseInt(localStorage.getItem('currentStep')) || 0;

    document.getElementById('level-header').innerText = level.charAt(0).toUpperCase() + level.slice(1);
    document.title = `Juego de la Derivada - Nivel ${level.charAt(0).toUpperCase() + level.slice(1)}`;

    
    loadQuestion();
    MathJax.typeset();
}

function loadQuestion() {
    const questionData = questions[level][currentQuestionIndex];
    const stepsLength = questionData.steps.length;

 
    if (currentStep >= stepsLength) {
        currentStep = stepsLength - 1;
    }
    
    const stepData = questionData.steps[currentStep];

    const mainQuestionContainer = document.getElementById('main-question');
    const questionContainer = document.getElementById('question-container');
    
    mainQuestionContainer.innerHTML = `<p>${questionData.question}</p>`;
    questionContainer.innerHTML = `
        <p>${stepData.question}</p>
        ${stepData.options.map((option, index) => `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
    `;
    
}


function checkAnswer(selectedAnswer) {
    const questionData = questions[level][currentQuestionIndex];
    const stepData = questionData.steps[currentStep];
    const procedureContainer = document.getElementById('procedure-steps');
    const optionButtons = document.querySelectorAll('#question-container button');

    console.log('Respuesta correcta:', stepData.correct);
    console.log('Opción seleccionada:', selectedAnswer);

    if (selectedAnswer === stepData.correct) {
 
        optionButtons.forEach(button => {
            button.disabled = true;
        });

        procedureContainer.innerHTML += `<p>Resultado Paso ${currentStep+1}: ${stepData.correct}</p>`;
        document.getElementById('tips-container').innerHTML = '';
        nextQuestion();
        
    } else {

        optionButtons.forEach(button => {
            button.disabled = false;
        });

        const tipIndex = Math.floor(Math.random() * stepData.tips.length);
        document.getElementById('tips-container').innerHTML = `<p>${stepData.tips[tipIndex]}</p>`;
        console.log(tipIndex);
    }    
    MathJax.typeset();
}

function nextQuestion() {
    currentStep++;
    const questionData = questions[level][currentQuestionIndex];
    
    if (currentStep < questionData.steps.length) {
        localStorage.setItem('currentStep', currentStep);
        loadQuestion();
    } else {
        currentStep = 0;
        currentQuestionIndex++;
        localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        localStorage.setItem('currentStep', currentStep);


        setTimeout(() => {
            const procedureContainer = document.getElementById('procedure-steps');
            procedureContainer.innerHTML = '';

            if (currentQuestionIndex < questions[level].length) {
                loadQuestion();
            } else {
                alert('¡Felicidades, has completado el nivel!');
                localStorage.removeItem('level');
                localStorage.removeItem('currentQuestionIndex');
                localStorage.removeItem('currentStep');
                window.location.href = 'index.html';
            }
        }, 3000); // 3 segundos
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('game.html')) {
        loadGame();
    }
});
