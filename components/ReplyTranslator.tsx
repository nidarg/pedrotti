"use client";

import { useState } from "react";
import { Languages, Copy, Check } from "lucide-react";

const languageOptions = [
  "English",
  "Deutsch",
  "Polski",
  "Română",
  "Nederlands",
] as const;

type ReplyResponse = {
  translated: string;
};

export default function ReplyTranslator() {
  const [targetLanguage, setTargetLanguage] = useState("English");
  const [message, setMessage] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Write the operator reply in Italian.");
      return;
    }

    setLoading(true);
    setError("");
    setTranslated("");

    try {
      const res = await fetch("/api/reply-translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          targetLanguage,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data: ReplyResponse = await res.json();
      setTranslated(data.translated);
    } catch {
      setError("Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!translated) return;

    await navigator.clipboard.writeText(translated);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
        <Languages size={16} />
        Operator multilingual reply
      </div>

      <h1 className="mt-4 text-3xl font-bold text-zinc-900">
        Translate operator reply for the customer
      </h1>

      <p className="mt-3 text-zinc-600">
        Write the dispatch reply in Italian and instantly translate it for the
        customer.
      </p>

      <form onSubmit={handleTranslate} className="mt-8 space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-900">
            Customer language
          </label>
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3"
          >
            {languageOptions.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-900">
            Reply in Italian
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Arriviamo in 25 minuti. Resti vicino al veicolo."
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white"
        >
          {loading ? "Translating..." : "Translate reply"}
        </button>
      </form>

      {error ? (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {translated ? (
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-zinc-900">
              Translated reply
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-3 whitespace-pre-wrap text-sm leading-6 text-zinc-700">
            {translated}
          </div>
        </div>
      ) : null}
    </section>
  );
}