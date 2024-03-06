import { Minus, Square, X } from "lucide-react";

function handleControlWindowClick(event: string) {
  console.log(event);
  window.api.doWindowAction({
    action: event,
  });
}

export function App() {
  return (
    <main className="h-screen w-screen bg-rotion-900 text-zinc-50">
      <div className="flex items-center pl-4 justify-between border-b border-rotion-700 region-drag">
        <span className="text-zinc-300 text-xs font-bold region-no-drag">
          Rotion App
        </span>
        <div className="text-zinc-100 flex  items-center region-no-drag">
          <button
            className="px-4 py-2 hover:bg-rotion-600  outline-none"
            onClick={() => handleControlWindowClick("MINIMIZE")}
          >
            <Minus className="h-5 w-5" />
          </button>
          <button
            className="px-4 py-2 hover:bg-rotion-600 outline-none"
            onClick={() => handleControlWindowClick("MAXIMIZE")}
          >
            <Square className="h-[13px] w-[13px]" />
          </button>
          <button
            className="px-4 py-2 hover:bg-red-700 outline-none"
            onClick={() => handleControlWindowClick("CLOSE")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
