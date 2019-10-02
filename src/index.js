import Phaser from 'Phaser';

import { LoadScene } from './scenes/load'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    parent: 'game',
    scene: [LoadScene]
};

const game = new Phaser.Game(config);