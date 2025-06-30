import { useState } from "react"
import "../styles/Slideshow.css"

/**
 * Renders a collection of elements into a slideshow where users can view
 * each element individually and go to the next or previous element
 * in the list. This component allows for circular looping too.
 * 
 * @param {Object} props
 * @param {String} props.id the id of the slideshow div element.
 * @param {String} props.title the id of the slideshow presentation.
 * @param {*} props.children the child elements and components. 
 * @returns the children rendered as a presentation with navigable buttons.
 */
export default function Slideshow({ id, title, children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childComponents = [...children];

    /**
     * Decrements the current slide index by 1, so that the element previous
     * to the current one is now rendered.
     * 
     * Article of Reference: https://stackoverflow.com/questions/15462750/scroll-backward-circular-array
     */
    function previous() {
        setCurrentIndex((index) => (index - 1 + childComponents.length) % childComponents.length);
    }

    /**
     * Increments the current slide index by 1, so that the element after the
     * current one is now rendered.
     */
    function next() {
        setCurrentIndex((index) => (index + 1) % childComponents.length);
    }

    return (
        <div id={id} className="slideshow">
            <div className="slide-heading">
                <h3>{title}</h3>
                <h4>{`Slide ${currentIndex + 1} of ${childComponents.length}`}</h4>
            </div>
            <div className="slide-container">
                <div className="slide-navigation">
                    <button className="slide-button outer-frame" onClick={previous}>&lt;</button>
                    <button className="slide-button outer-frame" onClick={next}>&gt;</button>
                </div>
                {childComponents[currentIndex]}
            </div>
        </div>
    );
}