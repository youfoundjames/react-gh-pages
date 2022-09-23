import ReactPlayer from 'react-player';
import chakra from '../../assets/gif/chakra.gif'
import followus from '../../assets/gif/instagram.gif'
import social from '../../assets/pics/social.png'

const iframeStyle = { width: 300, height: 300, padding: 30, border: 0 };

const DesktopBody = () => {

    return (
        <div>
            <div style={{ marginTop: "5%" }}>
                <img src={chakra} style={{ marginLeft: "65%" }} />

                <div style={{ marginLeft: '10%', width: "50%", display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-end", alignItems: 'flex-end', marginTop: -2 }}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=45CrnbpOg-I' height={300} style={{ padding: 30 }} />
                        <ReactPlayer url='https://www.youtube.com/watch?v=cRLwoJFgDpU' height={300} style={{ padding: 30 }} />
                        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1071769704/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://unknowngarden.bandcamp.com/album/insurrection">Insurrection by Cook/Priest/Bennington/Cruz/Hunger</a></iframe>
                    </div>

                    <div>
                        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=3470799112/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://unknowngarden.bandcamp.com/album/butane">Butane by Barn Cat</a></iframe>
                        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1292619424/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://unknowngarden.bandcamp.com/album/afterimages">Afterimages by James Cook Group</a></iframe>
                        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=374340348/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://carlbaugher.bandcamp.com/album/wind-shape">Wind Shape by Steve Cohn Quartet</a></iframe>
                    </div>

                    <div>
                        <iframe style={iframeStyle} />
                        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=1601687903/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://unknowngarden.bandcamp.com/album/zac-nunnery-james-cook">Zac Nunnery/James Cook by Zac Nunnery/James Cook</a></iframe>
                        <iframe style={iframeStyle} src="https://bandcamp.com/EmbeddedPlayer/album=3064644864/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://unknowngarden.bandcamp.com/album/ambient-works-one">Ambient Works One by Barn Cat</a></iframe>
                    </div>



                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                <a href="https://instagram.com/jamescookonline" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src={social} height='40' />
                    </div>
                    <div>
                        <img src={followus} height='100' style={{ marginTop: -27 }} />
                    </div>

                </a>
                {/* 
            <div style={{ margin: 'auto', width: "70%" }}>
                <br />
                <p>pretentious jazz bio: guitarist, alto saxophonist, composer, new media artist, currently based in New York; leader of ensembles performing original music,
                founding member of drone duo Mother and band Elder Jack (LPs of both due out 2022), performer in ensembles led by William Parker,
                Dennis Warren, David Liebman, Steve Cohn, Chuck Fertal, and others; designer of semi-autonomous visual systems for performance and otherwise
                </p><br />
                <p><br />thanks for visiting my wwweb world, google Murray Bookchin</p><br /><br /><br /><br /><br /><br />
            </div> */}

                <p><br /><br />cookjamesarthur (at) gmail [dot] com</p>
                
                <p><br />Thanks for visiting my wwweb world. More soon</p><br /><br /><br /><br /><br /><br />
            
            </div>
        </div>
    )
}

export default DesktopBody;