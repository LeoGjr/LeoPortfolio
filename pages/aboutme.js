import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";

export default function services() {
    return <>
        <Head>
            <title>Sobre Mim</title>
        </Head>

        <div className="servicespage">
            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Experiência</h2>
                    <p data-aos="fade-up">Home <span>&gt;</span> Sobre Mim</p>
                </div>
            </div>
            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Super Geeks</h2>
                                <img src="img/teacher-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Professor de Programação.</li>
                                <li>Ensino de Ferramentas e Engines.</li>
                                <li>Mentoria e Desenvolvimento de Projetos.</li>
                                <li>Integração de Teorias de Jogo e Design de Experiência.</li>
                                <li>Resolução de Problemas e Depuração de Código.</li>
                            </ul>
                            <p>Desenvolvi e organizei planos de aula para ensinar conceitos de programação aplicados ao desenvolvimento de jogos.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>02</span>
                            <div>
                                <h2>Freelancer</h2>
                                <img src="img/programming-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Desenvolvimento Completo de Jogos.</li>
                                <li>Adaptação a Diferentes Plataformas e Tecnologias.</li>
                                <li>Gestão de Projetos e Comunicação com Clientes.</li>
                                <li>Otimização e Desempenho.</li>
                                <li>Testes e Garantia de Qualidade.</li>
                            </ul>
                            <p> Trabalhei em todas as etapas do ciclo de desenvolvimento de jogos, desde o planejamento e prototipagem até a publicação.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>03</span>
                            <div>
                                <h2>Monitor</h2>
                                <img src="img/cube-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Auxílio no Ensino de Modelagem 3D.</li>
                                <li>Suporte Técnico e Criativo.</li>
                                <li>Feedback e Avaliação de Projetos.</li>
                                <li>Desenvolvimento de Projetos Práticos.</li>
                                <li>Mentoria e Acompanhamento Individualizado.</li>
                            </ul>
                            <p> Auxiliei os alunos no aprendizado de ferramentas e técnicas de modelagem 3D, como o uso de softwares como Blender, Maya e 3ds Max.</p>
                        </div>
                        {/* <div className="csservice" data-aos="fade-up">
                            <span>04</span>
                            <div>
                                <h2>Content Creator</h2>
                                <img src="https://www.svgrepo.com/show/474360/photo-album.svg" alt="" />
                            </div>
                            <ul>
                                <li>Crispy Digital Editing</li>
                                <li>Marketing and Promotion on Social Platforms</li>
                                <li>Client communication skill</li>
                            </ul>
                            <p>Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content.</p>
                        </div> */}
                        {/* <div className="csservice" data-aos="fade-left">
                            <span>05</span>
                            <div>
                                <h2>UI/UX Product Design</h2>
                                <img src="https://www.svgrepo.com/show/475614/ui-china.svg" alt="" />
                            </div>
                            <ul>
                                <li>Reusable Components</li>
                                <li>Responsiveness</li>
                                <li>Quality assurance and testing.</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <p>I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.</p>
                        </div> */}
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

            <div className="topservices">
                <div className="container">
                    <h2 data-aos="fade-up">Educação</h2>
                    {/* <p data-aos="fade-up">Home <span>&gt;</span> Sobre Mim</p> */}
                </div>
            </div>

            <div className="centerservices">
                <div className="container">
                    <div className="cservicesbox">
                        <div className="csservice" data-aos="fade-right">
                            <span>01</span>
                            <div>
                                <h2>Microcamp</h2>
                                <img src="/img/website_icon.svg" alt="" />
                            </div>
                            <ul>
                                <li>Aprendi os conceitos básicos do design e desenvolvimento de jogos.</li>
                                <li>Obtive conhecimento prático sobre o uso de engines, como Unity e Unreal Engine.</li>
                                <li>Lógica de Programação e Scripting.</li>
                                <li>Criação de Jogos 2D e 3D.</li>
                                <li>Trabalho em Equipe e Gestão de Projetos.</li>
                            </ul>
                            <p>Desenvolvi habilidades em linguagens de programação, como C# e Blueprint.</p>
                        </div>
                        <div className="csservice" data-aos="fade-right">
                            <span>04</span>
                            <div>
                                <h2>Belas Artes - SP</h2>
                                <img src="img/letter-uppercase-square-b-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Design de Cenários e Ambientes Imersivos.</li>
                                <li>Uso de Softwares Profissionais.</li>
                                <li>Direção de Arte para Projetos 3D.</li>
                                <li>Animação de Personagens e Objetos.</li>
                                <li>Desenvolvimento de Portfólio Profissional.</li>
                            </ul>
                            <p>Adquiri habilidades em planejar e executar projetos com foco em coesão estética e narrativa, alinhando aspectos visuais e emocionais.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>02</span>
                            <div>
                                <h2>Mentorama</h2>
                                <img src="img/magister-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Domínio Completo da Engine Unity.</li>
                                <li>Programação em C#.</li>
                                <li>Desenvolvimento de Jogos 2D e 3D.</li>
                                <li>Gestão de Projetos e Otimização.</li>
                                <li>Desenvolvimento Multiplataforma.</li>
                            </ul>
                            <p>Concluí projetos práticos que demonstram habilidades em desenvolvimento de jogos, compondo um portfólio profissional para apresentação ao mercado.</p>
                        </div>
                        <div className="csservice" data-aos="fade-up">
                            <span>05</span>
                            <div>
                                <h2>Cursos Livres</h2>
                                <img src="https://www.svgrepo.com/show/474360/photo-album.svg" alt="" />
                            </div>
                            <ul>
                                <li>Exploração de Múltiplas Engines de Desenvolvimento.</li>
                                <li>Aprendizado em Ritmo Próprio.</li>
                                <li>Especialização em Técnicas Modernas.</li>
                                <li>Desenvolvimento de Soft Skills.</li>
                                <li>Atualização Constante com o Mercado.</li>
                            </ul>
                            <p>Aprimorei habilidades de autogestão essenciais para o aprendizado autodidata e a aplicação prática dos conceitos adquiridos.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>03</span>
                            <div>
                                <h2>PUC-Campinas</h2>
                                <img src="img/university-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Fundamentos de Design de Jogos.</li>
                                <li>Design de Personagens e Cenários.</li>
                                <li>Level Design.</li>
                                <li>Gestão de Projetos de Jogos.</li>
                                <li>Portfólio e Preparação Profissional.</li>
                            </ul>
                            <p>Experimentei ferramentas e práticas para gerenciar equipes multidisciplinares e processos produtivos, alinhando objetivos criativos e técnicos.</p>
                        </div>
                        <div className="csservice" data-aos="fade-left">
                            <span>06</span>
                            <div>
                                <h2>Linkedin Learning</h2>
                                <img src="img/linkedin-svgrepo-com.svg" alt="" />
                            </div>
                            <ul>
                                <li>Aprofundamento em Engines de Jogos.</li>
                                <li>Design Focado no Usuário.</li>
                                <li>Trabalho com Gráficos e Áudio.</li>
                                <li>Gestão de Projetos Criativos.</li>
                                <li>Certificação Profissional.</li>
                            </ul>
                            <p>Capacitação em organização e planejamento de projetos de jogos, até a distribuição, utilizando metodologias ágeis e ferramentas colaborativas.</p>
                        </div>
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