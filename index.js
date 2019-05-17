(M =>
    ((f =>
      (p =>
       f(a =>
         (p(p))(a)))
      (p =>
       f(a =>
         (p(p))(a))))
     (f =>
      n =>
      (t =>
       n > 0 && t())
      (() =>
       (() =>
        (str =>
         console.log(str || n))
        ((str =>
          n % 5 ? str : `${str}Buzz`)
         ((str =>
           n % 3 ? str : `${str}Fizz`)
          (""))))
       (f(n - 1)))))(M))(100);