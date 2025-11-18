// src/utils/openai.js
export async function askOpenAI(prompt, { maxTokens = 250 } = {}) {
    const key = process.env.REACT_APP_OPENAI_KEY;
    if (!key) throw new Error("OPENAI KEY missing in env");

    const body = {
        model: "gpt-4o-mini", // change model if you want, or "gpt-4o" / "gpt-4" etc.
        messages: [
            { role: "system", content: "You are a helpful assistant that suggests movies." },
            { role: "user", content: prompt }
        ],
        max_tokens: maxTokens,
        temperature: 0.7
    };

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`OpenAI error: ${res.status} ${txt}`);
    }
    const json = await res.json();
    // extract assistant text
    return json.choices?.[0]?.message?.content ?? "";
}
