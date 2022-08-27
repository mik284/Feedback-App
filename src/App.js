import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
if(window.confirm('Are you sure you want to delete?')){

      setFeedback(feedback.filter((item) => item.id !== id))
    }

}

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
        <Router>
            <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback}/>
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />   
                            </>
                        }>
                            
                        </Route>
                        

                        <Route path='/about' element={<AboutPage/>}/>   
                    </Routes>  
                </div>
        </Router>
        

    )
}



export default App