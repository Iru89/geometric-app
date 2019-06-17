import * as React from"react";
import {Stage, Layer, RegularPolygon} from "react-konva";

export interface IRegularPolygonProps {
    sides: number,
    radius: number,
    color: string,
}

const MyRegularPolygon: React.FunctionComponent<IRegularPolygonProps> = (props: IRegularPolygonProps) => {

    const {sides, radius, color} = props;

    return (
        <Stage width={450} height={radius * 3}>
            <Layer>
                <RegularPolygon
                    x={225}
                    y={3*radius/2}
                    sides={sides}
                    radius={radius}
                    fill={color}
                    stroke={'black'}
                    strokeWidth={1}
                />
            </Layer>
        </Stage>
    );
};

export default MyRegularPolygon;
