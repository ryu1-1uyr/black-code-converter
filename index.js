(stdin => {
  //Declare Variable
  const blackConstructor = `__=-~-~[-~[]];_=[...{}+[]][__+__- -~[]]+[...{}+[]][-~[]]+([][""]+[])[-~[]]+(([]==[])+[])[__]+(-~[]/[]+[])[__+__]+(!![]+[])[-~[]]+([][""]+[])[+[]]+[...{}+[]][__+__- -~[]]+(!![]+[])[+[]]+[...{}+[]][-~[]]+(!![]+[])[-~[]];`;

  const charTable = {
    " ": "' '",
    "\n": "[]",
    t: "(!![]+[])[-[]]",
    r: "(!![]+[])[-~[]]",
    u: "([]['']+[])[-[]]",
    e: "(!![]+[])[-~-~[-~[]]]",
    f: "(![]+[])[-[]]",
    a: "(![]+[])[-~[]]",
    l: "(![]+[])[-~[-~[]]]",
    s: "(![]+[])[-~[-~[-~[]]]]",
    n: "([]['']+[])[-~[]]",
    d: "([]['']+[])[-~[-~[]]]",
    i: "([]['']+[])[(-~[]<<-~[-~[]])+-~[]]",
    I: "(~[]/-[]+[])[-[]]",
    y: "(- -~[]/-[]+[])[(-~[]+[]+-~[]>>-~[])+(-~[]<<-~[])]",
    o: "([...{}+{}])[-~[]]",
    b: "([...{}+{}])[-~[]<<-~[]]",
    j: "([...{}+{}])[-~-~[-~[]]]",
    c: "([...{}+{}])[(-~[]+[]+-~[]>>-~[])]",
    "0": "([]-[]+[])",
    "1": "(-~[])",
    "2": "(-~[-~[]])",
    "3": "(__)",
    "4": "(-~[__])",
    "5": "(-~[]+[]+-~[]>>-~[])",
    "6": "(__+__)",
    "7": "((-~[]+[]+-~[]>>-~[])+(-~[]<<-~[]))",
    "8": "(-~[__]*-~-~[])",
    "9": "(__*__)",
    N: "(''/''+[])[-[]-[]]"
  };

  const replaceBlackCode = string => {
    return string.replace(/./gsu, char => charTable[char] || char);
  };

  const createReturnUTF = string => {
    return `(!![]+[])[-~[]]+(!![]+[])[__]+(!![]+[])[+[]]+(!![]+[])[-~[-~[]]]+(!![]+[])[-~[]]+([]['']+[])[-~[]]+' \"'+'\\\\' +([]['']+[])[[]-[]] +'{' +${string}+ '}'+'\"'`;
  };

  const wrapper = string => {
    return `[][_][_](${string})()`;
  };

  const inputs = [...(stdin + [])];
  const output = [];

  //main code

  for (const input of inputs) {
    //使える文字なら => 置き換える
    if (input in charTable) {
      output.push(charTable[input]);
      continue;
    }

    //使えない文字なら => utf8に変換して、数字を記号化する
    const rawArr = [...(input.charCodeAt(0).toString(16) + [])];
    const parsedArr =
      rawArr.length < 4 ? ["0", "0", rawArr[0], rawArr[1]] : rawArr;

    //ここで形成した配列をさらにreplaceBlackCodeしてまとめる
    const flamedArr = [];

    for (const arrElem of parsedArr) {
      flamedArr.push(replaceBlackCode(arrElem + []));
    }

    const utf8code = wrapper(createReturnUTF(flamedArr.join("+")));
    output.push(utf8code);
  }

  console.log(blackConstructor, output.join("+"));
})(require("fs").readFileSync("/dev/stdin", "utf8"));
