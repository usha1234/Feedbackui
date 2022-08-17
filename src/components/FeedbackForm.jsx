import Card from "./shared/Card";
import Button from "./shared/Button";
import {useState, useContext, useEffect} from 'react'
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
    const[text,settext] = useState('');
    const[rating,setRating] = useState('');
    const[btnDisabled,setBtnDisabled] = useState(true);
    const[message,setMessage] = useState('');
    const {addFeedback,feedbackEdit,updatefeedback} = useContext(FeedbackContext)

    useEffect(() =>{
       setBtnDisabled(false)
       settext(feedbackEdit.item.text)
       setRating(feedbackEdit.item.rating)
    }, [feedbackEdit])
    const handleTextChange = (e) =>{
       if(text === ''){
        setBtnDisabled(true);
       }else if(text !== "" && text.trim().length <= 10){
         setMessage('Text muste be atleast have 10 characters')
         setBtnDisabled(true);

       }else{
         setMessage(null)
         setBtnDisabled(false)
       }

      settext(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    if(text.trim().length > 10){
     const newFeedback = {
        text,
        rating,
    }

    if(feedbackEdit.edit === true){
      updatefeedback(feedbackEdit.item.id, newFeedback)
    }else{
      addFeedback(newFeedback);
    }
    
    settext('');
}
       
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you like to rate your service with us</h2>
         <RatingSelect select={(rating) => setRating(rating)}/>
         <div className="input-group">
            <input onChange={handleTextChange}type='text' placeholder="write a review"
            value={text} />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
         </div>
         {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm;