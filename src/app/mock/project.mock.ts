import { Project } from '../model/project.interface';

export const ProjectMock: Project[] = [
  {
    id: 1,
    category: 'audiolibro',
    description:
      'Estamos hechos de historias. A todos nos gusta que nos cuenten historias. En todas ellas hay sutilezas que matizan ese lugar donde se encuentran autores y letores. Una voz sutil y versátil es necesaria para que tu audiolibro comunique todo lo que la obra quiere contar. Mi voz en tu audiolibro.',
    link: 'https://www.youtube.com/watch?v=NPKJoqNbE_c',
  },
  {
    id: 2,
    category: 'Campaña para redes',
    description:
      'En este caso, el Municipio de Paraná prefirió mi voz para una campaña de concientización sobre el comportamiento vial. Al ser dirigido a todas las edades, hay que comunicar de manera fresca y cómplice, sin perder la convicción del texto. Ponte en contacto para conocer más sobre cómo podemos comunicar tu producto o empresa.',
    link: 'https://www.youtube.com/embed/5tDi2S2hsfs',
  },
  {
    id: 3,
    category: ['Comercial', 'Marcas'],
    description:
      'Convencer al público a elegir su producto o servicio es parte del trabajo del locutor. Es el primer vendedor de la cadena. La eficacia de un buen comercial está en conectar los valores y cualidades del producto/servicio y el sentimiento o necesidades del consumidor.',
    link: 'https://www.youtube.com/embed/2fvDFJKzhAk',
  },
  {
    id: 4,
    category: ['Doblaje', 'Neutro'],
    description:
      'Cuando nos dirigimos a toda América latina y/o las comunidades latinas en países no hispanos, debemos comunicar versátilmente a gente de distintos países. Un experto en Español Neutro es la decisión acertada.',
    link: 'https://www.youtube.com/embed/yJerpSM8em4',
  },
  {
    id: 5,
    category: 'Institucionales',
    description:
      'La importancia de estas piezas comunicacionales radica en el cómo el público y potenciales inversionistas o clientes perciben a la empresa u organización. Por eso, una voz versátil que sea capaz de comunicar los valores de la misma, es  fundamental para este tipo trabajo. Confianza, dinamismo, efectividad… todo eso y más se puede transmitir a través de una buena interpretación.',
    link: 'https://www.youtube.com/embed/V9k3Tc5yxow',
  },
  {
    id: 6,
    category: 'Voice Over',
    description:
      'Una voz que interprete el alma de un personaje, o un relato para una pieza documental, tiene que ser en sí un actor. La actuación de voz es uno de los desafíos más importantes que encara el profesional de la voz, y por tanto, de los más satisfactorios.',
    link: 'https://www.youtube.com/embed/zyMldlyzNbM',
  },
];
