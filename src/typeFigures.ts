export const RECT ='RECT';
export const CIRCLE = 'CIRCLE';
export const REGULARPOLYGON = 'REGULARPOLYGON';
export const ELLIPSE = 'ELLIPSE';

export interface Rect {
    id?: string,
    type: typeof RECT,
    color: string,
    width: number,
    height: number,
}
export interface Circle {
    id?: string,
    type: typeof CIRCLE,
    color: string,
    radius: number,
}

export interface RegularPolygon {
    id?: string,
    type: typeof REGULARPOLYGON,
    color: string,
    sides: number,
    radius: number,
}

export interface Ellipse {
    id?: string,
    type: typeof ELLIPSE,
    color: string,
    radiusX: number,
    radiusY: number,
}

export type Figure = Rect | Circle | RegularPolygon | Ellipse;

