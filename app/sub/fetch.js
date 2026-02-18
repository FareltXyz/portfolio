export async function webhook(e) {
    e.preventDefault();
    const getForm = new FormData(e.target)
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: getForm.get("name"),
            email: getForm.get("email"),
            message: getForm.get("message"),
        }),
    });

    const data = await res.json();
}