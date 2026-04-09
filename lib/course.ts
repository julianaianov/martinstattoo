/** Título usado no site e nas mensagens de WhatsApp. */
export const COURSE_TITLE = 'Curso de Tatuagem Iniciante'

export const COURSE_SUBTITLE = 'Individual, com acompanhamento personalizado — por Wanderson Martins'

/** Valores conforme material promocional. */
export const COURSE_PRICE_INSTALLMENTS_LABEL =
  'R$ 5.500,00 — até 10x sem juros no cartão ou pagamento mensal ao longo do curso'

export const COURSE_PRICE_PIX_LABEL = 'R$ 4.500,00 à vista (dinheiro ou PIX)'

export const COURSE_INVESTMENT_SUMMARY = `${COURSE_PRICE_INSTALLMENTS_LABEL} • ${COURSE_PRICE_PIX_LABEL}`

export const COURSE_INVESTMENT_LINES = [
  { label: 'Parcelado / cartão', value: COURSE_PRICE_INSTALLMENTS_LABEL },
  { label: 'À vista', value: COURSE_PRICE_PIX_LABEL },
] as const

export const COURSE_DURATION =
  '6 meses, com 1 aula por semana — formato gradual para assimilar e praticar cada etapa.'

export const COURSE_FORMAT = 'Aulas individuais, com atenção exclusiva do instrutor.'

export const COURSE_ABOUT_KICKER = 'SOBRE O CURSO'

export const COURSE_ABOUT_BODY =
  'O CURSO INDIVIDUAL COM ACOMPANHAMENTO PERSONALIZADO É VOLTADO PARA QUEM DESEJA ADQUIRIR UM AMPLO CONHECIMENTO SOBRE A ARTE DE TATUAR E INICIAR UMA CARREIRA PROFISSIONAL DE BASE SÓLIDA E CONSISTENTE.'

export const COURSE_GRADUAL_TITLE = 'APRENDIZADO GRADUAL'

export const COURSE_GRADUAL_BODY =
  'O CURSO TEM DURAÇÃO DE 6 MESES, COM 1 AULA POR SEMANA, PERMITINDO QUE O ALUNO ASSIMILE E PRATIQUE CADA ETAPA DO APRENDIZADO DE FORMA PROGRESSIVA. ESSE FORMATO EVITA A SOBRECARGA DE INFORMAÇÕES E GARANTE QUE AS TÉCNICAS SEJAM APRIMORADAS COM ACOMPANHAMENTO CONTÍNUO. ALÉM DISSO, AS AULAS SÃO INDIVIDUAIS, PROPORCIONANDO UMA ATENÇÃO EXCLUSIVA DO INSTRUTOR, O QUE ACELERA A EVOLUÇÃO DO ALUNO.'

export const COURSE_INSTRUCTOR_KICKER = 'QUEM SOU EU:'

/** Texto da bio — mesma fonte na página inicial e em /curso. */
export type InstructorBioSegment = { text: string; bold?: boolean }

export const COURSE_INSTRUCTOR_BIO_PARAGRAPHS: readonly (readonly InstructorBioSegment[])[] = [
  [
    { text: 'MEU NOME É ' },
    { text: 'WANDERSON MARTINS', bold: true },
    { text: ', SOU TATUADOR HÁ MAIS DE UMA DÉCADA E ' },
    { text: 'ESPECIALISTA EM REALISMO', bold: true },
    { text: ', TANTO PRETO E CINZA QUANTO COLORIDO.' },
  ],
  [
    { text: 'COMECEI NA ' },
    { text: 'TATUAGEM', bold: true },
    {
      text: ' AOS 24 ANOS, ENQUANTO CONCILIAVA A PROFISSÃO COM O TRABALHO DE FLORISTA. A FALTA DE INFORMAÇÃO DIFICULTOU MEU INÍCIO, MAS UM ',
    },
    { text: 'WORKSHOP', bold: true },
    { text: ' COM UM RENOMADO ' },
    { text: 'TATUADOR', bold: true },
    { text: ' MUDOU MINHA TRAJETÓRIA.' },
  ],
  [
    { text: 'COM O TEMPO, ' },
    { text: 'CONQUISTEI PATROCÍNIOS', bold: true },
    { text: ' DE GRANDES MARCAS, VIAJEI PELO BRASIL PARTICIPANDO DE COMPETIÇÕES E ' },
    { text: 'ACUMULEI RECONHECIMENTO', bold: true },
    { text: ' E PRÊMIOS.' },
  ],
  [
    { text: 'HOJE, COM A ' },
    { text: 'CARREIRA CONSOLIDADA', bold: true },
    { text: ', ALÉM DE TATUADOR, TAMBÉM SOU INSTRUTOR, E DEDICO-ME A ' },
    { text: 'ENSINAR NOVOS PROFISSIONAIS', bold: true },
    { text: ', COMPARTILHANDO O ' },
    { text: 'CONHECIMENTO', bold: true },
    { text: ' QUE CONSIDERO MEU MAIOR ' },
    { text: 'INVESTIMENTO', bold: true },
    { text: ' E QUE FEZ TODA A DIFERENÇA NA MINHA TRAJETÓRIA.' },
  ],
]

