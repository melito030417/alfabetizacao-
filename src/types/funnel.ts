export interface QuizQuestion {
  id: number;
  title: string;
  underlinedWord?: string;
  subtitle?: string;
  options: string[];
  showDevicesBanner?: boolean;
}

export interface QuizState {
  age?: string;
  answers: Record<number, string>;
  currentStep: number; // 0 = start, 1..10 = questions, 11 = analyzing, 12 = result-analysis, 13 = sales-page
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: 'A criança reconhece as letras do próprio nome?',
    options: [
      'Ainda não reconhece',
      'Sim, reconhece facilmente',
      'Reconhece algumas letras',
      'Tem dificuldade',
    ],
  },
  {
    id: 2,
    title: 'Ele(a) consegue associar som às letras?',
    underlinedWord: 'som',
    options: [
      'Não consegue ainda',
      'Tem dificuldade',
      'Às vezes consegue',
      'Sim, com facilidade',
    ],
  },
  {
    id: 3,
    title: 'A criança ja tenta ler palavras sozinho?',
    options: [
      'Nunca tenta',
      'Raramente tenta',
      'Às vezes tenta',
      'Sim, frequentemente',
    ],
  },
  {
    id: 4,
    title: 'Seu filho se frustra quando não consegue ler ou escrever?',
    underlinedWord: 'ler ou escrever',
    options: [
      'Ainda não chegou nessa fase',
      'Quase nunca',
      'Um pouco',
      'Sim, muito',
    ],
  },
  {
    id: 5,
    title: 'Ele consegue focar por 5 minutos em uma atividade guiada?',
    underlinedWord: '5 minutos',
    options: [
      'Não consegue; preciso de ajuda',
      'Com dificuldade',
      'Às vezes',
      'Sim',
    ],
  },
  {
    id: 6,
    title: 'Vocês já tentaram estimular leitura diariamente em casa?',
    options: [
      'Já tentei, mas não consegui',
      'Nunca consegui',
      'Preciso de ajuda nessa questão',
      'Já tentei, mas faltou rotina',
    ],
  },
  {
    id: 7,
    title: 'Sua criança gosta de assistir desenhos animados ou videos em geral ?',
    options: [
      'Ama, tanto que preciso cuidar para não exagerar.',
      'Sim',
      'Ele(a) gosta, mas não são todos que prendem atenção.',
      'Ele gosta, mas eu tento regular a quantidade de tela.',
    ],
  },
  {
    id: 8,
    title: 'Se houvesse um material audiovisual para ensinar a criança a ler e a escrever, você usaria?',
    underlinedWord: 'audiovisual',
    options: [
      'Com certeza',
      'Sim, se fosse fácil de aplicar',
      'Sim, mas eu precisaria de um passo a passo',
    ],
  },
  {
    id: 9,
    title: 'Qual desses dispositivos a criança tem acesso para assistir as aulinhas do Pipo ?',
    options: [
      'TV',
      'Tablet',
      'Computador/Notebook',
      'Celular',
      'Todos os dispositivos',
    ],
    showDevicesBanner: true,
  },
  {
    id: 10,
    title: 'Certo, e para finalizarmos, o que mais te preocupa hoje?',
    options: [
      'Medo de atraso escolar',
      'Falta de foco',
      'Dificuldade de fala',
      'Medo de não estar estimulando o suficiente',
      'Ele(a) não aprender as letras',
      'Falta de interesse',
    ],
  },
];
