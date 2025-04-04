let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = [".com", ".net", ".us", ".io"];

const combination = [];
for(let i = 0; i < pronoun.length; i++){
    for(let x = 0; x < adj.length; x++){
        for(let n = 0; n < noun.length; n++){
            for(let e = 0; e < extension.length; e++){
                let frase1 = `${pronoun[i]}${adj[x]}${noun[n]}${extension[e]}`;
                console.log(frase1);
            }
        }
    }
}
pronoun.forEach( pronouns => {
    adj.forEach(adjs => {
        noun.forEach(nouns => {
            extension.forEach(extensions => {
                combination.push( `${pronouns}${adjs}${nouns}${extensions}`) 
            }
            )
        }
        )
    }
    )
}
)
console.log(combination);