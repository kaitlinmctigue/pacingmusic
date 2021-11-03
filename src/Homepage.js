import './Homepage.scss';
import WindowBlock from './components/WindowBlock/WindowBlock';
import headshot from './images/headshot.png';

function Homepage() {
    return (
        <div className="Homepage">
            <WindowBlock header={'Welcome!'}>
                <div className={'intro'}>
                    <div className={'intro-pic'}>
                        <img src={headshot} className={'intro-pic--pic'}/>
                        <div className={'intro-pic__name'}>Pacing</div>
                        <div className={'intro-pic__desc'}>Musician / Band</div>
                        <div className={'intro-pic__desc'}>Pittsburgh, PA</div>
                    </div>
                    <div className={'intro-text-box'}>
                        <div>
                            <p>Hi! I'm Katie. Thanks for visiting my website for my little band.</p>
                            <p>
                                Pacing is a project where I get to try on a bunch of different characters and see what they have
                                to say. Most of them are profane, self-obsessed, shameless unreliable narrators… I guess a
                                little bit of the real me always manages to slip in.
                            </p>
                            <p>
                                My partner Ben has gone out of his way to avoid being in my band, but unfortunately he’s really good at guitar and drums so he’s here to stay. Other talented friends who help often include Pete Coles (Ramoray, Longpond) and Logan Castro (the piano wizard).
                            </p>
                            <p>
                                I love to connect with other invisible internet musicians and collaborate remotely.
                            </p>
                        </div>
                    </div>
                </div>
            </WindowBlock>
        </div>
    );
}

export default Homepage;
