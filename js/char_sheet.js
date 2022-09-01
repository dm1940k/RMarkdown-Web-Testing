

/*

This is a JS version of the random character generator I've written and re-written each time I try out a new language. 
Ideally it will work off of a single button press, creating a fully generated character that is ready to use in a game.
Eventually it may allow for the entry of level, race, class and other attributes. It may also offer an NPC/monster component.
I'd like to take what I learn here and apply it towards a random dungeon generator, possible with a visual component.

*/


/*

Minimum Viable Product: 
A character generator that, on clicking a button, produces a character sheet that includes the following:

Name
Race
Class
Level
Background
Alignment
Proficiency Bonus
Skills
Attributes
Saving Throws
Hit Points
Armor Class
Initiative
Speed
Bonds
Flaws
Ideals
Starting Equipment

Basic Test:
A generator that, on clicking a button, produces a human character with name, race, level, class, attributes, alignment, and hit points. 
Once that is produced, it should be a simple matter to expand to include the above.

Completed so far (8/16/22): name (based on gender), race, level, class, alignment. Need to go deeper to get attributes and hitpoints.

8/28/22: Name, race, level, class, alignment, background, speed, ability scores, racial modifiers, initiative, health.

A list of core inclusions.

Race Names:
Dragonborn x
Dwarves x
Elves x
Gnomes x
Half-Elves x
Halflings x
Half-Orcs x
Humans x

Race Stats: x
Dragonborn x
Dwarves x
Elves x
Gnomes x
Half-Elves x
Halflings x
Half-Orcs x
Humans x

Levels: 
1-20 x

Classes:
Barbarian 
Bard
Cleric
Druid
Fighter
Monk
Paladin
Ranger
Rogue
Sorcerer
Warlock
Wizard

Skills

Strength
    Athletics
Dexterity
    Acrobatics
    Sleight of Hand
    Stealth
Intelligence
    Arcana
    History
    Investigation
    Nature
    Religion
Wisdom
    Animal Handling
    insight
    Medicine
    Perception
    Survival
Charisma
    Deception
    Intimidation
    Performance
    Persuasion

Character:
First Name x
Last Name x
Race x 
Class x
Alignment x
Attributes x
Racial Modifiers x
Class Modifiers
Skills
Spells
Flavor

*/


//Makes the whole thing run when the button is clicked.
document.getElementById("btn2").addEventListener("click", character);

//Constants

const btn = document.getElementById("btn2");


//-Names

var human_first_name_male = ["Arando", "Bram", "Cale", "Dalkon", "Daylen", "Dodd", "Dungarth", "Dyrk", "Eandro", "Falken", "Feck", "Fenton", "Gryphero", "Hagar", "Jeras", "Krynt", "Lavant", "Leyten", "Madian", "Malfier", "Markus", "Meklan", "Namen", "Navaren", "Nerle", "Nilus", "Ningyan", "Norris", "Quentin", "Semil", "Sevenson", "Steveren", "Talfen", "Tamond", "Taran", "Tavon", "Tegan", "Vanan", "Vincent"];

var human_first_name_female = ["Azura", "Brey", "Hallan", "Kasaki", "Lorelei", "Mirabel", "Pharana", "Remora", "Rosalyn", "Sachil", "Saidi", "Tanika", "Tura", "Tylsa", "Vencia", "Xandrilla", "Gerdi", "Anabel", "Giana", "Kimble", "Gulja", "Nadine", "Julchen", "Clarissa", "Petra", "Nikoletta", "Savannah", "Sage", "Mine", "Shaniya", "Carry", "Esra"];

var human_last_name = ["Arkalis", "Armanci", "Bilger", "Blackstrand", "Brightwater", "Carnavon", "Caskajaro", "Coldshore", "Coyle", "Cresthill", "Cuttlescar", "Daargen", "Dalicarlia", "Danamark", "Donoghan", "Drumwind", "Dunhall", "Ereghast", "Falck", "Fallenbridge", "Faringray", "Fletcher", "Fryft", "Goldrudder", "Grantham", "Graylock", "Gullscream", "Hindergrass", "Iscalon", "Kreel", "Kroft", "Lamoth", "Leerstrom", "Lynchfield", "Moonridge", "Netheridge", "Oakenheart", "Pyncion", "Ratley", "Redraven", "Revenmar", "Roxley", "Sell", "Seratolva", "Shanks", "Shattermast", "Shaulfer", "Silvergraft", "Stavenger", "Stormchapel", "Strong", "Swiller", "Talandro", "Targana", "Towerfall", "Umbermoor", "Van-Devries", "Van-Gandt", "Van-Hyden", "Varcona", "Varzand", "Voortham", "Vrye", "Webb", "Welfer", "Wilxes", "Wintermere", "Wygarthe", "Zatchet", "Zethergyll"];

var orc_first_name_male = ["Grog", "Shug", "Gukk", "Lok", "Drorak", "Gagrab", "Jobol", "Orlab", "Sharlad", "Ovoll", "Bun", "Rhod", "Jun", "Bhag", "Dharakk", "Ghoggoll", "Zhanzukk", "Drangak", "Gomzar", "Zhutrull", "Ghol", "Zod", "Dhug", "Bokk", "Zhukzakk", "Zokzud", "Bhozukk", "Bhakzoll", "Grobrob", "Obrun", "Ghukk", "Brag", "Bak", "Murzob", "Bhumzok", "Dazug", "Zhajud", "Druggub", "Drogran", "Dhakk"];

var orc_first_name_female = ["Dhem", "Rhaf", "Kuam", "Kil", "Iggal", "Dothi", "Dhauthiv", "Dhadvau", "Nuwgouh", "Bhinzik", "Son", "Maov", "Niv", "Sah", "Eggim", "Semdev", "Dhithi", "Bamdik", "Odao", "Bhadva", "Bheng", "Zyem", "Rhiz", "Sing", "Zudvuaz", "Kewgo", "Nogveeh", "Bhaomduf", "Zudaum", "Mevryez", "Mun", "Duk", "Dav", "Gul", "Nudguk", "Uwgu", "Ghegzom", "Nodvoh", "Shaamduz", "Viwgauk"];

var orc_last_name = ["Blood Render", "The Bitter", "The Miscreant", "Iron Squasher", "The Repulsive", "Kill Dissector", "The Defiant", "The Unsightly", "Beast Clobberer", "Scale Quasher", "Beast Cleaver", "The Maniac", "The Butcher", "Toe Quelcher", "Chest Queller", "Foot Defacer", "The Angry", "The Cruel", "War Despoiler", "The Prime", "The Wild", "The Macabre", "Tooth Masher", "Head Cleaver", "The Venomous", "Sorrow Shatterer", "The Turbulent", "The Swift", "Storm Cutter", "The Grim", "The Wrathful", "Sorrow Despoiler", "Foot Shatterer", "Power Lance", "Tooth Flayer", "Chin Squisher", "Joint Shatterer", "The Forsaken", "Flesh Splitter", "Knee Despoiler"];

var elf_first_name_male = ["Herhice", "Wranydark", "Waeslen", "Dorfir", "Qizumin", "Sylneiros", "Omapetor", "Aeqen", "Cramenor", "Norzumin", "Ralotumal", "Sylren", "Glynmenor", "Wranric", "Fenren", "Herpeiros", "Morjeon", "Vasalor", "Morbalar", "Lujor", "Waesquinal", "Kelneiros", "Aeyarus", "Olonan", "Raloquinal", "Leoberos", "Keamyar", "Yinmyar", "Patumal", "Ianceran", "Sardithas", "Rolar", "Ralosalor", "Baljeon", "Daepetor", "Cracan", "Daepeiros", "Cranelis", "Thevalur", "Raloren"];

var elf_first_name_female = ["Vallynn", "Loracaryn", "Liarona", "Lorabanise", "Magrona", "Daeleth", "Gilmoira", "Ensys", "Heletris", "Enna", "Xyrwynn", "Xyrna", "Yesgwyn", "Sylfina", "Dadove", "Holarieth", "Triscyne", "Maglynn", "Qithana", "Miaroris", "Nericaryn", "Inadi", "Neriwenys", "Krisdove", "Ulana", "Reyxina", "Xyrcyne", "Valrona", "Zinfiel", "Keydove", "Triswenys", "Holaxina", "Ravana", "Gilna", "Torrona", "Valwenys", "Greleth", "Phirel", "Xyrgella", "Liasatra"];

var elf_last_name = ["Woodhold", "Amberheart", "Woodshadow", "Stillshadow", "Shadowflow", "Viere", "Rosiscar", "Flomalenn", "Dialdahan", "Maxelathrosh", "Gemhold", "Swiftbell", "Sagewatcher", "Crimsonsinger", "Fargift", "Ostril", "Kithronthri", "Eisesti", "Soldrel", "Uldish", "Elderdream", "Sageshadow", "Evenspark", "Ashstar", "Hazelmind", "Xeshua", "Heylas", "Fluriil", "Estith", "Keyldrirren", "Evenpride", "Flowerbreath", "Ashsense", "Aldershard", "Lunarflower", "Mistrexalko", "Shollo", "Waeso", "Hialolkoront", "Wurathre"];

var dwarf_first_name_male = ["Bhelduhr", "Garrak", "Hjolnus", "Thurdain", "Banbek", "Ummyr", "Bennir", "Bunthran", "Baerdram", "Thomond", "Brammund", "Branmek", "Tormyl", "Hjalgurn", "Adrigg", "Krommand", "Hjulron", "Kramthran", "Bheldor", "Muirgron", "Muirmar", "Belnir", "Bromnik", "Vongrom", "Galnom", "Benmiir", "Muirdrus", "Gerdrak", "Urmbrek", "Hortharn", "Tynam", "Thynam", "Murkyl", "Bhalkom", "Balmek", "Bramdrus", "Thulnik", "Ermgrun", "Bhelmand", "Fargran"];

