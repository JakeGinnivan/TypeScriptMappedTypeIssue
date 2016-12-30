import { StatelessComponent } from './react'
import createExample from './example'

interface ThingProps {
    prop1: string
    prop2?: string
}

const Thing: StatelessComponent<ThingProps> = () => ''

const Example = createExample<ThingProps>(Thing, { prop1: 'foo' })

const rendered = Example({
    title: 'Thing!',
    propTypeDescription:{
        prop1: 'Ok'
    }
})

console.log('Styleguide output', rendered)
