const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: false },
  githubLink: { type: String, required: false },
  demoLink: { type: String, required: true },
  img: { type: String, required: true },
});

// {
//   name: "Notes App";
//   description: "Notes Management App";
//   category: "Productivity";
//   githubLink: "https://github.com/MusayevDoniyor/Notes-app";
//   demoLink: "https://notes-app-gilt-iota.vercel.app/";
//   img: "https://media-hosting.imagekit.io//cd7f7a1198ea4e7c/Screenshot_4.png?Expires=1833200033&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eBEERaOe-XOwPyx86Zb9meMlWKacgrQO2u5QVxWdAGg035UfrAaLgq5T2cigQ3uum5-UCRdb7HSPNLUyg223NoOewgVd~kPB5-wltJNqz9Hx5m3HkRw~x9QqN8vG7C4lwSN~-QRNe2qbAZO~j2FVnSN2~EItdnrIw0wW~uP8AuE6iBan7DftsdCj6-Du30w3JWFZ5odxoV8~2oS1wKcXVFk9Eme28e0otUTndXK~G4JwyeHCqnGzP56GUKCMbCHt145hNMV6qGR-rX-ufeE9HIwvVqp5E92ppyr-3Xfk75zxN~jOVGy3EBdTOwBxggwEOgSdYLfmf4q~wmgJ-q7lqQ__";
// }

const Project = new mongoose.model("projects", projectSchema);
module.exports = Project;
