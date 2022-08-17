import { useState } from 'react'
import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    /*const title = 'Blog Post'
    const body = ' This is my blog post'
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'}
    ]

        const loading = false
        const showComment= true
        const commentBlock = (<div className='comments'>
        <h3>Comments ({comments.length })</h3>
        <ul>
            {comments.map((comment, index) => (
                <li key='index'>{comment.text}</li>
            ))}
        </ul>

     </div>)

        if (loading) return <h1>Loading...</h1> */

    return (
        <>
        <Header />
            <div className='container'>
                <FeedbackItem />            
            </div>
        </>
        

    )
}



export default App