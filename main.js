(stdin => {
    // Define Function
    const range = (len, start) =>
      Array.from(Array(len), (v, i) => i + start)
  
    const zeroPadding = digit => n => n.padStart(digit, '0')
  
    // Declare Variable
    const inputs  = stdin.toString().trim().split('');
  
    // Main Procedure

  
    console.log(inputs)
  
  })(require('fs').readFileSync('/dev/stdin', 'utf8'));