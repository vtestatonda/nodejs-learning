/*eventemiiter*/
// const EventEmiiter = require("events");
// const emiiter = new EventEmiiter();
// emiiter.on("save", ({ date }) => {
//   console.log(" *** Event fired ***", date);
// });
// setInterval(() => {
//   emiiter.emit("save", { date: Date.now() });
// }, 1000);

/*nuestro evento*/
const Emiiter = require("./events");
const emiiter = new Emiiter();
emiiter.on("save", ({ date }) => {
  console.log(" *** Event fired ***", date);
});
setInterval(() => {
  emiiter.emit("save", { date: Date.now() });
}, 1000);
