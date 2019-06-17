import * as React from"react";
import {Stage, Layer, Ellipse} from "react-konva";

export interface IEllipseProps {
    radiusX: number,
    radiusY: number,
    color: string,
}

const MyEllipse: React.FunctionComponent<IEllipseProps> = (props: IEllipseProps) => {

    const {radiusX, radiusY,  color} = props;

    return (
        <Stage width={450} height={radiusY * 3}>
            <Layer>
                <Ellipse
                    x={225}
                    y={3*radiusY/2}
                    radiusX={radiusX}
                    radiusY={radiusY}
                    fill={color}
                    stroke={'black'}
                    strokeWidth={1}
                />
            </Layer>
        </Stage>
    );
};

export default MyEllipse;