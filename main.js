(stdin => {
    const blackConstructor =`__=-~-~[-~[]];_=[...{}+[]][__+__- -~[]]+[...{}+[]][-~[]]+([][""]+[])[-~[]]+(([]==[])+[])[__]+(-~[]/[]+[])[__+__]+(!![]+[])[-~[]]+([][""]+[])[+[]]+[...{}+[]][__+__- -~[]]+(!![]+[])[+[]]+[...{}+[]][-~[]]+(!![]+[])[-~[]];`

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
        .replace("0","([]-[]+[])")
        .replace("1","(-~[])")
        .replace("2","(-~[-~[]])")
        .replace("3","(__)")
        .replace("4","(-~[__])")
        .replace("5","(-~[]+[]+-~[]>>-~[])")
        .replace("6","(__+__)")
        .replace("7","((-~[]+[]+-~[]>>-~[])+(-~[]<<-~[]))")
        .replace("8","(-~[__]*-~-~[])")
        .replace("9","(__*__)")

        return rebuild
    }

    const canUseString = ["t", "r", "u", "e", "f", "a", "l", "s", "n", "d", "i", "I", "y", "o", "b", "j", "c", "N","_end_"]

    // Declare Variable
    const inputs  = [...stdin+[]]
    // Main Procedure

    let output = [];
    let frag = false;

    for (let input of inputs) {

        for (let myString of canUseString) {
            // console.log(input,myString)
            
            if (input == myString) {
                //使える文字なら => 置き換える
                // console.log("置き換える場所")
                output.push(replaceBlackCode(input))
                frag = false
                break;

            } else if('_end_' == myString) {
            
                    // console.log('でこーど')
                    //使えない文字なら => utf8に変換して、数字を記号化する必要がある
                    const pursedArr = [...input.charCodeAt().toString(16)+[]]  

                    if (pursedArr.length < 4) {
                        let returnArr = [...Array(4).fill(0)]
                        returnArr[2] = pursedArr[0]
                        returnArr[3] = pursedArr[1]

                        console.log(returnArr)
                        //ここで形成した配列をさらにreplaceBlackCodeしてまとめたい

                        for (let arrElem of returnArr) {
                            // console.log(replaceBlackCode(arrElem+[]))
                            output.push(replaceBlackCode(arrElem+[]))
                        }
                    } else {
                        //リスト内に内文字列だった場合に上記の処理を行いたい
                        console.error(pursedArr)
                    }

            }

        }
    }


    console.log(blackConstructor)
    // console.log(inputs.map( x => replaceBlackCode(x)).join('+'))
    console.log(output.join('+'))

  })(require('fs').readFileSync('/dev/stdin', 'utf8'));