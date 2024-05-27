import yeezy1 from './yeezy1.jpeg';
import airmax901 from './airmax901.jpg';
import dunk4 from './dunk4.jpg';
import jordan43 from './jordan43.jpg';
import Insta from "./instagram.png";
import { Link } from 'react-router-dom';

function Naslovna() {
  return (
    <div >
      <headerr><p>Stranicu izradio: Arsen Kojdić</p></headerr>
<header>
      <h1>KOJDA'S SHOP</h1>
      <br></br>
      <p class="uvod">O nama: relativno smo nova tvrtka koja posluje od danas. Svake druge subote u mjesecu imamo 5% popusta na sve artikle iz našeg dućana. Plaćanje je moguće po pouzeću i karticom, a ako ste naš ćlan imate 10% popusta na svaku kupnju. S obzirom da smo novi nemamo mnogo artikala ali s vremenom ćemo pokušati širiti i povećavati firmu. Uskoro ide otvorenje prodavaonice u Zagrebu i Spitu.
         </p>
</header>
      
  <content>
      <div class="container">
        <div class='box'><img src={yeezy1}></img><br></br>
        <Link to ='/Yeezy'>Yeezy 350</Link>
        </div>

        <div class="box">
          <img src={airmax901}></img><br></br>
          <Link to ='/AirMax'>Air Max 90</Link>
        </div>

        <div class="box">
          <img src={jordan43}></img><br></br>
          <Link to ='/Jordan4'>Jordan 4</Link>
        </div>

        <div class="box">
          <img src={dunk4}></img><br></br>
          <Link to ='/Dunk'>Nike dunk low</Link>
        </div>

      </div>
    </content>
      <footer> <Link to ='/Kupovina'>Link za naručivanje tenisica i učlanjivanje.</Link></footer>
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

export default Naslovna;