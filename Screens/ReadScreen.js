import React from 'react';
import { FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Picker, Spinner, Icon } from "native-base";
import { categories } from './SelectNameCatScreen';
import { Button, } from 'react-native-elements';

function processResponse(response) {
  scode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}

export default class Todos extends React.Component {

  constructor() {
    super();
    this.state = {
      textInput: '',
      amountInput: '',
      todos: [],
      loaded: false,
      counted: 0,
      errorMessage: null,
      status: ''
    };
    this.arrayHolder = [];
    if (categories == 'All') {
      Names = AllNames
    } else if (categories == 'Things') {
      Names = Things
    } else if (categories == 'Creatures') {
      Names = Creatures
    } else if (categories == 'Places') {
      Names = Places
    } else if (categories == 'Ideas') {
      Names = Ideas
    }
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  updateTextInput(value) {
    //const { currentUser } = firebase.auth()
    this.setState({ textInput: value });
  }

  updateAmountInput(value) {
    //const { currentUser } = firebase.auth()
    this.setState({ amountInput: value });
  }

  addRead() {
    this.load()
    return fetch('http://www.voidscribe.com/GenerateNames', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "Name_Type": this.state.textInput,
        "Amount": Number.parseInt(this.state.amountInput),

      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loaded: false,
          todos: responseJson.Data,
        })
      })

      .catch(error => this.setState({ errorMessage: error.errorMessage }))
  }

  load() {
    this.setState({
      loaded: true,
      todos: [],
    })

  }
  render() {
    return (
      <ImageBackground source={require('../assets/abstract-ancient-antique.jpg')} style={styles.container}>
        <Text></Text>
        <Text></Text>
        <View style={styles.viewc}>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <View style={styles.viewscroll}>
            <ScrollView
              contentContainerStyle={styles.scroll}
              backgroundColor='rgba(195,195,195,.3)'
            >
              <FlatList
                contentContainerStyle={styles.list}
                data={this.state.todos}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
              />
              <Text></Text>
              <ActivityIndicator size="large" color="#681382"
                animating={this.state.loaded}
                hidesWhenStopped={true} />
            </ScrollView>
          </View>
          <View style={styles.container1}>
            <Text></Text>

            <Picker
              iosIcon={<Icon name="arrow-down" />}
              mode="dropdown"
              placeholder="Select Name Type..."
              style={styles.pickerstyle}
              textStyle={{ color: "white" }}
              placeholderStyle={{ color: "white" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.textInput}
              onValueChange={(value) => this.updateTextInput(value)}
            >
              {Object.keys(Names).map((key) => {
                return (<Picker.Item label={Names[key]} value={key} key={key} />)
              })}
            </Picker>

            <Text></Text>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              mode="dropdown"
              placeholder="Select Amount of Names..."
              style={styles.pickerstyle}
              textStyle={{ color: "white" }}
              placeholderStyle={{ color: "white" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.amountInput}
              onValueChange={(value) => this.updateAmountInput(value)}
            >
              <Picker.Item label="5" value="5" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="35" value="35" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="45" value="45" />
              <Picker.Item label="50" value="50" />
            </Picker>
          </View>
          <Text></Text>
          <Button
            large
            rounded
            title={'Generate Names'}
            backgroundColor={'#681382'}
            disabled={!this.state.textInput.length}
            disabled={!this.state.amountInput.length}
            onPress={() => this.addRead()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title="Back"
            backgroundColor={'#681382'}
            onPress={() => this.props.navigation.navigate('SelectNameCatScreen')}
          />
        </View>
      </ImageBackground>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  viewc: {
    flex: 1,
  },

  module: {
    fontSize: 30,
    marginTop: 4,
    textAlign: 'center',
    width: '80%',
  },
  scroll: {
    alignItems: 'center',

    //width: '80%',
  },
  item: {
    fontSize: 20,

  },
  viewscroll: {
    borderWidth: 2,
    height: '50%'
  },
  pickerstyle: {
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    backgroundColor: '#681382'
  }

});
var Names = {}
var AllNames = {
  "americanCities": "American Cities",
  "americanCompanies": "American Companies",
  "americanDesserts": "American Desserts",
  "americanForenames": "American Forenames",
  "americanForenamesFemale": "American Forenames Female",
  "americanForenamesMale": "American Forenames Male",
  "americanStates": "American States",
  "americanSurnames": "American Surnames",
  "animals": "Animals",
  "animalSounds": "Animal Sounds",
  "artTypes": "Art Types",
  "birdCommonNames": "Bird Common Names",
  "boardGames": "Board Games",
  "boatTypes": "Boat Types",
  "bodyParts": "Body Parts",
  "breads": "Breads",
  "breakfastCereals": "Breakfast Cereals",
  "britishDesserts": "British Desserts",
  "brythonicDeities": "Brythonic Deities",
  "buildingTypes": "Building Types",
  "cakes": "Cakes",
  "capitolCities": "Capitol Cities",
  "carBrands": "Car Brands",
  "carParts": "Car Parts",
  "chineseCities": "Chinese Cities",
  "citiesWorldWide": "Cities World Wide",
  "clothing": "Clothing",
  "cocktails": "Cocktails",
  "colours": "Colours",
  "constellationsModern": "Constellations Modern",
  "cookingUtensils": "Cooking Utensils",
  "countries": "Countries",
  "cryptocurrencies": "Cryptocurrencies",
  "currencies": "Currencies",
  "danceStyles": "Dance Styles",
  "dataStructures": "Data Structures",
  "dinosaurs": "Dinosaurs",
  "diseases": "Diseases",
  "dogNames": "Dog Names",
  "dragons": "Dragons",
  "drinks": "Drinks",
  "dutchForenames": "Dutch Forenames",
  "egyptianDeities": "Egyptian Deities",
  "emotions": "Emotions",
  "englishTowns": "English Towns",
  "ethnicGroupsContemporary": "Ethnic Groups Contemporary",
  "fabrics": "Fabrics",
  "fellsInCambria": "Fells In Cambria",
  "fish": "Fish",
  "flowersCommonNames": "Flowers Common Names",
  "frenchForenames": "French Forenames",
  "fruit": "Fruit",
  "furniture": "Furniture",
  "generation1Pokemon": "Generation 1 Pokemon",
  "generation2Pokemon": "Generation 2 Pokemon",
  "generation3Pokemon": "Generation 3 Pokemon",
  "generation4Pokemon": "Generation 4 Pokemon",
  "generation5Pokemon": "Generation 5 Pokemon",
  "generation6Pokemon": "Generation 6 Pokemon",
  "generation7Pokemon": "Generation 7 Pokemon",
  "germanForenames": "German Forenames",
  "germanTowns": "German Towns",
  "greekIslands": "GreekIslands",
  "herbsCommonNames": "Herbs Common Names",
  "hinduDeities": "Hindu Deities",
  "hobbies": "Hobbies",
  "homeAppliances": "Home Appliances",
  "indianForenames": "Indian Forenames",
  "irishForenames": "Irish Forenames",
  "iselandicForenames": "Iselandic Forenames",
  "italianCities": "ItalianCities",
  "italianFoods": "Italian Foods",
  "italianForenames": "Italian Forenames",
  "japaneseCities": "Japanese Cities",
  "japaneseForenames": "Japanese Forenames",
  "langauges": "Langauges",
  "magicSpells": "Magic Spells",
  "meats": "Meats",
  "minerals": "Minerals",
  "musicalInstruments": "Musical Instruments",
  "musicalStyles": "Musical Styles",
  "mythicalHumanoids": "Mythical Humanoids",
  "norseDeityForenames": "Norse Deity Forenames",
  "norwegianFjords": "Norwegian Fjords",
  "nutsAndSeeds": "Nuts and Seeds",
  "periodicElements": "Periodic Elements",
  "personalityTraits": "Personality Traits",
  "philosophies": "Philosophies",
  "pies": "Pies",
  "placeNameAfghanistan": "Place Name Afghanistan",
  "placeNameAlandIslands": "Place Name Aland Islands",
  "placeNameAlbania": "Place Name Albania",
  "placeNameAlgeria": "Place Name Algeria",
  "placeNameAmericanSamoa": "Place Name American Samoa",
  "placeNameAndorra": "Place Name Andorra",
  "placeNameAngola": "Place Name Angola",
  "placeNameAnguilla": "Place Name Anguilla",
  "placeNameAntarctica": "Place Name Antarctica",
  "placeNameAntiguaAndBarbuda": "Place Name Antigua and Barbuda",
  "placeNameArgentina": "Place Name Argentina",
  "placeNameArmenia": "Place Name Armenia",
  "placeNameAruba": "Place Name Aruba",
  "placeNameAscensionandTristandaCunhaSaintHelena": "Place Name Ascension and Tristanda Cunha Saint Helena",
  "placeNameAustralia": "Place Name Australia",
  "placeNameAustria": "Place Name Austria",
  "placeNameAzerbaijan": "Place Name Azerbaijan",
  "placeNameBahamas": "Place Name Bahamas",
  "placeNameBahrain": "Place Name Bahrain",
  "placeNameBangladesh": "Place Name Bangladesh",
  "placeNameBarbados": "Place Name Barbados",
  "placeNameBelarus": "Place Name Belarus",
  "placeNameBelgium": "Place Name Belgium",
  "placeNameBelize": "Place Name Belize",
  "placeNameBenin": "Place Name Benin",
  "placeNameBermuda": "Place Name Bermuda",
  "placeNameBhutan": "Place Name Bhutanank",
  "placeNameBolivarianRepublicofVenezuela": "Place Name Bolivarian Republic of Venezuela",
  "placeNameBosniaAndHerzegovina": "Place Name Bosnia and Herzegovina",
  "placeNameBotswana": "Place Name Botswana",
  "placeNameBouvetIsland": "Place Name Bouvet Island",
  "placeNameBrazil": "Place Name Brazil",
  "placeNameBritishIndianOceanTerritory": "Place Name British Indian Ocean Territory",
  "placeNameBritishVirginIslands": "Place Name British Virgin Islands",
  "placeNameBruneiDarussalam": "Place Name Brunei Darussalam",
  "placeNameBulgaria": "Place Name Bulgaria",
  "placeNameBurkinaFaso": "Place Name Burkina Faso",
  "placeNameBurundi": "Place Name Burundi",
  "placeNameCambodia": "placeNameCambodia",
  "placeNameCameroon": "Place Name Cameroon",
  "placeNameCanada": "Place Name Canada",
  "placeNameCapeVerde": "Place Name Cape Verde",
  "placeNameCaymanIslands": "Place Name Cayman Islands",
  "placeNameCentralAfricanRepublic": "Place Name Central African Republic",
  "placeNameChad": "Place Name Chad",
  "placeNameChile": "Place Name Chile",
  "placeNameChina": "Place Name China",
  "placeNameChristmasIsland": "Place Name Christmas Island",
  "placeNameCocosKeelingIslands": "Place Name Cocos Keeling Islands",
  "placeNameColombia": "Place Name Colombia",
  "placeNameComoros": "Place Name Comoros",
  "placeNameCongo": "Place Name Congo",
  "placeNameCookIslands": "Place Name Cook Islands",
  "placeNameCostaRica": "Place Name Costa Rica",
  "placeNameCroatia": "Place Name Croatia",
  "placeNameCuba": "Place Name Cuba",
  "placeNameCuracao": "Place Name Curacao",
  "placeNameCyprus": "Place Name Cyprus",
  "placeNameCzechRepublic": "Place Name Czech Republic",
  "placeNameDemocraticPeoplesRepublicofKorea": "Place Name Democratic Peoples Republic of Korea",
  "placeNameDenmark": "Place Name Denmark",
  "placeNameDjibouti": "Place Name Djibouti",
  "placeNameDominica": "Place Name Dominica",
  "placeNameDominicanRepublic": "Place Name Dominican Republic",
  "placeNameEcuador": "Place Name Ecuador",
  "placeNameEgypt": "Place Name Egypt",
  "placeNameElSalvador": "Place Name El Salvador",
  "placeNameEquatorialGuinea": "Place Name Equatorial Guinea",
  "placeNameEritrea": "Place Name Eritrea",
  "placeNameEstonia": "Place Name Estonia",
  "placeNameEthiopia": "Place Name Ethiopia",
  "placeNameFalklandIslandsMalvinas": "Place Name Falkl and Islands Malvinas",
  "placeNameFaroeIslands": "Place Name Faroe Islands",
  "placeNameFederatedStatesofMicronesia": "Place Name Federated States of Micronesia",
  "placeNameFiji": "Place Name Fiji",
  "placeNameFinland": "Place Name Finland",
  "placeNameFrance": "Place Name France",
  "placeNameFrenchGuiana": "placeNameFrenchGuiana",
  "placeNameFrenchGuiana": "placeNameFrenchGuiana",
  "placeNameFrenchSouthernTerritories": "Place Name French Southern Territories",
  "placeNameGabon": "Place Name Gabon",
  "placeNameGambia": "Place Name Gambia",
  "placeNameGeorgia": "Place Name Georgia",
  "placeNameGhana": "Place Name Ghana",
  "placeNameGibraltar": "Place Name Gibraltar",
  "placeNameGreece": "Place Name Greece",
  "placeNameGreenland": "Place Name Greenland",
  "placeNameGrenada": "Place Name Grenada",
  "placeNameGuadeloupe": "Place Name Guadeloupe",
  "placeNameGuam": "Place Name Guam",
  "placeNameGuatemala": "Place Name Guatemala",
  "placeNameGuernsey": "Place Name Guernsey",
  "placeNameGuinea": "Place Name Guinea",
  "placeNameGuineaBissau": "Place Name Guinea Bissau",
  "placeNameGuyana": "Place Name Guyana",
  "placeNameHaiti": "Place Name Haiti",
  "placeNameHeardIslandandMcDonaldIslands": "Place Name Heard Island and McDonald Islands",
  "placeNameHolySeeVaticanCityState": "Place Name Holy See Vatican City State",
  "placeNameHonduras": "Place Name Honduras",
  "placeNameHongKong": "Place Name Hong Kong",
  "placeNameHungary": "Place Name Hungary",
  "placeNameIceland": "Place Name Iceland",
  "placeNameIndia": "Place NameIndia",
  "placeNameIndonesia": "Place Name Indonesia",
  "placeNameIraq": "Place Name Iraq",
  "placeNameIreland": "Place Name Ireland",
  "placeNameIslamicRepublicofIran": "Place Name Islamic Republic of Iran",
  "placeNameIsleofMan": "Place Name Isle of Man",
  "placeNameIsrael": "Place Name Israel",
  "placeNameItaly": "Place Name Italy",
  "placeNameIvoryCoast": "Place Name Ivory Coast",
  "placeNameJamaica": "Place Name Jamaica",
  "placeNameJapan": "Place Name Japan",
  "placeNameJersey": "Place Name Jersey",
  "placeNameJordan": "Place Name Jordan",
  "placeNameKazakhstan": "Place Name Kazakhstan",
  "placeNameKenya": "Place Name Kenya",
  "placeNameKiribati": "Place Name Kiribati",
  "placeNameKuwait": "Place Name Kuwait",
  "placeNameKyrgyzstan": "Place Name Kyrgyzstan",
  "placeNameLaoPeoplesDemocraticRepublic": "Place Name Lao Peoples Democratic Republic",
  "placeNameLatvia": "Place Name Latvia",
  "placeNameLebanon": "Place Name Lebanon",
  "placeNameLesotho": "Place Name Lesotho",
  "placeNameLiberia": "Place Name Liberia",
  "placeNameLibya": "Place Name Libya",
  "placeNameLiechtenstein": "Place Name Liechtenstein",
  "placeNameLithuania": "Place Name Lithuania",
  "placeNameLuxembourg": "Place Name Luxembourg",
  "placeNameMacao": "Place Name Macao",
  "placeNameMadagascar": "Place Name Madagascar",
  "placeNameMalawi": "Place Name Malawi",
  "placeNameMalaysia": "Place Name Malaysia",
  "placeNameMaldives": "Place Name Maldives",
  "placeNameMali": "Place NameMali",
  "placeNameMalta": "Place Name Malta",
  "placeNameMarshallIslands": "Place Name Marshall Islands",
  "placeNameMartinique": "Place Name Martinique",
  "placeNameMauritania": "Place Name Mauritania",
  "placeNameMauritius": "Place Name Mauritius",
  "placeNameMayotte": "Place Name Mayotte",
  "placeNameMexico": "Place Name Mexico",
  "placeNameMonaco": "Place Name Monaco",
  "placeNameMongolia": "Place Name Mongolia",
  "placeNameMontenegro": "Place Name Montenegro",
  "placeNameMontserrat": "Place Name Montserrat",
  "placeNameMorocco": "Place Name Morocco",
  "placeNameMozambique": "Place Name Mozambique",
  "placeNameMyanmar": "Place Name Myanmar",
  "placeNameNamibia": "Place Name Namibia",
  "placeNameNauru": "Place Name Nauru",
  "placeNameNepal": "Place Name Nepal",
  "placeNameNetherlands": "Place Name Netherlands",
  "placeNameNewCaledonia": "Place Name New Caledonia",
  "placeNameNewZealand": "Place Name New Zealand",
  "placeNameNicaragua": "Place Name Nicaragua",
  "placeNameNiger": "Place Name Niger",
  "placeNameNigeria": "Place Name Nigeria",
  "placeNameNiue": "Place Name Niue",
  "placeNameNorfolkIsland": "Place Name Norfolk Island",
  "placeNameNorthernMarianaIslands": "Place Name Northern Mariana Islands",
  "placeNameNorway": "Place Name Norway",
  "placeNameOman": "Place Name Oman",
  "placeNamePakistan": "Place Name Pakistan",
  "placeNamePalau": "Place Name Palau",
  "placeNamePanama": "Place Name Panama",
  "placeNamePapuaNewGuinea": "Place Name PapuaNewGuinea",
  "placeNameParaguay": "PlaceNameParaguay",
  "placeNamePeru": "Place Name Peru",
  "placeNamePhilippines": "Place Name Philippines",
  "placeNamePitcairn": "Place Name Pitcairn",
  "placeNamePlurinationalStateofBolivia": "Place Name Plurinational State of Bolivia",
  "placeNamePoland": "Place Name Poland",
  "placeNamePortugal": "Place Name Portugal",
  "placeNameProvinceofChinaTaiwan": "Place Name Province of China Taiwan",
  "placeNamePuertoRico": "Place Name Puerto Rico",
  "placeNameQatar": "Place Name Qatar",
  "placeNameRepublicofKorea": "Place Name Republic of Korea",
  "placeNameRepublicofMoldova": "Place Name Republic of Moldova",
  "placeNameRepublicofNorthMacedonia": "Place Name Republic of North Macedonia",
  "placeNameReunion": "Place Name Reunion",
  "placeNameRomania": "Place Name Romania",
  "placeNameRussianFederation": "Place Name Russian Federation",
  "placeNameRwanda": "Place Name Rwanda",
  "placeNameSaintBarthelemy": "Place Name Saint Barthelemy",
  "placeNameSaintKittsandNevis": "Place Name Saint Kitts and Nevis",
  "placeNameSaintLucia": "Place Name Saint Lucia",
  "placeNameSaintMartinFrenchpart": "Place Name Saint Martin Frenchpart",
  "placeNameSaintPierreandMiquelon": "Place Name Saint Pierre and Miquelon",
  "placeNameSaintVincentandtheGrenadines": "Place Name Saint Vincent and the Grenadines",
  "placeNameSamoa": "Place Name Samoa",
  "placeNameSanMarino": "Place Name San Marino",
  "placeNameSaoTomeandPrincipe": "Place Name Sao Tome and Principe",
  "placeNameSaudiArabia": "Place Name Saudi Arabia",
  "placeNameSenegal": "Place Name Senegal",
  "placeNameSerbia": "Place Name Serbia",
  "placeNameSeychelles": "Place Name Seychelles",
  "placeNameSierraLeone": "Place Name Sierra Leone",
  "placeNameSingapore": "Place Name Singapore",
  "placeNameSintEustatiusAndSabaBonaire": "Place Name Sint Eustatius And Saba Bonaire",
  "placeNameSintMaartenDutchpart": "Place Name Sint Maarten Dutchpart",
  "placeNameSlovakia": "Place Name Slovakia",
  "placeNameSlovenia": "Place Name Slovenia",
  "placeNameSolomonIslands": "Place Name Solomon Islands",
  "placeNameSomalia": "Place Name Somalia",
  "placeNameSouthAfrica": "Place Name South Africa",
  "placeNameSouthGeorgiaandtheSouthSandwichIslands": "Place Name South Georgia and the South Sandwich Islands",
  "placeNameSouthSudan": "Place Name South Sudan",
  "placeNameSpain": "Place Name Spain",
  "placeNameSriLanka": "Place Name Sri Lanka",
  "placeNameStateofPalestine": "Place Name State of Palestine",
  "placeNameSudan": "Place Name Sudan",
  "placeNameSuriname": "Place Name Suriname",
  "placeNameSvalbardandJanMayen": "Place Name Svalbard and JanMayen",
  "placeNameSwaziland": "Place Name Swaziland",
  "placeNameSweden": "Place Name Sweden",
  "placeNameSwitzerland": "Place Name Switzerland",
  "placeNameSyrianArabRepublic": "Place Name Syrian Arab Republic",
  "placeNameTajikistan": "Place Name Tajikistan",
  "placeNameThailand": "Place Name Thailand",
  "placeNameTheDemocraticRepublicoftheCongo": "Place Name The Democratic Republic of the Congo",
  "placeNameTimorLeste": "Place Name TimorLeste",
  "placeNameTogo": "Place Name Togo",
  "placeNameTokelau": "Place Name Tokelau",
  "placeNameTonga": "Place Name Tonga",
  "placeNameTrinidadandTobago": "Place Name Trinidad and Tobago",
  "placeNameTunisia": "Place Name Tunisia",
  "placeNameTurkey": "Place Name Turkey",
  "placeNameTurkmenistan": "Place Name Turkmenistan",
  "placeNameTurksandCaicosIslands": "Place Name Turks and Caicos Islands",
  "placeNameTuvalu": "Place Name Tuvalu",
  "placeNameUganda": "Place Name Uganda",
  "placeNameUkraine": "Place Name Ukraine",
  "placeNameUnitedArabEmirates": "Place Name United Arab Emirates",
  "placeNameUnitedKingdom": "Place Name United Kingdom",
  "placeNameUnitedRepublicofTanzania": "Place Name United Republic of Tanzania",
  "placeNameUnitedStates": "Place Name United States",
  "placeNameUnitedStatesMinorOutlyingIslands": "Place Name United States Minor Outlying Islands",
  "placeNameUnitedStatesVirginIslands": "Place Name United States Virgin Islands",
  "placeNameUruguay": "Place Name Uruguay",
  "placeNameUzbekistan": "Place Name Uzbekistan",
  "placeNameVanuatu": "Place Name Vanuatu",
  "placeNameVietNam": "place Name Viet Nam",
  "placeNameWallisandFutuna": "Place Name Wallis and Futuna",
  "placeNameWesternSahara": "Place Name Western Sahara",
  "placeNameYemen": "Place Name Yemen",
  "placeNameZambia": "Place Name Zambia",
  "placeNameZimbabwe": "Place Name Zimbabwe",
  "placesInCumbria": "Places In Cumbria",
  "plantsCommonNames": "Plants Common Names",
  "pokemon": "Pokemon",
  "pokemonModern": "Pokemon Modern",
  "professions": "Professions",
  "programmingLanguages": "Programming Languages",
  "religions": "Religions",
  "romanDeities": "Roman Deities",
  "romanEmperorForenames": "Roman Emperor Forenames",
  "romanPlacesNames": "Roman Places Names",
  "rooms": "Rooms",
  "russianCities": "Russian Cities",
  "russianForenames": "Russian Forenames",
  "sandwiches": "Sandwiches",
  "satellitesNatural": "Satellites Natural",
  "scientificDisciplines": "Scientific Disciplines",
  "scottishSurnames": "Scottish Surnames",
  "snakesCommonNames": "Snakes Common Names",
  "spanishForenames": "Spanish Forenames",
  "sports": "Sports",
  "starsProperNames": "Stars Proper Names",
  "supermarketsAndDiscountStores": "Supermarkets and Discount Stores",
  "swedishForenames": "Swedish Forenames",
  "swissCities": "Swiss Cities",
  "theologicalAngels": "Theological Angels",
  "theologicalDemons": "Theological Demons",
  "tolkienesqueForenames": "Tolkienesque Forenames",
  "unitsOfHeroesOfMightAndMagic3": "Units Of Heroes Of Might And Magic 3",
  "UnixCommands": "Unix Commands",
  "vegetables": "Vegetables",
  "weaponsOld": "Weapons Old",
  "websites": "Websites",
  "werewolfForenames": "Werewolf Forenames",
}
var Places = {
  "americanCities": "American Cities",
  "americanStates": "American States",
  "capitolCities": "Capitol Cities",
  "chineseCities": "Chinese Cities",
  "citiesWorldWide": "Cities World Wide",
  "countries": "Countries",
  "englishTowns": "English Towns",
  "fellsInCambria": "Fells In Cambria",
  "germanTowns": "German Towns",
  "greekIslands": "GreekIslands",
  "italianCities": "ItalianCities",
  "japaneseCities": "Japanese Cities",
  "norwegianFjords": "Norwegian Fjords",
  "placeNameAfghanistan": "Place Name Afghanistan",
  "placeNameAlandIslands": "Place Name Aland Islands",
  "placeNameAlbania": "Place Name Albania",
  "placeNameAlgeria": "Place Name Algeria",
  "placeNameAmericanSamoa": "Place Name American Samoa",
  "placeNameAndorra": "Place Name Andorra",
  "placeNameAngola": "Place Name Angola",
  "placeNameAnguilla": "Place Name Anguilla",
  "placeNameAntarctica": "Place Name Antarctica",
  "placeNameAntiguaAndBarbuda": "Place Name Antigua and Barbuda",
  "placeNameArgentina": "Place Name Argentina",
  "placeNameArmenia": "Place Name Armenia",
  "placeNameAruba": "Place Name Aruba",
  "placeNameAscensionandTristandaCunhaSaintHelena": "Place Name Ascension and Tristanda Cunha Saint Helena",
  "placeNameAustralia": "Place Name Australia",
  "placeNameAustria": "Place Name Austria",
  "placeNameAzerbaijan": "Place Name Azerbaijan",
  "placeNameBahamas": "Place Name Bahamas",
  "placeNameBahrain": "Place Name Bahrain",
  "placeNameBangladesh": "Place Name Bangladesh",
  "placeNameBarbados": "Place Name Barbados",
  "placeNameBelarus": "Place Name Belarus",
  "placeNameBelgium": "Place Name Belgium",
  "placeNameBelize": "Place Name Belize",
  "placeNameBenin": "Place Name Benin",
  "placeNameBermuda": "Place Name Bermuda",
  "placeNameBhutan": "Place Name Bhutanank",
  "placeNameBolivarianRepublicofVenezuela": "Place Name Bolivarian Republic of Venezuela",
  "placeNameBosniaAndHerzegovina": "Place Name Bosnia and Herzegovina",
  "placeNameBotswana": "Place Name Botswana",
  "placeNameBouvetIsland": "Place Name Bouvet Island",
  "placeNameBrazil": "Place Name Brazil",
  "placeNameBritishIndianOceanTerritory": "Place Name British Indian Ocean Territory",
  "placeNameBritishVirginIslands": "Place Name British Virgin Islands",
  "placeNameBruneiDarussalam": "Place Name Brunei Darussalam",
  "placeNameBulgaria": "Place Name Bulgaria",
  "placeNameBurkinaFaso": "Place Name Burkina Faso",
  "placeNameBurundi": "Place Name Burundi",
  "placeNameCambodia": "placeNameCambodia",
  "placeNameCameroon": "Place Name Cameroon",
  "placeNameCanada": "Place Name Canada",
  "placeNameCapeVerde": "Place Name Cape Verde",
  "placeNameCaymanIslands": "Place Name Cayman Islands",
  "placeNameCentralAfricanRepublic": "Place Name Central African Republic",
  "placeNameChad": "Place Name Chad",
  "placeNameChile": "Place Name Chile",
  "placeNameChina": "Place Name China",
  "placeNameChristmasIsland": "Place Name Christmas Island",
  "placeNameCocosKeelingIslands": "Place Name Cocos Keeling Islands",
  "placeNameColombia": "Place Name Colombia",
  "placeNameComoros": "Place Name Comoros",
  "placeNameCongo": "Place Name Congo",
  "placeNameCookIslands": "Place Name Cook Islands",
  "placeNameCostaRica": "Place Name Costa Rica",
  "placeNameCroatia": "Place Name Croatia",
  "placeNameCuba": "Place Name Cuba",
  "placeNameCuracao": "Place Name Curacao",
  "placeNameCyprus": "Place Name Cyprus",
  "placeNameCzechRepublic": "Place Name Czech Republic",
  "placeNameDemocraticPeoplesRepublicofKorea": "Place Name Democratic Peoples Republic of Korea",
  "placeNameDenmark": "Place Name Denmark",
  "placeNameDjibouti": "Place Name Djibouti",
  "placeNameDominica": "Place Name Dominica",
  "placeNameDominicanRepublic": "Place Name Dominican Republic",
  "placeNameEcuador": "Place Name Ecuador",
  "placeNameEgypt": "Place Name Egypt",
  "placeNameElSalvador": "Place Name El Salvador",
  "placeNameEquatorialGuinea": "Place Name Equatorial Guinea",
  "placeNameEritrea": "Place Name Eritrea",
  "placeNameEstonia": "Place Name Estonia",
  "placeNameEthiopia": "Place Name Ethiopia",
  "placeNameFalklandIslandsMalvinas": "Place Name Falkl and Islands Malvinas",
  "placeNameFaroeIslands": "Place Name Faroe Islands",
  "placeNameFederatedStatesofMicronesia": "Place Name Federated States of Micronesia",
  "placeNameFiji": "Place Name Fiji",
  "placeNameFinland": "Place Name Finland",
  "placeNameFrance": "Place Name France",
  "placeNameFrenchGuiana": "placeNameFrenchGuiana",
  "placeNameFrenchGuiana": "placeNameFrenchGuiana",
  "placeNameFrenchSouthernTerritories": "Place Name French Southern Territories",
  "placeNameGabon": "Place Name Gabon",
  "placeNameGambia": "Place Name Gambia",
  "placeNameGeorgia": "Place Name Georgia",
  "placeNameGhana": "Place Name Ghana",
  "placeNameGibraltar": "Place Name Gibraltar",
  "placeNameGreece": "Place Name Greece",
  "placeNameGreenland": "Place Name Greenland",
  "placeNameGrenada": "Place Name Grenada",
  "placeNameGuadeloupe": "Place Name Guadeloupe",
  "placeNameGuam": "Place Name Guam",
  "placeNameGuatemala": "Place Name Guatemala",
  "placeNameGuernsey": "Place Name Guernsey",
  "placeNameGuinea": "Place Name Guinea",
  "placeNameGuineaBissau": "Place Name Guinea Bissau",
  "placeNameGuyana": "Place Name Guyana",
  "placeNameHaiti": "Place Name Haiti",
  "placeNameHeardIslandandMcDonaldIslands": "Place Name Heard Island and McDonald Islands",
  "placeNameHolySeeVaticanCityState": "Place Name Holy See Vatican City State",
  "placeNameHonduras": "Place Name Honduras",
  "placeNameHongKong": "Place Name Hong Kong",
  "placeNameHungary": "Place Name Hungary",
  "placeNameIceland": "Place Name Iceland",
  "placeNameIndia": "Place NameIndia",
  "placeNameIndonesia": "Place Name Indonesia",
  "placeNameIraq": "Place Name Iraq",
  "placeNameIreland": "Place Name Ireland",
  "placeNameIslamicRepublicofIran": "Place Name Islamic Republic of Iran",
  "placeNameIsleofMan": "Place Name Isle of Man",
  "placeNameIsrael": "Place Name Israel",
  "placeNameItaly": "Place Name Italy",
  "placeNameIvoryCoast": "Place Name Ivory Coast",
  "placeNameJamaica": "Place Name Jamaica",
  "placeNameJapan": "Place Name Japan",
  "placeNameJersey": "Place Name Jersey",
  "placeNameJordan": "Place Name Jordan",
  "placeNameKazakhstan": "Place Name Kazakhstan",
  "placeNameKenya": "Place Name Kenya",
  "placeNameKiribati": "Place Name Kiribati",
  "placeNameKuwait": "Place Name Kuwait",
  "placeNameKyrgyzstan": "Place Name Kyrgyzstan",
  "placeNameLaoPeoplesDemocraticRepublic": "Place Name Lao Peoples Democratic Republic",
  "placeNameLatvia": "Place Name Latvia",
  "placeNameLebanon": "Place Name Lebanon",
  "placeNameLesotho": "Place Name Lesotho",
  "placeNameLiberia": "Place Name Liberia",
  "placeNameLibya": "Place Name Libya",
  "placeNameLiechtenstein": "Place Name Liechtenstein",
  "placeNameLithuania": "Place Name Lithuania",
  "placeNameLuxembourg": "Place Name Luxembourg",
  "placeNameMacao": "Place Name Macao",
  "placeNameMadagascar": "Place Name Madagascar",
  "placeNameMalawi": "Place Name Malawi",
  "placeNameMalaysia": "Place Name Malaysia",
  "placeNameMaldives": "Place Name Maldives",
  "placeNameMali": "Place NameMali",
  "placeNameMalta": "Place Name Malta",
  "placeNameMarshallIslands": "Place Name Marshall Islands",
  "placeNameMartinique": "Place Name Martinique",
  "placeNameMauritania": "Place Name Mauritania",
  "placeNameMauritius": "Place Name Mauritius",
  "placeNameMayotte": "Place Name Mayotte",
  "placeNameMexico": "Place Name Mexico",
  "placeNameMonaco": "Place Name Monaco",
  "placeNameMongolia": "Place Name Mongolia",
  "placeNameMontenegro": "Place Name Montenegro",
  "placeNameMontserrat": "Place Name Montserrat",
  "placeNameMorocco": "Place Name Morocco",
  "placeNameMozambique": "Place Name Mozambique",
  "placeNameMyanmar": "Place Name Myanmar",
  "placeNameNamibia": "Place Name Namibia",
  "placeNameNauru": "Place Name Nauru",
  "placeNameNepal": "Place Name Nepal",
  "placeNameNetherlands": "Place Name Netherlands",
  "placeNameNewCaledonia": "Place Name New Caledonia",
  "placeNameNewZealand": "Place Name New Zealand",
  "placeNameNicaragua": "Place Name Nicaragua",
  "placeNameNiger": "Place Name Niger",
  "placeNameNigeria": "Place Name Nigeria",
  "placeNameNiue": "Place Name Niue",
  "placeNameNorfolkIsland": "Place Name Norfolk Island",
  "placeNameNorthernMarianaIslands": "Place Name Northern Mariana Islands",
  "placeNameNorway": "Place Name Norway",
  "placeNameOman": "Place Name Oman",
  "placeNamePakistan": "Place Name Pakistan",
  "placeNamePalau": "Place Name Palau",
  "placeNamePanama": "Place Name Panama",
  "placeNamePapuaNewGuinea": "Place Name PapuaNewGuinea",
  "placeNameParaguay": "PlaceNameParaguay",
  "placeNamePeru": "Place Name Peru",
  "placeNamePhilippines": "Place Name Philippines",
  "placeNamePitcairn": "Place Name Pitcairn",
  "placeNamePlurinationalStateofBolivia": "Place Name Plurinational State of Bolivia",
  "placeNamePoland": "Place Name Poland",
  "placeNamePortugal": "Place Name Portugal",
  "placeNameProvinceofChinaTaiwan": "Place Name Province of China Taiwan",
  "placeNamePuertoRico": "Place Name Puerto Rico",
  "placeNameQatar": "Place Name Qatar",
  "placeNameRepublicofKorea": "Place Name Republic of Korea",
  "placeNameRepublicofMoldova": "Place Name Republic of Moldova",
  "placeNameRepublicofNorthMacedonia": "Place Name Republic of North Macedonia",
  "placeNameReunion": "Place Name Reunion",
  "placeNameRomania": "Place Name Romania",
  "placeNameRussianFederation": "Place Name Russian Federation",
  "placeNameRwanda": "Place Name Rwanda",
  "placeNameSaintBarthelemy": "Place Name Saint Barthelemy",
  "placeNameSaintKittsandNevis": "Place Name Saint Kitts and Nevis",
  "placeNameSaintLucia": "Place Name Saint Lucia",
  "placeNameSaintMartinFrenchpart": "Place Name Saint Martin Frenchpart",
  "placeNameSaintPierreandMiquelon": "Place Name Saint Pierre and Miquelon",
  "placeNameSaintVincentandtheGrenadines": "Place Name Saint Vincent and the Grenadines",
  "placeNameSamoa": "Place Name Samoa",
  "placeNameSanMarino": "Place Name San Marino",
  "placeNameSaoTomeandPrincipe": "Place Name Sao Tome and Principe",
  "placeNameSaudiArabia": "Place Name Saudi Arabia",
  "placeNameSenegal": "Place Name Senegal",
  "placeNameSerbia": "Place Name Serbia",
  "placeNameSeychelles": "Place Name Seychelles",
  "placeNameSierraLeone": "Place Name Sierra Leone",
  "placeNameSingapore": "Place Name Singapore",
  "placeNameSintEustatiusAndSabaBonaire": "Place Name Sint Eustatius And Saba Bonaire",
  "placeNameSintMaartenDutchpart": "Place Name Sint Maarten Dutchpart",
  "placeNameSlovakia": "Place Name Slovakia",
  "placeNameSlovenia": "Place Name Slovenia",
  "placeNameSolomonIslands": "Place Name Solomon Islands",
  "placeNameSomalia": "Place Name Somalia",
  "placeNameSouthAfrica": "Place Name South Africa",
  "placeNameSouthGeorgiaandtheSouthSandwichIslands": "Place Name South Georgia and the South Sandwich Islands",
  "placeNameSouthSudan": "Place Name South Sudan",
  "placeNameSpain": "Place Name Spain",
  "placeNameSriLanka": "Place Name Sri Lanka",
  "placeNameStateofPalestine": "Place Name State of Palestine",
  "placeNameSudan": "Place Name Sudan",
  "placeNameSuriname": "Place Name Suriname",
  "placeNameSvalbardandJanMayen": "Place Name Svalbard and JanMayen",
  "placeNameSwaziland": "Place Name Swaziland",
  "placeNameSweden": "Place Name Sweden",
  "placeNameSwitzerland": "Place Name Switzerland",
  "placeNameSyrianArabRepublic": "Place Name Syrian Arab Republic",
  "placeNameTajikistan": "Place Name Tajikistan",
  "placeNameThailand": "Place Name Thailand",
  "placeNameTheDemocraticRepublicoftheCongo": "Place Name The Democratic Republic of the Congo",
  "placeNameTimorLeste": "Place Name TimorLeste",
  "placeNameTogo": "Place Name Togo",
  "placeNameTokelau": "Place Name Tokelau",
  "placeNameTonga": "Place Name Tonga",
  "placeNameTrinidadandTobago": "Place Name Trinidad and Tobago",
  "placeNameTunisia": "Place Name Tunisia",
  "placeNameTurkey": "Place Name Turkey",
  "placeNameTurkmenistan": "Place Name Turkmenistan",
  "placeNameTurksandCaicosIslands": "Place Name Turks and Caicos Islands",
  "placeNameTuvalu": "Place Name Tuvalu",
  "placeNameUganda": "Place Name Uganda",
  "placeNameUkraine": "Place Name Ukraine",
  "placeNameUnitedArabEmirates": "Place Name United Arab Emirates",
  "placeNameUnitedKingdom": "Place Name United Kingdom",
  "placeNameUnitedRepublicofTanzania": "Place Name United Republic of Tanzania",
  "placeNameUnitedStates": "Place Name United States",
  "placeNameUnitedStatesMinorOutlyingIslands": "Place Name United States Minor Outlying Islands",
  "placeNameUnitedStatesVirginIslands": "Place Name United States Virgin Islands",
  "placeNameUruguay": "Place Name Uruguay",
  "placeNameUzbekistan": "Place Name Uzbekistan",
  "placeNameVanuatu": "Place Name Vanuatu",
  "placeNameVietNam": "place Name Viet Nam",
  "placeNameWallisandFutuna": "Place Name Wallis and Futuna",
  "placeNameWesternSahara": "Place Name Western Sahara",
  "placeNameYemen": "Place Name Yemen",
  "placeNameZambia": "Place Name Zambia",
  "placeNameZimbabwe": "Place Name Zimbabwe",
  "placesInCumbria": "Places In Cumbria",
  "romanPlacesNames": "Roman Places Names",
  "rooms": "Rooms",
  "russianCities": "Russian Cities",
  "supermarketsAndDiscountStores": "Supermarkets and Discount Stores",
  "swissCities": "Swiss Cities",
}
var Ideas = {
  "artTypes": "Art Types",
  "danceStyles": "Dance Styles",
  "dataStructures": "Data Structures",
  "emotions": "Emotions",
  "ethnicGroupsContemporary": "Ethnic Groups Contemporary",
  "hobbies": "Hobbies",
  "musicalStyles": "Musical Styles",
  "personalityTraits": "Personality Traits",
  "philosophies": "Philosophies",
}
var Things = {
  "americanCompanies": "American Companies",
  "americanDesserts": "American Desserts",
  "animalSounds": "Animal Sounds",
  "boardGames": "Board Games",
  "boatTypes": "Boat Types",
  "bodyParts": "Body Parts",
  "breads": "Breads",
  "breakfastCereals": "Breakfast Cereals",
  "britishDesserts": "British Desserts",
  "buildingTypes": "Building Types",
  "cakes": "Cakes",
  "carBrands": "Car Brands",
  "carParts": "Car Parts",
  "clothing": "Clothing",
  "cocktails": "Cocktails",
  "colours": "Colours",
  "constellationsModern": "Constellations Modern",
  "cookingUtensils": "Cooking Utensils",
  "cryptocurrencies": "Cryptocurrencies",
  "currencies": "Currencies",
  "diseases": "Diseases",
  "drinks": "Drinks",
  "fabrics": "Fabrics",
  "flowersCommonNames": "Flowers Common Names",
  "fruit": "Fruit",
  "furniture": "Furniture",
  "herbsCommonNames": "Herbs Common Names",
  "homeAppliances": "Home Appliances",
  "italianFoods": "Italian Foods",
  "langauges": "Langauges",
  "magicSpells": "Magic Spells",
  "meats": "Meats",
  "minerals": "Minerals",
  "musicalInstruments": "Musical Instruments",
  "nutsAndSeeds": "Nuts and Seeds",
  "periodicElements": "Periodic Elements",
  "pies": "Pies",
  "plantsCommonNames": "Plants Common Names",
  "professions": "Professions",
  "programmingLanguages": "Programming Languages",
  "religions": "Religions",
  "sandwiches": "Sandwiches",
  "satellitesNatural": "Satellites Natural",
  "scientificDisciplines": "Scientific Disciplines",
  "sports": "Sports",
  "starsProperNames": "Stars Proper Names",
  "UnixCommands": "Unix Commands",
  "vegetables": "Vegetables",
  "weaponsOld": "Weapons Old",
  "websites": "Websites",
}
var Creatures = {
  "americanForenames": "American Forenames",
  "americanForenamesFemale": "American Forenames Female",
  "americanForenamesMale": "American Forenames Male",
  "americanSurnames": "American Surnames",
  "animals": "Animals",
  "birdCommonNames": "Bird Common Names",
  "brythonicDeities": "Brythonic Deities",
  "dinosaurs": "Dinosaurs",
  "dogNames": "Dog Names",
  "dragons": "Dragons",
  "dutchForenames": "Dutch Forenames",
  "egyptianDeities": "Egyptian Deities",
  "fish": "Fish",
  "frenchForenames": "French Forenames",
  "generation1Pokemon": "Generation 1 Pokemon",
  "generation2Pokemon": "Generation 2 Pokemon",
  "generation3Pokemon": "Generation 3 Pokemon",
  "generation4Pokemon": "Generation 4 Pokemon",
  "generation5Pokemon": "Generation 5 Pokemon",
  "generation6Pokemon": "Generation 6 Pokemon",
  "generation7Pokemon": "Generation 7 Pokemon",
  "germanForenames": "German Forenames",
  "hinduDeities": "Hindu Deities",
  "indianForenames": "Indian Forenames",
  "irishForenames": "Irish Forenames",
  "iselandicForenames": "Iselandic Forenames",
  "italianForenames": "Italian Forenames",
  "japaneseForenames": "Japanese Forenames",
  "mythicalHumanoids": "Mythical Humanoids",
  "norseDeityForenames": "Norse Deity Forenames",
  "pokemon": "Pokemon",
  "pokemonModern": "Pokemon Modern",
  "romanDeities": "Roman Deities",
  "romanEmperorForenames": "Roman Emperor Forenames",
  "russianForenames": "Russian Forenames",
  "scottishSurnames": "Scottish Surnames",
  "snakesCommonNames": "Snakes Common Names",
  "spanishForenames": "Spanish Forenames",
  "swedishForenames": "Swedish Forenames",
  "theologicalAngels": "Theological Angels",
  "theologicalDemons": "Theological Demons",
  "tolkienesqueForenames": "Tolkienesque Forenames",
  "unitsOfHeroesOfMightAndMagic3": "Units Of Heroes Of Might And Magic 3",
  "werewolfForenames": "Werewolf Forenames",
}