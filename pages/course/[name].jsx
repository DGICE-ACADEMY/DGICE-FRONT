import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { GET_COURSE_BY_NAME } from "../../src/gpl/queryCourse";

import { faBuildingColumns, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import { MainLayout } from "../../components/Layouts/MainLayout";

import { StartRating } from "../../components/Global";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const courseByName = () => {

    const router = useRouter();
    const { query: { name } } = router;



    
    
    const { data, loading, error } = useQuery(GET_COURSE_BY_NAME, {
        variables: {
            name: name?.replace(/-/g, " ")
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { getCourseByName } = data;

    // console.log(getCourseByName[0]);
    const {id, title, description, image, hours, category, creditHours, score, author} = getCourseByName[0];

    // Convert url drive to another url
    const urlId = image.match(/d\/([A-Za-z0-9\-\_]+)/);
	const url = urlId[1] ? `https://drive.google.com/uc?export=view&id=${urlId[1]}` : 'https://picsum.photos/200/300';


	return (
        <MainLayout>
			<div className="w-full flex justify-center items-center flex-col">

				<div className="w-full bg-blue_light/30 flex justify-center items-center">
					<div className="w-full grid-cols-1 lg:w-9/12 grid  lg:grid-cols-3 gap-10 grid-flow-row">


						<aside className="lg:col-start-3 lg:row-start-1 my-10 flex flex-col justify-center ">
							<Image 
								src={url}
								alt="Picture of the author"
								layout="responsive"
								width='100%'
								height={80}
								className="rounded-lg flex-grow"
							/>
							<div className="pt-5">
								<p className=" bg-blue text-white text-center py-4 px-2 rounded-lg text-small tracking-wide cursor-pointer hover:bg-blue/80 hover:text-white">Empezar curso</p>
							</div>


							

								
						</aside>
						<section className="grid-cols-1 lg:col-start-1 lg:row-start-1 mx-10 lg:mx-0 lg:col-span-2 flex flex-col justify-center my-10">
							<h1 className="text-4xl font-bold mb-2">{title}</h1>
							<p className="text-small mb-5">Creado por {`${author.first_name} ${author.last_name}`}</p>
							<p className="text-small text-justify lg:text-left">{description}</p>

							<div className="my-5  flex gap-5 items-center ">
								<span className="bg-blue text-white font-bold py-2 px-4 rounded-full text-sm tracking-wide">{category.name}</span>
								<StartRating rating={4.5}/>
								<p className="text-small"><FontAwesomeIcon icon={faClock} /> {hours} horas</p>
								<p className="text-small "><FontAwesomeIcon icon={faBuildingColumns} /> {creditHours} horas</p>
							</div>							
						</section> 
						
						
					</div>
				</div>

				<div className=" w-9/12 mb-5 py-5 grid grid-cols-4" >
					<aside className="hidden lg:block lg:sticky lg:top-5 ">
						<h2 className="text-h2 font-bold mb-5 ">Módulos</h2>
						<p className="text-small mb-2">Duración: <strong>{hours} horas</strong></p>
						<p className="text-small mb-2">Acreditación: <strong>{creditHours} horas</strong></p>
					</aside>
					
					<div className="col-span-3 ">
						<article className="mb-5 rounded-md border cursor-pointer">
							
							<div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
								<div className="">
									<p className="text-sm font-normal text-blue">Modulo 1</p>
									<h2 className="text-small font-bold">Introducción al curso</h2>
								</div>
								<FontAwesomeIcon icon={faChevronDown}  />

							</div>
							
						</article>

						<article className="mb-5 border border-blue rounded-md">
							
							<div className=" bg-blue py-5 px-10 flex justify-between items-center cursor-pointer">
								<div className="">
									<p className="text-sm font-normal text-white">Modulo 1</p>
									<h2 className="text-small font-bold">Primeros pasos</h2>
								</div>
								<FontAwesomeIcon icon={faChevronUp}  />
							</div>
							
							<div className="">
								<section className=" hover:bg-blue/60 py-5 px-10 cursor-pointer">
									<p className="text-sm font-normal text-black">Clase 1</p>
									<h2 className="text-small font-bold">Creando el proyecto</h2>
								</section>

								<section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
									<p className="text-sm font-normal text-black">Clase 2</p>
									<h2 className="text-small font-bold">Creando el proyecto 2</h2>
								</section>

								<section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
									<p className="text-sm font-normal text-black">Clase 3</p>
									<h2 className="text-small font-bold">Creando el proyecto 3</h2>
								</section>
							</div>

						</article>

						<article className="mb-5 rounded-md border cursor-pointer">
							
							<div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
								<div className="">
									<p className="text-sm font-normal text-blue">Modulo 1</p>
									<h2 className="text-small font-bold">Introducción al curso</h2>
								</div>
								<FontAwesomeIcon icon={faChevronDown}  />

							</div>
							
						</article>

						<article className="mb-5 rounded-md border cursor-pointer">
							
							<div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
								<div className="">
									<p className="text-sm font-normal text-blue">Modulo 1</p>
									<h2 className="text-small font-bold">Introducción al curso</h2>
								</div>
								<FontAwesomeIcon icon={faChevronDown}  />

							</div>
							
						</article>

						<article className="mb-5 border border-blue rounded-md">
							
							<div className=" bg-blue py-5 px-10 flex justify-between items-center cursor-pointer">
								<div className="">
									<p className="text-sm font-normal text-white">Modulo 1</p>
									<h2 className="text-small font-bold">Primeros pasos</h2>
								</div>
								<FontAwesomeIcon icon={faChevronUp}  />
							</div>
							
							<div className="">
								<section className=" hover:bg-blue/60 py-5 px-10 cursor-pointer">
									<p className="text-sm font-normal text-black">Clase 1</p>
									<h2 className="text-small font-bold">Creando el proyecto</h2>
								</section>

								<section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
									<p className="text-sm font-normal text-black">Clase 2</p>
									<h2 className="text-small font-bold">Creando el proyecto 2</h2>
								</section>

								<section className="hover:bg-blue/60 py-5 px-10 cursor-pointer">
									<p className="text-sm font-normal text-black">Clase 3</p>
									<h2 className="text-small font-bold">Creando el proyecto 3</h2>
								</section>
							</div>

						</article>

						<article className="mb-5 rounded-md border cursor-pointer">
							
							<div className=" bg-white/60 py-5 px-10 flex justify-between items-center">
								<div className="">
									<p className="text-sm font-normal text-blue">Modulo 1</p>
									<h2 className="text-small font-bold">Introducción al curso</h2>
								</div>
								<FontAwesomeIcon icon={faChevronDown}  />

							</div>
							
						</article>
					</div>
				</div>
			</div> 

		</MainLayout>
    );
};

export default courseByName;