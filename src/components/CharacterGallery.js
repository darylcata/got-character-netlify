import React from "react";
import charData from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {
    const charArray = charData.map(
        c => <Character {...c} key={c._id}/>
    )

    return (
        <div data-test="component-char-gallery">
        {charArray}
        </div>
    )
};

export default CharacterGallery;