export const COURSE_INSTRUCTOR_IMAGE_ALT = 'Wanderson Martins — tatuador e instrutor'

export const COURSE_INVESTMENT_KICKER = 'INVESTIMENTO'

export const COURSE_INVESTMENT_PARAGRAPHS = [
  'O CURSO REPRESENTA UM INVESTIMENTO EM SUA CARREIRA.',
  'O VALOR DE R$ 5.500,00 PODE SER PARCELADO EM ATÉ 10X SEM JUROS NO CARTÃO OU PAGO MENSALMENTE, FACILITANDO O ACESSO AO ENSINO PROFISSIONALIZANTE SEM COMPROMETER SEU ORÇAMENTO.',
  'PARA QUEM PREFERE PAGAR À VISTA, OFERECEMOS UM DESCONTO ESPECIAL: R$ 4.500,00 NO DINHEIRO OU PIX.',
] as const

export const COURSE_PAYMENT_METHODS_KICKER = 'FORMAS DE PAGAMENTO'

export const COURSE_PAYMENT_METHODS = [
  'PARCELAMENTO EM ATÉ 10X SEM JUROS NO CARTÃO – IDEAL PARA QUEM QUER DIVIDIR O VALOR SEM PESAR NO ORÇAMENTO.',
  'MENSALIDADE FIXA – UMA OPÇÃO FLEXÍVEL PARA QUEM DESEJA PAGAR AO LONGO DO CURSO.',
  'PAGAMENTO À VISTA COM DESCONTO – ECONOMIA PARA QUEM PODE QUITAR O CURSO DE UMA SÓ VEZ.',
] as const

export type CourseModuleVisual = 'split' | 'circle-study'

export type CourseModuleDetail = {
  id: string
  kicker: string
  title: string
  subtitle: string
  bullets: readonly string[]
  imageSrc: string
  imageAlt: string
  visual: CourseModuleVisual
}

