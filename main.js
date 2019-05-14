(stdin => {
    // Define Function
    const range = (len, start) =>
      Array.from(Array(len), (v, i) => i + start)
  
    const uniq = array => {return [...new Set(array)]} 
  
    // Declare Variable
    const inputs  = stdin.toString().trim().split('');
  
    // Main Procedure
    //["t", "r", "u", "e", "f", "a", "l", "s", "n", "d", "i", "I", "y", "[", "o", "b", "j", "c", " ", "O", "]", "N"]
    //使用可能文字列
  
    console.log(inputs)
  
  })(require('fs').readFileSync('/dev/stdin', 'utf8'));