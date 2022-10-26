import React from "react";
import { MainLayout } from "../../components/Layouts/MainLayout";

import fsPromise from "fs/promises";
import path from "path";
import { StartRating } from "../../components/Global";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBuildingColumns, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

const pageCourse = ({course}) => {

	const {id, name_course, author, credits, rating, area, duration, description, img} = course

	return (
		<MainLayout>

			<div className="w-full flex justify-center items-center flex-col">

				<div className="w-full bg-blue_light/30 flex justify-center items-center">
					<div className="w-full grid-cols-1 lg:w-9/12 grid  lg:grid-cols-3 gap-10 grid-flow-row">

						{/* <div className="h-60 col-start-3 row-start-1 bg-white"></div>
						<div className="h-60  bg-blue col-start-1 row-start-1 col-span-2"></div> */}

						<aside className="lg:col-start-3 lg:row-start-1 my-10 flex flex-col justify-center ">
							<Image 
								src={img}
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
							<h1 className="text-4xl font-bold">{name_course}</h1>
							<p className="text-small mb-5">Creado por <strong>{author}</strong></p>
							<p className="text-small text-justify lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget felis purus. Cras ac malesuada dui. Etiam nunc lectus, fermentum mattis ante et, tempus malesuada ligula. Nulla tincidunt lorem nec magna malesuada pharetra. In lectus erat, congue non metus vitae, maximus tempus turpis. Nunc semper lobortis hendrerit. Cras dictum mi eget aliquam elementum. Suspendisse faucibus vel dolor efficitur fringilla. Donec non mi non augue viverra volutpat. Aenean vel elementum nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.	</p>

							<div className="my-5  flex gap-5 items-center ">
								<span className="bg-blue text-white font-bold py-2 px-4 rounded-full text-sm tracking-wide">{area}</span>
								<StartRating rating={4.5}/>
								<p className="text-small"><FontAwesomeIcon icon={faClock} /> <strong>{duration} horas</strong></p>
								<p className="text-small "><FontAwesomeIcon icon={faBuildingColumns} /> <strong>{credits} horas</strong></p>
							</div>							
						</section>
						
						
					</div>
				</div>

				<div className=" w-9/12 mb-5 py-5 grid grid-cols-4" >
					<aside className="hidden lg:block lg:sticky lg:top-5 ">
						<h2 className="text-h2 font-bold mb-5 ">Módulos</h2>
						<p className="text-small mb-2">Duración: <strong>{duration} horas</strong></p>
						<p className="text-small mb-2">Acreditación: <strong>{credits} horas</strong></p>
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

export const getStaticPaths = async (ctx) => {
	const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromise.readFile(filePath);
    const data = JSON.parse(jsonData);

	const paths = data.map((course, index) => 
		`${course.id}`
	)

	return {
		paths: paths.map((id) => ({ params: { id } })),
		fallback: false
	}
}

export const getStaticProps = async ({params}) => {

	const {id} = params;

    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromise.readFile(filePath);
    const data = JSON.parse(jsonData);

    const courses = data.map((course, index) => ({
        ...course,
        img: `https://picsum.photos/id/${index + 1}/200/300`,
    }))

	const course = courses.find((course) => course.id == id);

    
    return {
        props: {
			course
        },
    };
}

export default pageCourse;
