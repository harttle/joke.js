import { Makefile } from '../../src/index'
import { MemoryFileSystem } from '../../src/fs/memfs-impl'
import { IO } from '../../src/io'
import { Logger, LogLevel } from '../../src/utils/logger'

describe('global make', function () {
    let fs
    beforeEach(() => {
        fs = IO.resetFileSystem(new MemoryFileSystem()).fs
        fs.mkdirSync(process.cwd(), { recursive: true })
        Logger.getOrCreate().setLevel(LogLevel.error)
    })

    it('should support call another make inside recipe', async function () {
        const mk = new Makefile()
        fs.writeFileSync('a.js', 'a')

        mk.addRule('call.b.out', 'a.js', ctx => ctx.writeTarget('B'))
        mk.addRule('call.c.out', 'a.js', async ctx => {
            await mk.make('call.b.out')
            await ctx.writeTarget(await ctx.readFile('call.b.out'))
        })

        await mk.make('call.c.out')
        expect(fs.readFileSync('call.c.out', 'utf8')).toEqual('B')
    })
})
