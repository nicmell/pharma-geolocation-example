import React  from 'react'

import FeedbackMessage from "@/Components/Feedback/FeedbackMessage/FeedbackMessage";

export type ErrorMessageProps = {error: Error}

export default function ErrorMessage({error}: ErrorMessageProps) {
  return (
      <FeedbackMessage severity='error' title='Si è veirficato un errore!'>
        {
          process.env.NODE_ENV === 'development' && (
            <>
              {error.message && <>{error.message}<br/></>}
              {error.stack}
            </>
          )
        }
      </FeedbackMessage>
  )
}
