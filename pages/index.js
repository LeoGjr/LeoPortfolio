import Head from "next/head";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import Spinner from "@/components/Spinner";
import Typed from 'typed.js';
import { FaBehanceSquare } from "react-icons/fa";

export default function Home() {


  // activeservice background color
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(0); // Set the first item as active when mouse leaves
  };




  // services data
  const services = [
    {
      title: "Game Developer",
      description: "Possuo experiência com diversas engines e linguagens do mercado, desde GDevelop até Unreal Engine, além de conhecimentos em variadas mecânicas e plataformas."
    },
    {
      title: "Game Designer",
      description: "Experiência em criação de mecânicas, balanceamento de jogos, sistemas econômicos, level design, implementação de In-App Purchases e outros aspectos do desenvolvimento de jogos."
    },
    {
      title: "UX/UI Designer",
      description: "Desenvolvimento de interfaces intuitivas, atraentes e funcionais, alinhadas às melhores práticas de design e experiência do usuário. Especializado em compreender as necessidades do público-alvo para criar layouts imersivos em jogos e sites, garantindo usabilidade, interatividade fluida e forte impacto visual."
    },
    {
      title: "Full Stack",
      description: "Desenvolvimento completo de aplicações web, abrangendo desde front-end responsivo e intuitivo até back-end robusto e escalável. Especializado na integração de tecnologias modernas para oferecer soluções personalizadas, eficientes e de alta performance, atendendo às necessidades únicas de cada projeto com excelência e agilidade."
    }
  ];

  const [loading, setLoading] = useState(true);
  const [alldata, setAllData] = useState([]);
  const [allwork, setAllWork] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, blogsResponse] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/blogs')
        ]);

        const projectsData = await projectsResponse.json();
        const blogsData = await blogsResponse.json();

        setAllData(projectsData);
        setAllWork(blogsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter projects based on selectedCategory
    if (selectedCategory === 'All') {
      setFilteredProjects(alldata.filter(pro => pro.status === 'publish'));
    } else {
      setFilteredProjects(alldata.filter(pro => pro.status === 'publish' && pro.projectcategory[0] === selectedCategory));
    }
  }, [selectedCategory, alldata]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };



  // Function to format the date as "20 May 2024 14:11 pm"
  const formatDate = (date) => {
    // Check if date is valid
    if (!date || isNaN(date)) {
      return ''; // or handle the error as needed
    }

    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour12: true // Use 12-hour format
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.body.classList.contains('dark'));
    }
  }, []);


  // type js

  useEffect(() => {
    const options = {
      strings: ['UX/UI Designer', 'Full Stack Dev', 'Artista 3D', 'Game Designer'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
      const typed = new Typed(typedElement, options);

      // Clean up on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);



  return (
    <>
      <Head>
        <title>Leonardo - Personal Portfolio</title>
        <meta name="description" content="Leonardo - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" text-anchor="middle" className="animate-stroke">HI</text>
          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title" data-aos="fade-right" >Eu sou o Léo</span>
              <h1 className="hero_title" data-aos="fade-right" >Game Developer + <br /> <span className="typed-text">UX Designer</span> </h1>
              <div className="hero_img_box heroimgbox" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src="img/me.png" alt="" />
              </div>
              <div className="lead" data-aos="fade-up"  >Com 7 anos de experiência no mercado de programação e desenvolvimento de jogos transformo ideias em produtos concretos no setor de games.</div>
              <div className="hero_btn_box" data-aos="fade-up">
                <Link href='/img/Leonardo de Godoy Junior_CV.pdf' download={'/img/Leonardo de Godoy Junior_CV.pdf'} className="download_cv">Download CV <BiDownload /></Link>
                <ul className="hero_social">
                  <li><a href="https://linktr.ee/LeoGjr"><LiaBasketballBallSolid /></a></li>
                  <li><a href="https://www.behance.net/leonardogodoy10"><FaBehanceSquare /></a></li>
                  <li><a href="https://www.linkedin.com/in/leonardo-de-godoy-junior/"><GrLinkedinOption /></a></li>
                  <li><a href="https://github.com/LeoGjr"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className="heroimageright" >
              <div className="hero_img_box" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src='img/me.png' alt="" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex-sb">
            <div className="funfect_item" data-aos="fade-right">
              <h3>7+</h3>
              <h4>Anos de <br />
                Experiência</h4>
            </div>
            <div className="funfect_item" data-aos="fade-right">
              <h3>20+</h3>
              <h4>Projetos <br />
                Completados</h4>
            </div>
            <div className="funfect_item" data-aos="fade-left">
              <h3>6+</h3>
              <h4>Projetos <br />
                para empresas</h4>
            </div>
            <div className="funfect_item" data-aos="fade-left">
              <h3>300+</h3>
              <h4>Códigos <br />
                Github</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2 data-aos="fade-up">Minhas Habilidades</h2>
            <p data-aos="fade-up">Um breve resumo das habilidades e conhecimentos adquiridos ao longo dos anos e nos projetos desenvolvidos.</p>
          </div>
          <div className="services_menu" data-aos="fade-up">
            {services.map((service, index) => (
              <div
                key={index}
                className={`services_item ${activeIndex === index ? 'sactive' : ''}`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                {/* <GoArrowUpRight /> */}
                <li><a href="/services"><GoArrowUpRight /></a></li>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2 data-aos="fade-up">Meus Trabalhos Recentes</h2>
            <p data-aos="fade-up">Projetos que destacaram-se pela criação de experiências imersivas em jogos e sites, interfaces intuitivas, e soluções tecnológicas completas.</p>
          </div>
          <div className="project_buttons" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</button>
            <button className={selectedCategory === 'Game Development' ? 'active' : ''} onClick={() => setSelectedCategory('Game Development')}>Games</button>
            <button className={selectedCategory === 'Website Development' ? 'active' : ''} onClick={() => setSelectedCategory('Website Development')}>Website</button>
            {/* <button className={selectedCategory === 'App Development' ? 'active' : ''} onClick={() => setSelectedCategory('App Development')}>Apps</button> */}
            {/* <button className={selectedCategory === 'Perfomance Evaluation' ? 'active' : ''} onClick={() => setSelectedCategory('Perfomance Evaluation')}>Content</button> */}
          </div>
          <div className="projects_cards">
            {loading ? <Spinner /> : (
              filteredProjects.length === 0 ? (
                <h1 className="w-100 flex flex-center mt-3">No Projects Found</h1>
              ) : (
                filteredProjects.slice(0, 4).map((pro) => (
                  <Link href={`/projects/${pro.slug}`} key={pro._id} className="procard" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="proimgbox">
                      <img src={pro.images[0]} alt={pro.title} />
                    </div>
                    <div className="procontentbox">
                      <h2>{pro.title}</h2>
                      <GoArrowUpRight />
                    </div>
                  </Link>
                ))
              )
            )}

          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experience_title flex gap-1" data-aos="fade-right">
              <LuMedal />
              <h2>Minha Experiência</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card" data-aos="fade-up">
                <span>2020 - 2020</span>
                <h3>SUPER GEEKS</h3>
                <p>Professor de programação para jogos.</p>
              </div>
              <div className="exper_card" data-aos="fade-up">
                <span>2022-Present</span>
                <h3>FREELANCER</h3>
                <p>Desenvolvendo sites, jogos e aplicativos.</p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="experience_title flex gap-1" data-aos="fade-left">
              <PiGraduationCap />
              <h2>Minhas Formações</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card" data-aos="fade-up">
                <span>2016 - 2016</span>
                <h3>Microcamp</h3>
                <p>Curso de desenvolvimento de jogos.</p>
              </div>
              <div className="exper_card" data-aos="fade-up">
                <span>2020-2021</span>
                <h3>Mentorama</h3>
                <p>Curso de desenvolvedor Unity.</p>
              </div>
              <div className="exper_card" data-aos="fade-up">
                <span>2020-2022</span>
                <h3>PUC-Campinas</h3>
                <p>Graduação em design de jogos digitais.</p>
              </div>
              <div className="exper_card" data-aos="fade-up">
                <span>2023-Present</span>
                <h3>Belas Artes - SP</h3>
                <p>Pós-graduação em design de cenários e personagens 3D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2 data-aos="fade-up">Minhas Habilidades</h2>
            <p data-aos="fade-up">As principais Engines do mercado com as quais tenho experiência.</p>
          </div>
          <div className="myskils_cards">
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="img/develop-svgrepo-com.svg" alt="" />
                <h3>7 anos</h3>
              </div>
              <p className="text-center">GDevelop</p>
            </div>
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="img/construct3-svgrepo-com.svg" alt="" />
                <h3>7 anos</h3>
              </div>
              <p className="text-center">Construct</p>
            </div>
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="img/godot-svgrepo-com.svg" alt="" />
                <h3>7 anos</h3>
              </div>
              <p className="text-center">Godot</p>
            </div>
            <div className="mys_card" data-aos="fade-right">
              <div className="mys_inner">
                <img src="img/gamemaker-svgrepo-com.svg" alt="" />
                <h3>7 anos</h3>
              </div>
              <p className="text-center">Gamemaker</p>
            </div>
            <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="img/unity-svgrepo-com.svg" alt="" />
                <h3>7 anos</h3>
              </div>
              <p className="text-center">Unity</p>
            </div>
            <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="img/unreal-engine-svgrepo-com.svg" alt="" />
                <h3>2 anos</h3>
              </div>
              <p className="text-center">Unreal</p>
            </div>
            {/* <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="/img/js.svg" alt="" />
                <h3>99%</h3>
              </div>
              <p className="text-center">JavaScript</p>
            </div>

            <div className="mys_card" data-aos="fade-left">
              <div className="mys_inner">
                <img src="/img/js.svg" alt="" />
                <h3>99%</h3>
              </div>
              <p className="text-center">JavaScript</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">
        <div className="container">
          <div className="myskills_title">
            <h2 data-aos="fade-up">Blogs Recentes</h2>
            <p data-aos="fade-up">Acesse e veja posts mais detalhados sobre cada um dos projetos.</p>
          </div>
          <div className="recent_blogs">
            {allwork.slice(0, 3).map((blog) => {
              return <Link href={`/blogs/${blog.slug}`} key={blog._id} className="re_blog" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="re_blogimg">
                  <img src={blog.images[0] || '/img/noimage.png'} alt={blog.title} />
                  <span>{blog.blogcategory[0]}</span>
                </div>
                <div className="re_bloginfo">
                  <div className="re_topdate flex gap-1">
                    <div className="res_date">
                      <FaCalendarDays /> <span>{formatDate(new Date(blog.createdAt))}</span>
                    </div>
                  </div>
                  <h2>{blog.title}</h2>
                </div>
              </Link>
            })}
          </div>
        </div>
      </section>

    </>
  );
}
