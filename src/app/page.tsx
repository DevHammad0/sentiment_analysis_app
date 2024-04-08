"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { emotionConfig } from "./config";
import { ColorRing } from "react-loader-spinner";
import Link from "next/link";

const Home = () => {
  const defaultColor = "#cccccc";
  const [rows, setrows] = useState(2);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ label: string; score: number }[]>();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const [tagsVisible, settagsVisible] = useState(false);

  useEffect(() => {
    const inputTimeout = setTimeout(() => {
      runPredictions();
    }, 1000);

    return () => clearTimeout(inputTimeout);
  }, [input]);

  useEffect(() => {
    handleColor();
    settagsVisible(true);
  }, [output]);

  function handleColor() {
    if (output && output.length > 0) {
      const colorKey = output[0].label;
      const colorHex = (emotionConfig as any)[colorKey].colorHex;
      setColor(colorHex);
    }
  }

  async function runPredictions() {
    if (input) {
      setLoading(true);
      settagsVisible(false);
      //sending API call
      const res = await axios.post("/api/emotion", { input });
      setOutput(res.data.filteredResponse);

      setLoading(false);
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setInput(event.target.value);

    // increases the number of rows if required
    const newRows = Math.max(1, Math.ceil(event.target.scrollHeight / 20));
    setrows(newRows);
  }

  function renderLoader() {
    return <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  }

  return (
    <main
      style={{ background: color + "aa" }}
      className="flex flex-col min-h-screen items-center p-24 gap-4 transition-all delay-500"
    >
      <h1 className="text-2xl text-slate-900 font-sans md:text-4xl font-extrabold tracking-tighter">
        🎨🖌️ Paint My Mood 🖌️🎨
      </h1>
      <div className="w-1/2 min-w-80 border-2 border-black p-4 rounded-xl">
        <textarea
          className="outline-none resize-none block w-full text-sm bg-transparent text-slate-800"
          placeholder="type how you feel..."
          rows={rows}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <p>{"> " + input}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {output?.map(({ label, score }) => (
          <span
            key={label}
            style={{ opacity: tagsVisible ? 1 : 0 }}
            className="cursor-pointer bg-indigo-100 text-indigo-800 text-lg px-4 py-1 rounded-full border border-indigo-400 transition-all"
          >
            {label} {(emotionConfig as any)[label].emoji}
          </span>
        ))}
      </div>
      {loading && renderLoader()}
      <div className="mt-auto flex flex-col items-center">
        <p className=" text-slate-800 font-semibold">Sentiment Analysis Project</p>
        <h3 className="text-xs  text-slate-800">(Made by: Muhammad Hammad)</h3>
        <br />
        <Link href="https://www.linkedin.com/in/-hammad/" target="_blank" className="underline text-blue-900">Lets Connect</Link>
      </div>
    </main>
  );
};

export default Home;
