import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: white;
    margin: 0 auto;
    margin-top: 25vh;
    margin-bottom: 30px;
    width: 700px;
    max-width: 85vw;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: ${props => props.theme.filters.shadow};
`;

export const Header = styled.h1`
text-align: center;
text-transform: uppercase;
`;

export const Wrapper = styled.div`
display: flex;
margin: 0 auto;
margin-top: 30px;
width: 70%;
justify-content: center;
`;

const switchColor = props => {
    
    switch (props.children) {        
        case 'good':
            return "#5CFF00";
        case 'neutral':
            return "#0CCDE8";
        case 'bad':
            return "#FF0D18";
        default:
            return "#F2BF5E";
    }    
};

export const Button = styled.button`
width: 300px;

padding: 10px;
font-weight: 700;
text-transform: uppercase;
border: none;
background-color: #F2BF5E;
:hover {
    background-color: rgb(45, 45, 45);
    color: ${switchColor};
}
`;

export const StatWrapper = styled.div`
    /* margin: 0; */
    text-align:center;
    text-transform: uppercase;
    line-height: 8px;
    margin-top: 40px;
`;