import db from "./config/database.config";
import app from "./app";

db.sync().then(() => {
  console.log("DB connection is ok");
});

const port = 8000;

app.listen(port, () => {
  console.log("Server On! Port " + port);
});
