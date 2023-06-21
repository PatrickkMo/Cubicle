import Phaser from "phaser";

export const CharacterType = {
  FEMALE: 0,
  MALE: 5,
};

class Character extends Phaser.GameObjects.Image {
  constructor(scene, x, y, username, offset) {
    super(scene, x, y, "character", offset);
    this._scene = scene;
    this.username = username;
    this.offset = offset;

    this.anim = {
      startFrame: 0 + offset,
      endFrame: 4 + offset,
      speed: 0.2,
    };

    this.f = this.anim.startFrame;

    scene.time.delayedCall(this.anim.speed * 1000, this.changeFrame, [], this);
  }

  update(time) {
    console.log(time);
  }

  changeFrame() {
    this.f = this.f === this.anim.endFrame ? this.anim.startFrame : this.f + 1;
    this.frame = this.texture.get(this.f);
    this._scene.time.delayedCall(
      this.anim.speed * 1000,
      this.changeFrame,
      [],
      this
    );
  }
}

export default Character;
