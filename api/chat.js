/// api/chat.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const msg = (req.body.message || "").toLowerCase();

    // AI name
    if(msg.includes("your name") || msg.includes("who are you")){
      return res.status(200).json({ reply:"I am Eagle AI, your friendly assistant." });
    }

    // Developer
    if(msg.includes("developer") || msg.includes("creator") || msg.includes("who made you")){
      return res.status(200).json({ reply:"I was developed by Mohd Juber." });
    }

    // Greetings
    if(msg.includes("hello") || msg.includes("hi")){
      return res.status(200).json({ reply:"Hello! I am Eagle AI. How can I help you?" });
    }
    if(msg.includes("namaste") || msg.includes("kaise ho")){
      return res.status(200).json({ reply:"नमस्ते! मैं Eagle AI हूँ। मैं आपकी मदद करने के लिए यहाँ हूँ।" });
    }
    if(msg.includes("salam") || msg.includes("assalamualaikum")){
      return res.status(200).json({ reply:"السلام علیکم! میں Eagle AI ہوں۔ میں آپ کی مدد کے لیے یہاں ہوں۔" });
    }

    // Time
    if(msg.includes("time")){
      let time = new Date().toLocaleTimeString();
      return res.status(200).json({ reply:"Current time is " + time });
    }

    // Date
    if(msg.includes("date")){
      let date = new Date().toDateString();
      return res.status(200).json({ reply:"Today's date is " + date });
    }

    // Help
    if(msg.includes("help")){
      return res.status(200).json({ reply:"You can ask me in English, Hindi or Urdu. I can tell time, date and answer basic questions." });
    }

    // Default reply
    return res.status(200).json({ reply:"Eagle AI received your message. I support multiple languages." });

  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}/ api/chat.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const msg = (req.body.message || "").toLowerCase();

    // AI name
    if(msg.includes("your name") || msg.includes("who are you")){
      return res.status(200).json({ reply:"I am Eagle AI, your friendly assistant." });
    }

    // Developer
    if(msg.includes("developer") || msg.includes("creator") || msg.includes("who made you")){
      return res.status(200).json({ reply:"I was developed by Mohd Juber." });
    }

    // Greetings
    if(msg.includes("hello") || msg.includes("hi")){
      return res.status(200).json({ reply:"Hello! I am Eagle AI. How can I help you?" });
    }
    if(msg.includes("namaste") || msg.includes("kaise ho")){
      return res.status(200).json({ reply:"नमस्ते! मैं Eagle AI हूँ। मैं आपकी मदद करने के लिए यहाँ हूँ।" });
    }
    if(msg.includes("salam") || msg.includes("assalamualaikum")){
      return res.status(200).json({ reply:"السلام علیکم! میں Eagle AI ہوں۔ میں آپ کی مدد کے لیے یہاں ہوں۔" });
    }

    // Time
    if(msg.includes("time")){
      let time = new Date().toLocaleTimeString();
      return res.status(200).json({ reply:"Current time is " + time });
    }

    // Date
    if(msg.includes("date")){
      let date = new Date().toDateString();
      return res.status(200).json({ reply:"Today's date is " + date });
    }

    // Help
    if(msg.includes("help")){
      return res.status(200).json({ reply:"You can ask me in English, Hindi or Urdu. I can tell time, date and answer basic questions." });
    }

    // Default reply
    return res.status(200).json({ reply:"Eagle AI received your message. I support multiple languages." });

  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}export default function handler(req, res) {
  const body = req.body || {};
  const msg = (body.message || "").toLowerCase();

  if(msg.includes("hello")) return res.json({ reply: "Hello! I am Eagle AI. How can I help you?" });
  if(msg.includes("your name") || msg.includes("who are you")) return res.json({ reply: "I am Eagle AI, your friendly assistant." });
  if(msg.includes("developer") || msg.includes("who made you")) return res.json({ reply: "I was developed by Mohd Juber." });

  res.json({ reply: "Eagle AI received your message." });
}
