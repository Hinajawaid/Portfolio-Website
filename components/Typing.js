"use client";
import { useEffect, useState } from "react";

export default function Typing({ words }) {
  const [text, setText] = useState(words[0]);
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = words[i % words.length];
    const delay = deleting ? 40 : text === word ? 1600 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI(i + 1);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span>
      {text}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}
