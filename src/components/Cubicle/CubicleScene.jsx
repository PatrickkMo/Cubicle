import Phaser from "phaser";

import Character, { CharacterType } from "./Character";

import tilemap from "assets/iso-sandbox.png";
import sandbox from "assets/sandbox.json";
import characterSprite from "assets/char-spritesheet.png";

class CubicleScene extends Phaser.Scene {
  constructor() {
    super();
    this.characters = [];
  }

  preload() {
    this.load.image("tiles", tilemap);
    this.load.tilemapTiledJSON("map", sandbox);
    this.load.spritesheet("character", characterSprite, {
      frameWidth: 128,
      frameHeight: 328,
    });
  }

  create() {
    const map = this.add.tilemap("map");

    const tileset = map.addTilesetImage("isometric-sandbox-sheet", "tiles");
    map.createLayer("Tile Layer 1", [tileset]);
    map.createLayer("Tile Layer 2", [tileset]);
    map.createLayer("Tile Layer 3", [tileset]);

    this.cameras.main.centerOn(32, 0);
    console.log("hello");

    this.addCharacter("test");
    console.log("hello?");
  }

  update() {
    // this.characters.forEach((char) => {
    //   char.update();
    // });
  }

  addCharacter(username) {
    const char = new Character(this, 32, 32, username, CharacterType.MALE);
    char.setScale(0.5);
    this.characters.push(this.add.existing(char));
  }
}

export default CubicleScene;
