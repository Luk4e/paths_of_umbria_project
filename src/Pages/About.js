import React from 'react';

const About = () => {

  const styleDivHome = {
    padding: '30px',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    margin: '2% 5% 3% 5%',
  };


  const divAlignStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  return(
    <div style={styleDivHome}>
      <h2>Il progetto</h2>
      <h6 style={{ marginTop: '50px' }}>
        Il sito è stato sviluppato come esercizio personale per imparare ad utilizare tecnologie web informatiche e per poter
        trovare in poco tempo un percorso da effettuare nelle belle giornate.<br/>
        Le informazioni riguardanti i percorsi presenti sono state prese principalemente da altri siti come: <a style={{ color:'green' }} href='http://www.trekkingumbria.it/'>trekkingumbria</a>
        - <a href='http://www.parks.it/' style={{ color:'green' }}>parks</a> -
        <a style={{ color:'green' }} href='https://www.lagotrasimeno.net/'>lagotrasimeno</a>.<br/>
        Lo stato dei percorsi e la loro attuale presenza è basata sulle fonti sopra citate, per questo non mi assumo nessuna responsabilità
        riguardante la percorribilità e la precisione delle indicazioni.<br/> Utilizzo anche io questa applicazione per effettuare escusioni e fino ad ora
        non ho incontrato difficoltà nel percorrere i sentieri.<br/>
        Tutto il progetto non ha nessuno scopo di lucro, l&apos;unico scopo è quello di aiutare altri nella ricerca di percorsi,
        e nessun dato viene raccolto durante la navigazione.
      </h6>
      <br/>
      <cite><a style={{ textDecoration:'none', color:'green' }} href="https://www.flaticon.com/free-icons/hiking" title="hiking icons">Hiking icons created by monkik - Flaticon</a></cite>
    </div>
  );
};

export default About;
