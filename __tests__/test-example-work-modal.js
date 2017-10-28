import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import Adapter from 'enzyme-adapter-react-16';

const myExample = {
    'title': "Work Example",
    'href': "http://example.com",
    'desc': "Lorem  Ipsum you momma",
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': "xx"
    }
};


describe("ExampleWorkModal component", () => {
    configure({ adapter: new Adapter() });
    let component = shallow(<ExampleWorkModal example={myExample}
    open={false} />);

    let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true} />);

    let anchors = component.find("a");

{/*
    }
    it("Should should link to our project", () => {
        expect(anchors.getNodenode.ExampleWorkModal=.ref).toEqual(myExample.href);
    });
    */}

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });

    it("Should be a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should be a single 'a' element adding 2", () => {
        expect(anchors.length +1).toEqual(2);
    });


    
});

