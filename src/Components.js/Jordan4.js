import jordan41 from './jordan41.jpg';
import jordan42 from './jordan42.jpg';
import jordan43 from './jordan43.jpg';
import jordan44 from './jordan44.jpg';
import jordan45 from './jordan45.jpg';
import { Link } from 'react-router-dom';
import Insta from "./instagram.png";


function Jordan4() {
    return (
        <div >
            <header><p>Stranicu izradio: Arsen Kojdić</p></header>
            <h1>Jordan 4</h1>
            <br></br>
            <p class="uvod"> Sports Illustrated je 16. studenog 1988. godine objavio poseban broj C
                ollege Basketball Preview u kojem je između ostalog prikazana sezona '88-'89 i u kojem su
                čitatelji upoznali neke od nadolazećih talenata iz cijele zemlje.Skriven u pozadini, u dugometražnom filmu na Nikeovom Sonny Vaccaro - čovjek koji je četiri godine ranije dogovorio prvi ugovor s markom Michaela Jordana za cipele - bio je slika Phila Knighta s nekoliko zanimljivih cipela. Suosnivač Nikea je sjedio na stolu držeći bijelu tenisicu s crno-sivim isticanjima i logotipom Nike Aira na peti, dok je pored njega bila prvenstveno crna verzija istog modela s crveno-sivim naglascima i Jumpmanovim logotipom jasno vidljivim na jeziku.
            </p>


            <content>
                <div class="container">
                    <div class='box'>
                        <img src={jordan41}></img><br></br>
                        <p>Jordan 4 1</p>

                    </div>
                    <div class="box">
                        <img src={jordan42}></img><br></br>
                        <p>Jordan 4 2</p>

                    </div>
                    <div class="box">
                        <img src={jordan43}></img><br></br>
                        <p>Jordan 4 3</p>

                    </div>
                    <div class="box">
                        <img src={jordan44}></img><br></br>
                        <p>Jordan 4 4</p>

                    </div>
                    <div class="box">
                        <img src={jordan45}></img><br></br>
                        <p>Jordan 4 5</p>

                    </div>
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

export default Jordan4;