import { Makefile } from '../../src/index'
import { NodeFileSystem } from '../../src/fs/nodefs'
import { Logger, LogLevel } from '../../src/utils/logger'
import { writeFileSync, statSync } from 'fs'
import { removeSync } from 'fs-extra'
import { createEnv } from '../stub/create-env'

describe('local files', function () {
    const output0 = 'test/e2e/bundle0.js.out'
    const output1 = 'test/e2e/bundle1.js.out'
    const input0 = 'test/e2e/input0.js.out'
    const input1 = 'test/e2e/input1.js.out'
    beforeEach(() => {
        createEnv({ logLevel: 1, fs: new NodeFileSystem() })
        removeSync(output0)
        removeSync(input0)
        removeSync(output1)
        removeSync(input1)
        Logger.getOrCreate().setLevel(LogLevel.error)
    })

    it('should call recipe before make resolve', async () => {
        writeFileSync(input0, Math.random())
        const mk = new Makefile()
        let recipeTimes = 0

        mk.addRule(output0, input0, ctx => {
            writeFileSync(ctx.targetFullPath(), statSync(ctx.dependencyFullPath()).mtimeMs)
            recipeTimes++
        })
        await mk.make(output0)
        expect(recipeTimes).toEqual(1)
        await mk.make(output0)
        expect(recipeTimes).toBeGreaterThanOrEqual(1)
    })

    it('should remake if dependency changed', async () => {
        writeFileSync(input1, Math.random())
        const mk = new Makefile()
        let recipeTimes = 0

        mk.addRule(output1, input1, ctx => {
            writeFileSync(ctx.targetFullPath(), statSync(ctx.dependencyFullPath()).mtimeMs)
            recipeTimes++
        })
        await mk.make(output1)
        writeFileSync(input1, Math.random())
        await mk.make(output1)
        expect(recipeTimes).toEqual(2)
    })
})
