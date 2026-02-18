import rateLimit from "../../sub/cache";

const limiter = rateLimit({
  interval: 60 * 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(req) {
  try {
    // FIX RATE LIMIT
    await limiter.check(3, "CACHE_TOKEN");

    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "📩 New Contact Form",
            color: 5814783,
            fields: [
              { name: "👤 Name", value: name },
              { name: "📧 Email", value: email },
              { name: "💬 Message", value: message },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.log(err)
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
