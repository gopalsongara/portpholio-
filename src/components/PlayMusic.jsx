import React from 'react'

const PlayMusic = () => {
  return (
    <div>

 <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-2">
        <p className="text-white text-xs text-right">Wanna play music while scrolling?</p>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-gradient-to-r from-teal-400 to-emerald-500 p-4 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-teal-500/50"
          aria-label="Music player"
        >
          {isPlaying ? <Music2 size={20} fill="white" /> : <Play size={20} fill="white" />}
        </button>
      </div>

    </div>
  )
}

export default PlayMusic