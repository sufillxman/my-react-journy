import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [taks, setTaks] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    const copyTask = [...taks];
    copyTask.push({ title, detail });
    setTaks(copyTask);
    setTitle("");
    setDetail("");
  };

  const deletenots = (id) => {
    const deletenot = [...taks];
    deletenot.splice(id, 1);
    setTaks(deletenot);
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-6 md:p-10 font-sans flex flex-col lg:flex-row gap-10 items-start">
      <div className="w-full lg:w-1/3 xl:w-1/4 relative lg:sticky lg:top-10 shrink-0">
        <div className="bg-zinc-900 rounded-3xl shadow-2xl p-8 border border-zinc-800">
          <h1 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
            Notes<span className="text-emerald-500">Pro</span>
          </h1>

          <form className="flex flex-col gap-5" onSubmit={submithandler}>
            {/* PEHLA INPUT  */}

            <input
              type="text"
              placeholder="Enter Note Heading..."
              className="w-full bg-zinc-800 text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-zinc-500 font-medium text-lg"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            {/* DUSRA INPUT  */}

            <textarea
              placeholder="Write your details here..."
              rows="5"
              className="w-full bg-zinc-800 text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none placeholder:text-zinc-500 leading-relaxed"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />

            {/* BUTTON  */}

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg py-4 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] mt-2 cursor-pointer"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>

      <div className="w-full lg:w-2/3 xl:w-3/4">
        <h2 className="text-4xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">
          Your <span className="text-emerald-500">Notes</span>
        </h2>
        // 2. NOTES GRID part inside the main return:
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {taks.map((elm, id) => {
            return (
              <div
                key={id}
                className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500 transition-all hover:-translate-y-2 group shadow-lg relative"
              >
                <button
                  onClick={() => {
                    deletenots();
                  }}
                  className="absolute top-4 right-4 text-sm bg-red-500/10 text-red-500 font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  Delete
                </button>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-1 mr-14">
                  {elm.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed line-clamp-4">
                  {elm.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
