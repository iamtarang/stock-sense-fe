type Message = {
    id: number,
    text: string,
    sender: string,
    timestamp: string
}


const ChatBubble = ({ message }: { message: Message }) => {
    const isUser = message.sender === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
            >
                <p className="text-sm">{message.text}</p>
                <span className={`text-xs block mt-1 ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
                    {message.timestamp}
                </span>
            </div>
        </div>
    );
};
export default ChatBubble