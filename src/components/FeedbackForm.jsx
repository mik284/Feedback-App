
import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState("") 
    const [rating, setRating] = useState(10)// 10 is the default value
    const [btnDisabled, setBtnDisabled] = useState(true) // disable button if text is empty
    const [message, setMessage] = useState("")


    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [ feedbackEdit])

    const handleTextChange = (e) => {

        if(text === "") {
            setBtnDisabled(true) // disable button if text is empty
            setMessage(null)
            } else if(text !== "" && text.trim().length <= 10) { // enable button if text is not empty
                setMessage("Text must be at least 10 characters long") // message is set to null if text is empty
                setBtnDisabled(true) // disable button if text is empty
            } else {
                setMessage(null) // message is set to null if text is empty
                setBtnDisabled(false) // Enable the button
            }

        setText(e.target.value) // set the text to the value of the input
    }

    const handleSubmit = (e) => {
        e.preventDefault() // prevent the default behaviour of the form
        if(text.trim().length > 10){
            const newFeedback= {
                text,
                rating,
            }

                if( feedbackEdit.edit === true){
                    updateFeedback(feedbackEdit.item.id, newFeedback)
                } else{
                    addFeedback(newFeedback)
                }
                 

            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our products and services?</h2>
            <RatingSelect select={(rating) => setRating(rating)} /> 
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="write a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm