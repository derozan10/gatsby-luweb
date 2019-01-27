import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby";

import Container from './Container';
import Button from './Button';
// import { relative } from 'path';
// import Container from '../components/Container';
// import bg from "../img/bg.jpg"

const StyledHero = styled.header`
    color: #fff;
    position: relative;
    #heroContainer {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
    }
    &:after {
        overflow: hidden;
        content: '';
        display: block;
        position: absolute;
        top: -10%;
        bottom: 0;
        left: 0;
        right: 0;
        transform: rotate(-7deg) scale(1.2);
        transform-origin: bottom left;
        background: ${props => props.theme.blueGradient};
        z-index: -1;
    }
    .heroText {
        position: relative;
        padding: 128px 0 256px;
        @media (max-width: 768px) {
            padding: 96px 0 128px;
        }
        @media(max-width: 576px) {
            width: 100%;
            padding: 10px 0 20px 0;
        }
        h1{
            font-weight: 400;
            font-size: 48px;
            margin-bottom: 48px;
            @media (max-width: 768px) {
                font-size: 30px;
                margin-bottom: 32px;
            }
        }
        p {
            margin-bottom: 48px;
            padding-right: 20px;
            font-size: 24px;
            font-weight: 300;
            line-height: 1.4;
        }
    }
    #socialBar {
        display: flex;
        flex-direction: column;
        height: 300px;
        margin-top: 100px;
        justify-content: space-between;
        z-index: 20;
        align-items: center;
        @media (max-width: 768px) {
            margin-top: 30px;
        }
        @media(max-width: 576px) {
            display: none;
        }
        &:before, &:after{
            content: '';
            height: 10%;
            width: 1px;
            position: relative;
        }
        &:before{
            background: linear-gradient(to bottom, rgba(0,0,0,0.5), #fff 30%);
        }
        &:after{
            background: linear-gradient(to top, rgba(0,0,0,0.5), #fff 30%);
        }
        @media(max-width: 768px){
            svg {
                transform: scale(0.7);
            }
        }
    }
`


