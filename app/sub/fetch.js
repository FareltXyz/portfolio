export async function webhook(e) {
    e.preventDefault();

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            email,
            message,
        }),
    });

    const data = await res.json();
}