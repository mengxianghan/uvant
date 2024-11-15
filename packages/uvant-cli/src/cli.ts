import { Command } from 'commander'

const program = new Command()

program.version('1.0.0')

program.command('dev').description('Run dev server').action(() => {

})

program.parse()
