import Phaser from 'Phaser';

// loadScene
export class LoadScene extends Phaser.Scene {
    constructor() {
        super("LoadScene");
    }
    preload() {
        this.load.setBaseURL('assets');

        this.load.image('sky', 'skies/space3.png');
        this.load.image('ground', 'sprites/phaser3-logo.png');
        this.load.image('red', 'particles/red.png');
        this.load.image('star', 'particles/x0.png');
        this.load.image('groundCommon', 'ground/ground-common.png');
    }
    create() {

        this.platforms = this.physics.add.staticGroup();

        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');

        this.platforms.create(375, 568, 'groundCommon').setScale(2).refreshBody();

        this.platforms.create(600, 400, 'groundCommon');
        this.platforms.create(50, 250, 'groundCommon');
        this.platforms.create(750, 220, 'groundCommon');

        // const particles = this.add.particles('red');

        // const emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // });

        // const logo = this.physics.add.image(400, 100, 'logo');

        // logo.setVelocity(200, 200);
        // logo.setBounce(1, 1);
        // logo.setCollideWorldBounds(true);

        // emitter.startFollow(logo);

        // this.scene.start("PlayGame");
    }
}