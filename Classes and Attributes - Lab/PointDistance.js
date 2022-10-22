class Point {
    constructor(x1, x2) {
        this.x1 = x1;
        this.x2 = x2;
    }

    static distance(p1, p2) {
        let distx1 = p1.x1 - p2.x1;
        let distx2 = p1.x2 - p2.x2;

        return Math.sqrt( distx1 ** 2 + distx2 ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));