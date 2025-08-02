import yo from "../assets/yo.jpg"; // colocá tu imagen real en /src/assets

export default function Presentacion() {
  return (
    <section>
      <div className="profile">
        <img src={yo} alt="Mi foto" />
        <h1>¡Hola! Soy Ayrton</h1>
      </div>
      <p>
        Soy estudiante de Licenciatura en Informática. Me apasionan las
        tecnologías web, el desarrollo de software y la automatización.
      </p>
      <p>
        Este sitio es mi lugar personal donde compartiré mis avances, mis
        proyectos y todo lo que voy aprendiendo en mi camino académico. También
        estoy interesado en inteligencia artificial, interfaces modernas y
        programación orientada a soluciones reales.
      </p>
    </section>
  );
}
