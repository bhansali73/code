function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase("This Is Spinal Tap") //should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") //should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") //should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") //should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") //should return the string all-the-small-things.