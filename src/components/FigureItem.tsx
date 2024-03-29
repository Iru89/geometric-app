import * as React from 'react';
import MyCircle from "./myFigures/MyCircle";
import MyRect from "./myFigures/MyRect";
import {Figure, CIRCLE, RECT, REGULARPOLYGON, ELLIPSE} from "../typeFigures";
import MyRegularPolygon from "./myFigures/MyRegularPolygon";
import MyEllipse from "./myFigures/MyEllipse";

interface IProps {
    figure: Figure
}

const FigureItem: React.FunctionComponent<IProps> = (props: IProps) => {

    const {figure} = props;

        switch (figure.type) {
            case CIRCLE:
                return(
                    <MyCircle radius={figure.radius} color={figure.color}/>
                );
            case RECT:
                return(
                    <MyRect width={figure.width} height={figure.height} color={figure.color}/>
                );
            case REGULARPOLYGON:
                return(
                    <MyRegularPolygon sides={figure.sides} radius={figure.radius} color={figure.color}/>
                );
            case ELLIPSE:
                return(
                    <MyEllipse radiusX={figure.radiusX} radiusY={figure.radiusY} color={figure.color}/>
                );
            default:
                return null;
        }

};

export default FigureItem