(stdin => {
    const range = (len, start) => Array.from(Array(len), (v, i) => i + start)
    const uniq = array => [...new Set(array)] // in array // out array

    const replaceBlackCode = (string) => { // in 1 range string // out some range string 
        let rebuild = string
        .replace(' ',"' '")
        .replace("t","(!![]+[])[-[]]")
        .replace("r","(!![]+[])[-~[]]")
        .replace("u","([]['']+[])[-[]]")
        .replace("e","(!![]+[])[-~-~[-~[]]]")
        .replace("f","(![]+[])[-[]]")
        .replace("a","(![]+[])[-~[]]")
        .replace("l","(![]+[])[-~[-~[]]]")
        .replace("s","(![]+[])[-~[-~[-~[]]]]")
        .replace("n","([]['']+[])[-~[]]")
        .replace("d","([]['']+[])[-~[-~[]]]")
        .replace("i","([]['']+[])[(-~[]<<-~[-~[]])+-~[]]")
        .replace("I","(~[]/-[]+[])[-[]]")
        .replace("y","(- -~[]/-[]+[])[(-~[]+[]+-~[]>>-~[])+(-~[]<<-~[])]")
        .replace("o","([...{}+{}])[-~[]]")
        .replace("b","([...{}+{}])[-~[]<<-~[]]")
        .replace("j","([...{}+{}])[-~-~[-~[]]]")
        .replace("c","([...{}+{}])[(-~[]+[]+-~[]>>-~[])]")
        return rebuild
    }

    const canUseString = ["t", "r", "u", "e", "f", "a", "l", "s", "n", "d", "i", "I", "y", "o", "b", "j", "c", "N"]

    // Declare Variable
    const inputs  = [...stdin+[]]
    // Main Procedure

    for (let input of inputs) {
        for (let myString of canUseString) {
            if (inputs == myString){
                //使える文字なら => 置き換える
            } else {
                //使えない文字なら => utf8に変換して、数字を記号化する必要がある
            }
        }
    }

    console.log(inputs.map( x => replaceBlackCode(x)).join('+'))

  })(require('fs').readFileSync('/dev/stdin', 'utf8'));