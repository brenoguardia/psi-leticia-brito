import { env } from '@/types/env';

const CODE_IDENTITY = 'CRP 12/30305';

export const HERO_MOCK = {
  badge: 'Psicóloga Clínica',
  title: `Cuidado e transformação para sua <span class="italic">saúde emocional</span>`,
  subtitle:
    'Atendimento individualizado, fundamentado na psicanálise, com foco no seu bem-estar. Um espaço seguro para o autoconhecimento e a superação de desafios.',
  codeIdentity: CODE_IDENTITY,
  whatsAppCtaText: 'Agendar consulta',
  whatsAppCtaLink: `https://wa.me/${env.PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá, eu gostaria de marcar uma sessão de psicoterapia individual.',
  )}`,
  aboutCtaText: 'Saiba mais',
  aboutCtaLink: '#sobre',
};

export const ABOUT_MOCK = {
  title: 'Sobre a Psicóloga',
  description: `
    Acredito que a terapia é um ato de coragem e um investimento profundo na própria vida. Busco oferecer um suporte empático e tecnicamente embasado para quem deseja reencontrar seu equilíbrio.
    <br/>
    <br/>
    Minha prática é orientada pela psicanálise, compreendendo cada sujeito a partir de sua história, seus vínculos e processos inconscientes. Ofereço um espaço seguro e ético, onde você possa se ver com mais clareza, ressignificar padrões e fortalecer sua autonomia.
  `,
  subtitle: 'Psicóloga Clínica',
  subtitleDescription: 'Atendimento individual',
  items: [
    {
      icon: 'Stethoscope',
      title: 'Psicóloga Clínica',
      description: 'Atendimento individual',
    },
  ],
};

export const PROCESS_MOCK = {
  title: 'Como funciona o processo',
  description:
    'Cada etapa é pensada para garantir que você se sinta acolhido e seguro durante toda a sua jornada terapêutica.',
  steps: [
    {
      icon: 'MessageCircle',
      title: 'Primeiro contato',
      description:
        'Uma conversa inicial via WhatsApp ou e-mail para tirar dúvidas básicas e alinhar expectativas.',
    },
    {
      icon: 'CalendarDays',
      title: 'Sessão inicial',
      description:
        'Nesta sessão avaliamos suas demandas e, juntos, traçamos os primeiros objetivos do seu acompanhamento.',
    },
    {
      icon: 'Heart',
      title: 'Jornada terapêutica',
      description:
        'Encontros regulares focados no autoconhecimento, na escuta e no desenvolvimento da sua autonomia emocional.',
    },
  ],
};

export const SERVICES_MOCK = {
  title: 'Universo terapêutico',
  description:
    'Áreas de atuação dedicadas ao cuidado da sua saúde mental e ao desenvolvimento pessoal e profissional.',
  serviceIcons: {
    '🧠': 'Brain',
    '🌿': 'Leaf',
    '✨': 'Sparkles',
    '🌈': 'Baby',
    '🌍': 'Globe',
    '💼': 'Briefcase',
    '🔎': 'Search',
    '📝': 'FileText',
  },
};

export const REFLECTIONS_MOCK = {
  title: 'Reflexões para a sua jornada',
  reflections: [
    {
      quote: '"O autoconhecimento é a bússola para o desenvolvimento pessoal."',
      author: 'Letícia de Brito Martins',
      role: 'Psicóloga Clínica · CRP 12/30305',
    },
    {
      quote: '"Aquilo que você não cura, você transfere."',
      author: 'Letícia de Brito Martins',
      role: 'Psicóloga Clínica · CRP 12/30305',
    },
  ],
};

export const FAQ_MOCK = {
  title: 'Dúvidas Frequentes',
  faqItems: [
    {
      question: 'Como é a primeira sessão?',
      answer:
        'A primeira sessão é um momento de acolhimento. Conversamos sobre o que te trouxe à terapia, suas expectativas e como funciona o acompanhamento. É o início da nossa aliança terapêutica.',
    },
    {
      question: 'Como funciona o atendimento?',
      answer:
        'O atendimento é individualizado, fundamentado na psicanálise. Cada processo é construído a partir da escuta, dos vínculos e das necessidades de cada pessoa — não há um modelo pronto.',
    },
    {
      question: 'O atendimento é presencial ou online?',
      answer:
        'Ofereço atendimento presencial e online, no Brasil e para brasileiros que vivem no exterior.',
    },
    {
      question: 'Quanto tempo dura cada sessão?',
      answer:
        'As sessões individuais têm duração média de 50 minutos. A frequência pode ser ajustada conforme a necessidade de cada pessoa.',
    },
  ],
};

export const SECTION_CTAS_MOCK = {
  title: 'Pronto para dar o primeiro passo?',
  description:
    'Reserve um momento para você. Uma sessão dedicada ao seu cuidado emocional pode ser o início da transformação que você busca.',
  ctaLabel: 'Agendar consulta pelo WhatsApp',
  individualUrl: `https://wa.me/${env.PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá, eu gostaria de marcar uma sessão de psicoterapia individual.',
  )}`,
};

export const FOOTER_MOCK = {
  title: 'Psicóloga Letícia Brito',
  description: `
    Psicoterapia Psicanalítica para crianças, adolescentes e adultos.
    <br />
    Atendimento presencial e online, no Brasil e para brasileiros no exterior.
    `,
  instagram: env.PUBLIC_INSTAGRAM_URL,
  menus: {
    links: {
      text: 'Links Rápidos',
      items: [
        { href: '#sobre', label: 'Sobre mim' },
        { href: '#especialidades', label: 'Universo terapêutico' },
        { href: '#atendimento', label: 'Atendimento' },
        { href: '#faq', label: 'Dúvidas' },
      ],
    },
    about: {
      text: 'Contato',
      items: [
        { icon: 'MapPin', label: env.PUBLIC_ADDRESS },
        {
          icon: 'Mail',
          href: `mailto:${env.PUBLIC_EMAIL}`,
          label: env.PUBLIC_EMAIL,
        },
        {
          icon: 'MessageCircle',
          href: `https://wa.me/${env.PUBLIC_WHATSAPP_NUMBER}`,
          label: 'WhatsApp',
        },
      ],
    },
  },
  others: {
    text: `© ${new Date().getFullYear()} Psicóloga Letícia Brito. Todos os direitos reservados.`,
    codeIdentity: CODE_IDENTITY,
  },
};
