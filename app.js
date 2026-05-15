// Initialize synthesizer
const synth = new Tone.Synth({
    oscillator: { type: 'triangle' },
    envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1
    }
}).toDestination();

// Play a single note
function playNote() {
    synth.triggerAttackRelease("C4", "8n");
}

function playChord() {
    synth.triggerAttackRelease("C4", "8n");
    synth.triggerAttackRelease("E4", "8n");
    synth.triggerAttackRelease("G4", "8n");
}

// Play a sequence of notes
function playSequence() {
    const notes = ["C4", "E4", "G4", "A4"];
    let index = 0;
    
    const interval = setInterval(() => {
        if (index < notes.length) {
            synth.triggerAttackRelease(notes[index], "8n");
            index++;
        } else {
            clearInterval(interval);
        }
    }, 300);
}

// Start a repeating loop
function startLoop() {
    Tone.Transport.bpm.value = 120;
    
    const loop = new Tone.Loop((time) => {
        synth.triggerAttackRelease("G4", "16n", time);
    }, "8n");
    
    loop.start(0);
    Tone.Transport.start();
}

function pattern() {
    const bassNotes = ["C2", "C2", "G1", "C2", "B2", "A2"];
    let index = 0;
    
    const interval = setInterval(() => {
        if (index < bassNotes.length) {
            synth.triggerAttackRelease(bassNotes[index], "8n");
            index++;
        } else {
            clearInterval(interval);
        }
    }, 200);
}

// Stop all audio
function stopAll() {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    synth.triggerRelease();
}



function playA1() {
    synth.triggerAttackRelease("A1", "8n");
}

function playA2() {
    synth.triggerAttackRelease("A2", "8n");
}

function playA3() {
    synth.triggerAttackRelease("A3", "8n");
}

function playA4() {
    synth.triggerAttackRelease("A4", "8n");
}

function playA5() {
    synth.triggerAttackRelease("A5", "8n");
}

function playA6() {
    synth.triggerAttackRelease("A6", "8n");
}

function playA7() {
    synth.triggerAttackRelease("A7", "8n");
}

function playA8() {
    synth.triggerAttackRelease("A8", "8n");
}

function playB1() {
    synth.triggerAttackRelease("B1", "8n");
}

function playB2() {
    synth.triggerAttackRelease("B2", "8n");
}

function playB3() {
    synth.triggerAttackRelease("B3", "8n");
}

function playB4() { 
    synth.triggerAttackRelease("B4", "8n");
}

function playB5() {
    synth.triggerAttackRelease("B5", "8n");
}

function playB6() {
    synth.triggerAttackRelease("B6", "8n");
}

function playB7() {
    synth.triggerAttackRelease("B7", "8n");
}

function playB8() {
    synth.triggerAttackRelease("B8", "8n");
}