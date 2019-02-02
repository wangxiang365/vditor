declare module "*.svg" {
    const content: string
    export default content
}

declare module '*.png'

declare module '*/emoji/allEmoji.js'

declare module 'recordrtc/RecordRTC.js'

declare module 'turndown'

declare module 'turndown-plugin-gfm/lib/turndown-plugin-gfm.es.js'

interface Classes {
    preview?: string
}

interface Upload {
    url: string
    max: number
    linkToImgUrl: string
    success?: { (textarea: HTMLTextAreaElement, msg: string): void }
    error?: { (msg: string): void }
}

interface MenuItem {
    name: string
    icon?: string
    tip?: string
    hotkey?: string
    suffix?: string
    prefix?: string
    tail?: string
    tipPosition?: string
}

interface Options {
    previewDelay: number
    hintDelay: number
    parseMarkdown?: { (element: HTMLElement): void }
    markdownUrl?: string
    height?: number | string
    width?: number | string
    theme?: string
    placeholder?: string
    lang?: string
    draggable?: boolean
    previewShow?: boolean
    counter?: number
    upload?: Upload
    classes?: Classes
    staticServePath?: string
    atUser?: { (value: string): Array<any> }
    commonEmoji?: any
    toolbar?: Array<string | MenuItem>
    input?: InputFunction
    focus?: { (value: string): void }
    blur?: { (value: string): void }
    esc?: { (value: string): void }
    ctrlEnter?: { (value: string): void }
    select?: { (value: string): void }
    userCache: boolean
}

interface InputFunction {
    (value: string, previewElement?: HTMLElement): void
}

interface Vditor {
    id: string
    mdTimeoutId: number
    options: Options
    timeId: number
    toolbar?: any
    markdown?: any
    editor?: any
    counter?: any
    drag?: any
    hint?: any
    upload?: any
}

declare function captureEvents(name: string): void