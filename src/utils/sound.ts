class SoundManager {
  private correctSound: HTMLAudioElement;
  private incorrectSound: HTMLAudioElement;

  constructor() {
    this.correctSound = new Audio('/sounds/correct.mp3');
    this.incorrectSound = new Audio('/sounds/incorrect.mp3');
    
    // Preload sounds
    this.correctSound.load();
    this.incorrectSound.load();
  }

  playCorrect() {
    this.correctSound.currentTime = 0;
    this.correctSound.play().catch(error => {
      console.log('Error playing correct sound:', error);
    });
  }

  playIncorrect() {
    this.incorrectSound.currentTime = 0;
    this.incorrectSound.play().catch(error => {
      console.log('Error playing incorrect sound:', error);
    });
  }
}

// Create a singleton instance
export const soundManager = new SoundManager(); 