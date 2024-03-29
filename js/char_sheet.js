

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

Classes: x
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
Class Modifiers x
Skills x
Spells x
Flavor 

*/





//9/22/22 - Things left to do:

/*
Finish the char sheet output

Compile the class function

Add saving throw proficiencies to class, race, anywhere else

Create a checked/unchecked function for throw and skill proficiencies (Done, 9/22/22)

Add flaws, bonds, personality, and bonds (low priority)

Add weapons, armor, and equipment (low priority)

Add names from previous campaigns

Do a pass to see if anything else is missing

Clean up generator page, making the character summary more concise and narrative, removing data that isn't very valuable like hit die, proficiency, and passive wisdom.

*/

//Makes the whole thing run when the button is clicked.
document.getElementById("btn2").addEventListener("click", character);


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



function char_attributes(char_race, char_class, char_level) {

    var rolled = rolled_stats();
    var race_stats = race_array(char_race);
    var race = race_stats[1];
    var stats = rolled.map((a, i) => a + race[i])

    let final_stats = ability_score_improver(stats, char_class, char_level);

    function ability_score_improver(stats, char_class, char_level) {

        let improvements = 0;

        switch (char_class) {
            case "fighter":
                switch (char_level) {
                    case 1:
                    case 2:
                    case 3:
                        break;
                    case 4:
                    case 5:
                        improvements = 1;
                        break;
                    case 6:
                    case 7:
                        improvements = 2;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        improvements = 3;
                        break;
                    case 12:
                    case 13:
                        improvements = 4;
                        break;
                    case 14:
                    case 15:
                        improvements = 5;
                        break;
                    case 16:
                    case 17:
                    case 18:
                        improvements = 6;
                        break;
                    case 19:
                    case 20:
                        improvements = 7;
                        break;





                }
                break;
            case "rogue":
                switch (char_level) {
                    case 1:
                    case 2:
                    case 3:
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        improvements = 1;
                        break;
                    case 8:
                    case 9:
                        improvements = 2;
                        break;
                    case 10:
                    case 11:
                        improvements = 3;
                        break;
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        improvements = 4;
                        break;
                    case 16:
                    case 17:
                    case 18:
                        improvements = 5;
                        break;
                    case 19:
                    case 20:
                        improvements = 6;
                        break;
                }
                break;
            case "barbarian":
            case "bard":
            case "cleric":
            case "druid":
            case "monk":
            case "paladin":
            case "ranger":
            case "sorcerer":
            case "warlock":
            case "wizard":
                switch (char_level) {
                    case 1:
                    case 2:
                    case 3:
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        improvements = 1;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        improvements = 2;
                        break;
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        improvements = 3;
                        break;
                    case 16:
                    case 17:
                    case 18:
                        improvements = 4;
                        break;
                    case 19:
                    case 20:
                        improvements = 5;
                        break;
                }
                break;

        }

        improvements = improvements * 2;
        let positioner;
        for (let i = 0; i < (improvements); i++) {

            positioner = Math.floor(Math.random() * 6);

            if (stats[positioner] < 20) {
                stats[positioner] = stats[positioner] + 1;
            } else {
                i--;
            }
        }
        return stats;
    }
    return final_stats;
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
    var alignment_array = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "True Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
    var random_alignment = alignment_array[randomize(alignment_array)];
    var alignment_input = document.getElementById("alignment").value;
    var char_alignment;

    switch (alignment_input) {
        case "lawful good":
            char_alignment = "Lawful Good";
            break;
        case "lawful neutral":
            char_alignment = "Lawful Neutral";
            break;
        case "lawful evil":
            char_alignment = "Lawful Evil";
            break;
        case "neutral good":
            char_alignment = "Neutral Good";
            break;
        case "true neutral":
            char_alignment = "True Neutral";
            break;
        case "neutral evil":
            char_alignment = "Neutral Evil";
            break;
        case "chaotic good":
            char_alignment = "Chaotic Good";
            break;
        case "chaotic neutral":
            char_alignment = "Chaotic Neutral";
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

//Occasional duplicates, likely due to the "random" option. Need something that will prevent it, similar to the loop in the ability_score_modifier function. Possibly the filter function?


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



function featurer(char_class, char_level) {
    let features = [];

    switch (char_class) {
        case "barbarian":
            switch (char_level) {
                case 1:
                    features = ["Rage", "Unarmored Defense"];
                    break;
                case 2:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense"];
                    break;
                case 3:
                case 4:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path"];
                    break;
                case 5:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement"];
                    break;
                case 6:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature"];
                    break;
                case 7:
                case 8:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature", "Feral Instinct"];
                    break;
                case 9:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature", "Feral Instinct", "Brutal Critical (1 die)"];
                    break;
                case 10:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 2", "Feral Instinct", "Brutal Critical (1 die)"];
                    break;
                case 11:
                case 12:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 2", "Feral Instinct", "Brutal Critical (1 die)", "Relentless Rage"];
                    break;
                case 13:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 2", "Feral Instinct", "Brutal Critical (2 dice)", "Relentless Rage"];
                    break;
                case 14:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (2 dice)", "Relentless Rage"];
                    break;
                case 15:
                case 16:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (2 dice)", "Relentless Rage", "Persistent Rage"];
                    break;
                case 17:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (3 dice)", "Relentless Rage", "Persistent Rage"];
                    break;
                case 18:
                case 19:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (3 dice)", "Relentless Rage", "Persistent Rage", "Indomitable Might"];
                    break;
                case 20:
                    features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (3 dice)", "Relentless Rage", "Persistent Rage", "Indomitable Might", "Primal Champion"];
                    break;
            }
            break;
        case "bard":
            switch (char_level) {
                case 1:
                    features = ["Bardic Inspiration(d6)"];
                    break;
                case 2:
                    features = ["Bardic Inspiration(d6)", "Jack of All Trades", "Song of Rest(d6)"];
                    break;
                case 3:
                case 4:
                    features = ["Bardic Inspiration(d6)", "Jack of All Trades", "Song of Rest(d6)", "Bard College", "Expertise"];
                    break;
                case 5:
                    features = ["Bardic Inspiration(d8)", "Jack of All Trades", "Song of Rest(d6)", "Bard College", "Expertise", "Font of Inspiration"];
                    break;
                case 6:
                case 7:
                case 8:
                    features = ["Bardic Inspiration(d8)", "Jack of All Trades", "Song of Rest(d6)", "Bard College", "Expertise", "Font of Inspiration", "Countercharm", "Bard College feature"];
                    break;
                case 9:
                    features = ["Bardic Inspiration(d8)", "Jack of All Trades", "Song of Rest(d8)", "Bard College", "Expertise", "Font of Inspiration", "Countercharm", "Bard College feature"];
                    break;
                case 10:
                case 11:
                case 12:
                    features = ["Bardic Inspiration(d10)", "Jack of All Trades", "Song of Rest(d8)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature", "Magical Secrets"];
                    break;
                case 13:
                    features = ["Bardic Inspiration(d10)", "Jack of All Trades", "Song of Rest(d10)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature", "Magical Secrets"];
                    break;
                case 14:
                    features = ["Bardic Inspiration(d10)", "Jack of All Trades", "Song of Rest(d10)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 2"];
                    break;
                case 15:
                case 16:
                    features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d10)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 2"];
                    break;
                case 17:
                    features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d12)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 2"];
                    break;
                case 18:
                case 19:
                    features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d12)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 3"];
                    break;
                case 20:
                    features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d12)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 3", "Superior Inspiration"];
                    break;
            }
            break;
        case "cleric":
            switch (char_level) {
                case 1:
                    features = ["Spellcasting", "Divine Domain"];
                    break;
                case 2:
                case 3:
                case 4:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x1)", "Divine Domain feature"];
                    break;
                case 5:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x1)", "Divine Domain feature", "Destroy Undead(CR 1/2)"];
                    break;
                case 6:
                case 7:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 1/2)"];
                    break;
                case 8:
                case 9:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 1)"];
                    break;
                case 10:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 1)", "Divine Intervention"];
                    break;
                case 11:
                case 12:
                case 13:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 2)", "Divine Intervention"];
                    break;
                case 14:
                case 15:
                case 16:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 3)", "Divine Intervention"];
                    break;
                case 17:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 3", "Destroy Undead(CR 4)", "Divine Intervention"];
                    break;
                case 18:
                case 19:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x3)", "Divine Domain feature x 3", "Destroy Undead(CR 4)", "Divine Intervention"];
                    break;
                case 20:
                    features = ["Spellcasting", "Divine Domain", "Channel Divinity(x3)", "Divine Domain feature x 3", "Destroy Undead(CR 4)", "Divine Intervention", "Divine Intervention improvement"];
                    break;
            }
            break;
        case "druid":
            switch (char_level) {
                case 1:
                    features = ["Druidic", ];
                    break;
                case 2:
                case 3:
                    features = ["Druidic", "Wild Shape", "Druid Circle"];
                    break;
                case 4:
                case 5:
                    features = ["Druidic", "Wild Shape", "Druid Circle","Wild Shape improvement"];
                    break;
                    break;
                case 6:
                case 7:
                    features = ["Druidic", "Wild Shape", "Druid Circle", "Wild Shape improvement","Druid Circle feature"];
                    break;
                case 8:
                case 9:
                    features = ["Druidic", "Wild Shape", "Druid Circle", "Wild Shape improvement", "Druid Circle feature"];
                    break;
                case 10:
                case 11:
                case 12:
                case 13:
                    features = ["Druidic", "Wild Shape", "Druid Circle x 2", "Wild Shape improvement", "Druid Circle feature"];
                    break;
                case 14:
                case 15:
                case 16:
                case 17:
                    features = ["Druidic", "Wild Shape", "Druid Circle x 3", "Wild Shape improvement", "Druid Circle feature"];
                    break;
                case 18:
                case 19:
                    features = ["Druidic", "Wild Shape", "Druid Circle x 3", "Wild Shape improvement", "Druid Circle feature", "Timeless Body", "Beast Spells"];
                    break;
                case 20:
                    features = ["Druidic", "Wild Shape", "Druid Circle x 3", "Wild Shape improvement", "Druid Circle feature", "Timeless Body", "Beast Spells", "Archdruid"];
                    break;
            }
            break;
        case "fighter":
            switch (char_level) {
                case 1:
                    features = [];
                    break;
                case 2:
                    features = ["Action Surge(x1)"];
                    break;
                case 3:
                case 4:
                    features = ["Action Surge(x1)","Martial Archetype"];
                    break;
                    break;
                case 5:
                case 6:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)"];
                    break;
                    break;
                case 7:
                case 8:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)", "Martial Archetype feature"];
                    break;
                case 9:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)", "Martial Archetype feature", "Indomitable (x1)"];
                    break;
                case 10:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)", "Martial Archetype feature x 2", "Indomitable (x1)"];
                    break;
                case 11:
                case 12:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 2", "Indomitable (x1)"];
                    break;
                case 13:
                case 14:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 2", "Indomitable (x2)"];
                    break;
                    break;
                case 15:
                case 16:
                    features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 3", "Indomitable (x2)"];
                    break;
                    break;
                case 17:
                    features = ["Action Surge(x2)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 2", "Indomitable (x3)"];
                    break;
                case 18:
                case 19:
                    features = ["Action Surge(x2)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 3", "Indomitable (x3)"];
                    break;
                    break;
                case 20:
                    features = ["Action Surge(x2)", "Martial Archetype", "Extra Attack (x3)", "Martial Archetype feature x 3", "Indomitable (x3)"];
                    break;
            }
            break;
        case "monk":
            switch (char_level) {
                case 1:
                    features = ["Unarmored Defense", "Martial Arts"];
                    break;
                case 2:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement"];
                    break;
                case 3:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles"];
                    break;
                case 4:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall"];
                    break;
                case 5:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike"];
                    break;
                case 6:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature"];
                    break;
                case 7:
                case 8:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature", "Evasion", "Stillness of Mind"];
                    break;
                case 9:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature", "Evasion", "Stillness of Mind","Unarmored Movement improvement"];
                    break;
                case 10:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body"];
                    break;
                case 11:
                case 12:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body"];
                    break;
                case 13:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon"];
                    break;
                case 14:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul"];
                    break;
                case 15:
                case 16:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body"];
                    break;
                case 17:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 3", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body"];
                    break;
                case 18:
                case 19:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 3", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body", "Empty Body"];
                    break;
                case 20:
                    features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 3", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body", "Empty Body", "Perfect Self"];
                    break;
            }
            break;
        case "paladin":
            switch (char_level) {
                case 1:
                    features = ["Divine Sense", "Lay on Hands"];
                    break;
                case 2:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite"];                    
                    break;
                case 3:
                case 4:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath"];
                    break;
                case 5:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack"];
                    break;
                case 6:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection"];
                    break;
                case 7:
                case 8:
                case 9:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature"];
                    break;
                case 10:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage"];
                    break;
                case 11:
                case 12:
                case 13:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite"];
                    break;
                case 14:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch"];
                    break;
                case 15:
                case 16:
                case 17:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch", "Sacred Oath feature"];
                    break;
                case 18:
                case 19:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch", "Sacred Oath feature", "Aura improvements"];
                    break;
                case 20:
                    features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch", "Sacred Oath feature", "Aura improvements", "Sacred Oath feature"];
                    break;
            }
            break;
        case "ranger":
            switch (char_level) {
                case 1:
                    features = ["Favored Enemy", "Natural Explorer"];
                    break;
                case 2:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style"];
                    break;
                case 3:
                case 4:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave"];
                    break;
                case 5:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack"];
                    break;
                case 6:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement"];
                    break;
                case 7:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement", "Ranger Conclave feature"];
                    break;
                case 8:
                case 9:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement", "Ranger Conclave feature","Land's Stride"];
                    break;
                case 10:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement x 2", "Ranger Conclave feature", "Land's Stride", "Hide in Plain Sight"];
                    break;
                case 11:
                case 12:
                case 13:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement x 2", "Ranger Conclave feature", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature"];
                    break;
                case 14:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish"];
                    break;
                case 15:
                case 16:
                case 17:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature x 2", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish"];
                    break;
                case 18:
                case 19:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature x 2", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish", "Feral Senses"];
                    break;
                case 20:
                    features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature x 2", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish", "Feral Senses", "Foe Slayer"];
                    break;
            }
            break;
        case "rogue":
            switch (char_level) {
                case 1:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant"];                    
                    break;
                case 2:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action"];
                    break;
                case 3:
                case 4:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype"];
                    break;
                case 5:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype","Uncanny Dodge"];
                    break;
                case 6:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge","Expertise"];
                    break;
                case 7:
                case 8:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise","Evasion"];
                    break;
                case 9:
                case 10:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion","Roguish Archetype feature"];
                    break;
                case 11:
                case 12:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature","Reliable Talent"];
                    break;
                case 13:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 2", "Reliable Talent"];
                    break;
                case 14:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 2", "Reliable Talent", "Blindsense"];
                    break;
                case 15:
                case 16:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 2", "Reliable Talent", "Blindsense", "Slippery Mind"];
                    break;
                case 17:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 3", "Reliable Talent", "Blindsense", "Slippery Mind"];
                    break;
                case 18:
                case 19:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 3", "Reliable Talent", "Blindsense", "Slippery Mind", "Elusive"];
                    break;
                case 20:
                    features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 3", "Reliable Talent", "Blindsense", "Slippery Mind", "Elusive","Stroke of Luck"];
                    break;
            }
            break;
        case "sorcerer":
            switch (char_level) {
                case 1:
                    features = ["Sorcerous Origin"];
                    break;
                case 2:
                    features = ["Sorcerous Origin","Font of Magic"];
                    break;
                case 3:
                case 4:
                case 5:
                    features = ["Sorcerous Origin", "Font of Magic","Metamagic"];
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    features = ["Sorcerous Origin", "Font of Magic", "Metamagic","Sorcerous Origin feature"];
                    break;
                case 10:
                case 11:
                case 12:
                case 13:
                    features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature"];
                    break;
                case 14:
                case 15:
                case 16:
                    features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 2"];
                    break;
                case 17:
                    features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 2"];
                    break;
                case 18:
                case 19:
                    features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 3"];
                    break;
                case 20:
                    features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 3", "Sorcerous Restoration"];
                    break;
            }
            break;
        case "warlock":
            switch (char_level) {
                case 1:
                    features = ["Otherworldly Patron", "Pact Magic"];
                    break;
                case 2:
                    features = ["Otherworldly Patron", "Pact Magic","Eldritch Invocations"];
                    break;
                case 3:
                case 4:
                case 5:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations","Pact Boon"];
                    break;
                    break;
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature"];
                    break;
                    break;
                    break;
                    break;
                case 10:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 2"];
                    break;
                case 11:
                case 12:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 2", "Mystic Arcanum (6th level)"];
                    break;
                    break;
                case 13:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 2", "Mystic Arcanum (7th level)"];
                    break;
                case 14:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (7th level)"];
                    break;
                case 15:
                case 16:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (8th level)"];
                    break;
                    break;
                case 17:
                case 18:
                case 19:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (9th level)"];
                    break;
                    break;
                    break;
                case 20:
                    features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (9th level)", "Eldritch Master"];
                    break;
            }
            break;
        case "wizard":
            switch (char_level) {
                case 1:
                    features = ["Arcane Recovery"];
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                    features = ["Arcane Recovery","Arcane Tradition"];
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    features = ["Arcane Recovery", "Arcane Tradition","Arcane Tradition feature"];
                    break;
                case 10:
                case 11:
                case 12:
                case 13:
                    features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 2"];
                    break;
                case 14:
                case 15:
                case 16:
                case 17:
                    features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 3"];
                    break;
                case 18:
                case 19:
                    features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 3", "Spell Mastery"];
                    break;
                case 20:
                    features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 3", "Spell Mastery", "Signature Spells"];
                    break;
            }
            break;
    }


    return features;
}


