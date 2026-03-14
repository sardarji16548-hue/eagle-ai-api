export default function handler(req, res) {
  const body = req.body || {};
  const msg = (body.message || "").toLowerCase();

  if(msg.includes("hello")) return res.json({ reply: "Hello! I am Eagle AI. How can I help you?" });
  if(msg.includes("your name") || msg.includes("who are you")) return res.json({ reply: "I am Eagle AI, your friendly assistant." });
  if(msg.includes("developer") || msg.includes("who made you")) return res.json({ reply: "I was developed by Mohd Juber." });

  res.json({ reply: "Eagle AI received your message." });
}
