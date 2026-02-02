import React from 'react';
import { Facebook, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SocialGallery: React.FC = () => {
  // Imágenes reales proporcionadas de Facebook
  const galleryItems = [
    { 
      url: "https://scontent.fsvq6-1.fna.fbcdn.net/v/t39.30808-6/598556807_1354240713171082_7481910826418459000_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uVCQpcD9ZcUQ7kNvwFnTyNn&_nc_oc=AdlQEdsyymFbtJ9egGLHm3Ix8-wg9nDOpHUbLDaeKJviqyKaTnKe3h_vrParl1AktF61ziNGL_UPwuUnkUKMxg6j&_nc_zt=23&_nc_ht=scontent.fsvq6-1.fna&_nc_gid=vEflYnCYUvbTRBhNub2a4w&oh=00_AfrT1EFh41NVwL0Ktb73dIYi9MsiEzjwk8DoFp4oUmTuyg&oe=697A9973", 
      fbUrl: "https://www.facebook.com/photo/?fbid=1354240709837749&set=pb.100057554975250.-2207520000",
      caption: "Talleres de Integración Grupal" 
    },
    { 
      url: "https://scontent.fsvq6-1.fna.fbcdn.net/v/t39.30808-6/596807437_1354240816504405_8654919417350460266_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sItnFebf64UQ7kNvwFQoCg4&_nc_oc=AdnfsjaX8iCYckKq83Q_QGhDLJsVX6Kp4I8wQ11w0ONOU8IQGTG2brOeG5lri04P2SHwnYEx25kVPx9O82Sw9EYi&_nc_zt=23&_nc_ht=scontent.fsvq6-1.fna&_nc_gid=mnWhDeFR4uI1Q085z6TJUQ&oh=00_Afozkt0n2YsnH8IfJ6jPYUD_mRkwseSTVOtGHSWAMn_-EQ&oe=697A82F6", 
      fbUrl: "https://www.facebook.com/photo/?fbid=1354240813171072&set=pb.100057554975250.-2207520000",
      caption: "Canto y Conexión Emocional" 
    },
    { 
      url: "https://scontent.fsvq6-1.fna.fbcdn.net/v/t39.30808-6/599686376_1359395399322280_1806920012521015170_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B8u4KZvWmIkQ7kNvwHRWlKr&_nc_oc=Adm98M_AwoK0aQwfHCDzYG83ibVd5DMybsk69MG7-kvOMKz7bGzGGV6ZherQ6AlUFR_pBbnddSv16tpRN2fLqapW&_nc_zt=23&_nc_ht=scontent.fsvq6-1.fna&_nc_gid=iPz-cW9c6PE4l_wi9LfI7g&oh=00_Afr0jmfh9_LoEF7KaSTrxRla5oJgq38-B46BCtqUOKkGRQ&oe=697A6C81", 
      fbUrl: "https://www.facebook.com/photo/?fbid=1359395352655618&set=pb.100057554975250.-2207520000&type=3",
      caption: "Proyectos Comunitarios" 
    },
    { 
      url: "https://scontent.fsvq6-1.fna.fbcdn.net/v/t39.30808-6/600259080_1359395589322261_7606404477215418822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=at0sZ12LYRwQ7kNvwE-WIJa&_nc_oc=AdlHqsSyCHEpyrq1mccEmxHt4QhCQ80tGZk8Y0ZVUx7n-c5CKyUFBzGzKHMwiFY_-nBSTfoW7-fV90UhFU7OLroQ&_nc_zt=23&_nc_ht=scontent.fsvq6-1.fna&_nc_gid=HeuJ4L213R3-CArcmtIPvw&oh=00_AfoYhc2Dl91xTmuGD1ThSfrhCwrGk6v6iUIdT4drFYwtiA&oe=697A780E", 
      fbUrl: "https://www.facebook.com/photo/?fbid=1359395589322261&set=pb.100057554975250.-2207520000",
      caption: "Espacios de Voz y Salud" 
    },
  ];

  return (
    <section className="py-24 bg-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl font-bold text-mint mb-6">Nuestra Comunidad</h2>
            <p className="text-body/80 text-xl font-medium leading-relaxed">
              Momentos reales de nuestras sesiones y talleres compartidos en redes sociales. Únete a nuestra huella sonora.
            </p>
          </div>
          <a 
            href="https://www.facebook.com/IntegracionMusicoterapiayCanto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-white text-body font-bold rounded-brand border-2 border-mint/20 hover:border-mint hover:bg-mint hover:text-white transition-all shadow-lg group"
          >
            <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Seguir en Facebook</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-brand-lg aspect-video shadow-xl bg-white border-4 border-white">
              <img 
                src={item.url} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <p className="text-white font-serif text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.caption}</p>
                <a 
                  href={item.fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow font-bold hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Ver en Facebook</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-brand-lg bg-mint text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Facebook className="w-32 h-32" />
          </div>
          <p className="text-2xl md:text-3xl font-serif font-bold mb-6">
            ¿Quieres formar parte de nuestro próximo taller? 
          </p>
          <Link 
            to="/contacto" 
            className="inline-block px-10 py-5 bg-yellow text-slate-900 font-bold rounded-brand hover:bg-white transition-all shadow-xl transform hover:-translate-y-1"
          >
            Reserva tu plaza ahora
          </Link>
        </div>
      </div>
    </section>
  );
};