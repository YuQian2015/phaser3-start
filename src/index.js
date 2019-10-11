import Phaser from 'Phaser';

import { LoadScene } from './scenes/load'

const config = {
    type: Phaser.AUTO,
    width: 750,
    height: 1334,
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