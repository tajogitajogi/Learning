import path from 'path'
import { BuildPath } from '../build/types/config'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')

    }
    // eslint-disable-next-line array-callback-return
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg/i }
        }
        return rule
    })
    config.resolve.modules.push(paths.src)
    config.module.rules.push(buildCssLoaders(true))
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']

    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
}
