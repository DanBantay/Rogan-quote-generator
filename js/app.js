//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "When someone comes along and expresses him or herself as freely as they think, people flock to it. They enjoy it.",
      author: "Joe Rogan"
    },
    {
      quote:
        "Because I have a girlfriend, I try and take the straight and narrow path, which is good because it prevents VD.",
      author: "Joe Rogan"
    },
    {
      quote:
        "It's painful for me to watch someone who isn't funny. It's horrifying to sit in the back and watch some guy who just totally sucks.",
      author: "Joe Rogan"
    },
    {
      quote:
        "That's my only goal. Surround myself with funny people, and make sure everyone has a good time and works hard",
      author: "Joe Rogan"
    },
    {
      quote:
        "The only time I commit to conspiracy theories is when something way retarded happens. Like Lee Harvey Oswald acting alone.",
      author: "Joe Rogan"
    },
    {
      quote:
        "Never stay in a bad marriage, and don't hang around with psycho coke fiends.",
      author: "Joe Rogan"
    },
    
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
