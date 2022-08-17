

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

Races: 
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



//Constants

const btn = document.getElementById("btn2");


//Variables

var human_first_name_male = ["Arando", "Bram", "Cale", "Dalkon", "Daylen", "Dodd", "Dungarth", "Dyrk", "Eandro", "Falken", "Feck", "Fenton", "Gryphero", "Hagar", "Jeras", "Krynt", "Lavant", "Leyten", "Madian", "Malfier", "Markus", "Meklan", "Namen", "Navaren", "Nerle", "Nilus", "Ningyan", "Norris", "Quentin", "Semil", "Sevenson", "Steveren", "Talfen", "Tamond", "Taran", "Tavon", "Tegan", "Vanan", "Vincent"
];

var human_first_name_female = ["Azura", " Brey", " Hallan", " Kasaki", " Lorelei", " Mirabel", " Pharana", " Remora", " Rosalyn", " Sachil", " Saidi", " Tanika", " Tura", " Tylsa", " Vencia", "Xandrilla"
];

var human_last_name = ["Arkalis", "Armanci", "Bilger", "Blackstrand", "Brightwater", "Carnavon", "Caskajaro", "Coldshore", "Coyle", "Cresthill", "Cuttlescar", "Daargen", "Dalicarlia", "Danamark", "Donoghan", "Drumwind", "Dunhall", "Ereghast", "Falck", "Fallenbridge", "Faringray", "Fletcher", "Fryft", "Goldrudder", "Grantham", "Graylock", "Gullscream", "Hindergrass", "Iscalon", "Kreel", "Kroft", "Lamoth", "Leerstrom", "Lynchfield", "Moonridge", "Netheridge", "Oakenheart", "Pyncion", "Ratley", "Redraven", "Revenmar", "Roxley", "Sell", "Seratolva", "Shanks", "Shattermast", "Shaulfer", "Silvergraft", "Stavenger", "Stormchapel", "Strong", "Swiller", "Talandro", "Targana", "Towerfall", "Umbermoor", "Van-Devries", "Van-Gandt", "Van-Hyden", "Varcona", "Varzand", "Voortham", "Vrye", "Webb", "Welfer", "Wilxes", "Wintermere", "Wygarthe", "Zatchet", "Zethergyll"
];

var race = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-elf", "Halfling", "Half-Orc", "Human"
];

var char_class = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"
];

var level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var gender_array = ["male", "female", "both"];

var alignment = ["Lawful Good", "Lawful Nuetral", "Lawful Evil", "Nuetral Good", "True Nuetral", "Nuetral Evil", "Chaotic Good", "Chaotic Nuetral", "Chaotic Evil"]


//Functions

function randomize(x) {
    var random_number = Math.floor(Math.random() * x.length)
    return random_number;
}

function character() {
    var gender = gender_array[randomize(gender_array)];
    var gender_name = [];


    if (gender == "male") {
        gender_name = human_first_name_male;
    } else if (gender == "female") {
        gender_name = human_first_name_female;
    } else {
        gender_name = human_first_name_female.concat(human_first_name_male);
    }


    document.getElementById("charSheet").innerHTML = gender_name[randomize(gender_name)] + " " + human_last_name[randomize(human_last_name)] + ". <br> Level " + level[randomize(level)] + " " + race[randomize(race)] + " " + char_class[randomize(char_class)] + ".<br> " + alignment[randomize(alignment)] + ".";
}

//Output






//const random = Math.floor(Math.random() * VARIABLE_ARRAY.length);
//console.log(random, VARIABLE_ARRAY[random]);