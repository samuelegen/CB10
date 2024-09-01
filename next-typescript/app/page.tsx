import React from "react";
import Card, { ICard } from "@/components/card";
import '@/app/globals.css'
import { sevillana } from "./layout";

const monuments: ICard[] = [
	{
		id: "1",
		category: "Food",
		title: "Pane ‘ca meusa",
		description:
			"U pani ‘ca meusa è una specialità siciliana riservata solo agli stomaci forti! Si tratta di panini imbottiti con la milza e polmoni bolliti, che vengono poi saltati nello strutto. Si può mangiare “schettu” ossia semplice oppure “maritatu”, con l’aggiunta di ricotta di pecora o di caciocavallo.",
		imageUrl:
			"https://www.puntarellarossa.it/wp/wp-content/uploads/2016/11/dove-mangiare-a-palermo-6.jpg",
	},
	{
		id: "2",
		category: "Cultural",
		title: "Teatro Massimo",
		description:
			"Il più grande teatro lirico in Italia e uno dei più grandi d'Europa.",
		imageUrl:
			"https://img0.oastatic.com/img2/77541936/max/variant.jpg",
	},
	{
		id: "3",
		category: "Sea",
		title: "Macari",
		description:
			"Il mare e le spiaggie di Macari sono tra le più belle della Sicilia",
		imageUrl:
			"https://www.mooway.it/public/1638824956-macari.jpg",
	},
	{
		id: "4",
		category: "Cultural",
		title: "Parco delle madonie",
		description:
			"Il Parco delle Madonie è uno dei luoghi più straordinari di tutto il Mediterraneo per quanto riguarda la biodiversità. È anche Geopark UNESCO.",
		imageUrl:
			"https://www.patrimoniounesco.it/wp-content/uploads/2021/04/madonie.jpg",
	},
	{
		id: "5",
		category: "Food",
		title: "Pasta alla norma",
		description:
			"Si tratta di una ricetta di pasta tipica siciliana condita con melanzane fritte, pomodoro, basilico e ricotta salata.",
		imageUrl:
			"https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/2023-06/Piatti%20tipici%20siciliani%20-%20pasta%20alla%20norma.jpg",
	},
	{
		id: "6",
		category: "Food",
		title: "Cannolo Siciliano",
		description:
			"Dolce tipico siciliano con una croccante cialda e ripieno di ricotta.",
		imageUrl:
			"https://www.lacannoleriasiciliana.it/wp-content/uploads/2020/04/cannolo-siciliano-3.jpg",
	},
	{
		id: "7",
		category: "Sea",
		title: "Spiaggia di Mondello",
		description:
			"Una delle spiagge più famose di Palermo, con sabbia bianca e mare cristallino.",
		imageUrl:
			"https://static2-viaggi.corriereobjects.it/wp-content/uploads/2022/08/iStock-826840302-1.jpg?v=476069",
	},
	{
		id: "8",
		category: "Food",
		title: "U pani cunsatu",
		description:
			"U pani cunzatu è più tipico del trapanese. Si tratta di pane condito con pomodoro, caciocavallo e sarde. Un pasto completo ideale da portare alla spiaggia o ad una scampagnata.",
		imageUrl:
			"https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2023/03/12-pane-cunzatu-finale.jpg",
	},
];

export default function Home() {
	return (
		<main className="flex flex-wrap justify-center">
			<div className={`${sevillana.className} relative z-10 w-full h-20 flex justify-center items-center text-3xl bg-slate-600 bg-opacity-50 mb-3.5`}>
				<h1>The Sicilian Dream</h1>
			</div>
			{monuments.map((monument) => (
				<Card key={monument.id} post={monument} />
			))}
		</main>
	);
}