//Class function structure

//Take in level, output hp, hit die, armor, weapons, tools, saving throws, and skills.

//Use the hitpoints and hit die functions already in place, plus attributes. Can intake attributes and modify them, like the ability score improver. Look at racial and background functions too, to include gear.



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

    var slots = slots[level-1];

    return slots;

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







/* A work in progress. This will hopefully be the cleanest and most contained way to assign everything that class has to offer within a contained and relativly easy to manipulate format. Goal is to have the name, hp, proficiencies, equipment, spell slots, and features all assigned as various data types 
 * to the charClass object, which will then be drawn from to inform everything else. I've grouped in relavant functions and did a bit of cleanup to remove unnecassary lines of code. Will likely apply the same mindset to the race array function as well as part of the final clean up. */

/*
function classObject(charLevel) {

    var classInput = document.getElementById("class").value;

    const charClass = {
        className:"",
        hitpoints:"",
        armorProficiency:[],
        weaponProficiency:[],
        toolProficiency:[],
        savingThrows:[],
        skillProficiency: [],
        equipment: [],
        features: [],
        proficiencyBonus:
    };


    charClass.className = classer();
    charClass.hitpoints = hitpoints(con_modifier, charLevel, charClass.className);
    charClass.features = featurer(charClass.className, charLevel)
    charClass.proficiencyBonus = profBonus(charLevel);

    function profBonus(charLevel) {

        switch (charLevel) {
            case 1:
            case 2:
            case 3:
            case 4:
                prof_bonus = 2;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                prof_bonus = 3;
                break;
            case 9:
            case 10:
            case 11:
            case 12:
                prof_bonus = 4;
                break;
            case 13:
            case 14:
            case 15:
            case 16:
                prof_bonus = 5;
                break;
            case 17:
            case 18:
            case 19:
            case 20:
                prof_bonus = 6;
                break;

        }
        return prof_bonus;
    }

    function classer() {

        var classes = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]; 
        let charClass;

        if (class_input == "random") {
            charClass = classes[randomize(classes)];
        } else {
            charClass = classInput;
        }
        return charClass;
    }

    function hitpoints(conMod, charLevel, charClass) {

        function hitDie() {


            let hit_die;

            switch (charClass.className) {
                case "barbarian":
                    hit_die = 12;
                    break;
                case "fighter":
                case "paladin":
                case "ranger":
                    hit_die = 10;
                    break;
                case "bard":
                case "cleric":
                case "druid":
                case "monk":
                case "rogue":
                case "warlock":
                    hit_die = 8;
                    break;
                case "sorcerer":
                case "wizard":
                    hit_die = 6;
                    break;
            }
            return hit_die;
        }


        let firstLevel = hitDie(charClass);
        let subsequentRolls = (roll_dice(hitdie(charClass), charLevel));

        let subRollTotal = 0;
        if (char_level > 1) {
            for (let i in subsequentRolls) {
                subRollTotal += subsequentRolls[i];
            }
        }
        let conModBonus = conMod * charLevel;

        if (conMod < 1) {
            conModBonus = 1 * charLevel;
        }

        let hp = firstLevel + subRollTotal + conModBonus;
        return hp;

        //lowest a con mod bonus can go is 1, as asserted by D&D co-creator for 5E Mike Mearls here: https://twitter.com/mikemearls/status/582601826031132673
    }

    function featurer(charClass, charLevel) {
        let features = [];

        switch (charClass) {
            case "barbarian":
                switch (charLevel) {
                    case 1:
                        features = ["Rage", "Unarmored Defense"];
                        break;
                    case 2:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense"];
                        break;
                    case 3:
                    case 4:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path"];
                        break;
                    case 5:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement"];
                        break;
                    case 6:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature"];
                        break;
                    case 7:
                    case 8:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature", "Feral Instinct"];
                        break;
                    case 9:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature", "Feral Instinct", "Brutal Critical (1 die)"];
                        break;
                    case 10:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 2", "Feral Instinct", "Brutal Critical (1 die)"];
                        break;
                    case 11:
                    case 12:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 2", "Feral Instinct", "Brutal Critical (1 die)", "Relentless Rage"];
                        break;
                    case 13:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 2", "Feral Instinct", "Brutal Critical (2 dice)", "Relentless Rage"];
                        break;
                    case 14:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (2 dice)", "Relentless Rage"];
                        break;
                    case 15:
                    case 16:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (2 dice)", "Relentless Rage", "Persistent Rage"];
                        break;
                    case 17:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (3 dice)", "Relentless Rage", "Persistent Rage"];
                        break;
                    case 18:
                    case 19:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (3 dice)", "Relentless Rage", "Persistent Rage", "Indomitable Might"];
                        break;
                    case 20:
                        features = ["Rage", "Unarmored Defense", "Reckless Attack", "Danger Sense", "Primal Path", "Extra Attack", "Fast Movement", "Path feature x 3", "Feral Instinct", "Brutal Critical (3 dice)", "Relentless Rage", "Persistent Rage", "Indomitable Might", "Primal Champion"];
                        break;
                }
                break;
            case "bard":
                switch (charLevel) {
                    case 1:
                        features = ["Bardic Inspiration(d6)"];
                        break;
                    case 2:
                        features = ["Bardic Inspiration(d6)", "Jack of All Trades", "Song of Rest(d6)"];
                        break;
                    case 3:
                    case 4:
                        features = ["Bardic Inspiration(d6)", "Jack of All Trades", "Song of Rest(d6)", "Bard College", "Expertise"];
                        break;
                    case 5:
                        features = ["Bardic Inspiration(d8)", "Jack of All Trades", "Song of Rest(d6)", "Bard College", "Expertise", "Font of Inspiration"];
                        break;
                    case 6:
                    case 7:
                    case 8:
                        features = ["Bardic Inspiration(d8)", "Jack of All Trades", "Song of Rest(d6)", "Bard College", "Expertise", "Font of Inspiration", "Countercharm", "Bard College feature"];
                        break;
                    case 9:
                        features = ["Bardic Inspiration(d8)", "Jack of All Trades", "Song of Rest(d8)", "Bard College", "Expertise", "Font of Inspiration", "Countercharm", "Bard College feature"];
                        break;
                    case 10:
                    case 11:
                    case 12:
                        features = ["Bardic Inspiration(d10)", "Jack of All Trades", "Song of Rest(d8)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature", "Magical Secrets"];
                        break;
                    case 13:
                        features = ["Bardic Inspiration(d10)", "Jack of All Trades", "Song of Rest(d10)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature", "Magical Secrets"];
                        break;
                    case 14:
                        features = ["Bardic Inspiration(d10)", "Jack of All Trades", "Song of Rest(d10)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 2"];
                        break;
                    case 15:
                    case 16:
                        features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d10)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 2"];
                        break;
                    case 17:
                        features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d12)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 2"];
                        break;
                    case 18:
                    case 19:
                        features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d12)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 3"];
                        break;
                    case 20:
                        features = ["Bardic Inspiration(d12)", "Jack of All Trades", "Song of Rest(d12)", "Bard College", "Expertise x 2", "Font of Inspiration", "Countercharm", "Bard College feature x 2", "Magical Secrets x 3", "Superior Inspiration"];
                        break;
                }
                break;
            case "cleric":
                switch (charLevel) {
                    case 1:
                        features = ["Spellcasting", "Divine Domain"];
                        break;
                    case 2:
                    case 3:
                    case 4:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x1)", "Divine Domain feature"];
                        break;
                    case 5:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x1)", "Divine Domain feature", "Destroy Undead(CR 1/2)"];
                        break;
                    case 6:
                    case 7:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 1/2)"];
                        break;
                    case 8:
                    case 9:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 1)"];
                        break;
                    case 10:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 1)", "Divine Intervention"];
                        break;
                    case 11:
                    case 12:
                    case 13:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 2)", "Divine Intervention"];
                        break;
                    case 14:
                    case 15:
                    case 16:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 2", "Destroy Undead(CR 3)", "Divine Intervention"];
                        break;
                    case 17:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x2)", "Divine Domain feature x 3", "Destroy Undead(CR 4)", "Divine Intervention"];
                        break;
                    case 18:
                    case 19:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x3)", "Divine Domain feature x 3", "Destroy Undead(CR 4)", "Divine Intervention"];
                        break;
                    case 20:
                        features = ["Spellcasting", "Divine Domain", "Channel Divinity(x3)", "Divine Domain feature x 3", "Destroy Undead(CR 4)", "Divine Intervention", "Divine Intervention improvement"];
                        break;
                }
                break;
            case "druid":
                switch (charLevel) {
                    case 1:
                        features = ["Druidic",];
                        break;
                    case 2:
                    case 3:
                        features = ["Druidic", "Wild Shape", "Druid Circle"];
                        break;
                    case 4:
                    case 5:
                        features = ["Druidic", "Wild Shape", "Druid Circle", "Wild Shape improvement"];
                        break;
                        break;
                    case 6:
                    case 7:
                        features = ["Druidic", "Wild Shape", "Druid Circle", "Wild Shape improvement", "Druid Circle feature"];
                        break;
                    case 8:
                    case 9:
                        features = ["Druidic", "Wild Shape", "Druid Circle", "Wild Shape improvement", "Druid Circle feature"];
                        break;
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        features = ["Druidic", "Wild Shape", "Druid Circle x 2", "Wild Shape improvement", "Druid Circle feature"];
                        break;
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        features = ["Druidic", "Wild Shape", "Druid Circle x 3", "Wild Shape improvement", "Druid Circle feature"];
                        break;
                    case 18:
                    case 19:
                        features = ["Druidic", "Wild Shape", "Druid Circle x 3", "Wild Shape improvement", "Druid Circle feature", "Timeless Body", "Beast Spells"];
                        break;
                    case 20:
                        features = ["Druidic", "Wild Shape", "Druid Circle x 3", "Wild Shape improvement", "Druid Circle feature", "Timeless Body", "Beast Spells", "Archdruid"];
                        break;
                }
                break;
            case "fighter":
                switch (charLevel) {
                    case 1:
                        features = [];
                        break;
                    case 2:
                        features = ["Action Surge(x1)"];
                        break;
                    case 3:
                    case 4:
                        features = ["Action Surge(x1)", "Martial Archetype"];
                        break;
                        break;
                    case 5:
                    case 6:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)"];
                        break;
                        break;
                    case 7:
                    case 8:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)", "Martial Archetype feature"];
                        break;
                    case 9:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)", "Martial Archetype feature", "Indomitable (x1)"];
                        break;
                    case 10:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x1)", "Martial Archetype feature x 2", "Indomitable (x1)"];
                        break;
                    case 11:
                    case 12:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 2", "Indomitable (x1)"];
                        break;
                    case 13:
                    case 14:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 2", "Indomitable (x2)"];
                        break;
                        break;
                    case 15:
                    case 16:
                        features = ["Action Surge(x1)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 3", "Indomitable (x2)"];
                        break;
                        break;
                    case 17:
                        features = ["Action Surge(x2)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 2", "Indomitable (x3)"];
                        break;
                    case 18:
                    case 19:
                        features = ["Action Surge(x2)", "Martial Archetype", "Extra Attack (x2)", "Martial Archetype feature x 3", "Indomitable (x3)"];
                        break;
                        break;
                    case 20:
                        features = ["Action Surge(x2)", "Martial Archetype", "Extra Attack (x3)", "Martial Archetype feature x 3", "Indomitable (x3)"];
                        break;
                }
                break;
            case "monk":
                switch (charLevel) {
                    case 1:
                        features = ["Unarmored Defense", "Martial Arts"];
                        break;
                    case 2:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement"];
                        break;
                    case 3:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles"];
                        break;
                    case 4:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall"];
                        break;
                    case 5:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike"];
                        break;
                    case 6:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature"];
                        break;
                    case 7:
                    case 8:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature", "Evasion", "Stillness of Mind"];
                        break;
                    case 9:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature", "Evasion", "Stillness of Mind", "Unarmored Movement improvement"];
                        break;
                    case 10:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body"];
                        break;
                    case 11:
                    case 12:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body"];
                        break;
                    case 13:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon"];
                        break;
                    case 14:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul"];
                        break;
                    case 15:
                    case 16:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 2", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body"];
                        break;
                    case 17:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 3", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body"];
                        break;
                    case 18:
                    case 19:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 3", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body", "Empty Body"];
                        break;
                    case 20:
                        features = ["Unarmored Defense", "Martial Arts", "Ki", "Unarmored Movement", "Monastic Tradition", "Deflect Missiles", "Slow Fall", "Extra Attack", "Stunning Strike", "Ki-Empowered Strikes", "Monastic Tradition feature x 3", "Evasion", "Stillness of Mind", "Unarmored Movement improvement", "Purity of Body", "Tongue of the Sun and Moon", "Diamond Soul", "Timeless Body", "Empty Body", "Perfect Self"];
                        break;
                }
                break;
            case "paladin":
                switch (charLevel) {
                    case 1:
                        features = ["Divine Sense", "Lay on Hands"];
                        break;
                    case 2:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite"];
                        break;
                    case 3:
                    case 4:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath"];
                        break;
                    case 5:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack"];
                        break;
                    case 6:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection"];
                        break;
                    case 7:
                    case 8:
                    case 9:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature"];
                        break;
                    case 10:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage"];
                        break;
                    case 11:
                    case 12:
                    case 13:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite"];
                        break;
                    case 14:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch"];
                        break;
                    case 15:
                    case 16:
                    case 17:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch", "Sacred Oath feature"];
                        break;
                    case 18:
                    case 19:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch", "Sacred Oath feature", "Aura improvements"];
                        break;
                    case 20:
                        features = ["Divine Sense", "Lay on Hands", "Fighting Style", "Divine Smite", "Divine Health", "Sacred Oath", "Extra Attack", "Aura of Protection", "Sacred Oath feature", "Aura of Courage", "Improved Divine Smite", "Cleansing Touch", "Sacred Oath feature", "Aura improvements", "Sacred Oath feature"];
                        break;
                }
                break;
            case "ranger":
                switch (charLevel) {
                    case 1:
                        features = ["Favored Enemy", "Natural Explorer"];
                        break;
                    case 2:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style"];
                        break;
                    case 3:
                    case 4:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave"];
                        break;
                    case 5:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack"];
                        break;
                    case 6:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement"];
                        break;
                    case 7:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement", "Ranger Conclave feature"];
                        break;
                    case 8:
                    case 9:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement", "Ranger Conclave feature", "Land's Stride"];
                        break;
                    case 10:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement x 2", "Ranger Conclave feature", "Land's Stride", "Hide in Plain Sight"];
                        break;
                    case 11:
                    case 12:
                    case 13:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement", "Natural Explorer Improvement x 2", "Ranger Conclave feature", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature"];
                        break;
                    case 14:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish"];
                        break;
                    case 15:
                    case 16:
                    case 17:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature x 2", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish"];
                        break;
                    case 18:
                    case 19:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature x 2", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish", "Feral Senses"];
                        break;
                    case 20:
                        features = ["Favored Enemy", "Natural Explorer", "Fighting Style", "Primeval Awareness", "Ranger Conclave", "Extra Attack", "Favored Enemy Improvement x 2", "Natural Explorer Improvement x 2", "Ranger Conclave feature x 2", "Land's Stride", "Hide in Plain Sight", "Ranger Conclave feature", "Vanish", "Feral Senses", "Foe Slayer"];
                        break;
                }
                break;
            case "rogue":
                switch (charLevel) {
                    case 1:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant"];
                        break;
                    case 2:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action"];
                        break;
                    case 3:
                    case 4:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype"];
                        break;
                    case 5:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge"];
                        break;
                    case 6:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise"];
                        break;
                    case 7:
                    case 8:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion"];
                        break;
                    case 9:
                    case 10:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature"];
                        break;
                    case 11:
                    case 12:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature", "Reliable Talent"];
                        break;
                    case 13:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 2", "Reliable Talent"];
                        break;
                    case 14:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 2", "Reliable Talent", "Blindsense"];
                        break;
                    case 15:
                    case 16:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 2", "Reliable Talent", "Blindsense", "Slippery Mind"];
                        break;
                    case 17:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 3", "Reliable Talent", "Blindsense", "Slippery Mind"];
                        break;
                    case 18:
                    case 19:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 3", "Reliable Talent", "Blindsense", "Slippery Mind", "Elusive"];
                        break;
                    case 20:
                        features = ["Expertise", "Sneak Attack", "Thieves' Cant", "Cunning Action", "Roguish Archetype", "Uncanny Dodge", "Expertise", "Evasion", "Roguish Archetype feature x 3", "Reliable Talent", "Blindsense", "Slippery Mind", "Elusive", "Stroke of Luck"];
                        break;
                }
                break;
            case "sorcerer":
                switch (charLevel) {
                    case 1:
                        features = ["Sorcerous Origin"];
                        break;
                    case 2:
                        features = ["Sorcerous Origin", "Font of Magic"];
                        break;
                    case 3:
                    case 4:
                    case 5:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic"];
                        break;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic", "Sorcerous Origin feature"];
                        break;
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature"];
                        break;
                    case 14:
                    case 15:
                    case 16:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 2"];
                        break;
                    case 17:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 2"];
                        break;
                    case 18:
                    case 19:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 3"];
                        break;
                    case 20:
                        features = ["Sorcerous Origin", "Font of Magic", "Metamagic x 2", "Sorcerous Origin feature x 3", "Sorcerous Restoration"];
                        break;
                }
                break;
            case "warlock":
                switch (charLevel) {
                    case 1:
                        features = ["Otherworldly Patron", "Pact Magic"];
                        break;
                    case 2:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations"];
                        break;
                    case 3:
                    case 4:
                    case 5:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon"];
                        break;
                        break;
                        break;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature"];
                        break;
                        break;
                        break;
                        break;
                    case 10:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 2"];
                        break;
                    case 11:
                    case 12:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 2", "Mystic Arcanum (6th level)"];
                        break;
                        break;
                    case 13:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 2", "Mystic Arcanum (7th level)"];
                        break;
                    case 14:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (7th level)"];
                        break;
                    case 15:
                    case 16:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (8th level)"];
                        break;
                        break;
                    case 17:
                    case 18:
                    case 19:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (9th level)"];
                        break;
                        break;
                        break;
                    case 20:
                        features = ["Otherworldly Patron", "Pact Magic", "Eldritch Invocations", "Pact Boon", "Otherworldly Patron feature x 3", "Mystic Arcanum (9th level)", "Eldritch Master"];
                        break;
                }
                break;
            case "wizard":
                switch (charLevel) {
                    case 1:
                        features = ["Arcane Recovery"];
                        break;
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        features = ["Arcane Recovery", "Arcane Tradition"];
                        break;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                        features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature"];
                        break;
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 2"];
                        break;
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 3"];
                        break;
                    case 18:
                    case 19:
                        features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 3", "Spell Mastery"];
                        break;
                    case 20:
                        features = ["Arcane Recovery", "Arcane Tradition", "Arcane Tradition feature x 3", "Spell Mastery", "Signature Spells"];
                        break;
                }
                break;
        }

        return features;
    }



}


*/

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

    switch (char_class) {
        case "cleric":
        case "druid":
        case "wizard":

            switch (level) {
                case 1:
                case 2:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2];
                    break;
                case 3:
                case 4:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: "+ spell_slots[2] + "<br>Second: " + spell_slots[3];
                    break;
                case 5:
                case 6:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>First: "+ spell_slots[2]+"<br>Second: "+spell_slots[3]+"<br>Third: "+spell_slots[4];
                    break;
                case 7:
                case 8:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: " + spell_slots[0]+"<br>First: " + spell_slots[2]+"<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5];
                    break;

                case 9:
                case 10:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>First: "+ spell_slots[2]+"<br>Second: " +spell_slots[3]+"<br>Third: "+spell_slots[4]+"<br>Fourth: "+spell_slots[5]+"<br>Fifth: "+spell_slots[6];
                    break;
                case 11:
                case 12:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>First: "+ spell_slots[2]+"<br>Second: " +spell_slots[3]+"<br>Third: "+spell_slots[4]+"<br>Fourth: "+spell_slots[5]+"<br>Fifth: "+spell_slots[6]+"<br>Sixth: "+spell_slots[7];
                    break;
                case 13:
                case 14:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>First: "+ spell_slots[2]+"<br>Second: " +spell_slots[3]+"<br>Third: "+spell_slots[4]+"<br>Fourth: "+spell_slots[5]+"<br>Fifth: "+spell_slots[6]+"<br>Sixth: "+spell_slots[7]+"<br>Seventh: "+spell_slots[8];
                    break;
                case 15:
                case 16:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: "+spell_slots[5]+"<br>Fifth: "+spell_slots[6]+"<br>Sixth: "+spell_slots[7]+"<br>Seventh: "+spell_slots[8]+"<br>Eigth: "+spell_slots[9];
                    break;
                case 17:
                case 18:
                case 19:
                case 20:
                    spell_slot_string = "<br>Spell Slots:<br>Cantrips: " + spell_slots[0]+"<br>First: " + spell_slots[2]+"<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5] + "<br>Fifth: " + spell_slots[6] + "<br>Sixth: " + spell_slots[7] + "<br>Seventh: " + spell_slots[8] + "<br>Eigth: " + spell_slots[9] + "<br>Ninth: " + spell_slots[10];
                    break;
            }
            break;

        case "warlock":

            switch (level) {
                case 1:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>First Level Spells: "+spell_slots[2]
                    break;
                case 2:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>First Level Spells: "+spell_slots[2]+" Invocations Known: 2"
                    break;
                case 3:
                case 4:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Second Level Spells: "+spell_slots[3]+" Invocations Known: 2"
                    break;
                case 5:
                case 6:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Third Level Spells: "+spell_slots[4]+" Invocations Known: 3"
                    break;
                case 7:
                case 8:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Third Level Spells: "+spell_slots[5]+" Invocations Known: 4"
                    break;
                case 9:
                case 10:
                case 11:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Third Level Spells: "+spell_slots[6]+" Invocations Known: 5"
                    break;
                case 12:
                case 13:
                case 14:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Third Level Spells: "+spell_slots[6]+" Invocations Known: 6"
                    break;
                case 15:
                case 16:
                case 17:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Third Level Spells: "+spell_slots[6]+" Invocations Known: 7"
                    break;
                case 18:
                case 19:
                case 20:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: "+spell_slots[0]+"<br>Cantrips: "+spell_slots[0]+"<br>Third Level Spells: "+spell_slots[6]+" Invocations Known: 8"
                    break;
            }
            break;

        case "bard":
        case "sorcerer":
            switch (level) {
                case 1:
                case 2:
                    spell_slot_string = "<br>Spells Known: "+spell_slots[2]+"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2];
                    break;
                case 3:
                case 4:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3];
                    break;
                case 5:
                case 6:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4];
                    break;
                case 7:
                case 8:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5];
                    break;

                case 9:
                case 10:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5] + "<br>Fifth: " + spell_slots[6];
                    break;
                case 11:
                case 12:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5] + "<br>Fifth: " + spell_slots[6] + "<br>Sixth: " + spell_slots[7];
                    break;
                case 13:
                case 14:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5] + "<br>Fifth: " + spell_slots[6] + "<br>Sixth: " + spell_slots[7] + "<br>Seventh: " + spell_slots[8];
                    break;
                case 15:
                case 16:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5] + "<br>Fifth: " + spell_slots[6] + "<br>Sixth: " + spell_slots[7] + "<br>Seventh: " + spell_slots[8] + "<br>Eigth: " + spell_slots[9];
                    break;
                case 17:
                case 18:
                case 19:
                case 20:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>Cantrips: " + spell_slots[0] + "<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] + "<br>Fourth: " + spell_slots[5] + "<br>Fifth: " + spell_slots[6] + "<br>Sixth: " + spell_slots[7] + "<br>Seventh: " + spell_slots[8] + "<br>Eigth: " + spell_slots[9] + "<br>Ninth: " + spell_slots[10];
                    break;
            }
            break;


        case "ranger":

            switch (level) {
                case 1:
                    break;
                case 2:
                case 3:
                case 4:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>First: "+spell_slots[2];
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] +"<br>Spell Slots:<br>First: "+spell_slots[2]+"<br>Second: "+spell_slots[3];
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] + "<br>Spell Slots:<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] +"<br>Third: "+spell_slots[4];
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] + "<br>Spell Slots:<br>First: " + spell_slots[2] + "<br>Second: " + spell_slots[3] + "<br>Third: " + spell_slots[4] +"<br>Fourth: "+spell_slots[5];
                    break;
                case 17:
                case 18:
                case 19:
                case 20:
                    spell_slot_string = "<br>Spells Known: " + spell_slots[2] + "<br>Spell Slots:<br>First: " + spell_slots[2] + "<br>Second: "+spell_slots[3]+" <br> Third: "+spell_slots[4]+"<br>Fourth: " + spell_slots[5] +"<br>Fifth: "+spell_slots[6];

                    break;
            }
            break;

        case "paladin":

            switch (level) {
                case 1:
                    break;
                case 2:
                case 3:
                case 4:
                    spell_slot_string = "<br>Spell Slots:<br>First: "+spell_slots[2];
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                    spell_slot_string = "<br>Spell Slots:<br>First: "+spell_slots[2]+"<br>Second: "+spell_slots[3];
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                    spell_slot_string = "<br>Spell Slots:<br>First: "+spell_slots[2]+"<br>Second: "+spell_slots[3]+"<br>Third: "+spell_slots[4];
                    break;
                case 13:
                case 14:
                case 15:
                case 16:
                    spell_slot_string = "Spell Slots:<br>First: "+spell_slots[2]+"<br>Second: "+spell_slots[3]+"<br>Third: "+spell_slots[4]+"<br>Fourth: "+spell_slots[5];
                    break;
                case 17:
                case 18:
                case 19:
                case 20:
                    spell_slot_string = "<br>Spell Slots:<br>First: "+spell_slots[2]+"<br>Second: "+spell_slots[3]+"<br>Third: "+spell_slots[4]+"<br>Fourth: "+spell_slots[5]+"<br>Fifth: "+spell_slots[6];
                    break;
            }


            break;

        case "barbarian":
            switch (level) {
                case 1:
                case 2:
                    spell_slot_string = "<br>Rages: 2<br>Rage Damage: +2";
                    break;
                case 3:
                case 4:
                case 5:
                    spell_slot_string = "<br>Rages: 3<br>Rage Damage: +2";
                    break;
                case 6:
                case 7:
                case 8:
                    spell_slot_string = "<br>Rages: 4<br>Rage Damage: +2";
                    break;
                case 9:
                case 10:
                case 11:
                    spell_slot_string = "<br>Rages: 4<br>Rage Damage: +3";
                    break;
                case 12:
                case 13:
                case 14:
                case 15:
                    spell_slot_string = "<br>Rages: 5<br>Rage Damage: +3";
                    break;
                case 16:
                    spell_slot_string = "<br>Rages: 5<br>Rage Damage: +4";
                    break;
                case 17:
                case 18:
                case 19:
                    spell_slot_string = "<br>Rages: 6<br>Rage Damage: +4";
                    break;
                case 20:
                    spell_slot_string = "<br>Rages: Unlimited<br>Rage Damage: +4";
                    break;
            }
            break;

        case "monk":
            switch (level) {
                case 1:
                    break;
                case 2:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 3:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 4:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 5:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 6:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 7:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 8:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 9:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 10:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 11:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 12:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 13:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 14:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 15:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 16:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 17:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 18:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 19:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
                case 20:
                    spell_slot_string = "<br>Ki Points: " + level;
                    break;
            }
            break;

        case "rogue":
            switch (level) {
                case 1:
                case 2:
                    spell_slot_string = "<br>Sneak Attack: 1d6";
                    break;
                case 3:
                case 4:
                    spell_slot_string = "<br>Sneak Attack: 2d6";
                    break;
                case 5:
                case 6:
                    spell_slot_string = "<br>Sneak Attack: 3d6";
                    break;
                case 7:
                case 8:
                    spell_slot_string = "<br>Sneak Attack: 4d6";
                    break;
                case 9:
                case 10:
                    spell_slot_string = "<br>Sneak Attack: 5d6";
                    break;
                case 11:
                case 12:
                    spell_slot_string = "<br>Sneak Attack: 6d6";
                    break;
                case 13:
                case 14:
                    spell_slot_string = "<br>Sneak Attack: 7d6";
                    break;
                case 15:
                case 16:
                    spell_slot_string = "<br>Sneak Attack: 8d6";
                    break;
                case 17:
                case 18:
                    spell_slot_string = "<br>Sneak Attack: 9d6";
                    break;
                case 19:
                case 20:
                    spell_slot_string = "<br>Sneak Attack: 10d6";
                    break;
            }
            break;

        case "fighter":
            break;
    }

    return spell_slot_string;
}

