import { StatelessComponent } from './react'

export type PropDescriptions<T> = {
    [P in keyof T]: string
}

interface StyleguideExampleProps<TComponentProps> {
    title: string,
    description?: string,
    propTypeDescription: PropDescriptions<TComponentProps>
}

function guessType(value: any) {
    if (typeof value === 'string') {
        return 'string'
    } else if (typeof value === 'boolean') {
        return 'boolean'
    } else {
        return `unknown type: ${typeof value}`
    }
}

const render = (_: any) => { }

export default function createExample<TProps extends { [key: string]: any }>(ComponentType: StatelessComponent<TProps>, props: TProps) {
    const StyleguideExample: StatelessComponent<StyleguideExampleProps<TProps>> =
    ({ title, description, propTypeDescription }: StyleguideExampleProps<TProps>) => {

        const propTypeDescriptions = propTypeDescription ?
            Object.keys(propTypeDescription)
                .map(key => {
                    const description = propTypeDescription[key]
                    const typeInfo = guessType(props[key])
                    const comment = description
                    const commentMd = comment ? `   * ${comment}\n` : ''
                    return ` * ${key}: \`${typeInfo}\`\n${commentMd}`
                })
                .reduce((a, c) => a + c, '') : 'None'

        return `Title:
${title}

Description
${description}

Props
${propTypeDescriptions}

${render(ComponentType)}`
    }

    return StyleguideExample
}