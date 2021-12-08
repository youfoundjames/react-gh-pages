
import logoCircle from '../../assets/header/logo_circle.png'
import red from '../../assets/header/steelFolders/red.png'
import yellow from '../../assets/header/steelFolders/yellow.png'
import green from '../../assets/header/steelFolders/green.png'
import blue from '../../assets/header/steelFolders/blue.png'
import white from '../../assets/header/steelFolders/white.png'
import Jazz from '../Jazz'
import Contact from '../Contact'
import ElderJack from '../ElderJack'
import Mother from '../Mother'

const folderContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
}
const folderText = {
    fontSize: 10,
    fontFamily: 'Times New Roman',
    marginTop: -10,
    fontStyle: 'italic',
}
const folderTextAlt = {
    fontSize: 10,
    fontFamily: 'Times New Roman',
    marginTop: -6,
    fontStyle: 'italic'
}
let redTruth, greenTruth, silverTruth, blueTruth, yellowTruth;
redTruth = greenTruth = silverTruth = blueTruth = yellowTruth = false;

const Header = () => {

    return (
        <div>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 50, display: 'flex', justifyContent: 'space-between' }}>
                {/* <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <button onClick={handleRedPress}>
                        <div style={folderContainer}>
                            <img src={red} style={{ height: 90 }} />
                            <p style={folderText}>HOME/PORTFOLIO</p>
                        </div>
                    </button>
                    <button onClick={handleGreenPress}>
                        <div style={folderContainer}>
                            <img src={green} style={{ height: 85, marginTop: 30, marginBottom: 2 }} />
                            <p style={folderTextAlt}>ELDER JACK </p>
                        </div>
                    </button>
                    <button onClick={handleSilverPress}>
                        <div style={folderContainer}>
                            <img src={white} style={{ height: 90 }} />
                            <p style={folderText}>MOTHER </p>
                        </div>
                    </button>
                    <button onClick={handleBluePress}>
                        <div style={folderContainer}>
                            <img src={blue} style={{ height: 85, marginTop: 30, marginBottom: 2 }} />
                            <p style={folderTextAlt}>JAZZ </p>
                        </div>
                    </button>
                    <button onClick={handleYellowPress}>
                        <div style={folderContainer}>
                            <img src={yellow} style={{ height: 90 }} />
                            <p style={folderText}>CONTACT</p>
                        </div>
                    </button>
                </div> */}

                <img src={logoCircle} className="App-logo" alt="logo" height="350" style={{ position: 'absolute', right: "10%" }} />
            </div>
            {greenTruth ? <div>Elder JAck</div> : null}
            {silverTruth ? <Mother /> : null}
            {blueTruth ? <Jazz /> : null}
            {yellowTruth ? <Contact /> : null}
        </div>

    )
}

const handleRedPress = async () => {
    redTruth = true;
    greenTruth = silverTruth = blueTruth = yellowTruth = false;
    console.log("redTruth: ", redTruth, ", greenTruth: ", greenTruth, ", silverTruth: ", silverTruth, ", blueTruth: ", blueTruth, ", yellowTruth: ", yellowTruth)
}

const handleGreenPress = async () => {
    greenTruth = true;
    redTruth = silverTruth = blueTruth = yellowTruth = false;
    console.log("redTruth: ", redTruth, ", greenTruth: ", greenTruth, ", silverTruth: ", silverTruth, ", blueTruth: ", blueTruth, ", yellowTruth: ", yellowTruth)
}

const handleSilverPress = () => {
    silverTruth = true;
    redTruth = greenTruth = blueTruth = yellowTruth = false;
    console.log("redTruth: ", redTruth, ", greenTruth: ", greenTruth, ", silverTruth: ", silverTruth, ", blueTruth: ", blueTruth, ", yellowTruth: ", yellowTruth)
}

const handleBluePress = () => {
    blueTruth = true;
    redTruth = greenTruth = silverTruth = yellowTruth = false;
    console.log("redTruth: ", redTruth, ", greenTruth: ", greenTruth, ", silverTruth: ", silverTruth, ", blueTruth: ", blueTruth, ", yellowTruth: ", yellowTruth)
}

const handleYellowPress = () => {
    yellowTruth = true;
    redTruth = greenTruth = silverTruth = blueTruth = false;
    console.log("redTruth: ", redTruth, ", greenTruth: ", greenTruth, ", silverTruth: ", silverTruth, ", blueTruth: ", blueTruth, ", yellowTruth: ", yellowTruth)
}

export default Header;