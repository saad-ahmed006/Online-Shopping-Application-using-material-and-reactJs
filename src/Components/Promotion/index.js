import { Slide } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { PromotionContainer, PromotionText } from '../../Styles/promotion';
const messages = [
    "20% off on your first order!",
    "Winter sale starts now, visit any store.",
    "Please like and subscribe :)",
];
export default function Promotion() {
    const [messageIndex, setmessageIndex] = useState(0)
    const [show, setshow] = useState(true)
    useEffect(() => {

        setTimeout(() => {
            setshow(false)
        }, 3000);
        const InValid = setInterval(() => {
            setmessageIndex(i => (i + 1) % messages.length)
setshow(true)
setTimeout(() => {
    setshow(false)
}, 3000);
        }, 4000);

        return (() => {
            clearInterval(InValid)
        })
    }, [])
    return (

        <PromotionContainer>
            <Slide direction={show?'left':'right'}
                in={show}
                enter={1000}
                exit={50}
            >
                <PromotionText>{messages[messageIndex]}</PromotionText>
            </Slide>

        </PromotionContainer>
    )
}
