import translate from "../Scripts/translator.js"
import MorseObj from "../data/data.js";

//valid inputs 
it ("Should translate a to '.-'", () => { 
    const translation = translateToMorse('a');
    expect(translation).toBe('.-')
})

//invalid inputs 


//null inputs
it ('should return please input valid text when input it null', () => { 

})