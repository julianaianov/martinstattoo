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
    imageSrc: 'https://images.unsplash.com/photo-1590246814889-31cc365d1611?w=1600&q=80',
    imageAlt: 'Tatuador aplicando traços em pele',
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
    imageSrc: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1600&q=80',
    imageAlt: 'Materiais e equipamentos de tatuagem',
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
    imageSrc: 'https://images.unsplash.com/photo-1565058379802-bdec93f3d157?w=1200&q=80',
    imageAlt: 'Referência visual de estudo e prática',
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
    imageSrc: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1600&q=80',
    imageAlt: 'Tatuagem em pele real em andamento',
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
    imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80',
    imageAlt: 'Divulgação e presença digital',
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

/** Imagens das seções editoriais (Unsplash — substitua por fotos do estúdio em /public quando quiser). */
export const COURSE_IMAGE_HERO =
  'https://images.unsplash.com/photo-1598371621830-6142734192b4?w=1800&q=80'

export const COURSE_IMAGE_ABOUT = COURSE_IMAGE_HERO

export const COURSE_IMAGE_INSTRUCTOR =
  'https://images.unsplash.com/photo-1542727313-4c761cbecb13?w=1800&q=80'

export const COURSE_IMAGE_GRADUAL =
  'https://images.unsplash.com/photo-1590246814889-31cc365d1611?w=1800&q=80'

export const COURSE_IMAGE_INVESTMENT =
  'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1800&q=80'
