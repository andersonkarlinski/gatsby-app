import styled, { css } from 'styled-components'

export const CardV2Wrapper = styled.div`
    background: ${ props => props.background ? props.background : 'pink' };

    h5{ margin-top: 10px; }

    ${props =>
        props.primary &&
        css` 
            background: #8a4baf;
            h5{ color: #f1defa; }
            p{ color: #f1defa; }
        `
    }
`