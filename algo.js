function alphabetPosition(text) {
    let alpabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let num = []

    text = text.toLowerCase()

    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < alpabet.length; j++){
            if(text[i] == alpabet[j]){
                num.push(j + 1)
            }
        }
    }
    return num.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))