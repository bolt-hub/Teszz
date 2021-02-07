const resp=require('./index')



describe("Validates Response", () => {
    test("Validates Response of Hello world", async () => {
        var helloworldResponse=await resp.main()
        expect(helloworldResponse.body).toContain("hello world  ! Node env is");
    });
})