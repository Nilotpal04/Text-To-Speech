const textInput = document.getElementById("text-input")
const voiceSelect = document.getElementById("voice-select")
const speedSlider = document.getElementById("speed-slider")
const pitchSlider = document.getElementById("pitch-slider")
const speedValue = document.getElementById("speed-value")
const pitchValue = document.getElementById("pitch-value")
const speakBtn = document.getElementById("speak-btn")
const stopBtn = document.getElementById("stop-btn")
const charCount = document.getElementById("char-count")
const status = document.getElementById("status")
const statusText = document.getElementById("status-text")

const synth = window.speechSynthesis
let voices = []

function loadVoices() {
    voices = synth.getVoices();

    if (voices.length === 0) {
        return;
    }

    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    console.log(`Loaded ${voices.length} voices`);
}


function init() {
    loadVoices();
    synth.addEventListener("voiceschanged", loadVoices)
}

document.addEventListener("DOMContentLoaded", init)