const promise1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("John Cena");
    }, 2000);
  });
};
const promise2 = function (datafromfirst) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(`You can't see me, by : ${datafromfirst}`);
    }, 1000);
  });
};
async function func() {
  var data1 = await promise1();
  var data2 = await promise2(data1);
  console.log(data2);
}
func();
