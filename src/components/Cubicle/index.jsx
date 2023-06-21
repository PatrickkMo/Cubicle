import React, { useEffect } from "react";
import Phaser from "phaser";

import "./style.css";

import CubicleScene from "./CubicleScene";

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  pixelArt: true,
  parent: "phaser-container",
  scene: CubicleScene,
  transparent: true,
};

const Cubicle = () => {
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      // Clean up Phaser game instance if needed
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-container" />;
};

export default Cubicle;
