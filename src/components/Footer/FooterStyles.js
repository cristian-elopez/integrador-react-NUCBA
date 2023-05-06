import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
    display: flex;
    height: 250px;
    padding: 20px 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: auto;

    p {
        margin: 40px 0;
    }
    
    @media (max-width: 768px) {
        height: 550px;
    } 
`;
export const FooterColumnsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
`;
export const ColumnsContein = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
`;
export const TittleColumnFotter = styled.h2`
    font-size: 1.5rem;
    font-weight: 900;
    color: white;

    @media (max-width: 320px) {
        width: 50%;
    } 
`;
export const LinkContainerStyled = styled.div`
    color: white;

    :hover {
        opacity: .8;
    }
`;
export const InfoCopyrigthStyled = styled.p`
    margin: auto;
    text-align: center;

    @media (max-width: 425px) {
        width: 80%;
    }
`;