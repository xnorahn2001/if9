
class BirthdayMusicBox {
    constructor() {
        this.audioCtx = null;
        this.isPlaying = false;
        this.tempo = 110; 
        this.nextNoteTime = 0.0;
        this.noteIndex = 0;
        this.timerId = null;
      
        this.melody = [
            ['C', 4, 0.75], ['C', 4, 0.25], ['D', 4, 1.0], ['C', 4, 1.0], ['F', 4, 1.0], ['E', 4, 2.0], // Happy birthday to you
            ['C', 4, 0.75], ['C', 4, 0.25], ['D', 4, 1.0], ['C', 4, 1.0], ['G', 4, 1.0], ['F', 4, 2.0], // Happy birthday to you
            ['C', 4, 0.75], ['C', 4, 0.25], ['C', 5, 1.0], ['A', 4, 1.0], ['F', 4, 1.0], ['E', 4, 1.0], ['D', 4, 1.0], // Happy birthday dear Faisal
            ['A#', 4, 0.75], ['A#', 4, 0.25], ['A', 4, 1.0], ['F', 4, 1.0], ['G', 4, 1.0], ['F', 4, 2.0], // Happy birthday to you
            ['-', 0, 1.0] 
        ];

        this.noteFreqs = {
            'C': 261.63,
            'C#': 277.18,
            'D': 293.66,
            'D#': 311.13,
            'E': 329.63,
            'F': 349.23,
            'F#': 369.99,
            'G': 392.00,
            'G#': 415.30,
            'A': 440.00,
            'A#': 466.16,
            'B': 493.88,
            'C5': 523.25
        };
    }

    getFrequency(noteName, octave) {
        if (noteName === '-') return 0;
        
        let freq = this.noteFreqs[noteName];
        if (octave === 5 && noteName === 'C') {
            return this.noteFreqs['C5'];
        }
        return freq;
    }

    init() {
        if (this.audioCtx) return;
        
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
    }

    start() {
        this.init();
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.nextNoteTime = this.audioCtx.currentTime + 0.1;
        this.noteIndex = 0;
        
        this.scheduler();
    }

    stop() {
        this.isPlaying = false;
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    }

    scheduler() {
        if (!this.isPlaying) return;

        while (this.nextNoteTime < this.audioCtx.currentTime + 0.3) {
            this.scheduleNote(this.noteIndex, this.nextNoteTime);
            this.advanceNote();
        }
        
        this.timerId = setTimeout(() => this.scheduler(), 50);
    }

    advanceNote() {
        const beatDuration = 60.0 / this.tempo;
        const currentNote = this.melody[this.noteIndex];
        const duration = currentNote[2] * beatDuration;
        
        this.nextNoteTime += duration;
        this.noteIndex = (this.noteIndex + 1) % this.melody.length;
    }

    scheduleNote(index, time) {
        const note = this.melody[index];
        const noteName = note[0];
        const octave = note[1];
        const durationInBeats = note[2];
        const beatDuration = 60.0 / this.tempo;
        const duration = durationInBeats * beatDuration;

        const freq = this.getFrequency(noteName, octave);
        if (freq === 0) return; // Rest

        const osc1 = this.audioCtx.createOscillator();
        const osc2 = this.audioCtx.createOscillator(); 
        const gainNode = this.audioCtx.createGain();

        osc1.type = 'triangle';
        osc1.frequency.value = freq;

        osc2.type = 'sine';
        osc2.frequency.value = freq * 2;
        
        gainNode.gain.setValueAtTime(0, time);
        gainNode.gain.linearRampToValueAtTime(0.2, time + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration - 0.05);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        osc1.start(time);
        osc2.start(time);
        osc1.stop(time + duration);
        osc2.stop(time + duration);
    }

    toggle() {
        if (this.isPlaying) {
            this.stop();
            return false;
        } else {
            this.start();
            return true;
        }
    }

    playChime() {
        this.init();
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        const now = this.audioCtx.currentTime;
        const notes = [523.25, 659.25, 783.99]; 
        notes.forEach((freq, idx) => {
            const time = now + idx * 0.08;
            
            const osc = this.audioCtx.createOscillator();
            const gainNode = this.audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            gainNode.gain.setValueAtTime(0, time);
            gainNode.gain.linearRampToValueAtTime(0.12, time + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, time + 0.4);
            
            osc.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            
            osc.start(time);
            osc.stop(time + 0.5);
        });
    }

    playGiftSound() {
        this.init();
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        const now = this.audioCtx.currentTime;
        const notes = [349.23, 440.00, 523.25, 698.46, 523.25, 440.00, 349.23];
        notes.forEach((freq, idx) => {
            const time = now + idx * 0.09; 
            
            const osc1 = this.audioCtx.createOscillator();
            const osc2 = this.audioCtx.createOscillator(); 
            const gainNode = this.audioCtx.createGain();
            
            osc1.type = 'triangle';
            osc1.frequency.value = freq;
            
            osc2.type = 'sine';
            osc2.frequency.value = freq / 2;
            
            gainNode.gain.setValueAtTime(0, time);
            gainNode.gain.linearRampToValueAtTime(0.15, time + 0.015);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, time + 0.5);
            
            osc1.connect(gainNode);
            osc2.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            
            osc1.start(time);
            osc2.start(time);
            osc1.stop(time + 0.6);
            osc2.stop(time + 0.6);
        });
    }
}

const musicBox = new BirthdayMusicBox();
