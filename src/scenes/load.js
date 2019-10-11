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
        this.load.spritesheet('dude',
            'sprites/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }
    create() {

        this.platforms = this.physics.add.staticGroup();

        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');

        this.platforms.create(375, 568, 'groundCommon').setScale(2).refreshBody();

        this.platforms.create(600, 400, 'groundCommon');
        this.platforms.create(50, 250, 'groundCommon');
        this.platforms.create(750, 220, 'groundCommon');

        // 对玩家的设置

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        // 创建键盘光标
        this.cursors = this.input.keyboard.createCursorKeys();


        // 创建player动画
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        // player的物理系统

        this.player.body.setGravityY(150);

        this.physics.add.collider(this.player, this.platforms);

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

    update() {

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        if (this.cursors.space.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}