import './review.css';

import React, { useState } from 'react';


function Review({title, surveyPeriod, reviewPeriod, state}) {
    // const [state] = useState('TEMP');
    // const [state] = useState('TEMP'); PROCESS PAUSE DELETED

    // const [title, surveyPeriod] = useState(0);
    return (

        <div className="Review">
            <div className="title">{title}</div>
            <div className= "period_text_orange">{surveyPeriod.startDate} ~ {surveyPeriod.endDate} </div>
            <div className="period">&nbsp;/&nbsp;{reviewPeriod.startDate} ~ {reviewPeriod.endDate}</div>
            <div className="state"> {state.text}</div>
        </div>
    )
}

export default Review;