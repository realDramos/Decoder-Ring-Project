// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("polybius",()=>{
    describe("encoding",()=>{
        it("should encode a message by changing letter to pairs of numbers",()=>{
            const input = "thinkful"
            const actual = polybius(input)
            const expected = "4432423352125413"
            expect(actual).to.equal(expected)
        })
        it("i and j should both be 42",()=>{
            const input = "jaring"
            const actual = polybius(input)
            const expected = "421124423322"
            expect(actual).to.equal(expected)
        })
        it("spaces should be in the same spot",()=>{
            const input = "hello world"
            const actual = polybius(input)
            const expected = "3251131343 2543241341"
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding",()=>{
        it("should decode string of number pairs into letter",()=>{
            const input = "4432423352125413"
            const actual = polybius(input, false)
            const expected = "thi/jnkful"
            expect(actual).to.equal(expected)
        })
        it("42 sholuld be i/j",()=>{
            const input = "421124423322"
            const actual = polybius(input, false)
            const expected = "i/jari/jng"
            expect(actual).to.equal(expected)
        })
        it("spaces should be in the same spot",()=>{
            const input = "3251131343 2543241341"
            const actual = polybius(input, false)
            const expected = "hello world"
            expect(actual).to.equal(expected)
        })
        it("should return false if the length of the numbers is odd not including spaces",()=>{
            const actual = polybius("3251131343 25432413413", false)
            expect(actual).to.be.false
        })
    })
})