export default () => {
    return (
        <StyledHero>
            <div style={{ position: "relative" }}>
                <Container>
                    <div id="heroContainer">
                        <div className="heroText">
                            <h1>Web development is onze passie</h1>
                            <p>We zijn gespecialiseerd in uiterst performante websites, <br />met een goed oog voor design.</p>
                            <div>
                                <Link to="/diensten" >
                                    <Button primary>
                                        Onze diensten
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button secondary>
                                        Contacteer ons
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div id='socialBar'>
                            <a href="https://www.facebook.com/LuwebDevelopment" target='_blank' rel='noopener noreferrer'>
                                <svg height="26" viewBox="0 0 13 26" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m3.77689394 26v-11.6289062h-3.77689394v-4.6210938h3.77689394v-3.64101563c0-3.95585937 2.34393939-6.10898437 5.76628788-6.10898437 1.63977268 0 3.04810608.12695313 3.45681818.1828125v4.13359375h-2.3734848c-1.86136368 0-2.22083338.9140625-2.22083338 2.24960938v3.18398437h4.20037878l-.5761364 4.6210938h-3.62424238v11.6289062" fill="#fff" fillRule="evenodd" /></svg>
                            </a>
                            <a href="https://twitter.com/LuWebDev" target='_blank' rel='noopener noreferrer'>
                                <svg height="21" viewBox="0 0 26 21" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m23.3273828 5.23566346c.0165039.22958654.0165039.45922356.0165039.6888101 0 7.00269234-5.3616367 15.07143754-15.16114842 15.07143754-3.01904687 0-5.82359375-.8692284-8.18273828-2.3779472.42894922.0491683.84134375.0655746 1.28679687.0655746 2.49107422 0 4.78425391-.8363654 6.61547657-2.2631539-2.34264063-.0492187-4.30584375-1.5743942-4.98225-3.6735865.32997656.0491682.65990234.0819807 1.00638281.0819807.47841016 0 .95687109-.065625 1.40227344-.1803677-2.44161328-.4920361-4.27288672-2.6239904-4.27288672-5.19876206v-.06557452c.70936328.39359856 1.53430469.63959135 2.40860547.67235336-1.43528125-.95120913-2.37559766-2.57477163-2.37559766-4.4115649 0-.98397115.26391016-1.88596154.72586719-2.67315865 2.62310547 3.21436298 6.56601562 5.3135048 10.98728513 5.54314182-.0824687-.39359855-.1319804-.80355288-.1319804-1.21355769 0-2.91920192 2.3756484-5.29714904 5.3286796-5.29714904 1.5342539 0 2.9200235.63959135 3.8933985 1.67278125 1.2042773-.22958654 2.3590937-.67240384 3.3819805-1.27918269-.3959922 1.23001442-1.237336 2.26320433-2.3426407 2.91915144 1.0723477-.11474279 2.1116875-.4100048 3.0685078-.81995913-.7257656 1.04954567-1.6331757 1.98429808-2.6725156 2.73873317z" fill="#fff" fillRule="evenodd" /></svg>
                            </a>
                            <a href="https://www.instagram.com/luwebdevelopement" target='_blank' rel='noopener noreferrer'>
                                <svg height="23" viewBox="0 0 23 23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="m11.5051111 5.63474388c-3.25066666 0-5.87266666 2.62783964-5.87266666 5.88574612 0 3.2579064 2.622 5.8857461 5.87266666 5.8857461 3.2506667 0 5.8726667-2.6278397 5.8726667-5.8857461 0-3.25790648-2.622-5.88574612-5.8726667-5.88574612zm0 9.71224942c-2.10066666 0-3.81799999-1.7160356-3.81799999-3.8265033 0-2.11046773 1.71222222-3.82650336 3.81799999-3.82650336 2.1057778 0 3.818 1.71603563 3.818 3.82650336 0 2.1104677-1.7173333 3.8265033-3.818 3.8265033zm7.4826667-9.95300666c0 .76325167-.6133334 1.3728285-1.3697778 1.3728285-.7615556 0-1.3697778-.61469933-1.3697778-1.3728285 0-.75812918.6133334-1.37282851 1.3697778-1.37282851s1.3697778.61469933 1.3697778 1.37282851zm3.8895555 1.39331848c-.0868889-1.8389755-.506-3.46792873-1.8502222-4.81002227-1.3391111-1.34209354-2.9644444-1.76213808-4.7993333-1.85434298-1.8911111-.10757239-7.55933336-.10757239-9.45044447 0-1.82977777.0870824-3.45511111.50712694-4.79933333 1.84922049-1.34422222 1.34209354-1.75822222 2.97104677-1.85022222 4.81002227-.10733334 1.89532294-.10733334 7.57616927 0 9.47149217.08688889 1.8389755.506 3.4679288 1.85022222 4.8100223s2.96444444 1.7621381 4.79933333 1.854343c1.89111111.1075724 7.55933337.1075724 9.45044447 0 1.8348889-.0870824 3.4602222-.507127 4.7993333-1.854343 1.3391111-1.3420935 1.7582222-2.9710468 1.8502222-4.8100223.1073334-1.8953229.1073334-7.57104674 0-9.46636968zm-2.4431111 11.49999998c-.3986666 1.0040089-1.1704444 1.7775056-2.1773333 2.1821827-1.5077778.5993318-5.0855556.4610244-6.7517778.4610244-1.66622221 0-5.2491111.1331849-6.75177777-.4610244-1.00177777-.3995546-1.77355555-1.1730513-2.17733333-2.1821827-.598-1.5111358-.46-5.0968819-.46-6.7668151 0-1.66993321-.13288889-5.2608018.46-6.76681517.39866667-1.00400891 1.17044444-1.77750556 2.17733333-2.18218263 1.50777778-.59933184 5.08555556-.46102449 6.75177777-.46102449 1.6662222 0 5.2491111-.13318486 6.7517778.46102449 1.0017778.39955457 1.7735555 1.17305123 2.1773333 2.18218263.598 1.51113586.46 5.09688196.46 6.76681517 0 1.6699332.138 5.2608018-.46 6.7668151z" fill="#fff" /></svg>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

        </StyledHero>
    )
}
