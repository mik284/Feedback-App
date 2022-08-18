
import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";

function FeedbackForm() {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true) // disable button if text is empty
    const [message, setMessage] = useState("")

    const handleTextChange = (e) => {

        if(text === "") {
            setBtnDisabled(true) // disable button if text is empty
            setMessage(null)
            } else if(text !== "" && text.trim().length > 0) { // enable button if text is not empty
                setMessage("Text must be atleast 10 characters long") // message is set to null if text is empty
                setBtnDisabled(false) // Enable the button
            } else {
                setMessage("null") // message is set to null if text is empty
                setBtnDisabled(false) // Enable the button
            }

        setText(e.target.value) // set the text to the value of the input
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* @todo - rating select component */}
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