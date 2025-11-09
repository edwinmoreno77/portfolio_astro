import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.edwinm.dev/#person",
    "name": "Edwin Moreno",
    "givenName": "Edwin",
    "familyName": "Moreno",
    "additionalName": "Moreno",
    "alternateName": [
      "Edwin Moreno Pérez",
      "Edwin Moreno Perez", 
      "Edwin M.",
      "Edwin",
      "edwinmoreno777",
      "edwin moreno dev",
      "edwin dev"
    ],
    "url": "https://www.edwinm.dev",
    "image": "https://www.edwinm.dev/me.webp",
    "description": "Edwin Moreno es un desarrollador Full Stack con más de 3 años de experiencia en Chile, especializado en React, TypeScript, JavaScript, Node.js y desarrollo web moderno",
    "jobTitle": "Desarrollador Full Stack",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Chile"
      },
      "skills": "React, JavaScript, TypeScript, Node.js, Next.js, Tailwind CSS, Astro, Web Development, Frontend, Backend"
    },
    "email": "mailto:edwinmoreno777@gmail.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressLocality": "Chile"
    },
    "nationality": {
      "@type": "Country",
      "name": "Chile"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Autodidacta"
    },
    "knowsAbout": [
      "Desarrollo Web",
      "Programación",
      "React",
      "JavaScript", 
      "TypeScript",
      "Node.js",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Next.js",
      "Tailwind CSS",
      "Astro",
      "Web Design",
      "RESTful APIs",
      "Git",
      "GitHub"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Español",
        "alternateName": "Spanish"
      },
      {
        "@type": "Language", 
        "name": "Inglés",
        "alternateName": "English"
      }
    ],
    "sameAs": [
      "https://github.com/edwinmoreno777",
      "https://linkedin.com/in/edwinmoreno777",
      "https://twitter.com/edwinmoreno777",
      "https://www.edwinm.dev"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.edwinm.dev"
    }
  };

  return new Response(JSON.stringify(personData, null, 2), {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
