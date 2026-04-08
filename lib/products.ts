export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  duration: string
  size: string
}

export const SERVICES: Product[] = [
  {
    id: 'sinal-pequeno',
    name: 'Sinal - Tatuagem Pequena',
    description: 'Sinal de agendamento para tatuagens pequenas (até 5cm)',
    priceInCents: 10000,
    duration: '1-2 horas',
    size: 'Até 5cm',
  },
  {
    id: 'sinal-medio',
    name: 'Sinal - Tatuagem Média',
    description: 'Sinal de agendamento para tatuagens médias (5-15cm)',
    priceInCents: 20000,
    duration: '2-4 horas',
    size: '5-15cm',
  },
  {
    id: 'sinal-grande',
    name: 'Sinal - Tatuagem Grande',
    description: 'Sinal de agendamento para tatuagens grandes (15-30cm)',
    priceInCents: 35000,
    duration: '4-6 horas',
    size: '15-30cm',
  },
  {
    id: 'sinal-extra-grande',
    name: 'Sinal - Tatuagem Extra Grande',
    description: 'Sinal de agendamento para tatuagens extra grandes ou fechamento',
    priceInCents: 50000,
    duration: '6+ horas',
    size: '30cm+',
  },
]

export const TATTOO_STYLES = [
  {
    id: 'comic-colorido',
    name: 'Comic Colorido',
    description:
      'Estilo vibrante inspirado em quadrinhos, com cores intensas, contraste marcante e visual impactante.',
    image: '/images/comic-colorido.jpeg',
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    description:
      'Técnica delicada com linhas finas e precisas, perfeita para designs minimalistas e detalhados.',
    image: '/images/fine-line.jpg',
  },
  {
    id: 'realismo',
    name: 'Realismo',
    description:
      'Reprodução fiel de imagens reais, como retratos, animais e paisagens, com alto nível de detalhamento.',
    image: '/images/realismo.jpeg',
  },
  {
    id: 'realismo-2',
    name: 'Realismo 2',
    description: 'Variação do realismo com foco em profundidade, texturas e sombreamento avançado.',
    image: '/images/realismo2.jpg',
  },
  {
    id: 'religioso',
    name: 'Religioso',
    description:
      'Trabalhos com simbologia da fé e significado pessoal, com acabamento detalhado e composição harmoniosa.',
    image: '/images/religioso.png',
  },
  {
    id: 'tribal',
    name: 'Tribal',
    description:
      'Estilo com traços marcantes e padrões tradicionais, valorizando forma, fluxo e identidade visual forte.',
    image: '/images/tribal.jpg',
  },
  {
    id: 'animais',
    name: 'Animais',
    description:
      'Tatuagens com temática animal, unindo expressão, movimento e personalidade em cada projeto.',
    image: '/images/animais.jpg',
  },
  {
    id: 'pet',
    name: 'Pet',
    description:
      'Tatuagens pet com traços personalizados para eternizar a história e o carinho pelo seu companheiro.',
    image: '/images/pet.jpg',
  },
  {
    id: 'old-school',
    name: 'Old School',
    description: 'Estilo tradicional com linhas grossas, cores fortes e ícones clássicos da tatuagem.',
    image: '/images/old_scholl.jpg',
  },
]

export const AFTERCARE_STEPS = [
  {
    title: 'Primeiras 2-3 Horas',
    description:
      'Mantenha o filme plástico que foi colocado pelo tatuador. Isso protege a tatuagem de bactérias e sujeira.',
    icon: 'clock',
  },
  {
    title: 'Primeira Lavagem',
    description:
      'Lave suavemente com água morna e sabonete neutro antibacteriano. Seque com papel toalha, sem esfregar.',
    icon: 'droplets',
  },
  {
    title: 'Hidratação',
    description:
      'Aplique uma fina camada de pomada cicatrizante (Bepantol ou similar) 3x ao dia durante a primeira semana.',
    icon: 'heart',
  },
  {
    title: 'Evite Exposição Solar',
    description: 'Não exponha a tatuagem ao sol por pelo menos 30 dias. Depois, sempre use protetor solar.',
    icon: 'sun',
  },
  {
    title: 'Não Coce',
    description:
      'A coceira é normal durante a cicatrização. Nunca coce ou arranque as casquinhas que se formarem.',
    icon: 'ban',
  },
  {
    title: 'Evite Imersão',
    description:
      'Não entre em piscinas, mar ou banheiras por pelo menos 2-3 semanas. Banhos rápidos são permitidos.',
    icon: 'waves',
  },
  {
    title: 'Roupas Leves',
    description: 'Use roupas folgadas que não apertem ou causem atrito na área tatuada.',
    icon: 'shirt',
  },
  {
    title: 'Cicatrização Completa',
    description:
      'A cicatrização total leva de 2 a 4 semanas. Após esse período, agende um retoque se necessário.',
    icon: 'check-circle',
  },
]
