import { 
  Brain, 
  Speech, 
  Music, 
  BookOpen, 
  Utensils, 
  Palette, 
  Users, 
  Video, 
  Heart,
  Stethoscope
} from 'lucide-react';

export const SPECIALTIES = [
  {
    id: 'psicologia',
    title: 'Psicologia',
    icon: Brain,
    description: 'Apoio emocional e desenvolvimento cognitivo-comportamental focado nas necessidades individuais da criança.',
    benefits: ['Regulação emocional', 'Habilidades sociais', 'Autonomia'],
    methodology: 'Terapia Cognitivo-Comportamental (TCC) e abordagens lúdicas.'
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiologia',
    icon: Speech,
    description: 'Desenvolvimento da comunicação verbal e não-verbal, além de questões relacionadas à deglutição.',
    benefits: ['Melhora na fala', 'Comunicação funcional', 'Adequação da mastigação'],
    methodology: 'Estimulação precoce e métodos de comunicação alternativa.'
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogia',
    icon: BookOpen,
    description: 'Intervenção nos processos de aprendizagem, identificando dificuldades e potencializando habilidades.',
    benefits: ['Melhora no desempenho escolar', 'Foco e atenção', 'Estratégias de estudo'],
    methodology: 'Avaliação psicopedagógica e intervenção lúdica.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Mariana Silva',
    role: 'Mãe do Pedro',
    text: 'A Clínica Girassol transformou a vida do meu filho. O acolhimento e a competência da equipe são admiráveis.'
  },
  {
    name: 'Ricardo Oliveira',
    role: 'Pai da Ana',
    text: 'Encontramos aqui não apenas profissionais, mas parceiros no desenvolvimento da nossa filha. A evolução é constante.'
  },
  {
    name: 'Carla Santos',
    role: 'Mãe do Lucas',
    text: 'O atendimento humanizado foi um divisor de águas para nossa família. Recomendo muito!'
  }
];

export const CLINIC_INFO = {
  name: 'Clínica Girassol',
  phone: '(51) 99984-5980',
  address: 'Rua Barão do Guaíba, 520 - sala 8 - São José, Tramandaí - RS',
  instagram: 'https://www.instagram.com/_clinicagirassol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  logoUrl: 'https://lh3.googleusercontent.com/d/1VRoHj_pHhwbu3-E0793F9s2rAp6rxtn5',
  heroImageUrl: 'https://instagram.fpoa35-1.fna.fbcdn.net/v/t51.82787-15/628382803_17860792722595972_6102176321924083995_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzgyNTgxODQ1Mjc2MjYyODUxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=zC7JEx8mAAAQ7kNvwF1PtTu&_nc_oc=AdoKVMZVZhQk3HDLt0GVdfpFXjej4d_jP_85x7ZyyPZC-z3G1Nhzsa42yafn2uZainXue6MwYfi0jhcwu-gnbl0H&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpoa35-1.fna&_nc_gid=KVOOlb1rGPpNyNjFbzhWhg&_nc_ss=7a32e&oh=00_Afw-QIqsrBFHRP1Og8yltEZMZufY77RwL9WhAR42T7AaLw&oe=69C6E9B9',
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=555197881987&text&type=phone_number&app_absent=0',
  mission: 'Assim como o girassol se volta para a luz do sol em busca de vitalidade, nós abrimos nossas portas com a missão de iluminar a sua jornada de cuidado e bem-estar.'
};
