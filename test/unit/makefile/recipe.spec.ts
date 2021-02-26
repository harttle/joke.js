import { Recipe } from '../../../src/makefile/recipe'

describe('Recipe', function () {
    const fakeContext: any = {
        targetFullPath: () => ''
    }
    it('should make a single return statement', async function () {
        const spy = jest.fn()
        const recipe = new Recipe(spy)
        await recipe.make(fakeContext)
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it('should make a promise', async function () {
        const spy = jest.fn(() => Promise.resolve('foo'))
        const recipe = new Recipe(spy)
        await recipe.make(fakeContext)
        expect(spy).toBeCalledTimes(1)
    })
    it('should reject by promise', function () {
        expect.assertions(1)
        const recipe = new Recipe(() => Promise.reject(new Error('foo')))
        return recipe.make(fakeContext).catch(e => expect(e.message).toEqual('foo'))
    })
    it('should make a callback', async function () {
        const spy = jest.fn((ctx, done) => done(null))
        const recipe = new Recipe(spy)
        await recipe.make(fakeContext)
        expect(spy).toBeCalledTimes(1)
    })
    it('should reject by callback', function () {
        expect.assertions(1)
        const recipe = new Recipe((ctx, done) => done(new Error('foo')))
        return recipe.make(fakeContext).catch(e => expect(e.message).toEqual('foo'))
    })
})
