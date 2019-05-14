(stdin => {
    const range = (len, start) => Array.from(Array(len), (v, i) => i + start)
    const uniq = array => [...new Set(array)] // in array // out array

    const replaceBlackCode = (string) => { // in 1 range string // out some range string 
        let rebuild = string
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
        .replace(' ',' ')
        return rebuild
    }

    const canUseString = ["t", "r", "u", "e", "f", "a", "l", "s", "n", "d", "i", "I", "y", "[", "o", "b", "j", "c", " ", "O", "]", "N"]

    // Declare Variable
    const inputs  = stdin.toString().trim().split('');
  
    // Main Procedure

    // inputs.map( x => replaceBlackCode(x))    

    console.log(inputs.map( x => replaceBlackCode(x)).join('+'))
  console.log(inputs)
  })(require('fs').readFileSync('/dev/stdin', 'utf8'));