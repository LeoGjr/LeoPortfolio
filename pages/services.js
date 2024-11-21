import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>Habilidades</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Habilidades</h2>
                    <p data-aos="fade-up">Home <span>&gt;</span> Habilidades</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Web Development</h2>
                                <img src="/img/website_icon.svg" alt="" />
                            </div>
                            <ul>
                                <li>Performance e Tempo de Carregamento.</li>
                                <li>Componentes Reutilizáveis.</li>
                                <li>Responsividade.</li>
                                <li>Garantia de Qualidade e Testes.</li>
                                <li>Manutenção Contínua, Atualizações e Correções de Bugs.</li>
                            </ul>
                            <p>Tenho grande expertise em desenvolvimento web, alcançando resultados notáveis e atender às necessidades específicas do seu projeto.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>Mobile Development</h2>
                                <img src="https://www.svgrepo.com/show/475631/android-color.svg" alt="" />
                            </div>
                            <ul>
                                <li>Prototipagem e Criação de Wireframes.</li>
                                <li>Design de UI/UX.</li>
                                <li>Codificação e Programação.</li>
                                <li>Testes de Garantia de Qualidade (QA).</li>
                                <li>Implantação de Aplicativos.</li>
                            </ul>
                            <p>Proficiente na criação de jogos móveis de alta performance e focados no usuário. Expertise em desenvolvimento para iOS, Android e multi-plataformas.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>04</span>
                            <div>
                                <h2>Game Development</h2>
                                <img src="img/programming-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Desenvolvimento de Mecânicas de Jogo.</li>
                                <li>Design de Níveis e Balanceamento.</li>
                                <li>Otimização e Performance.</li>
                                <li>Desenvolvimento para Múltiplas Plataformas.</li>
                                <li>Criação de Interfaces Intuitivas (UI/UX).</li>
                            </ul>
                            <p>Experiência sólida com as mais diversas Engines, programação de gameplay, animação de personagens e integração de sistemas complexos.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>05</span>
                            <div>
                                <h2>Game Designer</h2>
                                <img src="https://www.svgrepo.com/show/474360/photo-album.svg" alt="" />
                            </div>
                            <ul>
                                <li>Balanceamento de Jogo e Progressão.</li>
                                <li>Design de Níveis e Ambientes.</li>
                                <li>Sistemas de Recompensas e Economia.</li>
                                <li>Sistemas de IA e NPCs.</li>
                                <li>Design de Interface e UX.</li>
                            </ul>
                            <p>Habilidade em desenvolver mecânicas de jogo envolventes, desde o design inicial até a implementação, garantindo uma experiência fluida e divertida para os jogadores.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>03</span>
                            <div>
                                <h2>UI/UX Design</h2>
                                <img src="https://www.svgrepo.com/show/475614/ui-china.svg" alt="" />
                            </div>
                            <ul>
                                <li>Design de Interfaces Intuitivas e Funcionais.</li>
                                <li>Design Responsivo.</li>
                                <li>Design Visual e Estético.</li>
                                <li>Feedback Visual e Sonoro.</li>
                                <li>Foco em Acessibilidade.</li>
                            </ul>
                            <p>Capacidade de criar interfaces de usuário que são fáceis de entender e utilizar, com foco em melhorar a experiência de jogo e garantir uma navegação simples e fluida.</p>
                        </div>
                        {/* <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>E-commerce Business Solutions</h2>
                                <img src="https://www.svgrepo.com/show/475678/shopify-color.svg" alt="" />
                            </div>
                            <ul>
                                <li>Ecommerce store</li>
                                <li>Online Purchase</li>
                                <li>Quality assurance and testing.</li>
                                <li>Marketing and Promotion on Social Platforms</li>
                            </ul>
                            <p>My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.</p>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="pricingplansec">
                <div className="container">
                    <div className="pricingtitles text-center">
                        <h3><img src="/img/chevron_right.png" alt="" /> PRICING PLAN</h3>
                        <h2>Pricing My Work</h2>
                    </div>

                    <div className="pricingcards">
                        <div className="pricingcard">
                            <h4>Life Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$29.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Lite includes:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Powerful admin panel</li>
                                    <li><IoMdCheckmark /> 1 Native android app</li>
                                    <li><HiXMark /> Multi-language support</li>
                                    <li><HiXMark /> Multi-language support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" data-aos="fade-up">
                            <h4>Premium Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$39.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in lite, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Powerful admin panel</li>
                                    <li><IoMdCheckmark /> 1 Native android app</li>
                                    <li><HiXMark /> Multi-language support</li>
                                    <li><HiXMark /> Multi-language support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricingcard" >
                            <h4>Pro Plan</h4>
                            <p>Perfect Choice for individual</p>
                            <h2>$49.00 <span>Monthly</span></h2>
                            <Link href='/contact'><button>Get Start Now</button></Link>
                            <div>
                                <h5>Everything in pro, plus:</h5>
                                <ul>
                                    <li><IoMdCheckmark /> Powerful admin panel</li>
                                    <li><IoMdCheckmark /> 1 Native android app</li>
                                    <li><IoMdCheckmark /> Multi-language support</li>
                                    <li><IoMdCheckmark /> Multi-language support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    </>
}