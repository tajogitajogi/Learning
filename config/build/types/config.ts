

export type Buildmode = 'production' | 'development'


export interface BuildPath{
    entry:string;
    build:string;
    html:string;
}

export interface BuildOptions{
    mode: Buildmode;
    paths: BuildPath;
    isDev: boolean;
    port:number
}


export interface buildEnv{
    mode:Buildmode,
    port:number,
    
}