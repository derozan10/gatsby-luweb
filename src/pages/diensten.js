import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container';
// import Dienst from '../components/Dienst';
import CTA2 from '../components/CTA2';
import SEO from '../components/SEO';

const StyledServices = styled.div`
    .dienstNav {
        display: flex;
        justify-content: space-around;
        margin: 40px 0;
    }
    svg {
        cursor: pointer;
    }
    svg.active .circleFill {
        fill: #08599A;
    }
    p {
        margin-bottom: 10px;
    }
    h3 {
        margin-bottom: 8px;
    }
    .serviceSection {
        display: none;
        p {
            max-width: 50em
        }
        margin-bottom: 120px;
    }
    .serviceSection.active {
        display: block;
    }
`


class Diensten extends Component {
    state = {
        activeService: "design"
    }

    setActiveService = (service) => { this.setState({ activeService: service }) }

    componentDidMount() {
        this.props.location.state.service && this.setActiveService(this.props.location.state.service)
    }

    render() {
        return (
            <Layout inverse>
                <SEO title="Onze diensten" />
                <Container>
                    <StyledServices>
                        <h1>Onze diensten</h1>
                        <div className="dienstNav">
                            <svg
                                fill="none"
                                height="60"
                                viewBox="0 0 60 60"
                                width="60"
                                xmlns="http://www.w3.org/2000/svg"
                                id="design"
                                onClick={() => this.setActiveService("design")}
                                className={this.state.activeService === "design" ? "active" : "inactive"}
                            >
                                <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="m30 0c16.569 0 30 13.4314 30 29.9998 0 16.5683-13.431 30.0002-30 30.0002-16.5685 0-30-13.4319-30-30.0002 0-16.5684 13.4315-29.9998 30-29.9998z" fill="#ebebeb" className="circleFill" />
                                    <path d="m30 3c14.9121 0 27 12.0883 27 26.9998s-12.0879 27.0002-27 27.0002c-14.9116 0-27-12.0887-27-27.0002s12.0884-26.9998 27-26.9998z" fill="#ebebeb" stroke="#fff" className="circleFill" />
                                    <g fill="#fff">
                                        <path d="m42.3847 23.9389-7.7004-5.9389 7.7247 12.3869z" />
                                        <path d="m47.0729 18v19.756h-4.4211l-7.6761-11.9506.2065 11.9506h-4.8705v-12.9687l-4.5303-3.5512c.1214.1455.2429.2909.3522.4485 1.2146 1.6847 1.8219 3.6966 1.8219 6.1207 0 5.9632-3.7166 9.9507-9.3401 9.9507h-7.6154v.0485l21.899 16.5563s10.1658-1.4544 16.2387-9.4538c6.0728-7.9994 5.1548-17.6956 5.1548-17.6956z" />
                                        <path d="m22.8907 27.9507c0-3.5148-1.7247-5.4662-4.8219-5.4662h-2.332v10.787h2.3077c3.1579 0 4.8462-1.8665 4.8462-5.3208z" />
                                    </g>
                                </g>
                            </svg>
                            <svg
                                fill="none"
                                height="60"
                                viewBox="0 0 60 60"
                                width="60"
                                xmlns="http://www.w3.org/2000/svg"
                                id="development"
                                onClick={() => this.setActiveService("development")}
                                className={this.state.activeService === "development" ? "active" : "inactive"}
                            >
                                <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="m30 0c16.569 0 30 13.4314 30 29.9998 0 16.5683-13.431 30.0002-30 30.0002-16.5685 0-30-13.4319-30-30.0002 0-16.5684 13.4315-29.9998 30-29.9998z" fill="#ebebeb" className="circleFill" />
                                    <path d="m30 3c14.9121 0 27 12.0883 27 26.9998s-12.0879 27.0002-27 27.0002c-14.9116 0-27-12.0887-27-27.0002s12.0884-26.9998 27-26.9998z" fill="#ebebeb" stroke="#fff" className="circleFill" />
                                    <path d="m41.0911 29.5391-8.8349 8.8436 2.6936 2.6955 11.5285-11.5391-11.5285-11.5391-2.6936 2.6955zm-22.7129.0001 8.8439 8.8436-2.6936 2.6955-11.5285-11.5391 11.5195-11.5392 2.6936 2.6955z" fill="#fff" />
                                </g>
                            </svg>

                            <svg
                                fill="none"
                                height="60"
                                viewBox="0 0 60 60"
                                width="60"
                                xmlns="http://www.w3.org/2000/svg"
                                id="performance"
                                onClick={() => this.setActiveService("performance")}
                                className={this.state.activeService === "performance" ? "active" : "inactive"}
                            >
                                <path clipRule="evenodd" d="m30 0c16.569 0 30 13.4314 30 29.9998 0 16.5683-13.431 30.0002-30 30.0002-16.5685 0-30-13.4319-30-30.0002 0-16.5684 13.4315-29.9998 30-29.9998z" fill="#ebebeb" fillRule="evenodd" className="circleFill" />
                                <path clipRule="evenodd" d="m30 3c14.9121 0 27 12.0883 27 26.9998s-12.0879 27.0002-27 27.0002c-14.9116 0-27-12.0887-27-27.0002s12.0884-26.9998 27-26.9998z" fill="#ebebeb" fillRule="evenodd" stroke="#fff" className="circleFill" />
                                <g fill="#fff">
                                    <path d="m42.8887 16.4691c-.0259-.11-.1035-.1941-.2136-.22-3.5209-.8608-11.6565 2.207-16.0641 6.6146-.8608.8608-1.5663 1.7087-2.1423 2.5306-1.3592-.1229-2.7183-.0194-3.8769.4855-3.2684 1.4368-4.2199 5.1907-4.4852 6.8023-.0647.3819.2524.7119.6343.6731l5.2489-.576c.0065.5048.0389.9061.0712 1.1844.0259.2718.1489.5243.3431.7184l2.0323 2.0323c.1941.1942.4465.3171.7184.343.2783.0324.6796.0648 1.1779.0712l-.576 5.2425c-.0388.3819.2912.6991.6731.6343 1.6116-.2589 5.372-1.2103 6.8023-4.4788.5049-1.1585.6084-2.5112.4919-3.8639.822-.576 1.6763-1.2815 2.5371-2.1423 4.4271-4.4011 7.4755-12.3555 6.6276-16.0512zm-10.5627 10.3491c-1.0808-1.0808-1.0808-2.8283 0-3.9092 1.0809-1.0809 2.8284-1.0809 3.9093 0 1.0808 1.0809 1.0808 2.8284 0 3.9092-1.0809 1.0809-2.8284 1.0809-3.9093 0z" /><path d="m24.2941 37.6269c-.2719.2718-.7573.4272-1.2815.5178-1.178.2006-2.2071-.8285-2.0064-2.0064.0906-.5243.2394-1.0097.5113-1.2751l.0064-.0064c.1489-.1489.0259-.3948-.1812-.3689-.6343.0776-1.2556.3624-1.741.8478-1.165 1.165-1.275 5.4885-1.275 5.4885s4.3299-.11 5.4949-1.2751c.4919-.4918.7702-1.1067.8479-1.741.0194-.2071-.233-.3301-.3754-.1812z" />
                                </g>
                            </svg>
                            <svg
                                fill="none"
                                height="60"
                                viewBox="0 0 60 60"
                                width="60"
                                xmlns="http://www.w3.org/2000/svg"
                                id="analytics"
                                onClick={() => this.setActiveService("analytics")}
                                className={this.state.activeService === "analytics" ? "active" : "inactive"}
                            >
                                <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="m30 0c16.569 0 30 13.4314 30 29.9998 0 16.5683-13.431 30.0002-30 30.0002-16.5685 0-30-13.4319-30-30.0002 0-16.5684 13.4315-29.9998 30-29.9998z" fill="#ebebeb" className="circleFill" />
                                    <path d="m30 3c14.9121 0 27 12.0883 27 26.9998s-12.0879 27.0002-27 27.0002c-14.9116 0-27-12.0887-27-27.0002s12.0884-26.9998 27-26.9998z" fill="#ebebeb" stroke="#fff" className="circleFill" />
                                    <g fill="#fafbfc">
                                        <path d="m11.9417 43.1198h36.3106v-1.7285h-36.3106z" />
                                        <path d="m45.5881 18.0349.6117.8526-12.2658 8.3212-7.3352-10.2087-16.5988 11.4057.0039 1.8462 16.2434-11.1572 7.3293 10.1411 13.5052-9.1178.6161.8594 2.1079-3.6868z" />
                                        <path d="m12.1357 39.8548h6.0195v-14.0201l-6.0195 4.2883z" /><path d="m46.6428 22.1855-5.3808 3.8073v14.0541h6.0194v-16.9581z" />
                                        <path d="m34.0774 30.6723v9.3746h6.0194v-13.6361l-6.0025 4.2495z" />
                                        <path d="m19.5144 25.537v14.5099h6.0194v-18.8216z" />
                                        <path d="m26.6987 21.9935v17.8614h6.0194v-9.1646z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <section id="analytics" className={`serviceSection ${this.state.activeService === "analytics" ? "active" : "inactive"}`}>
                            <h2>Analytics</h2>
                            <p>
                                Krijg meer inzichten in je bezoekers zodat je hier beter op kan inspelen.
                            </p>
                            <p>
                                Tools als Google Analytics laten je zien hoe oud je doelgroep is, waar ze zich bevinden, op welk tijdstip ze op je site zitten... Door het surfgedrag van bezoekers te analyseren kan je jouw strategie online en offline aanpassen. We helpen jouw dan ook graag om deze tools op te zetten en je wegwijs te maken.
                            </p>
                        </section>
                        <section id="development" className={`serviceSection ${this.state.activeService === "development" ? "active" : "inactive"}`}>
                            <h2>Web Development</h2>
                            <h3>De juiste tool voor de job</h3>
                            <p>
                                Door onze expertise in development weten we precies welke technologieën, frameworks, libraries... het beste gebruikt kunnen worden voor jouw website.
                            </p>
                            <p>
                                Hoewel vandaag erg snel gegrepen wordt naar een CMS (<i>Content Management System</i>) als WordPress, Drupal, Wix... , om een website op te zetten, coderen wij zo veel mogelijk websites zelf. Dit geeft ons de mogelijkheid om erg flexibel te zijn en makkelijk aanpassingen te doen tot op de pixel, snellere oplossingen te bieden en goedkoper hosting aan te bieden.
                            </p>
                            <p>
                                Uiteraard is een CMS in sommige gevallen wel de beste optie, en helpen we jou graag de beste keuze te maken in het grote aanbod.
                            </p>
                            <h3>Best practices</h3>
                            <p>
                                We volgen steeds de richtlijnen die vooropgesteld worden voor het opstellen van websites en gaan hiervoor erg tot in detail. Het gebruiken van de juiste titels op de juiste plaats, alternatieve teksten bij afbeeldingen... zijn bijvoorbeeld dingen die erg belangrijk zijn om de gebruiksvriendelijkheid van je website te verhogen. Hiernaast merkt ook Google dit op, en zal je beloond worden met een hogere ranking in zoekmachines.
                            </p>
                            <h3>Browsers</h3>
                            <p>
                                Chrome, Firefox, Opera ,Safari, Edge... We testen onze websites op zowat elke browser die vandaag de dag gebruikt wordt, zodat je website altijd en overal toegankelijk is.
                            </p>
                        </section>
                        <section id="design" className={`serviceSection ${this.state.activeService === "design" ? "active" : "inactive"}`}>
                            <h2>Web design</h2>
                            <p>
                                Bij het maken van een website start alles met een sterk design. Een website moet er niet alleen goed uitzien, maar moet vooral erg gebruiksvriendelijk zijn.  Verder zetten we de sterktes van jouw onderneming extra in de verf. Het spreekt voor zich dat alle design ook perfect schalen op elk device, van smartphone tot desktop.
                            </p>
                        </section>
                        <section id="performance" className={`serviceSection ${this.state.activeService === "performance" ? "active" : "inactive"}`}>
                            <h2>Performance optimalisatie</h2>
                            <p>
                                De laadtijd van je website vinden we erg belangrijk bij Luweb. Misschien omdat we weten dat deze een grote impact heeft op het gebruiksgemak, je vindbaarheid in zoekmachines, conversie... En ga zo maar door.
                            </p>
                            <p>
                                We analyseren onze websites steeds tot op het bot en trachten deze tot op de milliseconde te versnellen, zodat je kan genieten van al deze voordelen. Om te bewijzen dat we effectief de meest performante oplossing bieden, krijg je een gedetailleerd rapport bij elke website dat aantoont hoe goed je site scoort op performance.
                           </p>
                        </section>
                    </StyledServices>
                </Container>
                <CTA2 />
                {/* <Container>
                    <h2>Heb je al een website?</h2>
                    <p>We ondersteunen je graag met verschillende taken zoals: </p>
                    <ul>
                        <li>het onderhoud van je website</li>
                        <li>performance optimalisatie</li>
                        <li>het toevoegen van nieuwe features</li>
                        <li>… </li>
                    </ul>
                    <h2>Veilighied</h2>
                    <p>
                        We zorgen ervoor dat u zich geen zorgen hoeft te maken over de veiligheid van uw website en de gebruikers ervan.
                        We dragen veiligheid hoog in het vaandel bij Luweb. Daarom voorzien we al onze websites van een SSL-certificaat.
                        Dit zorgt ervoor dat al de communicatie van en naar je website op een veilige manier gebeurt.
                        Bovendien wordt je website als veilig gemarkeerd in de zoekbalk.
                    </p>
                </Container> */}
            </Layout>
        )

    }

}

export default Diensten
