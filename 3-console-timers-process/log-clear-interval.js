let n = 5;
const countdown = setInterval(() => {
  if (n <= 0) {
    console.log('Blastoff');
    clearInterval(countdown);
  } else {
    console.log(n--);
  }
}, 1000);
