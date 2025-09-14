import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "ProtoNature - Soluciones Energéticas Innovadoras",
  description = "Soluciones energéticas innovadoras para un futuro más limpio y eficiente. Paneles solares, hidroponía, baterías y energía eólica.",
  keywords = "energía solar, hidroponía, baterías, energía renovable, paneles solares, sostenibilidad, Argentina",
  image = "/logo512.png",
  url = "https://protonature.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ProtoNature" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ProtoNature" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Viewport y otros */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1f2937" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ProtoNature",
          "url": url,
          "logo": image,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Machain 4639",
            "addressLocality": "Capital Federal",
            "addressCountry": "AR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+54-114545-9037",
            "contactType": "customer service",
            "email": "proyectos@protonature.com"
          },
          "sameAs": [
            "https://www.facebook.com/p/Protonature-100081917389045/?locale=es_LA"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
