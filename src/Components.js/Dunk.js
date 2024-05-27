import { Link } from 'react-router-dom';
import dunk1 from './dunk1.jpg';
import dunk2 from './dunk2.jpg';
import dunk3 from './dunk3.jpg';
import dunk4 from './dunk4.jpg';
import dunk5 from './dunk5.jpg';
import Insta from "./instagram.png";




function Dunk() {
    return (
      <div >
  <header><p>Stranicu izradio: Arsen Kojdić</p></header>
  
        <h1>Nike Dunk low</h1>
        <br></br>
        <p class="uvod">Prvi Nike Dunk je bio vrhunska tenisica napravljena za upotrebu na terenima koledža I. Nekoliko godina nakon izlaska Nike Dunk Low iz 1985. godine, film je ušao u kino distribuciju te je ubrzo postao jednako popularan kao njegov high-top pandan. Dok su najraniji Lows napravljeni za muškarce, slijedile su tenisice usmjerene na žene, a danas postoji širok izbor niskih vrhova za odabir.
           </p>
  
        
    <content>
        <div class="container">
          <div class='box'>
            <img src={dunk1}></img>
            <br></br>
           <p> Nike Dunk low 1</p>
          </div>
          <div class="box">
            <img src={dunk2}></img><br></br>
            <p>Nike Dunk low 2</p>
          </div>
          <div class="box">
            <img src={dunk3}></img><br></br>
            <p>Nike Dunk low 3</p>
          </div>
          <div class="box">
            <img src={dunk4}></img><br></br>
            <p>Nike Dunk low 4</p>
          </div>
          <div class="box">
            <img src={dunk5}></img><br></br>
            <p>Nike Dunk low 5</p>
          </div>
          <br></br>
          <div class="brojevi"> <p>Dostupni brojevi: 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5</p></div>
        </div>
      </content>
        <footer><p><Link to='/'>Link za povratak na početnu stranicu.</Link></p></footer>
        <div className='footer'>
        <div className='footer1'>
        <h2>Dućan za patike</h2>
        <p>Copyright© 2024. Sva prava pridržana Arsen Kojdić</p>
        </div>
        <div className='footer2'>
        <h3>Zaprati me:</h3>
        <img src={Insta}></img>
        </div>
        </div>
      </div>
    );
  }
  
  export default Dunk;