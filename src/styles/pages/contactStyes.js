import styled, { css } from 'styled-components'
import Icons from '../../components/Icons'

export const EmailWrapper = styled(Icons.Email)`
    color: ${ props => props.color ? props.color : 'red' };
    width: ${ props => props.width ? props.color : '100px' };

    ${props =>
        props.danger &&
        css`
            color: green;
            width: 35px;
        `
    }
`

export const PhoneWrapper = styled(Icons.Phone)`
    color: ${ props => props.color ? props.color : 'red' };
    width: ${ props => props.width ? props.color : '100px' };

    ${props =>
        props.danger &&
        css`
            color: green;
            width: 35px;
        `
    }
`

export const LocationWrapper = styled(Icons.Location)`
    color: ${ props => props.color ? props.color : 'red' };
    width: ${ props => props.width ? props.color : '100px' };

    ${props =>
        props.danger &&
        css`
            color: green;
            width: 35px;
        `
    }
`