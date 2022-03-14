import React from 'react'

import * as cardStyles from './card.module.scss'

const Card = () => {
    return(
        <div className={cardStyles.card}>
            <h1>Title Card</h1>
            <h1 className={cardStyles.h1}>Title Card</h1>
            <p>Lorem ipsum dolor sit amet. Aut deserunt pariatur aut eius internos qui possimus voluptates. Ea sequi soluta ut adipisci omnis in deserunt dolore eos voluptatem numquam qui velit quidem ut harum inventore.</p>
            <button>Button Card</button>
        </div>
    )
}

export default Card