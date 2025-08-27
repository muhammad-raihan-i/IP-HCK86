const {describe,test,beforeAll,afterAll,expect}=require("@jest/globals")

test(
    "always true",//title
    function f(){expect(true).toBe(true)},//function
    2000//timeout
)