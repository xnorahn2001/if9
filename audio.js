// Dynamic Custom Audio Playlist Player using HTML5 Audio & Web Audio API for Chimes

class BirthdayMusicBox {
    constructor() {
        this.audioCtx = null;
        this.audioEl = null;
        this.isPlaying = false;
        this.currentTrackIndex = 0;
        
        // Custom Tracks List (Can be expanded/modified when user sends files)
        this.tracks = [
            { id: 0, title: "صوتية فيصل 1 🎵", file: "tikdown.MP4" },
            { id: 1, title: "صوتية فيصل 2 🎵", file: "tikdown 2.MP4" },
            { id: 2, title: "صوتية فيصل 3 🎵", file: "v07044700000btr1gkclhqvnojahvqog.MP4" },
            { id: 3, title: "صوتية فيصل 4 🎵", file: "v07044f00000btp2rf9uncpkid1vpcqg.MP4" }
        ];

        this.noteFreqs = {
            'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
            'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
            'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88,
            'C5': 523.25
        };
    }

    init() {
        if (this.audioCtx) return;
        
        // Web Audio API context for chimes
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
        
        // HTML5 Audio element for background tracks
        this.audioEl = new Audio();
        this.audioEl.loop = true; // Loop current track by default
        
        // Load initial track
        this.loadTrack(this.currentTrackIndex);
    }

    loadTrack(index) {
        if (index < 0 || index >= this.tracks.length) return;
        this.currentTrackIndex = index;
        
        const wasPlaying = this.isPlaying;
        if (this.audioEl) {
            this.audioEl.src = this.tracks[index].file;
            this.audioEl.load();
            if (wasPlaying) {
                this.audioEl.play().catch(err => console.log("Audio play deferred until user interaction"));
            }
        }
    }

    start() {
        this.init();
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.audioEl.play()
            .then(() => {
                // Audio started successfully
            })
            .catch(err => {
                console.log("Audio play failed or deferred:", err);
                this.isPlaying = false;
            });
    }

    stop() {
        this.isPlaying = false;
        if (this.audioEl) {
            this.audioEl.pause();
        }
    }

    toggle() {
        this.init();
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

// Global Music Box Instance
const musicBox = new BirthdayMusicBox();
