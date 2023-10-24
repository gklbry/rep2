import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label style={{marginLeft:10}} htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{marginLeft:10, marginRight:10}}
                id="line-width"
                type="number"
                defaultValue={1}
                min={1}
                max={50}
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input
                onChange={e => toolState.setStrokeColor(e.target.value)}
                style={{marginLeft:10}}
                id="stroke-color"
                type="color"
            />
        </div>
    );
};

export default SettingBar;