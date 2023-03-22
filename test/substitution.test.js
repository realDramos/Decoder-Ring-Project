const { expect } = require("chai")
const {substitution} = require("../src/substitution")

// Write your tests here!
describe("substitution", ()=>{
    describe("error handling",()=>{
        it("should return false if alphabet is undefined",()=>{
            const input = "undefined"
            const alphabet = undefined
            const actual = substitution(input,alphabet)
            expect(actual).to.be.false
        })
        it("should return false if alphabet is not equal to 25",()=>{
            const input = "undefined"
            const alphabet = "short"
            const actual = substitution(input,alphabet)
            expect(actual).to.be.false
        })
        it("should return false if characters in alphabet are not unique",()=>{
            const input = "undefined"
            const alphabet = "sfsdfwsefdasdfaslkjiertsdf"
            const actual = substitution(input,alphabet)
            expect(actual).to.be.false
        })
    })
    describe("encoding",()=>{
        it("should return an encoded message",()=>{
            const input = "thinkful"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const actual = substitution(input,alphabet)
            const expected = "jrufscpw"
            expect(actual).to.equal(expected)
        })
        it("should work with a key full of special characters",()=>{
            const input = "message"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            const actual = substitution(input,alphabet)
            const expected = "y&ii$r&"
            expect(actual).to.equal(expected)
        })
        it("should keep spaces",()=>{
            const input = "You are an excellent spy"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const actual = substitution(input,alphabet)
            const expected = "elp xhm xf mbymwwmfj dne"
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding",()=>{
        it("should return a decoded message",()=>{
            const input = "jrufscpw"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const actual = substitution(input,alphabet, false)
            const expected = "thinkful"
            expect(actual).to.equal(expected)
        })
        it("should work with a key full of special characters",()=>{
            const input = "y&ii$r&"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            const actual = substitution(input,alphabet, false)
            const expected = "message"
            expect(actual).to.equal(expected)
        })
        it("should keep spaces",()=>{
            const input = "elp xhm xf mbymwwmfj dne"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const actual = substitution(input,alphabet, false)
            const expected = "you are an excellent spy"
            expect(actual).to.equal(expected)
        })
    })
    
})