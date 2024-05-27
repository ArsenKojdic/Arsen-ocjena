
import airmax901 from './airmax901.jpg';
import airmax2 from './airmax2.jpg';
import airmax903 from './airmax903.jpg';
import airmax904 from './airmax904.jpg';
import airmax5 from './airmax5.jpg';
import { Link } from 'react-router-dom';
import Insta from "./instagram.png";


function AirMax() {
  return (
    <div >
      <header><p>Stranicu izradio: Arsen Kojdić</p></header>

      <h1>Air Max 90</h1>
      <br></br>
      <p class="uvod"> Nike Air Max 90 su tenisice za slobodno vrijeme, čiji je oblik inspiriran originalom iz 1990. godine koji je imao legendarnu amortizaciju Air Max, s kojom se Nike proslavio diljem svijeta. Tenisice imaju laganu i prozračnu konstrukciju te sintetički gornji dio koji dodano naglašava legendarni izgled.
      </p>


      <content>
        <div class="container">
          <div class='box'>
            <img src={airmax901}></img><br></br>
            <p>Air Max 90 1</p>

          </div>
          <div class="box">
            <img src={airmax2}></img><br></br>
            <p>Air Max 90 2</p>

          </div>
          <div class="box">
            <img src={airmax903}></img><br></br>
            <p>Air Max 90 3</p>

          </div>
          <div class="box">
            <img src={airmax904}></img><br></br>
            <p>Air Max 90 4</p>

          </div>
          <div class="box">
            <img src={airmax5}></img><br></br>
            <p>Air Max 90 5</p>

          </div>
          <br></br>
          <br></br>
          <br></br>
          <div class="brojevi"> <p>Dostupni brojevi: 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5</p></div>
        </div>
      </content>
      <footer><Link to='/'>Link za povratak na početnu stranicu.</Link></footer>
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

export default AirMax;