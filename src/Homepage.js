import './Homepage.scss';
import WindowBlock from './components/WindowBlock/WindowBlock';

function Homepage() {
    return (
        <div className="Homepage">
            <WindowBlock header={'Welcome!'}>
                <div className={'test'}>
                    <p>Hi! I'm Katie. Thanks for visiting my website for my little internet band.</p>
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
            </WindowBlock>
        </div>
    );
}

export default Homepage;
