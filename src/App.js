
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
// import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)

   
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
        <FeedbackProvider>
            <Router>
                <Header />
                    <div className='container'>
                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />   
                                </>
                            }>
                                
                            </Route>
                            

                            <Route path='/about' element={<AboutPage/>}/>   
                        </Routes>  
                    </div>
                <AboutIconLink/>
            </Router>
            
        </FeedbackProvider>

    )
}



export default App