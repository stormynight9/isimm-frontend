interface MessageProps {
    children: string
    date: string
}

const Message = ({ children, date }: MessageProps) => {
    return (
        <div>
            <p className="text-sm text-muted-foreground">{date}</p>
            <p className="leading-7">{children}</p>
        </div>
    )
}

export default Message
