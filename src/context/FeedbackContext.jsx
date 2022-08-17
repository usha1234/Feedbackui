import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setfeedback] = useState([{
        id: 1,
        text: 'This is feedback item 1',
        rating: 10
    },
    {
        id: 2,
        text: 'This item is feedback item 2',
        rating: 10
    },
    {
        id: 3,
        text: 'This item is feedback item 3',
        rating: 10
    }])

    const[feedbackEdit,setfeedbackEdit] = useState({
       item: {},
       edit:false
    })
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setfeedback([newFeedback, ...feedback])
      }
     
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure u want to delete?')) {
          setfeedback(feedback.filter((item) => item.id !== id))
        }
      }

      const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true
        })
      }
      const updatefeedback = (id,updItem) =>{
        setfeedback(
          feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )
      }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updatefeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;