var dwarf_first_name_female = ["Tyshmyl", "Tyshbera", "Bronwin", "Reddelle", "Bronvia", "Runlin", "Bartin", "Tishras", "Reyntyn", "Misnora", "Jinwynn", "Daermura", "Edri", "Reynwaen", "Brilva", "Tasres", "Naerros", "Reynsyl", "Tyshnura", "Elnas", "Tyswynn", "Lasnas", "Tazsyl", "Arva", "Dimgwyn", "Redbelle", "Lesnyss", "Barleil", "Eindeth", "Jindelle", "Brulnip", "Tasnar", "Tasva", "Jenra", "Lyesla", "Nysgwyn", "Gwanthel", "Naerlin", "Jynra", "Elrin"];

var dwarf_last_name = ["Blackshield", "Bravesong", "Evenhelm", "Sternboots", "Evenpride", "Calbrikick", "Dulbragert", "Cozzonann", "Culbrenn", "Thraengakaln", "Trollfists", "Broodale", "Sternkith", "Loudheart", "Hardgrace", "Gunhunor", "Glurikug", "Fefdam", "Borovuhr", "Datgur", "Boldfront", "Ironkind", "Frozenmane", "Firstfeast", "Marblebleeder", "Ballivert", "Thrathgark", "Caduln", "Grefdahin", "Grellerk", "Blacktankard", "Irontale", "Stormbleeder", "Steelstand", "Bravebelt", "Luthgikark", "Leham", "Dererr", "Dengogack", "Threngort"];

var gnome_first_name_male = ["Warser", "Jebis", "Urivyn", "Panapos", "Bilpip", "Xotix", "Yoscorin", "Grajin", "Jeyur", "Dorpos", "Calben", "Brini", "Orpip", "Iparug", "Davjin", "Oruner", "Wregim", "Felver", "Umbar", "Jeyur", "Farkas", "Albar", "Mervyn", "Xalzu", "Urigim", "Farrick", "Garyn", "Rasrug", "Saltor", "Urikas", "Corwin", "Sinxif", "Briver", "Gratix", "Enitor", "Yosrick", "Salfiz", "Calmorn", "Panafiz", "Cormin"];

var gnome_first_name_female = ["Taroe", "Kridysa", "Pripine", "Xayore", "Yloxis", "Isorhana", "Faezyre", "Yonove", "Prisys", "Welpine", "Reqaryn", "Jelqys", "Qixis", "Quesys", "Klosany", "Zinsys", "Faeza", "Carmiphi", "Loriqaryn", "Arikasys", "Elgyra", "Tali", "Carna", "Orla", "Lorisys", "Hesgyra", "Ylolys", "Yoroe", "Faekasys", "Inatra", "Venkini", "Jelhani", "Daphirhana", "Daphibi", "Minqys", "Eltra", "Xanoa", "Xaqys", "Zinqys", "Priqys"];

var gnome_last_name = ["Glittermantle", "Silverblock", "Marblesong", "Marblestitch", "Tinkertop", "Limmusidell", "Tercadol", "Songgasoba", "Dammlunibi", "Ungubers", "Copperdrop", "Togglepitch", "Shortmask", "Sparklebraid", "Wobblestone", "Niddlegeddle", "Zirkusebin", "Paefureton", "Bercitorand", "Noonggader", "Glitterstand", "Togglespring", "Brassspell", "Sparkleflow", "Squigglehold", "Humplasebell", "Musgatin", "Peresaden", "Mobblezabble", "Tamplelomple", "Dazzlegem", "Strongtwist", "Quillthread", "Boldtwist", "Deepcheek", "Mukkosibel", "Oppasarend", "Olnosabol", "Effiras", "Hogglepiggle"];

var halfling_first_name_male = ["Yargin", "Merwrick", "Anyas", "Perrin", "Oribin", "Idonad", "Wilorin", "Garser", "Garumo", "Belwrick", "Riry", "Wenpher", "Pimyas", "Sanfer", "Conbin", "Pimdak", "Ricbul", "Quinrich", "Barmin", "Elsire", "Wenhace", "Gozin", "Idoumo", "Quinnan", "Davpos", "Linzor", "Zalmo", "Yender", "Wenry", "Belhace", "Baros", "Corkas", "Flynlos", "Tarton", "Cordon", "Sharmin", "Merras", "Jodak", "Erwan", "Pimdon"];

var halfling_first_name_female = ["Eraara", "Belgrace", "Yoyra", "Diakis", "Yoeni", "Riyola", "Xivyre", "Xanhaly", "Idamia", "Vafice", "Lidora", "Wikis", "Uvitina", "Froris", "Nedmia", "Graola", "Qujen", "Diagrace", "Nedgrace", "Isada", "Salyse", "Unazana", "Hahaly", "Eolie", "Jaytrix", "Paenys", "Trynda", "Prumia", "Shaemita", "Shaecaryn", "Ariola", "Graula", "Paezira", "Wina", "Diari", "Malora", "Jayna", "Lebyn", "Kelyola", "Uvida"];

var halfling_last_name = ["Elderearth", "Teabough", "Laughingbrace", "Truebloom", "Hogblossom", "Cherrybottle", "Stonecheeks", "Rosevale", "Biglade", "Amberwillow", "Undershadow", "Longdancer", "Earthman", "Nighthands", "Goldpot", "Marbletop", "Lightmouse", "Reedsky", "Mossshine", "Hillflower", "Springcloak", "Greatsun", "Bronzesong", "Thornhand", "Littlevale", "Emberace", "Tallbraid", "Clearhill", "Commonspark", "Warmsurge", "Laughingace", "Ravenmane", "Fastflow", "Hogbough", "Heartcheeks", "Humblesky", "Mossgrove", "Sunblossom", "Bigstride", "Goodtop"];

var dragonborn_first_name_male = ["Golrustaajin", "Shuchiadash", "Kliccedath", "Kilkeacmarrir", "Thiphek", "Myelrindrareth", "Drostoxemaath", "Gualteten", "Lurialen", "Niltaashkmis", "Clithtac", "Cuchited", "Kleldeth", "Nyeampheshkmic", "Thuris", "Myuumphesh", "Krulrith", "Tirduatimac", "Nestuul", "Tilthud", "Lustaath", "Klalmindrodoth", "Tocestek", "Cephendires", "Myordul", "Dilkul", "Forthok", "Kuamtandar", "Cruristath", "Nuthtukmarec", "Drarnintherod", "Campush", "Giambin", "Irdesh", "Geankiaxuc", "Eltuth", "Celxiad", "Gerandaman", "Finkucmirruc", "Shoxar"];

var dragonborn_first_name_female = ["Mexak", "Oldeak", "Echur", "Ilmuukmuar", "Vemmaajash", "Nyachuukadon", "Mernur", "Myeamphuak", "Nordicmek", "Lixik", "Vixuukash", "Shuuldror", "Nencik", "Clarjunthurgin", "Dreanxesh", "Muampexemer", "Pralthucmolear", "Muapajar", "Iphas", "Faldash", "Inkar", "Laxual", "Drithtakmash", "Shincanthes", "Taalkar", "Drirthuus", "Ilkur", "Drerjiser", "Kraalkecnaar", "Krimpalak", "Nyephoriak", "Falthekmumok", "Nyethtaas", "Furjan", "Myanxaandik", "Eamphadeth", "Dualmath", "Drilres", "Kruumpinthunek", "Yeastir"];

var dragonborn_last_name = ["Pabroth", "Sulziros", "Lorlasar", "Medhazar", "Lumivroth", "Trouqiroth", "Brendorim", "Yoryax", "Erahazar", "Heseth", "Morqull", "Alihazar", "Tazlasar", "Rhogar", "Vyurash", "Morghull", "Nalasar", "Wulsashi", "Argrax", "Hiturim", "Orlalin", "Kilwarum", "Grejhan", "Marsashi", "Balskan", "Orlaqull", "Udolin", "Narrakas", "Wuzavur", "Iorxiros", "Zratrin", "Medbarum", "Otiroth", "Brenyax", "Gorahadur", "Doroth", "Urojurn", "Morgrax", "Frowunax", "Tozire"];

//-End names




//Functions


//Utilities

