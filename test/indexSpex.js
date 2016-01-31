import React        from 'react'
import {expect}     from 'chai'
import App          from '../components/App/App'
import TestUtils    from 'react-addons-test-utils'
import jsdom        from 'jsdom'

//App component
let APP

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Make sure test has DOM', ()=>{
    it('shoulve have a document', ()=> {
        var div = document.createElement('div')
        expect(div.nodeName).equal('DIV')
    })
})

describe('App Component Exists', ()=>{
    beforeEach(()=>{
        APP = TestUtils.renderIntoDocument(<App />)
    })

    it("should expect the App Component", ()=>{
        expect(TestUtils.isCompositeComponent(APP)).to.be.true
    })

    it("FirstName should exist", ()=>{
        expect(APP.getFirstName()).to.be.a('string');
    })
})