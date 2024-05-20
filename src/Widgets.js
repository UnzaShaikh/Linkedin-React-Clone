import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import { FiberManualRecord } from '@mui/icons-material'

const Widgets = () => {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widgets__article'>
                <div className="widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Your name here", "This is a sample article")}
            {newsArticle("Corona virus: UK cases spike", "This is a sample article")}
            {newsArticle("Bitcoin breaks $22,000", "This is a sample article")}
            {newsArticle("Is Redux too good?", "This is a sample article")}
            {newsArticle("PAPA react is back", "This is a sample article")}
        </div>
    );
}

export default Widgets;
