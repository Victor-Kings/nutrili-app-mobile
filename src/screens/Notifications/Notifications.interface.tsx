interface Content {
    sender: string,
    message: string,
    isNew: boolean
}

export interface IContentProps {
    content: Content[]
}