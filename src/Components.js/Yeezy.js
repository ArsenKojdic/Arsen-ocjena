import { Link } from 'react-router-dom';
import yeezy1 from './yeezy1.jpeg';
import yeezy2 from './yeezy2.jpg';
import yeezy3 from './yeezy3.jpg';
import yeezy4 from './yeezy4.jpg';
import yeezy5 from './yeezy5.jpg';
import Propss from './Propss';
import Insta from "./instagram.png";



function Yeezy() {

  return (
    <div >
      <header><p>Stranicu izradio: Arsen Kojdić</p></header>

      <h1>Yeezy 350</h1>
      <br></br>
      <p class="uvod">Adidas Yeezy ili samo Yeezy  bila je modna suradnja između američkog repera, dizajnera i poduzetnika Yeezy Kanyea Westa i njemačke tvrtke za sportsku odjeću Adidas . Nudio je tenisice u bojama ograničenog izdanja. Yeezy je utjecao i inspirirao mnoštvo drugih modnih marki. Izvan bivše Adidasove suradnje, Yeezy je ime Kanyeove tvrtke Yeezy LLC i nije povezana s Adidasom.
      </p>


      <content>
        <div class="container">
          <div class='box'>
            <img src={yeezy1}></img>
            <br></br>
            <Propss></Propss>

          </div >
          <div className="app">
            <img src={yeezy2}></img><br></br>
            <p>Yeezy 350 2</p>
          </div>
          <div class="box">
            <img src={yeezy3}></img><br></br>
            <p>Yeezy 350 3</p>
          </div>
          <div class="box">
            <img src={yeezy4}></img><br></br>
            <p>Yeezy 350 4</p>
          </div>
          <div class="box">
            <img src={yeezy5}></img><br></br>
            <p>Yeezy 350 5</p>
          </div>
          <br></br>
          <div class="brojevi"> <p>Dostupni brojevi: 39, 39 2/3, 40 1/3, 41, 41 2/3, 42 1/3, 43, 43 2/3, 44 1/3, 45, </p></div>
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

export default Yeezy;