function feature_string(char_features) {

    var feature_string = "";

    if (char_features.length > 1) {

        feature_string = "<br>Features:<br>"
        for (let i = 0; i < char_features.length - 1; i++) {
            feature_string += char_features[i];
            feature_string += "<br>";
        }
    }



    return feature_string;


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

    var char_atts = char_attributes(char_race, char_class, char_level);

    var char_proficiency_bonus = proficiency_bonus(char_level);

    var str_modifier = modifiers(char_atts[0]);

    var dex_modifier = modifiers(char_atts[1]);

    var con_modifier = modifiers(char_atts[2]);

    var int_modifier = modifiers(char_atts[3]);

    var wis_modifier = modifiers(char_atts[4]);

    var cha_modifier = modifiers(char_atts[5]);

    let str_save = str_modifier;

    let dex_save = dex_modifier;

    let con_save = con_modifier;

    let int_save = int_modifier;

    let wis_save = wis_modifier;

    let cha_save = cha_modifier;


    var char_hitpoints = hitpoints(con_modifier, char_level, char_class);

    var move_speed = char_race_array[2][0];

    var initiative = dex_modifier;

    var char_proficiencies = proficiencies(char_class_array, char_background_array, char_race_array);

    var char_skills = skiller(char_proficiency_bonus, char_atts, char_proficiencies);

    var passive_perception = 10 + char_skills[12];

    let char_features_array = featurer(char_class, char_level);

    let char_spell_slots = spell_slots(char_class, char_level);

    let athletics = plus_minus(char_skills[0]) + char_skills[0];

    let acrobatics = plus_minus(char_skills[1]) + char_skills[1];

    let sleight_of_hand = plus_minus(char_skills[2]) + char_skills[2];

    let stealth = plus_minus(char_skills[3]) + char_skills[3];

    let arcana = plus_minus(char_skills[4]) + char_skills[4];

    let history = plus_minus(char_skills[5]) + char_skills[5];

    let investigation = plus_minus(char_skills[6]) + char_skills[6];

    let nature = plus_minus(char_skills[7]) + char_skills[7];

    let religion = plus_minus(char_skills[8]) + char_skills[8];

    let animal_handling = plus_minus(char_skills[9]) + char_skills[9];

    let insight = plus_minus(char_skills[10]) + char_skills[10];

    let medicine = plus_minus(char_skills[11]) + char_skills[11];

    let perception = plus_minus(char_skills[12]) + char_skills[12];

    let survival = plus_minus(char_skills[13]) + char_skills[13];

    let deception = plus_minus(char_skills[14]) + char_skills[14];

    let intimidation = plus_minus(char_skills[15]) + char_skills[15];

    let performance = plus_minus(char_skills[16]) + char_skills[16];

    let persuasion = plus_minus(char_skills[17]) + char_skills[17];

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
    <br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${haveHas(char_gender)} ${char_hitpoints} hitpoints.
    <br> ${capitalizeFirstLetter(pronoun1(char_gender))} can speak ${language_string(char_languages)}.
    <br> ${capitalizeFirstLetter(pronoun3(char_gender))} background is as a ${char_background}.
    <br>
    <br>${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} proficient in ${proficiency_string(char_proficiencies)}
    <br>${spell_slot_string(char_class, char_spell_slots, char_level)}
    <br>${feature_string(char_features_array)}
    <br>
    <button type="button" id="btn3" class="button">Create a Character Sheet</button>`;



    //var char_sheet = `Your character's name is ${char_name}. 
    //<br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} a level ${char_level} ${capitalizeFirstLetter(char_race)} ${capitalizeFirstLetter(char_class)}.
    //<br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} ${char_align}. 
    //<br> ${capitalizeFirstLetter(pronoun3(char_gender))} Ability Scores are: 
    //<br> Str: ${char_atts[0]} (${plus_minus(str_modifier)}${str_modifier})
    //<br> Dex: ${char_atts[1]} (${plus_minus(dex_modifier)}${dex_modifier})
    //<br> Con: ${char_atts[2]} (${plus_minus(con_modifier)}${con_modifier})
    //<br> Int: ${char_atts[3]} (${plus_minus(int_modifier)}${int_modifier})
    //<br> Wis: ${char_atts[4]} (${plus_minus(wis_modifier)}${wis_modifier})
    //<br> Cha: ${char_atts[5]} (${plus_minus(cha_modifier)}${cha_modifier})
    //<br> ${capitalizeFirstLetter(pronoun3(char_gender))} proficiency bonus is ${plus_minus(char_proficiency_bonus)}${char_proficiency_bonus}. 
    //<br> ${capitalizeFirstLetter(pronoun1(char_gender))} ${haveHas(char_gender)} ${char_hitpoints} hitpoints and ${char_level}d${hitdie(char_class)} hit dice.
    //<br> Speed: ${move_speed}
    //<br> Initiative: ${plus_minus(initiative)}${initiative}
    //<br> ${capitalizeFirstLetter(pronoun1(char_gender))} can speak ${language_string(char_languages)}.
    //<br> Background: ${char_background}
    //<br>
    //<br>
    //${capitalizeFirstLetter(pronoun3(char_gender))} Skills are:
    //<br>Athletics: ${plus_minus(char_skills[0])}${char_skills[0]}
    //<br>Acrobatics: ${plus_minus(char_skills[1])}${char_skills[1]}
    //<br>Sleight Of Hand: ${plus_minus(char_skills[2])}${char_skills[2]}
    //<br>Stealth: ${plus_minus(char_skills[3])}${char_skills[3]}
    //<br>Arcana: ${plus_minus(char_skills[4])}${char_skills[4]}
    //<br>History: ${plus_minus(char_skills[5])}${char_skills[5]}
    //<br>Investigation: ${plus_minus(char_skills[6])}${char_skills[6]}
    //<br>Nature: ${plus_minus(char_skills[7])}${char_skills[7]}
    //<br>Religion: ${plus_minus(char_skills[8])}${char_skills[8]}
    //<br>Animal Handling: ${plus_minus(char_skills[9])}${char_skills[9]}
    //<br>Insight: ${plus_minus(char_skills[10])}${char_skills[10]}
    //<br>Medicine: ${plus_minus(char_skills[11])}${char_skills[11]}
    //<br>Perception: ${plus_minus(char_skills[12])}${char_skills[12]}
    //<br>Survival: ${plus_minus(char_skills[13])}${char_skills[13]}
    //<br>Deception: ${plus_minus(char_skills[14])}${char_skills[14]}
    //<br>Intimidation: ${plus_minus(char_skills[15])}${char_skills[15]}
    //<br>Performance: ${plus_minus(char_skills[16])}${char_skills[16]}
    //<br>Persuasion: ${plus_minus(char_skills[17])}${char_skills[17]}
    //<br>
    //<br>${capitalizeFirstLetter(pronoun1(char_gender))} ${isAre(char_gender)} proficient in ${proficiency_string(char_proficiencies)}
    //<br>${capitalizeFirstLetter(pronoun3(char_gender))} Passive Perception is ${passive_perception}
    //<br>${spell_slot_string(char_class, char_spell_slots, char_level)}
    //<br>${feature_string(char_features_array)}
    //<br>
    //<button type="button" id="btn3" class="button">Create a Character Sheet</button>`;

    document.getElementById("charSheet").innerHTML = char_sheet;

    document.getElementById("btn3").addEventListener("click", sheet_changer);

    let prof_check = "";


    function sheet_changer() {

        var newWin = open('', '_blank');

        const filled_char_sheet = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<title>Character Sheet</title>
<link rel="stylesheet" href="charactersheetstyle.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Grenze:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
</head>
<body>
<form class="charsheet">
<header>
<section class="charname">
<label for="charname">Character Name</label>
<input name="charname" placeholder="${char_name}"/>
</section>
<section class="misc">
<ul>
<li>
<label for="classlevel">Class & Level</label>
<input id="classlevel" name="classlevel" placeholder="${capitalizeFirstLetter(char_class)} ${char_level}"/>
</li>
<li>
<label for="background">Background</label>
<input id="background" name="background" placeholder="${char_background}"/>
</li>
<li>
<label for="playername">Player Name</label>
<input id="playername" name="playername" >
</li>
<li>
<label for="race">Race</label>
<input id="race" name="race" placeholder="${capitalizeFirstLetter(char_race)}"/>
</li>
<li>
<label for="alignment">Alignment</label>
<input id="alignment" name="alignment" placeholder="${char_align}"/>
</li>
<li>
<label for="xp">Experience Points</label>
<input id="xp" name="xp" />
</li>
</ul>
</section>
</header>
<main>
<section>
<section class="attributes">
<div class="scores">
<ul>
<li>
<div class="score">
<label for="Strengthscore">Strength</label>
<input name="Strengthscore" placeholder="${plus_minus(str_modifier)} ${str_modifier}"/>
</div>
<div class="modifier">
<input name="Strengthmod" placeholder="${char_atts[0]}" />
</div>
</li>
<li>
<div class="score">
<label for="Dexterityscore">Dexterity</label>
<input name="Dexterityscore" placeholder="${plus_minus(dex_modifier)} ${dex_modifier}"/>
</div>
<div class="modifier">
<input name="Dexteritymod" placeholder="${char_atts[1]}"/>
</div>
</li>
<li>
<div class="score">
<label for="Constitutionscore">Constitution</label>
<input name="Constitutionscore" placeholder="${plus_minus(con_modifier)} ${con_modifier}"/>
</div>
<div class="modifier">
<input name="Constitutionmod" placeholder="${char_atts[2]}"/>
</div>
</li>
<li>
<div class="score">
<label for="Wisdomscore">Wisdom</label>
<input name="Wisdomscore" placeholder="${plus_minus(wis_modifier)} ${wis_modifier}"/>
</div>
<div class="modifier">
    <input name="Wisdommod" placeholder="${char_atts[3]}"/>
</div>
</li>
<li>
<div class="score">
<label for="Intelligencescore">Intelligence</label>
<input name="Intelligencescore" placeholder="${plus_minus(int_modifier)} ${int_modifier}"/>
</div>
<div class="modifier">
    <input name="Intelligencemod" placeholder="${char_atts[4]}"/>
</div>
</li>
<li>
<div class="score">
<label for="Charismascore">Charisma</label>
        <input name="Charismascore" placeholder="${plus_minus(cha_modifier)} ${cha_modifier}"/>
</div>
<div class="modifier">
<input name="Charismamod" placeholder="${char_atts[5]}"/>
</div>
</li>
</ul>
</div>
<div class="attr-applications">
<div class="inspiration box">
<div class="label-container" style="margin-top: 11px;background-color: #eee;  border-radius: 5px; border:0;">
<label for="inspiration">Inspiration</label>
</div>
<input style="border-radius:17px;" name="inspiration" type="checkbox" />
</div>
<div class="proficiencybonus box">
<div style="border-radius:2px;" class="label-container">
<label for="proficiencybonus">Proficiency Bonus</label>
</div>
<input name="proficiencybonus" placeholder="${plus_minus(char_proficiency_bonus)} ${char_proficiency_bonus}"/>
</div>
<div class="saves list-section box">
<ul>
<li>
<label for="Strength-save">Strength</label>
<input name="Strength-save" type="text" placeholder="${plus_minus(str_save)} ${str_save}"/>
<input name="Strength-save-prof" type="checkbox" />
</li>
<li>
<label for="Dexterity-save">Dexterity</label>
<input name="Dexterity-save" type="text" placeholder="${plus_minus(dex_save)} ${dex_save}"/>
<input name="Dexterity-save-prof" type="checkbox" />
</li>
<li>
<label for="Constitution-save">Constitution</label>
<input name="Constitution-save" type="text" placeholder="${plus_minus(con_save)} ${con_save}"/>
<input name="Constitution-save-prof" type="checkbox" />
</li>
<li>
<label for="Wisdom-save">Wisdom</label>
<input name="Wisdom-save" type="text" placeholder="${plus_minus(wis_save)} ${wis_save}"/>
<input name="Wisdom-save-prof" type="checkbox" />
</li>
<li>
<label for="Intelligence-save">Intelligence</label>
<input name="Intelligence-save" type="text" placeholder="${plus_minus(int_save)} ${int_save}"/>
<input name="Intelligence-save-prof" type="checkbox" />
</li>
<li>
<label for="Charisma-save">Charisma</label>
<input name="Charisma-save" type="text" placeholder="${plus_minus(cha_save)} ${cha_save}"/>
<input name="Charisma-save-prof" type="checkbox" />
</li>
</ul>
<div class="label">Saving Throws</div>
</div>
<div class="skills list-section box">
<ul>
<li>
<label for="Acrobatics">Acrobatics <span class="skill">(Dex)</span></label>
<input name="Acrobatics" type="text" placeholder="${acrobatics}" />
<input name="Acrobatics-prof" type="checkbox" ${checker("acrobatics", char_proficiencies)} />
</li>
<li>
<label for="Animal Handling">Animal Handling <span class="skill">(Wis)</span></label>
<input name="Animal Handling" type="text" placeholder="${animal_handling}"/>
<input name="Animal Handling-prof" type="checkbox" ${checker("animal handling", char_proficiencies)}/>
</li>
<li>
<label for="Arcana">Arcana <span class="skill">(Int)</span></label>
<input name="Arcana" type="text" placeholder="${arcana}"/>
<input name="Arcana-prof" type="checkbox" ${checker("arcana", char_proficiencies)}/>
</li>
<li>
<label for="Athletics">Athletics <span class="skill">(Str)</span></label>
<input name="Athletics" type="text" placeholder="${athletics}"/>
<input name="Athletics-prof" type="checkbox" ${checker("athletics", char_proficiencies)}/>
</li>
<li>
<label for="Deception">Deception <span class="skill">(Cha)</span></label>
<input name="Deception" type="text" placeholder="${deception}"/>
<input name = "Deception-prof" type = "checkbox" ${checker("deception", char_proficiencies)}/>
</li>
<li>
<label for="History">History <span class="skill">(Int)</span></label>
<input name="History" type="text" placeholder="${history}"/>
<input name="History-prof" type="checkbox" ${checker("history", char_proficiencies)}/>
</li>
<li>
<label for="Insight">Insight <span class="skill">(Wis)</span></label>
<input name="Insight" type="text" placeholder="${insight}"/>
<input name="Insight-prof" type="checkbox" ${checker("insight", char_proficiencies)}/>
</li>
<li>
<label for="Intimidation">Intimidation <span class="skill">(Cha)</span></label>
<input name="Intimidation" type="text" placeholder="${intimidation}"/>
<input name = "Intimidation-prof" type = "checkbox" ${checker("intimidation", char_proficiencies)}/>
</li>
<li>
<label for="Investigation">Investigation <span class="skill">(Int)</span></label>
<input name="Investigation" type="text" placeholder="${investigation}"/>
<input name="Investigation-prof" type="checkbox" ${checker("investigation", char_proficiencies)}/>
</li>
<li>
<label for="Medicine">Medicine <span class="skill">(Wis)</span></label>
<input name="Medicine" type="text" placeholder="${medicine}"/>
<input name="Medicine-prof" type="checkbox" ${checker("medicine", char_proficiencies)}/>
</li>
<li>
<label for="Nature">Nature <span class="skill">(Int)</span></label>
<input name="Nature" type="text" placeholder="${nature}"/>
<input name="Nature-prof" type="checkbox" ${checker("nature", char_proficiencies)}/>
</li>
<li>
<label for="Perception">Perception <span class="skill">(Wis)</span></label>
<input name="Perception" type="text" placeholder="${perception}"/>
<input name="Perception-prof" type="checkbox" ${checker("perception", char_proficiencies)}/>
</li>
<li>
<label for="Performance">Performance <span class="skill">(Cha)</span></label>
<input name="Performance" type="text" placeholder="${performance}"/>
<input name="Performance-prof" type="checkbox" ${checker("performance", char_proficiencies)}/>
</li>
<li>
<label for="Persuasion">Persuasion <span class="skill">(Cha)</span></label>
<input name="Persuasion" type="text" placeholder="${persuasion}"/>
<input name="Persuasion-prof" type="checkbox" ${checker("persuasion", char_proficiencies)}/>
</li>
<li>
<label for="Religion">Religion <span class="skill">(Int)</span></label>
<input name="Religion" type="text" placeholder="${religion}"/>
<input name="Religion-prof" type="checkbox" ${checker("religion", char_proficiencies)}/>
</li>
<li>
<label for="Sleight of Hand">Sleight of Hand <span class="skill">(Dex)</span></label>
<input name="Sleight of Hand" type="text" placeholder="${sleight_of_hand}"/>
<input name="Sleight of Hand-prof" type="checkbox" ${checker("sleight of hand", char_proficiencies)}/>
</li>
<li>
<label for="Stealth">Stealth <span class="skill">(Dex)</span></label>
<input name="Stealth" type="text" placeholder="${stealth}"/>
<input name="Stealth-prof" type="checkbox" ${checker("stealth", char_proficiencies)}/>
</li>
<li>
<label for="Survival">Survival <span class="skill">(Wis)</span></label>
<input name="Survival" type="text" placeholder="${survival}"/>
<input name="Survival-prof" type="checkbox" ${checker("survival", char_proficiencies)}/>
</li>
</ul>
<div class="label">Skills</div>
</div>
</div>
</section>
<div class="passive-perception box">
<div style="margin-top: 6px; border-radius: 2px; " class="label-container">
<label for="passiveperception">Passive Wisdom (Perception)</label>
</div>
<input name="passiveperception" placeholder="${plus_minus(passive_perception)} ${passive_perception}"/>
</div>
<div style="margin-top: 5px; padding: 5px; border: 1px solid black; border-radius: 2px; display: flex; flex-direction: column-reverse;" class="otherprofs">
<label for="otherprofs" style="text-align:center; padding: 5px;">Other Proficiencies and Languages</label>
<textarea style="border:0; height: 14.8em;" name="otherprofs">${char_languages}</textarea>
</div>
</section>
<section>
<section class="combat">
<div class="armorclass">
<div>
<label for="ac">Armor Class</label>
<input name="ac" type="text" />
</div>
</div>
<div class="initiative">
<div>
<label for="initiative">Initiative</label>
<input name="initiative" type="text" placeholder="${plus_minus(initiative)} ${initiative}"/>
</div>
</div>
<div class="speed">
<div>
<label for="speed">Speed</label>
<input name="speed" type="text" placeholder="${move_speed}"/>
</div>
</div>
<div class="hp">
<div class="regular">
<div class="max">
<label for="maxhp">Hit Point Maximum</label>
<input name="maxhp" type="text" placeholder="${char_hitpoints}"/>
</div>
<div class="current">
<label for="currenthp">Current Hit Points</label>
    <input name="currenthp" type="text" placeholder="${char_hitpoints}"/>
</div>
</div>
<div class="temporary">
<label for="temphp">Temporary Hit Points</label>
<input name="temphp" type="text" />
</div>
</div>
<div class="hitdice">
<div><div class="total">
<label for="totalhd">Total</label>
<input name="totalhd" type="text" placeholder="${char_level}d ${hitdie(char_class)}"/>
</div>
<div class="remaining">
<label for="remaininghd">Hit Dice</label>
<input name="remaininghd" type="text" />
</div>
</div>
</div>
<div class="deathsaves">
<div>
<div class="label">
<label>Death Saves</label>
</div>
<div class="marks">
<div class="deathsuccesses">
<label>Successes</label>
<div class="bubbles">
<input name="deathsuccess1" type="checkbox" class="deathsaves"/>
<input name="deathsuccess2" type="checkbox" class="deathsaves"/>
<input name="deathsuccess3" type="checkbox" class="deathsaves"/>
</div>
</div>
<div class="deathfails">
<label>Failures</label>
<div class="bubbles">
<input name="deathfail1" type="checkbox" class="deathsaves"/>
<input name="deathfail2" type="checkbox" class="deathsaves"/>
<input name="deathfail3" type="checkbox" class="deathsaves"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="attacksandspellcasting">
<div>
<label>Attacks & Spellcasting</label>
<table>
<thead>
<tr>
<th>Name</th>
<th>Atk Bonus</th>
<th>Damage/Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<input name="atkname1" type="text" />
</td>
<td>
<input name="atkbonus1" type="text" />
</td>
<td>
<input name="atkdamage1" type="text" />
</td>
</tr>
<tr>
<td>
<input name="atkname2" type="text" />
</td>
<td>
<input name="atkbonus2" type="text" />
</td>
<td>
<input name="atkdamage2" type="text" />
</td>
</tr>
<tr>
<td>
<input name="atkname3" type="text" />
</td>
<td>
<input name="atkbonus3" type="text" />
</td>
<td>
<input name="atkdamage3" type="text" />
</td>
</tr>
</tbody>
</table>
<textarea style="height:4.7em;" id="attacks_and_spellcasting">
</textarea>
</div>
</section>
<section class="equipment">
<div>
<label>Equipment</label>
<div class="money">
<ul>
<li>
<label for="cp">cp</label>
<input name="cp" />
</li>
<li>
<label for="sp">sp</label>
<input name="sp" />
</li>
<li>
<label for="ep">ep</label>
<input name="ep" />
</li>
<li>
<label for="gp">gp</label>
<input name="gp" />
</li>
<li>
<label for="pp">pp</label>
<input name="pp" />
</li>
</ul>
</div>
<textarea id="equipment"></textarea>
</div>
</section>
</section>
<section>
<section class="flavor">
<div class="personality">
<label for="personality">Personality</label>
<textarea name="personality"></textarea>
</div>
<div class="ideals">
<label for="ideals">Ideals</label>
<textarea name="ideals"></textarea>
</div>
<div class="bonds">
<label for="bonds">Bonds</label>
<textarea name="bonds"></textarea>
</div>
<div class="flaws">
<label for="flaws">Flaws</label>
<textarea name="flaws"></textarea>
</div>
</section>
<section class="features">
<div>
<label for="features">Features & Traits</label>
<textarea style="height: 32.3em;" name="features" placeholder="${char_features_array}"></textarea>
</div>
</section>
</section>
</main>
<footer>
</footer>
</form>
</body>
</html>
`
            newWin.document.write(filled_char_sheet);
    }
}




function checker(key, array) {

    let checked = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].indexOf(key) >= 0) {
        checked = "checked";
        }
    }
    return checked;
}










