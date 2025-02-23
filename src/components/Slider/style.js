import styled from "styled-components";

export const Container = styled.div`
background: #000000;
padding: 0px 20px;

h2{
        color: white;
        font-size: 25px;
        margin-top: 55px;
        margin-bottom: 30px;
};

.swiper-wrapper{
        display: flex;

        @media screen and (max-width: 500px) {
            padding: 0px 10px;
        }
}
`;