export const COURSE_MODULES_DETAILED: readonly CourseModuleDetail[] = [
  {
    id: '1',
    kicker: 'O QUÊ VOCÊ VAI APRENDER?',
    title: 'MÓDULO 1',
    subtitle: 'FUNDAMENTOS DO DESENHO PARA TATUAGEM',
    bullets: [
      'ANATOMIA E PROPORÇÃO',
      'TÉCNICAS DE SOMBREAMENTO',
      'TRAÇOS PRECISOS',
      'PALETA DE CORES',
    ],
    imageSrc: '/images/fine-line.jpg',
    imageAlt: 'Fine line — traços precisos e fundamentos de desenho',
    visual: 'split',
  },
  {
    id: '2',
    kicker: 'O QUÊ VOCÊ VAI APRENDER?',
    title: 'MÓDULO 2',
    subtitle: 'CONHECENDO OS EQUIPAMENTOS',
    bullets: [
      'TIPOS DE MÁQUINAS, AGULHAS E TINTAS',
      'HIGIENE E BIOSSEGURANÇA NA TATUAGEM',
      'CONFIGURAÇÃO E CALIBRAÇÃO DE EQUIPAMENTOS',
    ],
    imageSrc: '/images/tribal.jpg',
    imageAlt: 'Tatuagem tribal — linha, precisão e técnica',
    visual: 'split',
  },
  {
    id: '3',
    kicker: 'O QUÊ VOCÊ VAI APRENDER?',
    title: 'MÓDULO 3',
    subtitle: 'TÉCNICAS DE TATUAGEM EM PELE ARTIFICIAL',
    bullets: [
      'CONTROLE DE LINHA E PREENCHIMENTO',
      'DECALQUE/STENCIL',
      'APLICAÇÃO DE SOMBREAMENTO E DEGRADÊ',
      'COMO EVITAR ERROS COMUNS',
    ],
    imageSrc: '/images/comic-colorido.jpeg',
    imageAlt: 'Tatuagem colorida estilo comic — prática e estudo',
    visual: 'circle-study',
  },
  {
    id: '4',
    kicker: 'O QUÊ VOCÊ VAI APRENDER?',
    title: 'MÓDULO 4',
    subtitle: 'TATUAGEM EM PELE REAL (COM SUPERVISÃO)',
    bullets: [
      'PRÁTICA EM MODELOS REAIS',
      'TÉCNICAS PARA DIFERENTES TIPOS DE PELE',
      'ATENDIMENTO AO CLIENTE',
      'FINALIZAÇÃO DA TATUAGEM',
    ],
    imageSrc: '/images/realismo.jpeg',
    imageAlt: 'Realismo em pele — tatuagem profissional',
    visual: 'split',
  },
  {
    id: '5',
    kicker: 'O QUÊ VOCÊ VAI APRENDER?',
    title: 'MÓDULO 5',
    subtitle: 'MERCADO E CONSTRUÇÃO DE PORTFÓLIO',
    bullets: [
      'PRECIFICAÇÃO E ATENDIMENTO PROFISSIONAL',
      'COMO DIVULGAR SEU TRABALHO',
      'CONSTRUÇÃO DE UM PORTFÓLIO',
    ],
    imageSrc: '/images/premio-multi-campeao.png',
    imageAlt: 'Reconhecimento em competições — mercado e portfólio',
    visual: 'split',
  },
] as const

/** Lista curta para cards e compatibilidade. */
export const COURSE_MODULES: string[] = COURSE_MODULES_DETAILED.map(
  (m) => `${m.title}: ${m.subtitle}`,
)

export const COURSE_FOR_WHO = [
  'Quem quer formação profissional com base técnica e acompanhamento de perto',
  'Quem valoriza aulas individuais e ritmo gradual (6 meses, 1 aula por semana)',
  'Quem busca do desenho aplicado à tatuagem até mercado e portfólio',
] as const

export const COURSE_INCLUDES = [
  'Módulos de desenho, equipamentos, pele artificial, pele real supervisionada e mercado',
  'Orientação para PIX / parcelamento e matrícula via WhatsApp oficial do estúdio',
  'Suporte para dúvidas no fluxo de inscrição e próximos passos após o contato',
] as const

export const COURSE_FAQ = [
  {
    q: 'Preciso saber desenhar antes?',
    a: 'O módulo 1 cobre fundamentos de desenho para tatuagem (anatomia, sombra, traço e cor). Ajuda ter noções, mas o percurso é pensado para construir do essencial à prática.',
  },
  {
    q: 'Recebo certificado?',
    a: 'Há certificado de participação ao concluir os requisitos do curso (detalhes na matrícula).',
  },
  {
    q: 'Como funciona o pagamento?',
    a: `Valores de referência: ${COURSE_PRICE_INSTALLMENTS_LABEL}. À vista: ${COURSE_PRICE_PIX_LABEL}. No fluxo de inscrição você vê a chave PIX (CNPJ), realiza o pagamento combinado e envia o comprovante pelo WhatsApp para confirmarmos sua vaga.`,
  },
] as const

export const COURSE_TURMA_OPTIONS = [
  { id: 'proxima', label: 'Próxima turma (data a combinar)' },
  { id: 'lista-espera', label: 'Lista de espera / avise-me' },
] as const

/** Imagens das seções do curso — todas em /public/images. */
export const COURSE_IMAGE_HERO = '/images/realismo2.jpg'

export const COURSE_IMAGE_ABOUT = '/images/animais.jpg'

export const COURSE_IMAGE_INSTRUCTOR = '/images/artist.jpeg'

export const COURSE_IMAGE_GRADUAL = '/images/old_scholl.jpg'

export const COURSE_IMAGE_INVESTMENT = '/images/pet.jpg'
