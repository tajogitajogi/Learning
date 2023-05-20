
type Mode = Record<string,boolean| string>


export function ClassNames (cls:string,mods:Mode={},additional:string[]=[]):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mods).filter(key => mods[key])
    ].join(' ')

}

