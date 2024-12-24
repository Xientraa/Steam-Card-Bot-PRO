const fs = require("node:fs");

fetch(
  "https://github.com/nolddor/steam-badges-db/raw/main/data/badges.min.json"
)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const set_data = { sets: [] };
    for (const [appid, value] of Object.entries(json)) {
      set_data.sets.push({ AppId: appid, Cards: value.size });
    }

    fs.writeFileSync(
      "./app/[DB] SetsData/set_data.json",
      JSON.stringify(set_data),
      { encoding: "utf-8" }
    );
  });
