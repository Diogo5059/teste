// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-title">Sobre Nós</h1>
      
      <section className="about-section">
        <h2>Nossa História</h2>
        <p>
          Fundada em 2020, nossa empresa nasceu da paixão por oferecer produtos de qualidade 
          com preços acessíveis. Começamos como uma pequena operação e crescemos graças ao 
          apoio contínuo de nossos clientes fiéis.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é proporcionar uma experiência de compra excepcional, oferecendo produtos 
          premium e um atendimento ao cliente de primeira linha. Acreditamos em relacionamentos 
          duradouros baseados na confiança e na satisfação.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Nossos Valores</h2>
        <ul className="values-list">
          <li><strong>Qualidade:</strong> Compromisso com a excelência em tudo o que fazemos</li>
          <li><strong>Integridade:</strong> Conduzimos nossos negócios com ética e transparência</li>
          <li><strong>Inovação:</strong> Buscamos constantemente novos produtos e melhorias</li>
          <li><strong>Sustentabilidade:</strong> Compromisso com práticas responsáveis e ecológicas</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>Nossa Equipe</h2>
        <p>
          Contamos com profissionais dedicados e apaixonados pelo que fazem. Nossa equipe 
          trabalha diariamente para garantir que você tenha a melhor experiência possível 
          ao comprar conosco.
        </p>
      </section>
    </div>
  );
};

export default About;