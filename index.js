const app = require("./app");
const { config } = require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server has been started on ${process.env.PORT}`);
});
