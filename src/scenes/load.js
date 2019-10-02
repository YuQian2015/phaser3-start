import Phaser from 'Phaser';

// loadScene
export class LoadScene extends Phaser.Scene {
    constructor() {
        super("LoadScene");
    }
    preload() {
        this.load.setBaseURL('assets');

        this.load.image('sky', 'skies/space3.png');
        this.load.image('logo', 'sprites/phaser3-logo.png');
        this.load.image('red', 'particles/red.png');
    }
    create() {

        this.add.image(400, 300, 'sky');

        const particles = this.add.particles('red');

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(200, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);

        // this.scene.start("PlayGame");
    }
}