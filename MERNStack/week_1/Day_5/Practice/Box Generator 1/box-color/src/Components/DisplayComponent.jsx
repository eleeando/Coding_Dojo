import React from 'react'
import styled from 'styled-components';

const DisplayComponent = ({ boxColor }) => {
    return (
        <Box style={{ backgroundColor: boxColor }}></Box>
    )
}
const Box = styled.div`
    width: 100px;
    height: 100px;
`

export default DisplayComponent