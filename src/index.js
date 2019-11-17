import Phaser from 'Phaser';

import { LoadScene } from './scenes/load'
import { Controller } from './scenes/controller'
import { SceneA } from './scenes/scene_a'
import { SceneB } from './scenes/scene_b'
import { SceneC } from './scenes/scene_c'
import { SceneD } from './scenes/scene_d'
import { SceneE } from './scenes/scene_e'
import { SceneF } from './scenes/scene_f'

const config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    parent: 'game',
    scene: [LoadScene, Controller, SceneA, SceneB, SceneC, SceneD, SceneE, SceneF]
};

const game = new Phaser.Game(config);