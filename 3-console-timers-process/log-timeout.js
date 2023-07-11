console.log(1, 'Just before setTimeout');
setTimeout(() => {
  console.log(2, "Logs after 2 seconds\nNote: setTimeout is asynchronous. So it is non-blocking. The next statement doesn't wait for it.");
}, 2000);
console.log(3, 'Just after setTimeout');
