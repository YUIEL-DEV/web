/*__   __ _   _  ___  ___  _        ___    _    __  __  ___
  \ \ / /| | | ||_ _|| __|| |      / __|  /_\  |  \/  || __|
   \ V / | |_| | | | | _| | |__   | (_ | / _ \ | |\/| || _|
    |_|   \___/ |___||___||____|   \___|/_/ \_\|_|  |_||___|*/
var bullet1s;
var angle1 = 0;
var angle2 = 0;
var flag = true;

export class Bullet1 { // このクラスが外部ファイルとしてアクセスされる場合、exportをつける
    static create(scene) {
        let distance = 0;
        bullet1s = scene.physics.add.group();

        for (let i = 0; i < 500; i++) {
            // 弾生成
            let bullet = scene.add.sprite(distance -= 2, -16, 'bullet1');
            bullet.setDisplaySize(16, 16);
            bullet1s.add(bullet);
        }
    }
    static update() {
        angle2 = 0;
        bullet1s.children.iterate(function (bullet1) {
            bullet1.x += 1 ;
            bullet1.y = Math.cos(Phaser.Math.Angle.Wrap(angle1 - angle2)) * 540 + 540;
            angle1 += 0.00001; // 角度変化量
            angle2 += 0.1;     // 弾間隔
        });
        //if (bullet1s.getChildren()[100].x > 192) {
        //    flag = false;
        //    bullet1s.clear(true);
            /*
               remove : remove one member from the group (and the scene, if specified)
               clear  : remove all members from the group (and the scene, if specified)
               destroy: clear, then disconnect the group from the scene
            */
        //}
    }
    static flag() {
        return flag;
    }
}