import React from 'react'

const InputComment = ({children}) => {
    const [content, setContent] = useState('')
    return (
        <form>
            {children}
            <input type="text" placeholder="Add your comments..."
            value={content} onChange={e => setContent(e.target.value)} />

            <button type="submit" className="postBtn">
                Postic
            </button>
        </form>
    )
}

export default InputComment 