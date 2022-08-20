

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

Race Stats: 
Dragonborn
Dwarves
Elves
Gnomes
Half-Elves
Halflings
Half-Orcs
Humans

Levels: 
1-20

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

*/


//Makes the whole thing run when the button is clicked.
document.getElementById("btn2").addEventListener("click", character);

//Constants

const btn = document.getElementById("btn2");


//Variables

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


var race_array = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-elf", "Halfling", "Half-Orc", "Human"];

var char_class = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

var level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var gender_array = ["male", "female", "either"];

var alignment = ["Lawful Good", "Lawful Nuetral", "Lawful Evil", "Nuetral Good", "True Nuetral", "Nuetral Evil", "Chaotic Good", "Chaotic Nuetral", "Chaotic Evil"];
//Functions

function randomize(x) {
    var random_number = Math.floor(Math.random() * x.length);
    return random_number;
}

function namer(gender,char_race) {

    var race = char_race;
    let character_name;
    switch (race) {

        case "Dragonborn":

            if (gender == "male") {
                first_name = dragonborn_first_name_male;
            } else if (gender == "female") {
                first_name = dragonborn_first_name_female;
            } else {
                first_name = dragonborn_first_name_female.concat(dragonborn_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + dragonborn_last_name[randomize(dragonborn_last_name)];

            break;

        case "Dwarf":
            if (gender == "male") {
                first_name = dwarf_first_name_male;
            } else if (gender == "female") {
                first_name = dwarf_first_name_female;
            } else {
                first_name = dwarf_first_name_female.concat(dwarf_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + dwarf_last_name[randomize(dwarf_last_name)];

            break;

        case "Elf":
            if (gender == "male") {
                first_name = elf_first_name_male;
            } else if (gender == "female") {
                first_name = elf_first_name_female;
            } else {
                first_name = elf_first_name_female.concat(elf_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + elf_last_name[randomize(elf_last_name)];

            break;

        case "Gnome":
            if (gender == "male") {
                first_name = gnome_first_name_male;
            } else if (gender == "female") {
                first_name = gnome_first_name_female;
            } else {
                first_name = gnome_first_name_female.concat(gnome_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + gnome_last_name[randomize(gnome_last_name)];
 
            break;

        case "Half-elf":

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

        case "Halfling":

            if (gender == "male") {
                first_name = halfling_first_name_male;
            } else if (gender == "female") {
                first_name = halfling_first_name_female;
            } else {
                first_name = halfling_first_name_female.concat(halfling_first_name_male);
            }

            character_name = first_name[randomize(first_name)] + " " + halfling_last_name[randomize(halfling_last_name)];

            break;

        case "Half-Orc":
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

        case "Human":

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

        character_name = "Thombly Juventas";

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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function race_stats(char_race) {

    var stat_array = [];

    switch (char_race) {
        case "Dragonborn":
            stat_array = [2, 0, 0, 0, 0, 1];
            break;
        case "Dwarf":
            stat_array = [0, 0, 3, 0, 0, 0];
            break;
        case "Elf":
            stat_array = [0, 2, 0, 0, 0, 0];
            break;
        case "Gnome":
            stat_array = [0, 0, 0, 2, 0, 0];
            break;
        case "Half-elf":
            stat_array = [0, 0, 0, 0, 0, 2];
            break;
        case "Halfling":
            stat_array = [0, 2, 0, 0, 0, 0];
            break;
        case "Half-Orc":
            stat_array = [2, 0, 1, 0, 0, 0];
            break;
        case "Human":
            stat_array = [1, 1, 1, 1, 1, 1];
            break;

    }
    return stat_array;
}

function roll_dice(sides, rolls) {

    var numbers = [];
    for (let i = 0; i < rolls; i++) {
        numbers.push(Math.ceil(Math.random() * sides))
    }

    return numbers;
}


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


function rolled_stats() {

    var rolled_stats = [];

    for (let i = 0; i < 6; i++) {
        rolled_stats.push(stat_roller());
    }
    return rolled_stats;

}

function char_stats(char_race) {

    var rolled = rolled_stats();
    var race = race_stats(char_race);

    var stats = rolled.map((a, i) => a + race[i])

    return stats;
}


//Output



function character() {

    var gender = gender_array[randomize(gender_array)];
    var char_race = race_array[randomize(race_array)];
    var character_name = namer(gender, char_race);

    var char_stat = char_stats(char_race);


    document.getElementById("charSheet").innerHTML = "Your character's name is <br>" + character_name + ". <br>" + capitalizeFirstLetter(pronoun1(gender)) + " " + isAre(gender) + " a " + " level " + level[randomize(level)] + " " + char_race + " " + char_class[randomize(char_class)] + ".<br> " + capitalizeFirstLetter(pronoun1(gender)) + " " + isAre(gender) + " " + alignment[randomize(alignment)] + ". <br>" + capitalizeFirstLetter(pronoun3(gender)) + " attributes are:" + "<br>Str: " + char_stat[0] + "<br>Dex: " + char_stat[1] + "<br>Con: " + char_stat[2] + "<br>Int: " + char_stat[3] + "<br>Wis: " + char_stat[4] + "<br>Cha: " + char_stat[5];
    
}

