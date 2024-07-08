import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders", function() {
    render(<Card 
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={3} />)
})

it("matches the snapshot", function () {
    const {asFragment} = render(<Card 
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={3} />)
    expect(asFragment()).toMatchSnapshot()
})