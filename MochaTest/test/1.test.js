import {expect, assert, should} from 'chai';

describe('test suite 1', () =>{
    it('1- expects true to equal true', ()=>{
        expect(true).to.equal(true);
    });
})

describe('test suite 1.2', () =>{
    it('1.2- expects false to equal false', ()=>{
        expect(false).to.equal(false);
    });
})

describe('nested test suite 1', () =>{
    describe('double nest in test suite 1', () =>{
        it('1.3- expects false to equal false', ()=>{
            expect(false).to.equal(false);
        });
    })
})