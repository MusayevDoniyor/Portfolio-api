export default function generateUniqueId() {
  return "id-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
}
