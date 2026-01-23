import { LandingPage } from '../models/landing-page.model';

export const BUILDER_STATE: LandingPage = {
  id: 'draft',
  slug: 'preview',
  title: 'Landing Preview',
  createdAt: new Date(),
  updatedAt: new Date(),
  sections: [
    {
      id: 'hero-1',
      type: 'hero',
      data: {
        title: 'Convierte visitas en clientes por WhatsApp',
        subtitle: 'Landing pages optimizadas para vender sin fricción',
        buttonText: 'Escríbenos por WhatsApp',
        whatsappNumber: '573001234567',
        imageUrl: 'https://placehold.co/500x400'
      }
    },
    {
      id: 'features-1',
      type: 'features',
      data: {
        sectionTitle: '¿Por qué usar nuestra plataforma?',
        items: [
          {
            icon: '🚀',
            title: 'Rápido',
            description: 'Publica tu landing en minutos'
          },
          {
            icon: '📱',
            title: 'WhatsApp First',
            description: 'Optimizado para conversiones móviles'
          },
          {
            icon: '⚙️',
            title: 'Editable',
            description: 'Personaliza todo sin código'
          }
        ]
      }
    },
    {
      id: 'cta-1',
      type: 'cta',
      data: {
        title: 'Empieza hoy mismo',
        subtitle: 'Crea tu landing en menos de 10 minutos',
        buttonText: 'Crear mi landing',
        whatsappNumber: '573001234567'
      }
    }
  ]
};
