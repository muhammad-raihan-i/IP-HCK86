const {describe,test,beforeAll,afterAll,expect}=require("@jest/globals")

test(
    "1. test that always true",//title
    function f(){expect(true).toBe(true)},//function
    2000//timeout
)