function randomize(x) {
    var random_number = Math.floor(Math.random() * x.length);
    return random_number;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function roll_dice(sides, rolls) {

    var numbers = [];
    for (let i = 0; i < rolls; i++) {
        numbers.push(Math.ceil(Math.random() * sides))
    }

    return numbers;
}



//Flavor

function namer(gender,char_race) {
    var character_name;
    switch (char_race) {

        case "dragonborn":

            if (gender == "male") {
                first_name = dragonborn_first_name_male;
            } else if (gender == "female") {
                first_name = dragonborn_first_name_female;
            } else {
                first_name = dragonborn_first_name_female.concat(dragonborn_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + dragonborn_last_name[randomize(dragonborn_last_name)];

            break;

        case "dwarf":
            if (gender == "male") {
                first_name = dwarf_first_name_male;
            } else if (gender == "female") {
                first_name = dwarf_first_name_female;
            } else {
                first_name = dwarf_first_name_female.concat(dwarf_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + dwarf_last_name[randomize(dwarf_last_name)];

            break;

        case "elf":
            if (gender == "male") {
                first_name = elf_first_name_male;
            } else if (gender == "female") {
                first_name = elf_first_name_female;
            } else {
                first_name = elf_first_name_female.concat(elf_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + elf_last_name[randomize(elf_last_name)];

            break;

        case "gnome":
            if (gender == "male") {
                first_name = gnome_first_name_male;
            } else if (gender == "female") {
                first_name = gnome_first_name_female;
            } else {
                first_name = gnome_first_name_female.concat(gnome_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + gnome_last_name[randomize(gnome_last_name)];
 
            break;

        case "half-elf":

            if (gender == "male") {
                first_name = elf_first_name_male.concat(human_first_name_male);
            } else if (gender == "female") {
                first_name = elf_first_name_female.concat(human_first_name_female);
            } else {
                first_name = elf_first_name_female.concat(elf_first_name_male.concat(human_first_name_male.concat(human_first_name_female)));
            }
            var last_name = elf_last_name.concat(human_last_name);

            character_name = first_name[randomize(first_name)] + " " + last_name[randomize(last_name)];

            break;

        case "halfling":

            if (gender == "male") {
                first_name = halfling_first_name_male;
            } else if (gender == "female") {
                first_name = halfling_first_name_female;
            } else {
                first_name = halfling_first_name_female.concat(halfling_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + halfling_last_name[randomize(halfling_last_name)];

            break;

        case "half-orc":
            if (gender == "male") {
                first_name = orc_first_name_male.concat(human_first_name_male);
            } else if (gender == "female") {
                first_name = orc_first_name_female.concat(human_first_name_female);
            } else {
                first_name = orc_first_name_female.concat(orc_first_name_male.concat(human_first_name_male.concat(human_first_name_female)));
            }

            var last_name = orc_last_name.concat(human_last_name);

            character_name = first_name[randomize(first_name)] + " " + orc_last_name[randomize(orc_last_name)];

            break;

        case "human":

            if (gender == "male") {
                first_name = human_first_name_male;
            } else if (gender == "female") {
                first_name = human_first_name_female;
            } else {
                first_name = human_first_name_female.concat(human_first_name_male);
            }
            character_name = first_name[randomize(first_name)] + " " + human_last_name[randomize(human_last_name)];

            break;

        default:

            character_name = "Thwombly Juventas";

    }
    return character_name;
}

function pronoun1(gender) {

    var pronoun1 = "";

    switch (gender) {

        case "male":
            pronoun1 = "he";
            break;
        case "female":
            pronoun1 = "she";
            break;
        case "either":
            pronoun1 = "they";
            break;
    }
    return pronoun1;

}

function pronoun2(gender) {
    var pronoun2 = "";
    switch (gender) {

        case "male":
            pronoun2 = "him";
            break;
        case "female":
            pronoun2 = "her";
            break;
        case "either":
            pronoun2 = "them";
            break;
    }
    return pronoun2;
}

function pronoun3(gender) {

    var pronoun3 = "";
    switch (gender) {
        case "male":
            pronoun3 = "his";
            break;
        case "female":
            pronoun3 = "her";
            break;
        case "either":
            pronoun3 = "their";
            break;
    }
    return pronoun3;
}

function gender() {
    var gender_array = ["male", "female", "either"];
    var random_gender = gender_array[randomize(gender_array)];
    return random_gender;
}

function isAre(gender) {

    var isAre = "";

    if (gender == "male") {
        isAre = "is";
    } else if (gender == "female") {
        isAre = "is";
    } else if (gender == "either") {
        isAre = "are";
    }
    return isAre;
}

function haveHas(gender) {
  var haveHas;

  switch (gender){
    case "male":
    case "female":
      haveHas = "has";
      break;
    case "either":
      haveHas = "have";
      break;
  }
  return haveHas;
}




//Attributes and Features

function rolled_stats() {
    function stat_roller() {

        var rolled_stat = roll_dice(6, 4);
        rolled_stat.sort(function (a, b) { return b - a });
        rolled_stat.pop();

        var total = 0;
        for (var i in rolled_stat) {
            total += rolled_stat[i];
        }
        return total;
    }

    var rolled_stats = [];

    for (let i = 0; i < 6; i++) {
        rolled_stats.push(stat_roller());
    }
    return rolled_stats;
}

function char_attributes(char_race) {

    var rolled = rolled_stats();
    var race_stats = race_array(char_race);
    var race = race_stats[1];
    var stats = rolled.map((a, i) => a + race[i])

    return stats;
}

function modifiers(ability_score){
  var score_mod;
    switch(ability_score){
      case 1:
        score_mod = -5;
        break;
      case 2:
      case 3:
        score_mod = -4;
        break;
      case 4:
      case 5:
        score_mod = -3;
        break;
      case 6:
      case 7:
        score_mod = -2;
        break;
      case 8:
      case 9:
        score_mod = -1;
        break;
      case 10:
      case 11:
        score_mod = 0;
        break;
      case 12:
      case 13:
        score_mod = 1;
        break;
      case 14:
      case 15:
        score_mod = 2;
        break;
      case 16:
      case 17:
        score_mod = 3;
        break;
      case 18:
      case 19:
        score_mod = 4;
        break; 
      case 20:
      case 21:
        score_mod = 5;
        break;
      case 22:
      case 23:
        score_mod = 6;
        break;
      case 24:
      case 25:
        score_mod = 7;
        break;
      case 26:
      case 27:
        score_mod = 8;
        break;
      case 28:
      case 29:
        score_mod = 9;
        break;
      case 30:
        score_mod = 10;
        break;
    }
  return score_mod;
}

function plus_minus(mod) {
  var plu_min = "";
  if (mod > 0) {
    plu_min = "+";
  } else {
    plu_min = "";
  }
  return plu_min;  
}

function proficiency_bonus(char_level) {

    switch (char_level) {
        case 1:
            prof_bonus = 2;
            break;
        case 2:
            prof_bonus = 2;
            break;
        case 3:
            prof_bonus = 2;
            break;
        case 4:
            prof_bonus = 2;
            break;
        case 5:
            prof_bonus = 3;
            break;
        case 6:
            prof_bonus = 3;
            break;
        case 7:
            prof_bonus = 3;
            break;
        case 8:
            prof_bonus = 3;
            break;
        case 9:
            prof_bonus = 4;
            break;
        case 10:
            prof_bonus = 4;
            break;
        case 11:
            prof_bonus = 4;
            break;
        case 12:
            prof_bonus = 4;
            break;
        case 13:
            prof_bonus = 5;
            break;
        case 14:
            prof_bonus = 5;
            break;
        case 15:
            prof_bonus = 5;
            break;
        case 16:
            prof_bonus = 5;
            break;
        case 17:
            prof_bonus = 6;
            break;
        case 18:
            prof_bonus = 6;
            break;
        case 19:
            prof_bonus = 6;
            break;
        case 20:
            prof_bonus = 6;
            break;

    }
    return prof_bonus;
}

function hitdie(char_class) {

  var hit_die;

     switch (char_class) {
        case "barbarian":
            hit_die = 12;
            break;

        case "bard":
            hit_die = 8;

            break;
        case "cleric":
            hit_die = 8;

            break;
        case "druid":
            hit_die = 8;

            break;
        case "fighter":
            hit_die = 10;

            break;
        case "monk":
            hit_die = 8;

            break;
        case "paladin":
            hit_die = 10;

            break;
        case "ranger":
            hit_die = 10;

            break;
        case "rogue":
            hit_die = 8;

            break;
        case "sorcerer":
            hit_die = 6;

            break;
        case "warlock":
            hit_die = 8;

            break;
        case "wizard":
            hit_die = 6;

            break;
     }
  return hit_die;
}

function hitpoints(con_mod, char_level, char_class) {
  var first_level = hitdie(char_class);
  var subsequent_rolls = (roll_dice(hitdie(char_class), char_level));
  
    var sub_roll_total = 0;
    if (char_level > 1) {
        for (var i in subsequent_rolls) {
            sub_roll_total += subsequent_rolls[i];
        }
    }
    var con_mod_bonus = con_mod * char_level;

    if (con_mod < 1) {
        con_mod_bonus = 1 * char_level;
    }

  var hp = first_level + sub_roll_total + con_mod_bonus;
    return hp;

    //lowest a con mod bonus can go is 1, as asserted by D&D co-creator for 5E Mike Mearls here: https://twitter.com/mikemearls/status/582601826031132673
}

function classer() {

    var classes = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
    var random_class = classes[randomize(classes)];
    var class_input = document.getElementById("class").value;
    var char_class;

    switch (class_input) {
        case "barbarian":
            char_class = "barbarian";
            break;

        case "bard":
            char_class = "bard";

            break;
        case "cleric":
            char_class = "cleric";

            break;
        case "druid":
            char_class = "druid";

            break;
        case "fighter":
            char_class = "fighter";

            break;
        case "monk":
            char_class = "monk";

            break;
        case "paladin":
            char_class = "paladin";

            break;
        case "ranger":
            char_class = "ranger";

            break;
        case "rogue":
            char_class = "rogue";

            break;
        case "sorcerer":
            char_class = "sorcerer";

            break;
        case "warlock":
            char_class = "warlock";

            break;
        case "wizard":
            char_class = "wizard";

            break;
        case "random":
            char_class = random_class;
            break;
        default:
            char_class = "cleric";
    }
    return char_class;
}

function aligner() {
    var alignment_array = ["Lawful Good", "Lawful Nuetral", "Lawful Evil", "Nuetral Good", "True Nuetral", "Nuetral Evil", "Chaotic Good", "Chaotic Nuetral", "Chaotic Evil"];
    var random_alignment = alignment_array[randomize(alignment_array)];
    var alignment_input = document.getElementById("alignment").value;
    var char_alignment;

    switch (alignment_input) {
        case "lawful good":
            char_alignment = "Lawful Good";
            break;
        case "lawful nuetral":
            char_alignment = "Lawful Nuetral";
            break;
        case "lawful evil":
            char_alignment = "Lawful Evil";
            break;
        case "nuetral good":
            char_alignment = "Nuetral Good";
            break;
        case "true nuetral":
            char_alignment = "True Nuetral";
            break;
        case "nuetral evil":
            char_alignment = "Nuetral Evil";
            break;
        case "chaotic good":
            char_alignment = "Chaotic Good";
            break;
        case "chaotic nuetral":
            char_alignment = "Chaotic Nuetral";
            break;    
        case "chaotic evil":
            char_alignment = "Chaotic Evil";
            break;
        case "random":
            char_alignment = random_alignment;
            break;
        default:
            char_alignment = "Lawful Good";
    }
    return char_alignment;

    //Don't know if I want to make alignment truly random 
}

function leveler() {
    var level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var random_level = level[randomize(level)];
    var level_input = document.getElementById("level").value;
    var char_level;

    switch (level_input) {

        case "1":
            char_level = 1;
            break;
        case "2":
            char_level = 2;
            break;
        case "3":
            char_level = 3;
            break;
        case "4":
            char_level = 4;
            break;
        case "5":
            char_level = 5;
            break;
        case "6":
            char_level = 6;
            break;
        case "7":
            char_level = 7;
            break;
        case "8":
            char_level = 8;
            break;
        case "9":
            char_level = 9;
            break;
        case "10":
            char_level = 10;
            break;
        case "11":
            char_level = 11;
            break;
        case "12":
            char_level = 12;
            break;
        case "13":
            char_level = 13;
            break;
        case "14":
            char_level = 14;
            break;
        case "15":
            char_level = 15;
            break;
        case "16":
            char_level = 16;
            break;
        case "17":
            char_level = 17;
            break;
        case "18":
            char_level = 18;
            break;
        case "19":
            char_level = 19;
            break;
        case "20":
            char_level = 20;
            break;
        case "random":
            char_level = random_level;
            break;
        default:
            char_level = 13;

    }
    return char_level;
}

function proficiencies(char_class_array, char_background_array, char_race_array) {

    var profs = [];
    var skills_array = ["athletics", "acrobatics", "sleight of hand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animal handling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion"];
     



    switch (char_background_array[1][0]) {


        case "athletics":
            profs.push("athletics");
             
            break;

        case "acrobatics":
            profs.push("acrobatics");
             

            break;

        case "sleight of hand":
            profs.push("sleight of hand");
             

            break;

        case "stealth":
            profs.push("stealth");
             

            break;

        case "arcana":
            profs.push("arcana");
             

            break;

        case "history":
            profs.push("history");
             

            break;

        case "investigation":
            profs.push("investigation");
             

            break;

        case "nature":
            profs.push("nature");
             

            break;

        case "religion":
            profs.push("religion");
             
            break;

        case "animal handling":
            profs.push("animal handling");
             
            break;

        case "insight":
            profs.push("insight");
             
            break;

        case "medicine":
            profs.push("medicine");
             
            break;

        case "perception":
            profs.push("perception");
             
            break;

        case "survival":
            profs.push("survival");
             
            break;

        case "deception":
            profs.push("deception");
             
            break;

        case "intimidation":
            profs.push("intimidation");
             
            break;

        case "performance":
            profs.push("performance");
             
            break;

        case "persuasion":
            profs.push("persuasion");
             
            break;
        case "none":
             
            break;

        case "random":
            switch (skills_array[randomize(skills_array)]) {


                case "athletics":
                    profs.push("athletics");
                     
                    break;

                case "acrobatics":
                    profs.push("acrobatics");
                     

                    break;

                case "sleight of hand":
                    profs.push("sleight of hand");
                     

                    break;

                case "stealth":
                    profs.push("stealth");
                     

                    break;

                case "arcana":
                    profs.push("arcana");
                     

                    break;

                case "history":
                    profs.push("history");
                     

                    break;

                case "investigation":
                    profs.push("investigation");
                     

                    break;

                case "nature":
                    profs.push("nature");
                     

                    break;

                case "religion":
                    profs.push("religion");
                     
                    break;

                case "animal handling":
                    profs.push("animal handling");
                     
                    break;

                case "insight":
                    profs.push("insight");
                     
                    break;

                case "medicine":
                    profs.push("medicine");
                     
                    break;

                case "perception":
                    profs.push("perception");
                     
                    break;

                case "survival":
                    profs.push("survival");
                     
                    break;

                case "deception":
                    profs.push("deception");
                     
                    break;

                case "intimidation":
                    profs.push("intimidation");
                     
                    break;

                case "performance":
                    profs.push("performance");
                     
                    break;

                case "persuasion":
                    profs.push("persuasion");
                     
                    break;
            }
            break;


    }
    switch (char_background_array[1][1]) {


        case "athletics":
            profs.push("athletics");
             
            break;

        case "acrobatics":
            profs.push("acrobatics");
             

            break;

        case "sleight of hand":
            profs.push("sleight of hand");
             

            break;

        case "stealth":
            profs.push("stealth");
             

            break;

        case "arcana":
            profs.push("arcana");
             

            break;

        case "history":
            profs.push("history");
             

            break;

        case "investigation":
            profs.push("investigation");
             

            break;

        case "nature":
            profs.push("nature");
             

            break;

        case "religion":
            profs.push("religion");
             
            break;

        case "animal handling":
            profs.push("animal handling");
             
            break;

        case "insight":
            profs.push("insight");
             
            break;

        case "medicine":
            profs.push("medicine");
             
            break;

        case "perception":
            profs.push("perception");
             
            break;

        case "survival":
            profs.push("survival");
             
            break;

        case "deception":
            profs.push("deception");
             
            break;

        case "intimidation":
            profs.push("intimidation");
             
            break;

        case "performance":
            profs.push("performance");
             
            break;

        case "persuasion":
            profs.push("persuasion");
             
            break;
        case "none":
             
            break;

        case "random":
            switch (skills_array[randomize(skills_array)]) {


                case "athletics":
                    profs.push("athletics");
                     
                    break;

                case "acrobatics":
                    profs.push("acrobatics");
                     

                    break;

                case "sleight of hand":
                    profs.push("sleight of hand");
                     

                    break;

                case "stealth":
                    profs.push("stealth");
                     

                    break;

                case "arcana":
                    profs.push("arcana");
                     

                    break;

                case "history":
                    profs.push("history");
                     

                    break;

                case "investigation":
                    profs.push("investigation");
                     

                    break;

                case "nature":
                    profs.push("nature");
                     

                    break;

                case "religion":
                    profs.push("religion");
                     
                    break;

                case "animal handling":
                    profs.push("animal handling");
                     
                    break;

                case "insight":
                    profs.push("insight");
                     
                    break;

                case "medicine":
                    profs.push("medicine");
                     
                    break;

                case "perception":
                    profs.push("perception");
                     
                    break;

                case "survival":
                    profs.push("survival");
                     
                    break;

                case "deception":
                    profs.push("deception");
                     
                    break;

                case "intimidation":
                    profs.push("intimidation");
                     
                    break;

                case "performance":
                    profs.push("performance");
                     
                    break;

                case "persuasion":
                    profs.push("persuasion");
                     
                    break;
            }
            break;


    }


    switch (char_race_array[6][0]) {


        case "athletics":
            profs.push("athletics");
             
            break;

        case "acrobatics":
            profs.push("acrobatics");
             

            break;

        case "sleight of hand":
            profs.push("sleight of hand");
             

            break;

        case "stealth":
            profs.push("stealth");
             

            break;

        case "arcana":
            profs.push("arcana");
             

            break;

        case "history":
            profs.push("history");
             

            break;

        case "investigation":
            profs.push("investigation");
             

            break;

        case "nature":
            profs.push("nature");
             

            break;

        case "religion":
            profs.push("religion");
             
            break;

        case "animal handling":
            profs.push("animal handling");
             
            break;

        case "insight":
            profs.push("insight");
             
            break;

        case "medicine":
            profs.push("medicine");
             
            break;

        case "perception":
            profs.push("perception");
             
            break;

        case "survival":
            profs.push("survival");
             
            break;

        case "deception":
            profs.push("deception");
             
            break;

        case "intimidation":
            profs.push("intimidation");
             
            break;

        case "performance":
            profs.push("performance");
             
            break;

        case "persuasion":
            profs.push("persuasion");
             
            break;
        case "none":
             
            break;

        case "random":
            switch (skills_array[randomize(skills_array)]) {


                case "athletics":
                    profs.push("athletics");
                     
                    break;

                case "acrobatics":
                    profs.push("acrobatics");
                     

                    break;

                case "sleight of hand":
                    profs.push("sleight of hand");
                     

                    break;

                case "stealth":
                    profs.push("stealth");
                     

                    break;

                case "arcana":
                    profs.push("arcana");
                     

                    break;

                case "history":
                    profs.push("history");
                     

                    break;

                case "investigation":
                    profs.push("investigation");
                     

                    break;

                case "nature":
                    profs.push("nature");
                     

                    break;

                case "religion":
                    profs.push("religion");
                     
                    break;

                case "animal handling":
                    profs.push("animal handling");
                     
                    break;

                case "insight":
                    profs.push("insight");
                     
                    break;

                case "medicine":
                    profs.push("medicine");
                     
                    break;

                case "perception":
                    profs.push("perception");
                     
                    break;

                case "survival":
                    profs.push("survival");
                     
                    break;

                case "deception":
                    profs.push("deception");
                     
                    break;

                case "intimidation":
                    profs.push("intimidation");
                     
                    break;

                case "performance":
                    profs.push("performance");
                     
                    break;

                case "persuasion":
                    profs.push("persuasion");
                     
                    break;
            }
            break;


    }
    switch (char_race_array[6][1]) {


        case "athletics":
            profs.push("athletics");
             
            break;

        case "acrobatics":
            profs.push("acrobatics");
             

            break;

        case "sleight of hand":
            profs.push("sleight of hand");
             

            break;

        case "stealth":
            profs.push("stealth");
             

            break;

        case "arcana":
            profs.push("arcana");
             

            break;

        case "history":
            profs.push("history");
             

            break;

        case "investigation":
            profs.push("investigation");
             

            break;

        case "nature":
            profs.push("nature");
             

            break;

        case "religion":
            profs.push("religion");
             
            break;

        case "animal handling":
            profs.push("animal handling");
             
            break;

        case "insight":
            profs.push("insight");
             
            break;

        case "medicine":
            profs.push("medicine");
             
            break;

        case "perception":
            profs.push("perception");
             
            break;

        case "survival":
            profs.push("survival");
             
            break;

        case "deception":
            profs.push("deception");
             
            break;

        case "intimidation":
            profs.push("intimidation");
             
            break;

        case "performance":
            profs.push("performance");
             
            break;

        case "persuasion":
            profs.push("persuasion");
             
            break;
        case "none":
             
            break;

        case "random":
            switch (skills_array[randomize(skills_array)]) {


                case "athletics":
                    profs.push("athletics");
                     
                    break;

                case "acrobatics":
                    profs.push("acrobatics");
                     

                    break;

                case "sleight of hand":
                    profs.push("sleight of hand");
                     

                    break;

                case "stealth":
                    profs.push("stealth");
                     

                    break;

                case "arcana":
                    profs.push("arcana");
                     

                    break;

                case "history":
                    profs.push("history");
                     

                    break;

                case "investigation":
                    profs.push("investigation");
                     

                    break;

                case "nature":
                    profs.push("nature");
                     

                    break;

                case "religion":
                    profs.push("religion");
                     
                    break;

                case "animal handling":
                    profs.push("animal handling");
                     
                    break;

                case "insight":
                    profs.push("insight");
                     
                    break;

                case "medicine":
                    profs.push("medicine");
                     
                    break;

                case "perception":
                    profs.push("perception");
                     
                    break;

                case "survival":
                    profs.push("survival");
                     
                    break;

                case "deception":
                    profs.push("deception");
                     
                    break;

                case "intimidation":
                    profs.push("intimidation");
                     
                    break;

                case "performance":
                    profs.push("performance");
                     
                    break;

                case "persuasion":
                    profs.push("persuasion");
                     
                    break;
            }
            break;


    }
     
    return profs;
}

function test(x) {
    console.log(x);
    console.log("test");


}

function skiller(char_proficiency_bonus, char_atts, char_proficiencies) {

    // Array key: athletics, acrobatics, sleight of hand, stealth, arcana, history, investigation, nature, religion, animal_handling, insight, medicine, perception, survival, deception, intimidation, performance, persuasion


    var str_modifier = modifiers(char_atts[0]);
    var dex_modifier = modifiers(char_atts[1]);
    var int_modifier = modifiers(char_atts[3]);
    var wis_modifier = modifiers(char_atts[4]);
    var cha_modifier = modifiers(char_atts[5]);

    //Strength
    var athletics = str_modifier;
    //Dexterity
    var acrobatics = dex_modifier;
    var sleight_of_hand = dex_modifier;
    var stealth = dex_modifier;
    //Intelligence
    var arcana = int_modifier;
    var history = int_modifier;
    var investigation = int_modifier;
    var nature = int_modifier;
    var religion = int_modifier;
    //Wisdom
    var animal_handling = wis_modifier;
    var insight = wis_modifier;
    var medicine = wis_modifier;
    var perception = wis_modifier;
    var survival = wis_modifier;
    //Charisma
    var deception = cha_modifier;
    var intimidation = cha_modifier;
    var performance = cha_modifier;
    var persuasion = cha_modifier;


    for (let i = 0; i < char_proficiencies.length; i++) {
        switch (char_proficiencies[i]) {

            case "athletics":
                athletics += char_proficiency_bonus;
                break;

            case "acrobatics":
                acrobatics += char_proficiency_bonus;
                break;

            case "sleight of hand":
                sleight_of_hand += char_proficiency_bonus;
                break;

            case "stealth":
                stealth += char_proficiency_bonus;
                break;

            case "arcana":
                arcana += char_proficiency_bonus;
                break;

            case "history":
                history += char_proficiency_bonus;
                break;

            case "investigation":
                investigation += char_proficiency_bonus;
                break;

            case "nature":
                nature += char_proficiency_bonus;
                break;

            case "religion":
                religion += char_proficiency_bonus;
                break;

            case "animal handling":
                animal_handling += char_proficiency_bonus;
                break;

            case "insight":
                insight += char_proficiency_bonus;
                break;

            case "medicine":
                medicine += char_proficiency_bonus;
                break;

            case "perception":
                perception += char_proficiency_bonus;
                break;

            case "survival":
                survival += char_proficiency_bonus;
                break;

            case "deception":
                deception += char_proficiency_bonus;
                break;

            case "intimidation":
                intimidation += char_proficiency_bonus;
                break;

            case "performance":
                performance += char_proficiency_bonus;
                break;

            case "persuasion":
                persuasion += char_proficiency_bonus;
                break;
        }

    }


    //Dupe a switch for char_profiencies 4 and 5 once char_race_array system is implemented.

    var modded_skills = [athletics, acrobatics, sleight_of_hand, stealth, arcana, history, investigation, nature, religion, animal_handling, insight, medicine, perception, survival, deception, intimidation, performance, persuasion];
    return modded_skills;
}




function proficiency_marker(char_proficiencies) {

    var proficient = false;


    // Array key: athletics, acrobatics, sleight of hand, stealth, arcana, history, investigation, nature, religion, animal_handling, insight, medicine, perception, survival, deception, intimidation, performance, persuasion

    switch (char_proficiencies[0]) {


        case "athletics":
            proficient = true;
            break;

        case "acrobatics":
            proficient = true;
            break;

        case "sleight of hand":
            proficient = true;

            break;

        case "stealth":
            proficient = true;
            break;

        case "arcana":
            proficient = true;
            break;

        case "history":
            proficient = true;
            break;

        case "investigation":
            proficient = true;
            break;

        case "nature":
            proficient = true;
            break;

        case "religion":
            proficient = true;
            break;

        case "animal handling":
            proficient = true;
            break;

        case "insight":
            proficient = true;
            break;

        case "medicine":
            proficient = true;
            break;

        case "perception":
            proficient = true;
            break;

        case "survival":
            proficient = true;
            break;

        case "deception":
            proficient = true;
            break;

        case "intimidation":
            proficient = true;
            break;

        case "performance":
            proficient = true;
            break;

        case "persuasion":
            proficient = true;
            break;

        case "random":
            profs.push("random");
            break;

        case "none":
            break;
    }


    //Add class array switches when applicable

    return proficient;
}

function spell_slots(char_class, level) {

    var slots;

    switch (char_class) {
        //array key: first dimension is levels from 1 - 20, second dimension is cantrips known, spells known, then spell slots from 1 to 9.
        case "bard":
            var slots = [
                [2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0],
                [3, 7, 4, 3, 0, 0, 0, 0, 0, 0, 0],
                [3, 8, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [3, 9, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [3, 9, 4, 3, 3, 0, 0, 0, 0, 0, 0],
                [3, 10, 4, 3, 3, 1, 0, 0, 0, 0, 0],
                [3, 11, 4, 3, 3, 2, 0, 0, 0, 0, 0],
                [3, 12, 4, 3, 3, 3, 1, 0, 0, 0, 0],
                [4, 15, 4, 3, 3, 3, 2, 1, 0, 0, 0], 
                [4, 15, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [4, 16, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [4, 18, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [4, 19, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [4, 19, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [4, 20, 4, 3, 3, 3, 2, 1, 1, 1, 1],
                [4, 22, 4, 3, 3, 3, 3, 1, 1, 1, 1],
                [4, 22, 4, 3, 3, 3, 3, 2, 1, 1, 1],
                [4, 22, 4, 3, 3, 3, 3, 2, 2, 1, 1]];
            break;
        case "cleric":
            var slots = [
                [3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 1, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 2, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 3, 1, 0, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 0, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 1, 1],
                [5, 0, 4, 3, 3, 3, 3, 1, 1, 1, 1],
                [5, 0, 4, 3, 3, 3, 3, 2, 1, 1, 1],
                [5, 0, 4, 3, 3, 3, 3, 2, 2, 1, 1]];
            break;
        case "druid":
            var slots = [
                [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [3, 0, 4, 3, 3, 0, 0, 0, 0, 0, 0],
                [3, 0, 4, 3, 3, 1, 0, 0, 0, 0, 0],
                [3, 0, 4, 3, 3, 2, 0, 0, 0, 0, 0],
                [3, 0, 4, 3, 3, 3, 1, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 3, 2, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [4, 0, 4, 3, 3, 3, 2, 1, 1, 1, 1],
                [4, 0, 4, 3, 3, 3, 3, 1, 1, 1, 1],
                [4, 0, 4, 3, 3, 3, 3, 2, 1, 1, 1],
                [4, 0, 4, 3, 3, 3, 3, 2, 2, 1, 1]];
            break;
        case "paladin":
            var slots = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 2, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 2, 0, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 1, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 1, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 2, 0, 0, 0, 0, 0],
                [0, 0, 3, 3, 3, 2, 0, 0, 0, 0, 0]];
            break;
        case "ranger":
            var slots = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0],
                [5, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
                [5, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
                [6, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [6, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [7, 0, 4, 3, 3, 0, 0, 0, 0, 0, 0],
                [7, 0, 4, 3, 3, 0, 0, 0, 0, 0, 0],
                [8, 0, 4, 3, 3, 1, 0, 0, 0, 0, 0],
                [8, 0, 4, 3, 3, 1, 0, 0, 0, 0, 0],
                [9, 0, 4, 3, 3, 2, 0, 0, 0, 0, 0],
                [9, 0, 4, 3, 3, 2, 0, 0, 0, 0, 0],
                [10, 0, 4, 3, 3, 3, 1, 0, 0, 0, 0],
                [10, 0, 4, 3, 3, 3, 1, 0, 0, 0, 0],
                [11, 0, 4, 3, 3, 3, 2, 0, 0, 0, 0],
                [11, 0, 4, 3, 3, 3, 2, 0, 0, 0, 0]];
            break;
        case "sorcerer":
            var slots = [
                [4, 2, 2, 0, 0, 0, 0, 0, 0, 0],
                [4, 3, 3, 0, 0, 0, 0, 0, 0, 0],
                [4, 4, 4, 2, 0, 0, 0, 0, 0, 0],
                [5, 5, 4, 3, 0, 0, 0, 0, 0, 0],
                [5, 6, 4, 3, 2, 0, 0, 0, 0, 0],
                [5, 7, 4, 3, 3, 0, 0, 0, 0, 0],
                [5, 8, 4, 3, 3, 1, 0, 0, 0, 0],
                [5, 9, 4, 3, 3, 2, 0, 0, 0, 0],
                [5, 10, 4, 3, 3, 3, 1, 0, 0, 0],
                [6, 11, 4, 3, 3, 3, 2, 0, 0, 0],
                [6, 12, 4, 3, 3, 3, 2, 1, 0, 0],
                [6, 12, 4, 3, 3, 3, 2, 1, 0, 0],
                [6, 13, 4, 3, 3, 3, 2, 1, 1, 0],
                [6, 13, 4, 3, 3, 3, 2, 1, 1, 0],
                [6, 14, 4, 3, 3, 3, 2, 1, 1, 1],
                [6, 14, 4, 3, 3, 3, 2, 1, 1, 1],
                [6, 15, 4, 3, 3, 3, 2, 1, 1, 1],
                [6, 15, 4, 3, 3, 3, 3, 1, 1, 1],
                [6, 15, 4, 3, 3, 3, 3, 2, 1, 1],
                [6, 15, 4, 3, 3, 3, 3, 2, 2, 1]];
            break;
        case "warlock":
            var slots = [
                [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [3, 5, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [3, 6, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                [3, 7, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                [3, 8, 0, 0, 0, 2, 0, 0, 0, 0, 0],
                [3, 9, 0, 0, 0, 2, 0, 0, 0, 0, 0],
                [3, 10, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                [3, 10, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                [3, 11, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [4, 11, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [4, 12, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [4, 12, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [4, 13, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [4, 13, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [4, 14, 0, 0, 0, 0, 4, 0, 0, 0, 0],
                [4, 14, 0, 0, 0, 0, 4, 0, 0, 0, 0],
                [4, 15, 0, 0, 0, 0, 4, 0, 0, 0, 0],
                [4, 15, 0, 0, 0, 0, 4, 0, 0, 0, 0]];
            break;
        case "wizard":
            var slots = [
                [3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 2, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 0, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 1, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 2, 0, 0, 0, 0, 0],
                [4, 0, 4, 3, 3, 3, 1, 0, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 0, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 0, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 0, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 1, 0],
                [5, 0, 4, 3, 3, 3, 2, 1, 1, 1, 1],
                [5, 0, 4, 3, 3, 3, 3, 1, 1, 1, 1],
                [5, 0, 4, 3, 3, 3, 3, 2, 1, 1, 1],
                [5, 0, 4, 3, 3, 3, 3, 2, 2, 1, 1]];
            break;
        default:
            var slots = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    }

    var spell_slots_by_level = slots[level-1];

    return spell_slots_by_level;

}

//function class_array() {
//    var classes = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
//    var random_class = classes[randomize(classes)];
//    var class_input = document.getElementById("class").value;
    

//    switch (class_input) {

//        case "barbarian":
//            features = [
//                ["barbarian"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "bard":
//            features = [
//                ["bard"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "cleric":
//            features = [
//                ["cleric"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "druid":
//            features = [
//                ["druid"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "fighter":
//            features = [
//                ["fighter"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "monk":
//            features = [
//                ["monk"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "paladin":
//            features = [
//                ["paladin"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "ranger":
//            features = [
//                ["ranger"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "rogue":
//            features = [
//                ["rogue"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "sorcerer":
//            features = [
//                ["sorcerer"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "warlock":
//            features = [
//                ["warlock"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "wizard":
//            features = [
//                ["wizard"],
//                [],
//                [],
//                [],
//                [],
//                [],
//                []
//            ];
//            break;
//        case "random":

//            break;

//}
//}


/*contains all of the key features of each core race. Left out race variants and a coupld race specific things I couldn't figure out how to implement in a reasonable timeframe. Will flesh out later.*/
function race_array() {
    var races = ["dragonborn", "dwarf", "elf", "gnome", "half-elf", "halfling", "half-orc", "human"];
    var random_race = races[randomize(races)];
    var race_input = document.getElementById("race").value;



    //array key: race, ability score increases, speed, languages, darkvision, features, skill proficiencies

    switch (race_input) {

        case "dragonborn":
            features = [
                ["Dragonborn"],
                [2, 0, 0, 0, 0, 1],
                [30],
                ["Common", "Draconic", "none"],
                [false],
                ["Draconic Ancestry", "Breath Weapon"],
                ["none", "none"]];
            break;
        case "dwarf":
            features = [
                ["Dwarf"],
                [0, 0, 3, 0, 0, 0],
                [25],
                ["Common", "Dwarvish", "none"],
                [true],
                ["Dwarven Resilience", "Dwarven Combat Training", "Stonecunning"],
                ["none", "none"]];
            break;
        case "elf":
            features = [
                ["Elf"],
                [0, 2, 0, 0, 0, 0],
                [30],
                ["Common", "Elven", "none"],
                [true],
                ["Fey Ancestry", "Trance", "Keen Senses"],
                ["none", "none"]];
            break;
        case "gnome":
            features = [
                ["Gnome"],
                [0, 0, 0, 2, 0, 0],
                [25],
                ["Common", "Gnomish", "none"],
                [true],
                ["Gnome Cunning"],
                ["none", "none"]];
            break;
        case "half-elf":
            function half_elf_ability_score() {
                var half_elf_base_abil = [0, 0, 0, 0, 0, 2];
                var random_abil_choice = [1, 1, 0, 0, 0, 0];
                function shuffle(a) {
                    var j, x, i;
                    for (i = a.length - 1; i > 0; i--) {
                        j = Math.floor(Math.random() * (i + 1));
                        x = a[i];
                        a[i] = a[j];
                        a[j] = x;
                    }
                    return a;
                }
                var shuffled_random_abil_choice = shuffle(random_abil_choice);
                var half_elf_abil = shuffled_random_abil_choice.map((a, i) => a + half_elf_base_abil[i]);
                return half_elf_abil;
            }            
            features = [
                ["Half-Elf"],
                half_elf_ability_score(),
                [30],
                ["Common", "Elven", "random"],
                [true],
                ["Fey Ancestry", "Skill Versatility"],
                ["random", "random"]];
            break;
        case "halfling":
            features = [
                ["Halfling"],
                [0, 2, 0, 0, 0, 0],
                [25],
                ["Common", "Halfling", "none"],
                [false],
                ["Lucky", "Brave", "Nimble"],
                ["none", "none"]];
            break;
        case "half-orc":
            features = [
                ["Half-Orc"],
                [2, 0, 1, 0, 0, 0],
                [30],
                ["Common", "Orc", "none"],
                [true],
                ["Menacing"],
                ["intimidation", "none"]];
            break;
        case "human":
            features = [
                ["Human"],
                [1, 1, 1, 1, 1, 1],
                [30],
                ["Common", "random", "none"],
                [false],
                ["none"],
                ["none", "none"]];
            break;
        case "random":
            switch (random_race) {

                case "dragonborn":
                    features = [
                        ["Dragonborn"],
                        [2, 0, 0, 0, 0, 1],
                        [30],
                        ["Common", "Draconic", "none"],
                        [false],
                        ["Draconic Ancestry", "Breath Weapon"],
                        ["none", "none"]];
                    break;
                case "dwarf":
                    features = [
                        ["Dwarf"],
                        [0, 0, 3, 0, 0, 0],
                        [25],
                        ["Common", "Dwarvish", "none"],
                        [true],
                        ["Dwarven Resilience", "Dwarven Combat Training", "Stonecunning"],
                        ["none", "none"]];
                    break;
                case "elf":
                    features = [
                        ["Elf"],
                        [0, 2, 0, 0, 0, 0],
                        [30],
                        ["Common", "Elven", "none"],
                        [true],
                        ["Fey Ancestry", "Trance", "Keen Senses"],
                        ["none", "none"]];
                    break;
                case "gnome":
                    features = [
                        ["Gnome"],
                        [0, 0, 0, 2, 0, 0],
                        [25],
                        ["Common", "Gnomish", "none"],
                        [true],
                        ["Gnome Cunning"],
                        ["none", "none"]];
                    break;
                case "half-elf":
                    function half_elf_ability_score() {
                        var half_elf_base_abil = [0, 0, 0, 0, 0, 2];
                        var random_abil_choice = [1, 1, 0, 0, 0, 0];
                        function shuffle(a) {
                            var j, x, i;
                            for (i = a.length - 1; i > 0; i--) {
                                j = Math.floor(Math.random() * (i + 1));
                                x = a[i];
                                a[i] = a[j];
                                a[j] = x;
                            }
                            return a;
                        }
                        var shuffled_random_abil_choice = shuffle(random_abil_choice);
                        var half_elf_abil = shuffled_random_abil_choice.map((a, i) => a + half_elf_base_abil[i]);
                        return half_elf_abil;
                    }
                    features = [
                        ["Half-Elf"],
                        half_elf_ability_score(),
                        [30],
                        ["Common", "Elven", "random"],
                        [true],
                        ["Fey Ancestry", "Skill Versatility"],
                        ["random", "random"]];
                    break;
                case "halfling":
                    features = [
                        ["Halfling"],
                        [0, 2, 0, 0, 0, 0],
                        [25],
                        ["Common", "Halfling", "none"],
                        [false],
                        ["Lucky", "Brave", "Nimble"],
                        ["none", "none"]];
                    break;
                case "half-orc":
                    features = [
                        ["Half-Orc"],
                        [2, 0, 1, 0, 0, 0],
                        [30],
                        ["Common", "Orc", "none"],
                        [true],
                        ["Menacing"],
                        ["intimidation", "none"]];
                    break;
                case "human":
                    features = [
                        ["Human"],
                        [1, 1, 1, 1, 1, 1],
                        [30],
                        ["Common", "random", "none"],
                        [false],
                        ["none"],
                        ["none", "none"]];
                    break;
            }
            break;
    }

    return features;
}

/*contains all of the key features of each core background. Traits, ideals, bonds, and flaws are left out for a later function. */
function background_array() {
    var backgrounds = ["acolyte", "charlatan", "criminal", "entertainer", "folk hero", "gladiator", "guild artisan", "guild merchant", "hermit", "knight", "noble", "outlander", "pirate", "sage", "sailor", "soldier", "spy", "urchin"];
    var back_input = document.getElementById("background").value;


    var random_background = backgrounds[randomize(backgrounds)];

    var features;

    //array key: background, skill proficiencies, languages, equipment, money, feature

    switch (back_input) {

        case "acolyte":
            features = [
                ["Acolyte"],
                ["insight", "religion"],
                ["random", "random"],
                ["A Holy Symbol", "A Prayer Book", "Vestments", "A Set Of Common Clothes"],
                [15],
                ["Shelter Of The Faithful"]];
            break;
        case "charlatan":
            features = [
                ["Charlatan"],
                ["deception", "sleight of hand"],
                ["none", "none"],
                ["A Set Of Fine Clothes", "A Disguise Kit", "Con Tools"],
                [15],
                ["False Identity"]];
            break;
        case "criminal":
            features = [
                ["Criminal"],
                ["deception", "stealth"],
                ["none", "none"],
                ["A Gaming Set", "Thieves' Tools", "A Crowbar", "A Set Of Dark Common Clothes Including A Hood"],
                [15],
                ["Criminal Contact"]];
            break;
        case "entertainer":
            features = [
                ["Entertainer"],
                ["acrobatics", "performance"],
                ["none", "none"],
                ["A Costume", "A Musical Instrument", "An Admirer's Favor"],
                [15],
                ["By Popular Demand"]];
            break;
        case "folk hero":
            features = [
                ["Folk Hero"],
                ["animal handling", "survival"],
                ["none", "none"],
                ["A Set of Artisan's Tools", "A Shovel", "An Iron Pot", "A Set Of Common Clothes"],
                [10],
                ["Rustic Hospitality"]];
            break;
        case "gladiator":
            features = [
                ["Gladiator"],
                ["scrobatics", "performance"],
                ["none", "none"],
                ["A Costume", "An Unusual But Inexpensive Weapon", "An Admirer's Favor"],
                [15],
                ["By Popular Demand"]];
            break;
        case "guild artisan":
            features = [
                ["Guild Artisan"],
                ["insight", "persuasion"],
                ["random", "none"],
                ["A Set Of Artisan Tools", "A Guild Letter Of Introduction", "A Set Of Traveler's Clothes"],
                [15],
                ["Guild Membership"]];
            break;
        case "guild merchant":
            features = [
                ["Guild Merchant"],
                ["insight", "persuasion"],
                ["random", "random"],
                ["A Cart With Mule", "A Guild Letter Of Introduction", "A Set Of Traveler's Clothes"],
                [15],
                ["Guild Membership"]];
            break;
        case "hermit":
            features = [
                ["Hermit"],
                ["medicine", "religion"],
                ["random", "none"],
                ["A Scroll Stuffed Full Of Research Notes", "A Winter Blanket", "A Set Of Common Clothes", "An Herbalism Kit"],
                [5],
                ["Discovery"]];
            break;
        case "knight":
            features = [
                ["Knight"],
                ["history", "persuasion"],
                ["random", "none"],
                ["A Set Of Fine Clothes", "A Signet Ring", "A Scroll Of Pedigree"],
                [25],
                ["Retainers"]];
            break;
        case "noble":
            features = [
                ["Noble"],
                ["history", "persuasion"],
                ["random", "none"],
                ["A Set Of Fine Clothes", "A Signet Ring", "A Scroll Of Pedigree"],
                [25],
                ["Position of Privilege"]];
            break;
        case "outlander":
            features = [
                ["Outlander"],
                ["athletics", "survival"],
                ["random", "none"],
                ["A Staff", "A Hunting Trap", "A Hunt Trophy", "A Set Of Traveler's Clothes"],
                [10],
                ["Wanderer"]];
            break;
        case "pirate":
            features = [
                ["Pirate"],
                ["athletics", "perception"],
                ["none", "none"],
                ["A Belaying Pin", "50 Feet Of Silk Rope", "A Lucky Charm", "A Set Of Common Clothes"],
                [10],
                ["Bad Reputation"]];
            break;
        case "sage":
            features = [
                ["Sage"],
                ["arcana", "history"],
                ["random", "random"],
                ["A Bottle Of Ink", "A Quill", "A Small Knife", "A Letter From A Dead Colleague Posing A Question You Have Not Yet Been Able To Answer", "A Set Of Common Clothes"],
                [10],
                ["Researcher"]];
            break;
        case "sailor":
            features = [
                ["Sailor"],
                ["athletics", "perception"],
                ["none", "none"],
                ["A Belaying Pin", "50 Feet Of Silk Rope", "A Lucky Charm", "A Set Of Common Clothes"],
                [10],
                ["Ship's Passage"]];
            break;
        case "soldier":
            features = [
                ["Soldier"],
                ["athletics", "intimidation"],
                ["none", "none"],
                ["An Insignia Of Rank", "A War Trophy", "A Set Of Bone Dice", "A Set Of Common Clothes"],
                [10],
                ["Military Rank"]];
            break;
        case "spy":
            features = [
                ["Spy"],
                ["deception", "stealth"],
                ["none", "none"],
                ["A Gaming Set", "Thieves' Tools", "A Crowbar", "A Set Of Dark Common Clothes Including A Hood"],
                [15],
                ["Criminal Contact"]];
            break;
        case "urchin":
            features = [
                ["Urchin"],
                ["sleight of hand", "stealth"],
                ["none", "none"],
                ["A Small Knife", "A Map Of Your Home City", "A Pet Mouse", "A Token From Your Parents", "A Set Of Common Clothes"],
                [10],
                ["City Secrets"]];
            break;
        case "random":
            switch (random_background) {

                case "acolyte":
                    features = [
                        ["Acolyte"],
                        ["insight", "religion"],
                        ["random", "random"],
                        ["A Holy Symbol", "A Prayer Book", "Vestments", "A Set Of Common Clothes"],
                        [15],
                        ["Shelter Of The Faithful"]];
                    break;
                case "charlatan":
                    features = [
                        ["Charlatan"],
                        ["deception", "sleight of hand"],
                        ["none", "none"],
                        ["A Set Of Fine Clothes", "A Disguise Kit", "Con Tools"],
                        [15],
                        ["False Identity"]];
                    break;
                case "criminal":
                    features = [
                        ["Criminal"],
                        ["deception", "stealth"],
                        ["none", "none"],
                        ["A Gaming Set", "Thieves' Tools", "A Crowbar", "A Set Of Dark Common Clothes Including A Hood"],
                        [15],
                        ["Criminal Contact"]];
                    break;
                case "entertainer":
                    features = [
                        ["Entertainer"],
                        ["acrobatics", "performance"],
                        ["none", "none"],
                        ["A Costume", "A Musical Instrument", "An Admirer's Favor"],
                        [15],
                        ["By Popular Demand"]];
                    break;
                case "folk hero":
                    features = [
                        ["Folk Hero"],
                        ["animal handling", "survival"],
                        ["none", "none"],
                        ["A Set of Artisan's Tools", "A Shovel", "An Iron Pot", "A Set Of Common Clothes"],
                        [10],
                        ["Rustic Hospitality"]];
                    break;
                case "gladiator":
                    features = [
                        ["Gladiator"],
                        ["acrobatics", "performance"],
                        ["none", "none"],
                        ["A Costume", "An Unusual But Inexpensive Weapon", "An Admirer's Favor"],
                        [15],
                        ["By Popular Demand"]];
                    break;
                case "guild artisan":
                    features = [
                        ["Guild Artisan"],
                        ["insight", "persuasion"],
                        ["random", "none"],
                        ["A Set Of Artisan Tools", "A Guild Letter Of Introduction", "A Set Of Traveler's Clothes"],
                        [15],
                        ["Guild Membership"]];
                    break;
                case "guild merchant":
                    features = [
                        ["Guild Merchant"],
                        ["insight", "persuasion"],
                        ["random", "random"],
                        ["A Cart With Mule", "A Guild Letter Of Introduction", "A Set Of Traveler's Clothes"],
                        [15],
                        ["Guild Membership"]];
                    break;
                case "hermit":
                    features = [
                        ["Hermit"],
                        ["medicine", "religion"],
                        ["random", "none"],
                        ["A Scroll Stuffed Full Of Research Notes", "A Winter Blanket", "A Set Of Common Clothes", "An Herbalism Kit"],
                        [5],
                        ["Discovery"]];
                    break;
                case "knight":
                    features = [
                        ["Knight"],
                        ["history", "persuasion"],
                        ["random", "none"],
                        ["A Set Of Fine Clothes", "A Signet Ring", "A Scroll Of Pedigree"],
                        [25],
                        ["Retainers"]];
                    break;
                case "noble":
                    features = [
                        ["Noble"],
                        ["history", "persuasion"],
                        ["random", "none"],
                        ["A Set Of Fine Clothes", "A Signet Ring", "A Scroll Of Pedigree"],
                        [25],
                        ["Position of Privilege"]];
                    break;
                case "outlander":
                    features = [
                        ["Outlander"],
                        ["athletics", "survival"],
                        ["random", "none"],
                        ["A Staff", "A Hunting Trap", "A Hunt Trophy", "A Set Of Traveler's Clothes"],
                        [10],
                        ["Wanderer"]];
                    break;
                case "pirate":
                    features = [
                        ["Pirate"],
                        ["athletics", "perception"],
                        ["none", "none"],
                        ["A Belaying Pin", "50 Feet Of Silk Rope", "A Lucky Charm", "A Set Of Common Clothes"],
                        [10],
                        ["Bad Reputation"]];
                    break;
                case "sage":
                    features = [
                        ["Sage"],
                        ["arcana", "history"],
                        ["random", "random"],
                        ["A Bottle Of Ink", "A Quill", "A Small Knife", "A Letter From A Dead Colleague Posing A Question You Have Not Yet Been Able To Answer", "A Set Of Common Clothes"],
                        [10],
                        ["Researcher"]];
                    break;
                case "sailor":
                    features = [
                        ["Sailor"],
                        ["athletics", "perception"],
                        ["none", "none"],
                        ["A Belaying Pin", "50 Feet Of Silk Rope", "A Lucky Charm", "A Set Of Common Clothes"],
                        [10],
                        ["Ship's Passage"]];
                    break;
                case "soldier":
                    features = [
                        ["Soldier"],
                        ["athletics", "intimidation"],
                        ["none", "none"],
                        ["An Insignia Of Rank", "A War Trophy", "A Set Of Bone Dice", "A Set Of Common Clothes"],
                        [10],
                        ["Military Rank"]];
                    break;
                case "spy":
                    features = [
                        ["Spy"],
                        ["deception", "stealth"],
                        ["none", "none"],
                        ["A Gaming Set", "Thieves' Tools", "A Crowbar", "A Set Of Dark Common Clothes Including A Hood"],
                        [15],
                        ["Criminal Contact"]];
                    break;
                case "urchin":
                    features = [
                        ["Urchin"],
                        ["sleight of hand", "stealth"],
                        ["none", "none"],
                        ["A Small Knife", "A Map Of Your Home City", "A Pet Mouse", "A Token From Your Parents", "A Set Of Common Clothes"],
                        [10],
                        ["City Secrets"]];
                    break;
            }
            break;
    }
    return features;
}


function languages(char_race, char_background) {

    var languages_known = char_race.concat(char_background);;

    function none_lang(lang) {
        return lang != "none";
    }

    var clean_languages_known = languages_known.filter(none_lang);

    function random_language(lang) {

        var lang_list = ["Common", "Dwarvish", "Elven", "Giant", "Gnomish", "Goblin", "Halfling", "Orc", "Abyssal", "Celestial", "Deep Speech", "Draconic", "Infernal", "Primordial", "Sylvan", "Undercommon"];

        for (let i = 0; i < lang.length; i++) {
            if (lang[i] == "random") {
                lang[i] = lang_list[randomize(lang_list)];
            }
            lang_list = lang_list.filter(item => !lang.includes(item));
        }

        return lang;
    }
    languages_known = random_language(clean_languages_known);
    return languages_known;
}

function language_string(char_languages) {
    var lang_string =""; 

    if (char_languages.length == 1) {
        lang_string += char_languages[0];
    } else if (char_languages.length == 2) {
        lang_string += char_languages[0];
        lang_string += " and ";
        lang_string += char_languages[1];
    } else {
        for (let i = 0; i < char_languages.length - 1; i++) {
            lang_string += char_languages[i];
            lang_string += ", ";
        }
        lang_string += "and ";
        lang_string += char_languages[char_languages.length - 1];
    }
    return lang_string;
}

function proficiency_string(char_proficiencies) {
    var prof_string = "";

    if (char_proficiencies.length == 1) {
        prof_string += capitalizeFirstLetter(char_proficiencies[0]);
    } else if (char_proficiencies.length == 2) {
        prof_string += capitalizeFirstLetter(char_proficiencies[0]);
        prof_string += " and ";
        prof_string += capitalizeFirstLetter(char_proficiencies[1]);
    } else {
        for (let i = 0; i < char_proficiencies.length - 1; i++) {
            prof_string += capitalizeFirstLetter(char_proficiencies[i]);
            prof_string += ", ";
        }
        prof_string += "and ";
        prof_string += capitalizeFirstLetter(char_proficiencies[char_proficiencies.length - 1]);
    }
    return prof_string;
}

function spell_slot_string(char_class, spell_slots, level) {

    var spell_slot_string = "";


    //This one is going to be dense, as it'll have to address different casters in different ways depending on how spells work for them. Can still use the spell_slots array no problem, it's just going to come down to finessing the language of each string.

    switch (char_class) {
        case "bard":
        case "cleric":
        case "druid":
        case "paladin":
        case "ranger":
        case "sorcerer":
        case "warlock":
        case "wizard":





            break;

        case "barbarian":
        case "fighter":
        case "monk":
        case "rogue":
            break;
    }


}

/*Output*/


function character() {

    var char_gender = gender();

    var char_level = leveler();

    var char_class_array = classer();

    var char_class = char_class_array;

    var char_race_array = race_array();

    var char_race = char_race_array[0][0].toLowerCase();

    var char_background_array = background_array();

    var char_background = char_background_array[0][0];

    var char_languages = languages(char_race_array[3], char_background_array[2]);

    var char_align = aligner();
    var char_name = namer(char_gender, char_race);
    var char_atts = char_attributes(char_race);
    var char_proficiency_bonus = proficiency_bonus(char_level);
    var str_modifier = modifiers(char_atts[0]);
    var dex_modifier = modifiers(char_atts[1]);
    var con_modifier = modifiers(char_atts[2]);
    var int_modifier = modifiers(char_atts[3]);
    var wis_modifier = modifiers(char_atts[4]);
    var cha_modifier = modifiers(char_atts[5]);
    var char_hitpoints = hitpoints(con_modifier, char_level, char_class);
    var move_speed = char_race_array[2][0];
    var initiative = dex_modifier;



    var class_spell_slots = spell_slots(char_class, char_level);
    var char_proficiencies = proficiencies(char_class_array, char_background_array, char_race_array);
    var char_skills = skiller(char_proficiency_bonus, char_atts, char_proficiencies);
    var passive_perception = wis_modifier + char_skills[12];
    test(char_proficiencies);
    var char_sheet = `Your character's name is ${char_name}. 
    <br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} a level ${char_level} ${capitalizeFirstLetter(char_race)} ${capitalizeFirstLetter(char_class)}.
    <br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} ${char_align}. 
    <br> ${capitalizeFirstLetter(pronoun3(char_gender))} Ability Scores are: 
    <br> Str: ${char_atts[0]} (${plus_minus(str_modifier)}${str_modifier})
    <br> Dex: ${char_atts[1]} (${plus_minus(dex_modifier)}${dex_modifier})
    <br> Con: ${char_atts[2]} (${plus_minus(con_modifier)}${con_modifier})
    <br> Int: ${char_atts[3]} (${plus_minus(int_modifier)}${int_modifier})
    <br> Wis: ${char_atts[4]} (${plus_minus(wis_modifier)}${wis_modifier})
    <br> Cha: ${char_atts[5]} (${plus_minus(cha_modifier)}${cha_modifier})
    <br> ${capitalizeFirstLetter(pronoun3(char_gender))} proficiency bonus is ${plus_minus(char_proficiency_bonus)}${char_proficiency_bonus}. 
    <br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${haveHas(char_gender)} ${char_hitpoints} hitpoints and ${char_level}d${hitdie(char_class)} hit dice.
    <br> Speed: ${move_speed}
    <br> Initiative: ${plus_minus(initiative)}${initiative}
    <br> ${capitalizeFirstLetter(pronoun1(char_gender))} can speak ${language_string(char_languages)}.
    <br> Background: ${char_background}
    <br>
    <br>
    ${capitalizeFirstLetter(pronoun3(char_gender))} Skills are:
    <br>Athletics: ${plus_minus(char_skills[0])}${char_skills[0]}
    <br>Acrobatics: ${plus_minus(char_skills[1])}${char_skills[1]}
    <br>Sleight Of Hand: ${plus_minus(char_skills[2])}${char_skills[2]}
    <br>Stealth: ${plus_minus(char_skills[3])}${char_skills[3]}
    <br>Arcana: ${plus_minus(char_skills[4])}${char_skills[4]}
    <br>History: ${plus_minus(char_skills[5])}${char_skills[5]}
    <br>Investigation: ${plus_minus(char_skills[6])}${char_skills[6]}
    <br>Nature: ${plus_minus(char_skills[7])}${char_skills[7]}
    <br>Religion: ${plus_minus(char_skills[8])}${char_skills[8]}
    <br>Animal Handling: ${plus_minus(char_skills[9])}${char_skills[9]}
    <br>Insight: ${plus_minus(char_skills[10])}${char_skills[10]}
    <br>Medicine: ${plus_minus(char_skills[11])}${char_skills[11]}
    <br>Perception: ${plus_minus(char_skills[12])}${char_skills[12]}
    <br>Survival: ${plus_minus(char_skills[13])}${char_skills[13]}
    <br>Deception: ${plus_minus(char_skills[14])}${char_skills[14]}
    <br>Intimidation: ${plus_minus(char_skills[15])}${char_skills[15]}
    <br>Performance: ${plus_minus(char_skills[16])}${char_skills[16]}
    <br>Persuasion: ${plus_minus(char_skills[17])}${char_skills[17]}
    <br>
    <br>${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} proficient in ${proficiency_string(char_proficiencies)}
    <br>${capitalizeFirstLetter(pronoun3(char_gender))} Passive Perception is ${passive_perception}`;
    

    document.getElementById("charSheet").innerHTML = char_sheet;
  
}


