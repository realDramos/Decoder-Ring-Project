// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar",()=>{
    describe("error handling",()=>{
        it("should return false if shift is undefined",()=>{
            const input = "Hello there"
            const shift = undefined
            const actual = caesar(input, shift)
            expect(actual).to.be.false;
        })
        it("should return false if shift is 0",()=>{
            const input  = "Hello there"
            const shift = 0;
            const actual = caesar(input, shift)
            expect(actual).to.be.false;
        })
        it("should return false if shift is above 25",()=>{
            const input  = "Hello there"
            const shift = 26;
            const actual = caesar(input, shift)
            expect(actual).to.be.false;
        })
        it("should return false if shift is below -25",()=>{
            const input  = "Hello there"
            const shift = -26;
            const actual = caesar(input, shift)
            expect(actual).to.be.false;
        })

    })

    describe("encoding",()=>{

        it("should return an encoded message with positive shift",()=>{
            const input  = "thinkful"
            const shift = 3;
            const actual = caesar(input, shift)
            expect(actual).to.equal("wklqnixo")
        })

        it("should return an encoded message with negative shift",()=>{
            const input  = "wklqnixo"
            const shift = -3;
            const actual = caesar(input, shift)
            expect(actual).to.equal("thinkful")
        })
        it("should return the right message regardless of capitals",()=>{
            const input  = "tHiS"
            const shift = -3;
            const actual = caesar(input, shift)
            expect(actual).to.equal("qefp")
        })
        it("should return with symbols and spaces in tact",()=>{
            const input  = "This is a secret message!"
            const shift = 8;
            const actual = caesar(input, shift)
            expect(actual).to.equal("bpqa qa i amkzmb umaaiom!")
        })
        it("should return the right message even it is at the end of the alphabet",()=>{
            const input  = "Zebra Magazine"
            const shift = 3;
            const actual = caesar(input, shift)
            expect(actual).to.equal("cheud pdjdclqh")
        })
    })
    describe("decoding",()=>{

        it("should return the decoded message",()=>{
            const input  = "wklqnixo"
            const shift = 3;
            const actual = caesar(input, shift, encode = false)
            expect(actual).to.equal("thinkful")
        })
        it("should return an decoded message with negative shift",()=>{
            const input  = "qefp"
            const shift = -3;
            const actual = caesar(input, shift, encode = false)
            expect(actual).to.equal("this")
        })
        it("should return the right decoded message regardless of capitals",()=>{
            const input  = "wKlQnIxO"
            const shift = 3;
            const actual = caesar(input, shift,encode = false)
            expect(actual).to.equal("thinkful")
        })
        it("should return the decoded message with symbols and spaces in tact",()=>{
            const input  = "bpqa qa i amkzmb umaaiom!"
            const shift = 8;
            const actual = caesar(input, shift, encode = false)
            expect(actual).to.equal("this is a secret message!")
        })
        it("should return the right message even it is at the end of the alphabet",()=>{
            const input  = "cheud pdjdclqh"
            const shift = 3;
            const actual = caesar(input, shift,encode = false)
            expect(actual).to.equal("zebra magazine")
        })
    })
})